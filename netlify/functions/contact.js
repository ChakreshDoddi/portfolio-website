function csvEscape(value) {
  const s = String(value ?? "").replace(/\r?\n|\r/g, " ").replace(/"/g, '""');
  return `"${s}"`;
}

async function appendToGithubCsv(row) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO; // e.g., "username/portfolio-submissions"
  const branch = process.env.GITHUB_BRANCH || "main";
  const path = process.env.GITHUB_PATH || "data/contact-submissions.csv";

  if (!token || !repo) {
    throw new Error("Missing GITHUB_TOKEN or GITHUB_REPO env vars");
  }

  const apiBase = "https://api.github.com";
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-contact-function",
  };

  const getRes = await fetch(`${apiBase}/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(branch)}`, { headers });

  let content;
  let sha = undefined;
  const header = "timestamp,name,email,subject,message\n";

  if (getRes.status === 200) {
    const data = await getRes.json();
    sha = data.sha;
    const b64 = (data.content || "").replace(/\n/g, "");
    const existing = Buffer.from(b64, "base64").toString("utf-8");
    content = existing.endsWith("\n") ? existing + row : existing + "\n" + row;
  } else if (getRes.status === 404) {
    content = header + row + (row.endsWith("\n") ? "" : "\n");
  } else {
    const t = await getRes.text();
    throw new Error(`GitHub GET failed: ${getRes.status} ${t}`);
  }

  const putBody = {
    message: sha ? "chore: append contact submission" : "chore: create contact submissions CSV",
    content: Buffer.from(content, "utf-8").toString("base64"),
    branch,
    sha,
  };

  const putRes = await fetch(`${apiBase}/repos/${repo}/contents/${encodeURIComponent(path)}`, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify(putBody),
  });

  if (!putRes.ok) {
    const t = await putRes.text();
    throw new Error(`GitHub PUT failed: ${putRes.status} ${t}`);
  }
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'All fields are required' }),
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Invalid email format' }),
      };
    }

    const timestamp = new Date().toISOString();
    const row = [timestamp, name, email, subject, message].map(csvEscape).join(',') + '\n';

    await appendToGithubCsv(row);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Message sent successfully! Thank you for reaching out.' }),
    };
  } catch (err) {
    console.error('Contact form error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Internal server error. Please try again later.' }),
    };
  }
};

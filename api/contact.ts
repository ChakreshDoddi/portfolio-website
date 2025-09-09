function csvEscape(value: any) {
  const s = String(value ?? "").replace(/\r?\n|\r/g, " ").replace(/"/g, '""');
  return `"${s}"`;
}

async function appendToGithubCsv(row: string) {
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
  } as Record<string, string>;

  // Try to fetch existing file
  const getRes = await fetch(`${apiBase}/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(branch)}`, { headers });

  let content: string;
  let sha: string | undefined = undefined;
  const timestamp = new Date().toISOString();
  const header = "timestamp,name,email,subject,message\n";

  if (getRes.status === 200) {
    const data = await getRes.json();
    sha = data.sha;
    const b64 = (data.content as string).replace(/\n/g, "");
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
  } as any;

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

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ message: 'Invalid email format' });
      return;
    }

    const timestamp = new Date().toISOString();
    const row = [timestamp, name, email, subject, message].map(csvEscape).join(',') + '\n';

    await appendToGithubCsv(row);

    res.status(200).json({ message: 'Message sent successfully! Thank you for reaching out.' });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ message: 'Internal server error. Please try again later.' });
  }
}

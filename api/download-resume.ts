export default async function handler(_req: any, res: any) {
  // Redirect to the static resume file built into the site
  res.writeHead(302, { Location: '/resume.pdf' });
  res.end();
}


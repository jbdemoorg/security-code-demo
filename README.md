# Security Code Demo

This repository is intentionally vulnerable for a controlled security scanner demo.

It is designed to produce:

- GitHub CodeQL SAST findings.
- GitHub Dependabot SCA findings.

Do not deploy this application to a production environment.

## Demo Flow

1. Push this directory to a public GitHub repository.
2. Enable GitHub CodeQL default setup or keep the included CodeQL workflow.
3. Enable Dependabot alerts.
4. Connect the GitHub organization/repository to your security platform.
5. In the GitHub connector, enable imported findings:
   - CodeQL Findings
   - Dependabot Findings
6. Validate imported findings:
   - SAST findings from GitHub CodeQL.
   - Vulnerability findings from GitHub Dependabot.

## Local Run

```bash
npm install
npm start
```

Example local endpoint:

```bash
curl 'http://localhost:3000/ping?host=127.0.0.1'
```

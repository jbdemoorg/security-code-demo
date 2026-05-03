# Wiz UVM Code Demo

This repository is intentionally vulnerable for a controlled Wiz UVM demo.

It is designed to produce:

- GitHub CodeQL SAST findings.
- GitHub Dependabot SCA findings.

Do not deploy this application to a production environment.

## Demo Flow

1. Push this directory to a public GitHub repository.
2. Enable GitHub CodeQL default setup or keep the included CodeQL workflow.
3. Enable Dependabot alerts.
4. Connect the GitHub organization/repository to Wiz.
5. In the Wiz GitHub connector, enable UVM findings:
   - CodeQL Findings
   - Dependabot Findings
6. Validate in Wiz:
   - Findings > SAST Findings, filter Origin = GitHub CodeQL.
   - Findings > Vulnerability Findings, filter Origin = GitHub Dependabot.

## Local Run

```bash
npm install
npm start
```

Example local endpoint:

```bash
curl 'http://localhost:3000/ping?host=127.0.0.1'
```


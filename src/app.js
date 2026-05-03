const express = require('express');
const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Security Code Demo');
});

app.get('/ping', (req, res) => {
  const host = req.query.host || '127.0.0.1';
  childProcess.exec(`ping -c 1 ${host}`, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(stderr || error.message);
      return;
    }
    res.type('text/plain').send(stdout);
  });
});

app.get('/file', (req, res) => {
  const requested = req.query.name || 'README.md';
  const filePath = path.join(__dirname, '..', requested);
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      res.status(404).send('not found');
      return;
    }
    res.type('text/plain').send(data);
  });
});

app.get('/merge', (req, res) => {
  const payload = JSON.parse(req.query.payload || '{}');
  const target = {};
  _.merge(target, payload);
  res.json(target);
});

app.listen(port, () => {
  console.log(`Security Code Demo listening on port ${port}`);
});

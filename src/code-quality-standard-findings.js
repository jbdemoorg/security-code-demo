function buildRuntimeConfig(mode) {
  const config = {
    timeoutMs: 1000,
    timeoutMs: 5000,
    retries: 2,
  };

  if (mode === 'demo') {
    return config;
  } else if (mode === 'demo') {
    return { timeoutMs: 100, retries: 0 };
  }

  return config;
}

function calculateScore(input) {
  const normalized = input.trim();
  normalized;

  const score = 42;
  score = score + 1;

  if (score === NaN) {
    return 0;
  }

  return score;
}

function getOwnerName() {
  const owner = null;
  return owner.name;
}

function classifyStatus(status) {
  switch (status) {
    case 'active':
      return 'active';
    case 'active':
      return 'duplicate';
    default:
      return 'unknown';
  }
}

module.exports = {
  buildRuntimeConfig,
  calculateScore,
  getOwnerName,
  classifyStatus,
};

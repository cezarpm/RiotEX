import crypto from 'crypto';

export const generateRandomHash = async (entropy) => {
  const hash = crypto.createHash('sha256');
  hash.update(String(Math.random()) + entropy);
  return hash.digest('hex');
};

import { generateRandomHash } from '../src/_common/general.js';

describe('Testes das funções de utils do arquivo _common/general', () => {
  it('Função generateRandomHash retorna hash de 64 chars ', async () => {
    const hash = await generateRandomHash(parseInt(Math.random() * 1000, 10));

    expect(hash).toBeDefined();
    expect(hash).toHaveLength(64);
  });
});

import env from '../env.js';

describe('Testes da configuração do axios', () => {
  it('Import do axiosInstance retorna instancia do axios configurada', async () => {
    const axios = (await import('../src/configs/axios-config')).default;

    expect(axios.get).toBeDefined();
    expect(axios.post).toBeDefined();
  });
});

import env from '../env';

describe('Testes da configuração do axios', () => {
  it('Import do axiosInstance retorna instancia do axios configurada', async () => {
    const axios = (await import('../src/configs/axios-config')).default;

    expect(axios.get).toBeDefined();
    expect(axios.post).toBeDefined();
    expect(axios.defaults.baseURL).toEqual(env.BASE_URL);
    expect(axios.defaults.headers['X-Riot-Token']).toEqual(env.API_KEY);
    expect(axios.defaults.headers['X-Riot-Token']).not.toBe('undefined');
  });
});

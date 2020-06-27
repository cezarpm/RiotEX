describe('Testes da configuração do axios', () => {
  it('Import do axiosInstance retorna instancia do axios configurada', async () => {
    const axios = (await import('../src/configs/axios-config')).default;

    expect(axios.get).toBeDefined();
    expect(axios.post).toBeDefined();
    expect(axios.defaults.baseURL).toEqual(process.env.BASE_URL);
    expect(axios.defaults.headers['X-Riot-Token']).toEqual(process.env.API_KEY);
  });
});

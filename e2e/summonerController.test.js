import request from 'supertest';
import app from '../src/configs/custom-express';

describe('Testes do controller SummonerController', () => {
  describe('(GET) /summoner/:name', () => {
    it('Consulta no summoner retorna 200 e objeto do summoner', async () => {
      const accountName = 'AspNetCore';

      const result = await request(app)
        .get(`/summoner/${accountName}`);

      expect(result.status).toBe(200);
      expect(result.body.id).toBeDefined();
      expect(result.body.accountId).toBeDefined();
      expect(result.body.name.toLowerCase()).toEqual(accountName.toLowerCase());
      expect(result.body.revisionDate).toBeDefined();
      expect(result.body.summonerLevel).toBeDefined();
    });
  });
});

import request from 'supertest';
import app from '../src/configs/custom-express';

describe('Testes do controller MatchController', () => {
  describe('(GET) /match/matchlist/:name', () => {
    it('Consulta da matchlist do usuario retorna 200 e array dos matches', async () => {
      const accountName = 'AspNetCore';

      const result = await request(app)
        .get(`/match/matchlist/${accountName}`);

      expect(result.status).toBe(200);
      expect(result.body.matches).toBeDefined();
      expect(Array.isArray(result.body.matches)).toBeTruthy();
    });
  });

  describe('(GET) /match/:matchId', () => {
    it('Consulta do match retorna 200 e objeto da partida', async () => {
      const matchId = 1964974622;

      const result = await request(app)
        .get(`/match/${matchId}`);

      expect(result.status).toBe(200);
      expect(result.body.gameId).toBeDefined();
      expect(result.body.platformId).toBeDefined();
      expect(result.body.gameCreation).toBeDefined();
      expect(result.body.gameDuration).toBeDefined();
      expect(Array.isArray(result.body.teams)).toBeTruthy();
      expect(Array.isArray(result.body.participants)).toBeTruthy();
    });
  });
});

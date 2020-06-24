import { getSummonnerByName } from './riotSummoner';
import riotService from './riot';

export const getMatchHistoryByName = async (name) => {
  const { accountId } = await getSummonnerByName(name);
  return riotService.get(`/lol/match/v4/matchlists/by-account/${accountId}`);
};

export const getMatchBymatchID = async (matchId) => riotService.get(`/lol/match/v4/matches/${matchId}`);

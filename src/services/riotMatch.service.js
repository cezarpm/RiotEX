import { getSummonnerByName } from './riotSummoner.service';
import riotService from './riot.service';

export const getMatchHistoryByName = async (name) => {
  const { accountId } = await getSummonnerByName(name);
  return riotService.get(`/lol/match/v4/matchlists/by-account/${accountId}`);
};

export const getMatchBymatchID = async (matchId) => riotService.get(`/lol/match/v4/matches/${matchId}`);

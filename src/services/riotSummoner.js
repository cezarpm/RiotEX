import riotService from './riot';

export const getSummonnerByName = async (name) => riotService.get(`lol/summoner/v4/summoners/by-name/${name}`);

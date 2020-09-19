import { getManager } from 'typeorm';
import assert from 'assert';
import { commit, enviroment } from '../configs/server-config';

const StatusController = {
  async getStatus(req, res) {
    let dbOnline = false;
    try {
      const queryResult = await getManager().query('SELECT 1+1 as queryResult');
      assert(queryResult[0].queryResult === '2');
      dbOnline = true;
    } catch (error) {
      dbOnline = false;
      console.error(error);
    }

    res.send({ commit, enviroment, dbOnline });
  },
};

export default StatusController;

import { commit, enviroment } from '../configs/server-config';

const StatusController = {
  async getStatus(req, res) {
    res.send({ commit, enviroment });
  },
};

export default StatusController;

const axios = require("../configs/axios-config");

const RiotService = {
  async get(url) {
    return await axios(url)
      .then((res) => res.data)
      .then((data) => data);
  },
};

module.exports = RiotService;

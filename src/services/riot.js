const axios = require("../configs/axios-config");

const RiotService = {
  async get(url) {
    const data = await axios(url)
      .then((res) => res.data)
      .then((data) => data);
    return data;
  },
};

module.exports = RiotService;

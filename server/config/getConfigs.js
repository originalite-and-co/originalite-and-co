const GlobalConfig = require("../models/GlobalConfig");

module.exports = async () => {
  return await GlobalConfig.findOne({ customId: "global-configs" });
};

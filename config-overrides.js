const path = require("path");

module.exports = function override(config, env) {
  config["resolve"] = {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      services: path.resolve(__dirname, "src/services/"),
      api: path.resolve(__dirname, "src/services/api"),
      stores: path.resolve(__dirname, "src/services/stores"),
      security: path.resolve(__dirname, "src/services/security"),
    },
    extensions: [".js"],
  };

  return config;
};

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sami",
        mongodb_password: "gdXGVcRDxYk3scmc",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "sami",
      mongodb_password: "gdXGVcRDxYk3scmc",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

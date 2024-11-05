module.exports = {
  settings: {
    cache: {
      enabled: true,
      models: [
        { model: "user", maxAge: 2592000000 },
        { model: "product", maxAge: 2592000000 },
      ],
      type: "memory",
    },
  },
};

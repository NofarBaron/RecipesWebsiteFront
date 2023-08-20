<<<<<<< HEAD
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "standard",
    "@vue/prettier",
    "prettier"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020, // Enable parsing of dynamic imports

  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "warn" : "off"

  }
};
=======
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "standard",
    "@vue/prettier",
    "prettier"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020, // Enable parsing of dynamic imports

  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "warn" : "off"

  }
};
>>>>>>> 0cd3e88ffeb418de5902455f8c1649c39a204032

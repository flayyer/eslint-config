module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "no-alert": "warn",
    "no-console": "warn",
    "no-empty": "warn",
    "no-ex-assign": "warn",
    "no-useless-escape": "warn",
    "no-constant-condition": "warn",
    "no-shadow": [
      "error",
      {
        builtinGlobals: true,
        hoist: "all",
        // Some of those are here: https://www.w3schools.com/js/js_reserved.asp
        // But we will allow for productivity.
        allow: [
          "onload",
          "onerror",
          "open",
          "close",
          "assert",
          "Cache",
          "context",
          "crypto",
          "Document",
          "event",
          "Event",
          "expect",
          "form",
          "history",
          "id",
          "Image",
          "length",
          "name",
          "title",
          "external",
          "Notification",
          "parent",
          "print",
          "Request",
          "Response",
          "server",
          "status",
          "test",
          "Text",
          "type",
          "URL",
        ],
      },
    ],
  },
};

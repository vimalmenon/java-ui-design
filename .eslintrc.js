module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
      "eslint:recommended",
      "plugin:react/recommended",  // Uses the recommended rules from @eslint-plugin-react
      //"plugin:@typescript-eslint/recommended",  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
      ecmaFeatures:  {
        jsx:  true,  // Allows for the parsing of JSX
      },
    },
    "globals": {
        "console": "readonly",
        "self": "readonly",
        "Worker" : "readonly",
        "Promise" : "readonly",
        "fetch" : "readonly",
        "AbortController" : "readonly",
        "document" : "readonly",
        "location" : "readonly"
    },
    rules:  {
      "indent": [2, "tab"],
      "no-unused-vars": [1, { "vars": "all", "args": "after-used"}],
      "react/prop-types": [0, { ignore: ["location"]}],
      "react/display-name": [0]
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    },
    settings:  {
      react:  {
        version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
  };
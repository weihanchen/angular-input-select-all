module.exports = {
   "env": {
      "browser": true
   },
   "extends": "eslint:recommended",
   "globals": {
      "before": true,
      "expect": true,
      "describe": true,
      "it": true,
      "process": true,
      "__dirname": true,
      "__testBase": true
   },
   "rules": {
      "indent": [
         "error",
         3
      ],
      "no-undef": "off",
      "no-console": "off",
      "linebreak-style": [
         "error",
         "windows"
      ],
      "quotes": [
         "error",
         "single"
      ],
      "semi": [
         "error",
         "always"
      ]
   }
};

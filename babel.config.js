module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // add the babel plugin for dotenv and native wind
    plugins: [
      ["nativewind/babel"],
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": null,
        "blacklist": null, // DEPRECATED
        "whitelist": null, // DEPRECATED
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }]
    ],
  };
};

module.exports = {
    verbose: true,
    preset: 'ts-jest',
    transform: {
        "\\.tsx$": ['babel-jest', 'ts-jest']
    },
    globals: {
        'ts-jest': {
          tsConfig: 'tsconfig.json'
        }
    },
    moduleDirectories: ["node_modules","assets"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>/styleMock.js",
        "\\.(css|less)$": "<rootDir>/styleMock.js",
        "const" : "<rootDir>/assets/scripts/constants",
    }
};
  
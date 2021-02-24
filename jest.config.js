module.exports = {
  roots: ["<rootDir>"],
  // transform: {
  //   // Will be usefull in the future.
  //   // '^.+\\.tsx?$': 'ts-jest',
  //   "node_modules/variables/.+\\.(j|t)s?$": "jest",
  // },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(t|j)s?$",
  moduleFileExtensions: ["ts", "js"],
  collectCoverage: true,
};

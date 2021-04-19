module.exports = {
  // The mode value in an optimized state is set to production,
  // Source map valid and JS file is output is set to development
  mode: "development",

  // Main become JavaScript file (entry point)
  entry: "./src/main.ts",

  module: {
    rules: [
      {
        // In the case of extension .ts
        test: /\.ts$/,
        // To compile the TypeScript
        use: "ts-loader",
      },
    ],
  },
  // In order to solve the .ts file in the import statement
  // If you do not define this need is born to write an extension in the import statement.
  // Because it is often omit the extension is in the development of front-end,
  // Better described is less likely to get into trouble.
  resolve: {
    // Specify the extension in an array
    extensions: [".ts", ".js"],
  },
};

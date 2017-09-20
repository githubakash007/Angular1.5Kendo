path = require("path");

module.exports = {
  entry:"./app/kendoChart.module.ts",
  output:{
      path:path.resolve("dist"),
      filename:"build.js"
  },
    watch:false,

    module:{
        loaders:[{
           test:/\.ts$/,
           exclude:[/node_modules/],
           loader:"ts-loader"
        }]
    },

    resolve:{
        extensions:[".js",".ts"]
    }
}
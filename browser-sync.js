const browserSync = require("browser-sync").create();

browserSync.init({
    proxy: "http://localhost:4242",
    files: ["src/**/*.ts", "public/**/*.*"]
})
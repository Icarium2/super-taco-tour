let mix = require("laravel-mix");

mix.js("assets/scripts/app.js", "dist").setPublicPath("dist");
mix.css("assets/styles/global.css", "dist");
mix.css("assets/styles/footer.css", "dist");
mix.css("assets/styles/hero.css", "dist");
mix.css("assets/styles/top.css", "dist");
mix.css("assets/styles/secondsection.css", "dist");
mix.css("assets/styles/gridSection.css", "dist");

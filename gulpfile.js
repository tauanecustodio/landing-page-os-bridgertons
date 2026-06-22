const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const terser = require("gulp-terser");
const htmlmin = require("gulp-htmlmin");

// Compilar e minificar SASS
function styles() {
  return gulp
    .src("src/sass/**/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/style"));
}

// Minificar JS
function scripts() {
    return gulp
    .src("src/js/**/*.js")
    .pipe(terser())
    .pipe(gulp.dest("dist/js"));
}

// Minificar HTML
function html() {
  return gulp
    .src("src/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true
      })
    )
    .pipe(gulp.dest("dist"));
}

// Copiar imagens
function images() {
  return gulp
    .src("src/assets/**/*.jpg", { encoding: false, nodir: true })
    .pipe(gulp.dest("dist/assets"));
}

// Fazer build
exports.build = gulp.series(
    gulp.parallel(
    styles,
    scripts,
    html,
    images
  )
);
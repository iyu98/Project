const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass"); // sass
const sourcemaps = require("gulp-sourcemaps"); // sass对应css行
const concat = require("gulp-concat"); // js代码合并
const uglify = require("gulp-uglify"); // js代码压缩
const rename = require("gulp-rename"); // 重命名
const cleanCss = require("gulp-clean-css"); // 压缩css
const imageMin = require("gulp-imagemin"); // 压缩图片
const babel = require("gulp-babel"); // ES6 转 ES5


// 在终端输入 gulp + hello (执行的任务名字)
/* gulp.task("hello", function () { // gulp 测试
    console.log("Hello gulp");
});

gulp.task("world", function () {
    console.log("hello world")
}); */
// default 是gulp默认任务  终端直接gulp就可以执行的命令
// gulp.task("default",function(){
//     console.log("默认任务");
// });

// 如果default要执行多个任务 把任务放在数组里面
// gulp.task("default",["hello","world"]);

// gulp copy 文件
gulp.task("copyHtml", function () {
    // gulp.src()   方法找到要处理的文件
    // pipe()   处理找到的问文件
    // gulp.dest()  把处理好的文件放到指定位置
    gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
    // gulp.src("html/*.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());
});

gulp.task("copyHtmls",function(){
    gulp.src("html/*.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());

})

// gulp copy 图片
// gulp.task("copyImg", function () {
//     gulp.src("*.jpg").pipe(gulp.dest("dist/img"));
// });

// copy2319 jpg png 格式的图片
// gulp.task("copyImgAll",function(){
//     gulp.src("*.{jpg,png}").pipe(gulp.dest("dist/img"));
// });

// copy 所有格式的图片文件 **：如果里面有文件夹，连同拷贝
gulp.task("copyImgAll", function () {
    // gulp.src("img/**").pipe(gulp.dest("dist/img"));
    gulp.src("images/**").pipe(gulp.dest("dist/images"));
});

// 多个文件拷贝到同目录下
// 如果有单个文件不想copy 那就再文件名前面添加 ! 感叹号，代表排除某个文件
gulp.task("copyData", function () {
    gulp.src("json/*.json").pipe(gulp.dest("dist/data"))
});

gulp.task("copyScript",function(){
    gulp.src("js/*.js").pipe(gulp.dest("dist/js"))
})

// 多个任务同时执行 build 名字可以随便起 default除外
gulp.task("build", ["copyHtml", "copyImgAll", "copyData","copyScript"]);


// 监听  事实监听文件改动，本地修改服务器也会修改
gulp.task("watch", function () {
    gulp.watch(["sass/*.scss", "*.html", "js/*.js", "json/*.json", "html/*.html"], ["sass", "copyHtml", "copyScript", "copyData", "copyHtmls"]);
});

//  livereload: true 实施加载
gulp.task("server", function () {
    connect.server({
        root: "dist",
        livereload: true // 实施加载
    });
});

// 为保证每次监听都是最新的，再监听之前先进行build操作。
gulp.task("default", ["server", "watch", "sass", "babel"]);


// gulp sass   .pipe(sass()):sass转css
// sourcemaps css和sass代码行对应（映射关系）
// .pipe(sourcemaps.init()) // 先初始化 sourcemaps
gulp.task("sass", function () {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compact' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
})


// concat 合并js
gulp.task("concat", function () {
    gulp.src("js/index.js")
        .pipe(concat("index.js"))  // 要合并的名字
        .pipe(uglify()) // 压缩js  注意位置，再合并之后，放置之前
        .pipe(gulp.dest("dist/js")) // 先把合并的放进去
        .pipe(rename({ suffix: ".min" })) // 重命名 一份min.js再放到指定位置
        .pipe(gulp.dest("dist/js"))
})


// uglify js代码压缩
/* 代码压缩并重命名 */
gulp.task("uglify", function () {
    gulp.src("js/*.js")
        .pipe(uglify()) // 代码压缩
        .pipe(rename({ suffix: ".min" })) // 重命名
        .pipe(gulp.dest("dist/js")) // 放到dist/js目录下
})

// babel js：ES6转ES5
gulp.task("babel", function () {
    gulp.src("js/es6.js")
        .pipe(babel({ "presets": ["es2015"] }))
        .pipe(gulp.dest("dist/js"))
})
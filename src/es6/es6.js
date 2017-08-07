import './es6.css';

// import 'prettify';
// import 'prettify-css'; 在webpack中alias，会被打包到es6.js中，另一种方法是直接在html中引入外部的js和css
// 代码美化
$(window).load(function() {
    $("pre").addClass("prettyprint linenums");
    window.prettyPrint();
    console.log('page:es6-Study');
});

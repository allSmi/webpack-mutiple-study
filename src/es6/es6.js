import './es6.css';

// es6 学习
import { letConst } from './let&const'; // let&const
letConst();

import { destructuring } from './destructuring'; // destructuring
destructuring();

import { stringExtend } from './stringExtend'; // stringExtend
stringExtend();

// import 'prettify';
// import 'prettify-css'; 在webpack中alias，会被打包到es6.js中，另一种方法是直接在html中引入外部的js和css
// 代码美化
$(window).load(function() {
    $("pre").addClass("prettyprint linenums");
    window.prettyPrint();
});

import './es6.css';

// es6 学习
import { letConst } from './section/let&const'; // let&const
letConst();

import { destructuring } from './section/destructuring'; // destructuring
destructuring();

import { stringExtend } from './section/stringExtend'; // stringExtend
stringExtend();

import { regExp } from './section/regExp'; // regExp
regExp();

import { numberExtend } from './section/numberExtend'; // arrayExtend
numberExtend();

import { functionExtend } from './section/functionExtend'; // functionExtend
functionExtend();

import { arrayExtend } from './section/arrayExtend'; // arrayExtend
arrayExtend();

import { objectExtend } from './section/objectExtend'; // objectExtend
objectExtend();

import { symbol } from './section/symbol'; // symbol
symbol();

import { setMap } from './section/set&map'; // set&map
setMap();

import { proxy } from './section/proxy'; // proxy
proxy();

import { reflect } from './section/reflect'; // reflect
reflect();

import { promise } from './section/promise'; // promise
promise();



// import 'prettify';
// import 'prettify-css'; 在webpack中alias，会被打包到es6.js中，另一种方法是直接在html中引入外部的js和css
// 代码美化
$(window).load(function() {
    $("pre").addClass("prettyprint linenums");
    window.prettyPrint();
});

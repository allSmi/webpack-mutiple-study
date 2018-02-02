import './es6.css';

// es6 学习
import { letConst } from './section/let&const'; // let&const

import { destructuring } from './section/destructuring'; // destructuring

import { stringExtend } from './section/stringExtend'; // stringExtend

import { regExp } from './section/regExp'; // regExp

import { numberExtend } from './section/numberExtend'; // arrayExtend

import { functionExtend } from './section/functionExtend'; // functionExtend

import { arrayExtend } from './section/arrayExtend'; // arrayExtend

import { objectExtend } from './section/objectExtend'; // objectExtend

import { symbol } from './section/symbol'; // symbol

import { setMap } from './section/set&map'; // set&map

import { proxy } from './section/proxy'; // proxy

import { reflect as reflectAlias } from './section/reflect'; // reflect

import promise from './section/promise'; // promise

import { iterator } from './section/iterator'; // iterator & for...of

import classStudy from './section/class'; // class


// import 'prettify';
// import 'prettify-css'; 在webpack中alias，会被打包到es6.js中，另一种方法是直接在html中引入外部的js和css
// 代码美化
$(window).load(function() {

    $('pre').addClass('prettyprint linenums');
    window.prettyPrint();
    $('pre').show();

    letConst();
    destructuring();
    stringExtend();
    regExp();
    numberExtend();
    functionExtend();
    arrayExtend();
    objectExtend();
    symbol();
    setMap();
    proxy();
    reflectAlias();
    promise();
    iterator();
    classStudy();

});

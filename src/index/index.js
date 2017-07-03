import Library from './library';
// import moment from 'moment';
// import _ from 'lodash';
import $$$ from 'jquery'; // 这里引用的是script下载的jquery，没有打包到webpack中
import './index.css';
import bbb from './b.js';
console.log(bbb('hah').a);
console.log(window.hz);

if (module.hot) {
    module.hot.accept(['./library'], function() {
        console.log('Accepting the updated library module!');
        Library.log();
    })
}

if (process.env.NODE_ENV == 'production') {
    console.log(process.env.NODE_ENV + '生产环境');
}

if (process.env.NODE_ENV == 'development') {
    console.log(process.env.NODE_ENV + '开发环境');
}

//commonjs异步加载
// require.ensure([], function(require) {
//     var a = require('./a.js');
// }, 'a');

//http://www.css88.com/doc/webpack2/guides/code-splitting-require/
//commonjs预加载懒执行
// require.ensure(['./a.js'], function(require) {
//     var a = require('./a.js');
// }, 'a');

//webpack自带的require.include
require.ensure([], function(require) {
    require.include('./a'); //此处只加载不执行
    var a = require('./a'); //执行
}, 'a');

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

console.log(moment().format());

console.log($('#home').text());
console.log($$$('#home').text());

// require('./list.css');
// require(['moment', 'lodash', 'jquery'], function(moment, _, $$$) {
//     var img3 = require('./images/3.jpg');
//     console.log(img3);

//     if (process.env.NODE_ENV == 'production') {
//         console.log(process.env.NODE_ENV);
//     }

//     if (process.env.NODE_ENV == 'development') {
//         console.log(process.env.NODE_ENV);
//     }

//     function component() {
//         var element = document.createElement('div');

//         // Lodash, currently included via a script, is required for this line to work
//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//         return element;
//     }

//     document.body.appendChild(component());

//     console.log(moment().format());

//     console.log($('#home').text());

//     console.log($$$('#home').text());
// });


// 放到core/base.js里了
// import moment from 'moment';
// import _ from 'lodash';
import './list.css';
var img3 = require('./images/3.jpg');
console.log(img3);

if (process.env.NODE_ENV == 'production') {
    console.log(process.env.NODE_ENV);
}

if (process.env.NODE_ENV == 'development') {
    console.log(process.env.NODE_ENV);
}

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

console.log(moment().format());

console.log($('#home').text());

console.log($$$('#home').text());

//let和const
function letConst() {
    console.log('let&const');
    // var b = 2;
    // let c = 3; {
    //     let a = 1;
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    // } {
    //     let a = 2;
    //     console.log(a);
    // }
    // 代码块中可以使用外面的变量，var和let声明的都行，外部不能获取代码块中用let声明的变量，但是可以获取用var声明的变量

    // for (var i = 0; i < 10; i++) {}
    // console.log(i);
    // for (let i = 0; i < 10; i++) {}
    // console.log(i);

    // var a = [];
    // for (var i = 0; i < 10; i++) {
    //     a[i] = function() {
    //         console.log(i);
    //     };
    // }
    // a[6](); // 10

    // var a = [];
    // for (var i = 0; i < 10; i++) {
    //     a[i] = (function(i) {
    //         return function() {
    //             console.log(i);
    //         }
    //     })(i);
    // }
    // a[6](); // 6

    // var a = [];
    // for (let i = 0; i < 10; i++) {
    //     let i = 'aaa';
    //     console.log(i);
    //     a[i] = function() {
    //         console.log(i);
    //     };
    // }
    // a[6](); // 6

    // for (let i = 0; i < 3; i++) {
    //     let i = 'abc';
    //     console.log(i); // 这里用babel-loader后只打印一次，不用babel-loader会正常打印三次
    // }
    // for (let i = 0; i < 3; i++) {
    //     let i = 'abc';
    //     console.log(i); // 第二次：这里会打印三次，正常是应该打印3次，
    // }
    // for (let i = 0; i < 3; i++) {
    //     console.log(i);
    // }

    // var a = 5;
    // for (var i = 0; i < 5; i++) {
    //     var a = 10; // for循环里用var声明的变量是全局变量
    //     console.log(i);
    // }
    // console.log(i); // 5
    // console.log(a); // 10

    // let a = 5;
    // for (var i = 0; i < 5; i++) {
    //     let a = 10; // for循环里用let声明的变量只在所在的代码块有效
    //     console.log(i);
    // }
    // console.log(a);

    // let a = 5;
    // a = 10;
    // console.log(a);

    // console.log(a);
    // var a = 5;

    // console.log(a);
    // let a = 5; // babel-loader只是简单把let转为var，所以还是会有变量提升，但是es6中没有变量提升，这样写会报错

    // var a = 5;
    // if (true) {
    //     var a = 6; // 代码块中var声明的是全局变量
    // }
    // console.log(a);

    // let a = 5;
    // if (true) {
    //     let a = 6; // 代码块中let声明的是局部变量
    // }
    // console.log(a);

    // console.log(typeof x); // 'undifined'

    // console.log(typeof x); // 'ReferenceError'
    // let x;
}

export { letConst };

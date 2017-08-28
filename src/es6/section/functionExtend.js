function functionExtend() {
    console.log('functionExtend');

    // console.log(typeof '');

    // function log(x, y = 'world') {
    //     console.log(x, y);
    // }
    // log('hello');
    // log('hello', 'hz');

    // function foo({ x, y = 5 }) {
    //     console.log(x, y);
    // }
    // foo({}) // undefined 5
    // foo()

    // function foo({ x, y = 5 } = {}) {
    //     console.log(x, y);
    // }
    // foo() // undefined 5

    // function f(x, z = 2, y = 5) {
    //     console.log([x, y, z])
    // }
    // f(1)

    // console.log((function(a, b, c = 5) {}).length);
    // console.log((function(a, b = 1, c) {}).length);

    // function a(x = 5, y) {
    //     console.log(x);

    //     var x = 1;
    //     console.log(x);
    // }
    // a()

    // 使用默认值可以指定某一个参数不得省略，如果省略就抛出一个错误。
    // function throwIfMissing() {
    //     throw new Error('Missing parameter');
    // }
    // function foo(mustBeProvided = throwIfMissing()) {
    //     return mustBeProvided;
    // }
    // foo(1);

    // function add(...values) {
    //     let sum = 0;
    //     for (var val of values) {
    //         sum += val;
    //     }
    //     console.log(sum);
    // }
    // add(1, 2, 3);

    // function name(a, b, c) {
    //     console.log(Array.prototype.slice.call(arguments).sort());
    // }
    // name(3, 1, 2);

    // console.log(function(a, b) {}.length);
    // console.log((new Function).name);

    // function foo() {}
    // console.log(foo.bind({}).name);

    // var f = () => {
    //     let a = 1;
    //     let b = a + 1;
    //     console.log(b);
    //     return 1;
    // };
    // console.log(f());

    // var f = (...values) => {
    //     console.log(values);
    // }
    // f(1, 2, 3);

    // var o = {
    //     a: 1,
    //     b() {
    //         console.log(this.a);
    //     }
    // };
    // o.b();

    // function foo() {
    //     setTimeout(() => {
    //         console.log('id:', this.id);
    //     }, 100);
    // }
    // foo.call({ id: 42 });

    //由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
    // var a = (function() {
    //     return [
    //         (() => this.x).bind({ x: 'inner' })()
    //     ];
    // }).call({ x: 'outer' });
    // console.log(a);

    // 绑定this
    const hasOwnProperty = Object.prototype.hasOwnProperty;

    // js还没有支持，但babel转码器已经支持
    // function hasOwn(obj, key) {
    //     return obj::hasOwnProperty(key);
    // }
    // console.log(hasOwn(window, a));

    //尾调用，尾递归

}

export { functionExtend };

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

}

export { functionExtend };

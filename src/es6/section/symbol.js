function symbol() {
    console.log('symbol');

    // let s = Symbol('foo');
    // console.log(typeof s);
    // console.log(s);
    // console.log(s.toString());

    // var mySybol = Symbol();
    // var a = {
    //     [mySybol]: 'hello'
    // };
    // console.log(a[mySybol]);

    // var obj = {
    //     [Symbol('a')]: 'hello',
    //     [Symbol('b')]: 'world',
    //     'a': 1
    // };
    // console.log(Object.getOwnPropertySymbols(obj));
    // console.log(Reflect.ownKeys(obj));

    // var s1 = Symbol.for('foo'); // 登记在全局
    // var s2 = Symbol('foo'); //没有登记
    // var s3 = Symbol.for('foo');
    // console.log(s1 === s2, s1 === s3);
    // console.log(Symbol.keyFor(s1), Symbol.keyFor(s2));

    // class Even {
    //     static[Symbol.hasInstance](obj) {
    //         return Number(obj) % 2 === 0;
    //     }
    // }
    // console.log(1 instanceof Even); // false
    // console.log(2 instanceof Even); // true
    // console.log(12345 instanceof Even); // false

    // let a = [1, 2, 3];
    // console.log(a[Symbol.isConcatSpreadable]);
    // let b = [1, 2, 3, 4];
    // b[Symbol.isConcatSpreadable] = false;
    // let c = a.concat(b);
    // console.log(c);





}


export { symbol };

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

    var s1 = Symbol.for('foo'); // 登记在全局
    var s2 = Symbol('foo'); //没有登记
    var s3 = Symbol.for('foo');
    console.log(s1 === s2, s1 === s3);
    console.log(Symbol.keyFor(s1), Symbol.keyFor(s2));







}

export { symbol };

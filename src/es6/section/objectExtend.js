function objectExtend() {
    console.log('objectExtend');

    // var foo = 'baz';
    // var baz = { foo };
    // console.log(baz);

    // var cart = {
    //     _wheels: 4,
    //     _bikes: 5,

    //     get wheels() {
    //         return this._wheels;
    //     },

    //     set wheels(value) {
    //         if (value < this._wheels) {
    //             throw new Error('数值太小了！');
    //         }
    //         this._wheels = value;
    //     },
    //     get bikes() {
    //         return this._bikes;
    //     },

    //     set bikes(value) {
    //         if (value < this._bikes) {
    //             throw new Error('数值太小了！');
    //         }
    //         this._bikes = value;
    //     }
    // }
    // console.log(cart.bikes);
    // console.log(cart.wheels);
    // cart.bikes = 4;

    // let propKey = 'foo';
    // let obj = {
    //     [propKey]: true,
    //     ['a' + 'bc']: 123
    // };

    // const obj = {
    //     get foo() {},
    //     set foo(x) {}
    // };
    // const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
    // console.log(descriptor);
    // console.log(descriptor.get.name);

    // console.log(+0 === -0);
    // console.log(NaN === NaN);
    // console.log(Object.is(+0, -0));
    // console.log(Object.is(NaN, NaN));

    // var target = { a: 1, b: 1 };
    // var source1 = { b: 2, c: 2 };
    // var source2 = { c: 3, d: { e: 6 } };
    // Object.assign(target, source1, source2);
    // console.log(target);
    // source2.c = 5;
    // console.log(target);
    // source2.d.e = 7;
    // console.log(target);

    // console.log(typeof Object.assign(2));

    // console.log(Object.assign('abc'));

    // var bus = Object.defineProperty({}, 'money', {
    //     value: '￥100',
    //     enumerable: false
    // });
    // console.log(bus.money);
    // console.log(Object.getOwnPropertyDescriptor(bus, 'money'));

    // function b(a) {
    //     var a = a;
    //     console.log(a);

    // }
    // b(1)

    // var a = { 'b': 1 };
    // console.log(Object.getOwnPropertyDescriptor(a, 'b'));

    // function a(x, y) {
    //     console.log(arguments);
    //     console.log(Object.getOwnPropertyDescriptors(arguments));
    //     console.log(Object.getOwnPropertyDescriptor(arguments, 'length'));
    // }
    // a(1, 2);

    // console.log(Reflect.ownKeys({
    //     [Symbol()]: 0,
    //     b: 0,
    //     10: 0,
    //     2: 0,
    //     a: 0
    // }));

    // var a = [1, 2, 3, 4, 5];
    // var b = a.reduce(function(p, c) {
    //     return p + c;
    // }, 10);
    // console.log(b);

    // var a = { 'a': 1 }
    // console.log(Object(a) === a);

    // let proto = {};
    // let obj = { x: 10 };
    // proto.y = 20;
    // proto.z = 40;
    // console.log(Object.setPrototypeOf(obj, proto) === obj);

    // console.log(Object.keys({ foo: 'bar', baz: 42 }));

    // let obj = { one: 1, two: 2 };
    // for (let [k, v] of Object.entries(obj)) {
    //     console.log(
    //         `${JSON.stringify(k)}: ${JSON.stringify(v)}`
    //     );
    // }

    // es2017
    // let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    // console.log(z);


}

export { objectExtend };

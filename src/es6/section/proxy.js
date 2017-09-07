function proxy() {
    console.log('proxy');

    // let a = Object.create(null);
    // console.log(a);

    // let b = Object.create({});
    // console.log(b);

    // let proxy = new Proxy({}, {
    //     get: function(target, property) {
    //         console.log(target, property);
    //         return 35;
    //     }
    // });
    // console.log(proxy.time);

    // console.log(Reflect.apply(1, 2));//?????




}

export { proxy };

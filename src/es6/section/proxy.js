function proxy() {
    console.log('proxy');

    // let a = Object.create(null);
    // console.log(a);

    // let b = Object.create({});
    // console.log(b);

    let proxy = new Proxy({}, {
        get: function(target, property, receiver) {
            console.log(target, property, receiver);
            return 35;
        }
    });
    console.log(proxy.time);



}

export { proxy };

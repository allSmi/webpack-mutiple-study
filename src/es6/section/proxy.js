function proxy() {
    console.log('proxy');

    let a = Object.create(null);
    console.log(a);

}

export { proxy };

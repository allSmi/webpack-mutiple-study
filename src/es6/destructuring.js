// 解构赋值
function destructuring() {
    console.log('destructuring');
    // let obj = {
    //     p: [
    //         'Hello',
    //         { y: 'World' }
    //     ]
    // };
    // let { p, p: [x, { y }] } = obj;
    // console.log(JSON.stringify(p));

    // function move({ x = 0, y = 0 } = {}) {
    //     console.log(x, y);
    // }

    // move({ x: 3, y: 8 }); // [3, 8]

    // let x = 1;
    // let y = 2;
    // [x, y] = [y, x];
    // console.log(x, y);
}

export { destructuring };

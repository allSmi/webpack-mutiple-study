function setMap() {
    console.log('set&map');

    // console.log('set结构不会添加重复的值');

    // const set = new Set([1, 2, 3, 3, 4, 2]);
    // set.add(6);
    // set.add('6');
    // console.log(set);
    // console.log(...set);
    // console.log(set.size);

    // console.log(typeof [1, 2]);
    // console.log([1, 2] instanceof Array);
    // console.log([1, 2] instanceof Object);

    let map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
    console.log(map.get('name'));

    console.log(undefined === undefined);







}

export { setMap };

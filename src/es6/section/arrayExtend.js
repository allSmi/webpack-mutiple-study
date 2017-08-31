function arrayExtend() {
    console.log('arrayExtend');

    // console.log(...[1, 2, 3]);
    // console.log(1, 2, 3);

    // function aaa(x, y) {
    //     console.log(arguments);
    //     console.log(x, y);
    // }
    // aaa(...[1, 2]);

    // console.log(...[2, 1, 3]);

    // var arr1 = [1, 2, 3];
    // var arr2 = [3, 2, 1];
    // arr1.push(...arr2);
    // console.log(arr1);

    // 字符串转数组
    // var a = '123asd';
    // console.log([...a]);

    // var a = {
    //     '0': 'b',
    //     '1': 'a',
    //     length: 2
    // };
    // console.log(Array.prototype.slice.call(a)); // es5
    // console.log([...Array.from(a)]); // es6

    // 将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种Unicode字符，可以避免JavaScript将大于\uFFFF的Unicode字符，算作两个字符的bug。
    // function countSymbols(string) {
    //     return Array.from(string).length;
    // }

    // 将3号位复制到0号位
    // console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
    // [4, 2, 3, 4, 5]

    // var a = [1, 3, 5, 7].find((value, index, arr) => value > 5);
    // console.log(a);
    // var b = [1, 3, 5, 7].findIndex((value, index, arr) => value > 5);
    // console.log(b);

    // console.log([NaN].indexOf(NaN)); // -1
    // console.log([NaN].findIndex(y => Object.is(NaN, y))); // 0

    // console.log(['a', 'b', 'c'].fill(7, 1, 2));

    // for (let index of ['a', 'b'].keys()) {
    //     console.log(index);
    // }
    // for (let elem of ['a', 'b'].values()) {
    //     console.log(elem);
    // }
    // for (let [index, elem] of ['a', 'b'].entries()) {
    //     console.log(index, elem);
    // }

    // console.log([1, 2, 3].includes(2));
    // console.log([1, 2, 3].includes(2, 2));
    // console.log([NaN].includes(NaN));

    // console.log([undefined].toString());
    // console.log([1, 2, 3].toString());
    // console.log(...[undefined, 1, , ]);
    // console.log(...[1, 2, 3]);






}

export { arrayExtend };

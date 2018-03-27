function asyncStudy() {
    console.log('async');

    // function timeout(ms) {
    //     return new Promise((resolve) => {
    //         setTimeout(resolve, ms);
    //     });
    // }
    // async function asyncPrint(value, ms) {
    //     await timeout(ms).then(() => {
    //         console.log('1');

    //         setTimeout(() => {
    //             console.log('then1');
    //         }, 4000)
    //     });
    //     await timeout(ms).then(() => {
    //         console.log('2');

    //         setTimeout(() => {
    //             console.log('then2');
    //         }, 5000);
    //     });
    //     console.log(value);
    //     return 222
    // }
    // asyncPrint('hello world', 0).then((data) => {
    //     console.log(data);
    // });
    // asyncPrint('hello world', 2000);

    // async function f() {
    //     return await 123;
    // }

    // f().then(v => console.log(v))
    let a = [2, 3, 4, 5]
    let b = a.map(() => {
        return 1
    })
    console.log(b);

}

export default asyncStudy;

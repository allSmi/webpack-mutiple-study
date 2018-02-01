import { resolve } from "path";

function promise() {
    console.log('promise');

    // var data = {
    //     'a': 1,
    //     'b': 2
    // };

    // var promise = new Promise(function(resolve, reject) {
    //     // if (true) {
    //     //     resolve(value);
    //     // } else {
    //     //     reject(error);
    //     // }
    //     // setTimeout(function() {
    //     //     resolve(data);
    //     // }, 1000);
    //     setTimeout(resolve, 1000, data);
    // });
    // promise.then(function(data) {
    //     console.log('resolve', data);
    // }, function(data) {
    //     console.log('reject');
    // });

    //异步加载图片
    // function loadImageAsync(url) {
    //     return new Promise(function(resolve, reject) {
    //         var image = new Image();
    //         image.onload = function() {
    //             resolve(image);
    //         }
    //         image.onerror = function() {
    //             reject(new Error('Could not load image at ' + url))
    //         }
    //         image.src = url;
    //     });
    // }
    // loadImageAsync('http://picture1.yidianchina.com/assets/upload/image/6898af5a89fb3a0a959c8308f32f4e6d.jpg')
    //     .then(function(data) {
    //         console.log(data);
    //     }, function(data) {
    //         console.log('fail');
    //     })

    // var getJSON = function(url) {
    //     var promise = new Promise(function(resolve, reject) {
    //         var client = new XMLHttpRequest();
    //         client.open("GET", url);
    //         client.onreadystatechange = handler;
    //         client.responseType = "json";
    //         client.setRequestHeader("Accept", "application/json");
    //         client.send();

    //         function handler() {
    //             if (this.readyState !== 4) {
    //                 return;
    //             }
    //             if (this.status === 200) {
    //                 resolve(this.response);
    //             } else {
    //                 reject(new Error(this.statusText));
    //             }
    //         };
    //     });

    //     return promise;
    // };

    // getJSON("http://www.yidianchina.com/index/showAuctionSite").then(function(json) {
    //     console.log('Contents: ' + json);
    // }, function(error) {
    //     console.error('出错了', error);
    // });

    // var p1 = new Promise(function(resolve, reject) {
    //     // setTimeout(function() {
    //     //     resolve();
    //     // }, 3000);
    //     // reject(new Error('error'));
    //     reject('错了');
    // });

    // var p2 = new Promise(function(resolve, reject) {
    //     return resolve(p1); // 如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。
    //     console.log('2323'); // return resolve()后不回再执行了,不加return还会执行后面的
    // });

    // Promise.prototype.catch方法是.then(null, rejection)的别名,用来捕获前面所有promise的reject()和语法错误
    // p2.then(function() {
    //     console.log('success');
    // }).catch(function(error) {
    //     console.log('发生错误：', error); // 发生错误： Error: error
    // }).finally(() => { // ES2018引入的新语法
    //     console.log('finally');
    // });

    //then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）
    // p2.then(function() {
    //     console.log('success');
    // }, function() {
    //     console.log('fail');
    //     return 1111;  会将返回结果作为参数，传入第二个回调函数，即下面的那个then
    // }).then(function(data) {
    //     console.log('2');
    //     console.log(data); // 1111
    // }).catch(function(error) {
    //     console.log('发生错误：', error); // 没有
    // });

    // p2.then(function() {
    //     console.log('success');
    // }).then(function(data) {
    //     console.log('2');
    //     console.log(data); // undifinded
    // }).catch(function(error) {
    //     console.log('发生错误：', error); // 发生错误： Error: error,如果then的方法里面加了reject回调，这里就不会再捕获错误了
    // });

    // Promise 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示ReferenceError: x is not defined，但是不会退出进程、终止脚本执行

    // const p1 = new Promise((resolve, reject) => {
    //         resolve('hello');
    //     })
    //     .then(result => result);

    // const p2 = new Promise((resolve, reject) => {
    //         throw new Error('报错了');
    //     })
    //     .then(result => result);

    // Promise.all([p1, p2])
    //     .then(result => console.log(result))
    //     .catch(e => console.log(e));

    // const f = () => console.log('now');
    // Promise.try(f);
    // console.log('next');

    // const f = new Promise((resolve) => {
    //     let a = x + y;
    //     resolve(a);
    // });
    // Promise.try(f)
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch((reason) => {
    //         console.log(reason);
    //     });
    // f.then((data) => {
    //         console.log(data);
    //     })
    //     .catch((reason) => {
    //         console.log(reason);
    //     });
    // f.then(() => {}, (reason) => {
    //     console.log(reason);
    // })
}
// export { promise };
export default promise;

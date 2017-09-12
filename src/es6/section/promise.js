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
    //     reject();
    // });

    // var p2 = new Promise(function(resolve, reject) {
    //     resolve(p1); // 如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。
    // });

    // p2.then(function() {
    //     console.log('success');
    // }, function() {
    //     console.log('fail');
    //     return 1111;
    // }).then(function(data) {
    //     console.log('2');
    //     console.log(data); // 1111
    // }).catch(function(error) {
    //     console.log('发生错误：', error);
    // });

    // p2.then(function() {
    //     console.log('success');
    // }).then(function(data) {
    //     console.log('2');
    //     console.log(data); // 1111
    // }).catch(function(error) {
    //     console.log('发生错误：', error);
    // });



}
export { promise };

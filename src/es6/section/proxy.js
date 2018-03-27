import { demo } from './demo1';

function proxy() {
  console.log('proxy');
  demo()

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

  // has对for---in 没有拦截的作用
  // construct方法返回的必须是一个对象，否则会报错


}

export { proxy };

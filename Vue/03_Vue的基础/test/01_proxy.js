/* 
    如果直接修改对象的属性，那么就仅仅修改了属性，这种操作只会影响对象自身，不会导致元素的重新渲染

    希望在修改属性的同时，可以进行一些其他操作，比如元素重新渲染

    要实现这个目的，必须对对象进行改造，vue3 中使用代理模式来完成对象的改造

    设置代理时不会对原对象产生影响！
*/
// obj.name = '猪八戒'

//创建对象
const obj = {
    name: "孙悟空",
    age: 18,
  };

// 来为对象创建代理
const handler = {

  // get用来指定读取数据时的行为，返回值就是最终读取的值
  // 指定get后，在通过代理读取对象属性时，会调用get方法来获取值
  get(target, prop, receiver) {

    // 返回值之前做一些其他操作
    // 在Vue中，data()返回的对象会被vue代理
    // vue代理后，当我们通过代理去读取属性时，返回值之前，他会做一个跟踪的操作
    //      当我们通过代理去修改属性时，修改后，会通知之前所有用到该值的位置进行更新
    // Track() 追踪谁用了这个对象

    /* 
      三个参数：
        target：被代理的对象
        prop： 读取的属性
        receiver: 代理对象
    */
    return target[prop]
  },

  // set会在通过代理修改对象时调用
  set(target, prop, value, receiver) {
    console.log(target, prop, value, receiver);
    target[prop] = value

    // trigger() 触发所有使用该值的位置进行更新
    //值修改后做一些其他操作
  }
}; // 用来指定代理的行为

//创建代理
const proxy = new Proxy(obj, handler);

// console.log(proxy);
// console.log(proxy.name);
// console.log(proxy.age);

proxy.age = 28

console.log(proxy.age);



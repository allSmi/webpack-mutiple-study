function classStudy() {
    console.log('class');

    // class Add {
    //     constructor() {
    //         this.x = 1;
    //         this.y = 2;
    //     }
    //     getAdd() {
    //         return this.x + this.y;
    //     }
    // }
    // let add = new Add();
    // console.log(add.getAdd());

    // class Counter {
    //     constructor(n) {
    //         this.x = n;
    //         this.add = this.add.bind(this);
    //         console.log(Counter.name);
    //     }
    //     add() {
    //         ++this.x;
    //         console.log(this.x);
    //     }
    // }
    // let counter = new Counter(5);
    // counter.add();

    // class Foo {
    //     constructor(...args) {
    //             this.args = args;
    //         }
    //         *[Symbol.iterator]() {
    //             for (let arg of this.args) {
    //                 yield arg;
    //             }
    //         }
    // }
    // for (let x of new Foo('hello', 'world')) {
    //     console.log(x);
    // }

    // class Counter {
    //     constructor() {
    //         this.x = 2;
    //         this.add = Counter.add.bind(this);
    //         console.log(Counter.name);
    //     }
    //     // static定义的方法只能使用类调用,不能使用this调用
    //     static add() {
    //         console.log(111);
    //         ++this.x;
    //         console.log(this.x);
    //     }
    // }
    // Counter.add(); // 没有实例化不存在this
    // let counter = new Counter(2);
    // counter.add();

    // class Foo {
    //     static classMethod() {
    //         return 'hello';
    //     }
    // }
    // Foo.classMethod() // 'hello'
    // var foo = new Foo();
    // foo.classMethod()

    // class Foo {
    //     static bar() { // static定义的方法中this指向类而不是实例
    //         this.baz();
    //     }
    //     static baz() {
    //         console.log('hello');
    //     }
    //     baz() {
    //         console.log('world');
    //     }
    // }
    // Foo.bar() // hello

    // class Counter{
    //     constructor(){
    //         console.log(new.target === Counter);

    //     }
    // }
    // let counter = new Counter();

    // class Counter{
    //     constructor(){
    //         console.log(new.target === Counter); //false 子类继承父类new.target指向子类
    //         console.log(new.target === ExtendCounter); // true
    //         if(new.target === Counter){
    //             throw new Error('本例不能实例化')
    //         }
    //     }
    // }
    // class ExtendCounter extends Counter{
    //     constructor(){
    //         super();
    //     }
    // }
    // let counter = new ExtendCounter();
    // let counter1 = new Counter();

    // class Counter{
    //     constructor(){

    //     }
    // }
    // class ExtendCounter extends Counter{
    //     constructor(){
    //         super() //子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    //     }
    // }
    // let counter = new ExtendCounter()
    // console.log(Object.getPrototypeOf(ExtendCounter) === Counter);


}
export default classStudy;

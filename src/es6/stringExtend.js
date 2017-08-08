function stringExtend() {
    console.log('stringExtend');
    // console.log('\u04e00'); // a
    // console.log('\uD842\uDFB7'); // 𠮷
    // console.log('\u20BB7'); // ₻7
    // console.log('\u{20BB7}'); // 𠮷
    // console.log('\u{41}'); // A
    // console.log('\u0041'); // A
    // console.log(`hell\u{6f}`); // hello

    // charAt()  charCodeAt() fromCharCode()

    // var s = '𠮷a';
    // // codePointAt方法返回的是码点的十进制值
    // console.log(s.codePointAt(0).toString(16)); // "20bb7"
    // console.log(s.codePointAt(2).toString(16)); // "61"

    // var s = '𠮷a';
    // // for...of循环，它会正确识别32位的UTF-16字符。
    // for (let ch of s) {
    //     console.log(ch.codePointAt(0).toString(16));
    // }

    // console.log(String.fromCodePoint(0x20BB7)); // "𠮷"
    // console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'); // true

    // console.log('abc'.charAt(0)); // "a"
    // console.log('𠮷'.charAt(0)); // "\uD842"
    // //谷歌浏览器有at()方法
    // console.log('abc'.at(0)); // "a"
    // console.log('𠮷'.at(0)); // "𠮷"

    // console.log('\u01D1');
    // console.log('\u004F\u030C');

    // // 字符串实例的normalize()方法
    // console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize());

    // var s = 'Hello world!';
    // s.startsWith('Hello') // true
    // s.endsWith('!') // true
    // s.includes('o') // true
    // s.startsWith('world', 6) // true
    // s.endsWith('Hello', 5) // true
    // s.includes('Hello', 6) // false

    // console.log('x'.repeat(2)); // xx

    // console.log('x'.padStart(5, 'ab')); // ababx
    // console.log('x'.padEnd(5, 'ab')); // xabab

    // let a = 5;
    // let b = 10;
    // console.log(`this a is ${a}`);
    // $('.test').html(`
    // <ul>
    //     <li>${a}</li>
    //     <li>${b}</li>
    //     <li>${a} + ${b} = ${a + b}</li>
    // </ul>
    // `.trim());

    // function fn() {
    //     console.log('模版调用的');
    //     return 'haha';
    // }
    // console.log(`${fn()}`);

    // const tmpl = addrs => `
    //     <table>
    //     ${addrs.map(addr => `
    //         <tr><td>${addr.first}</td></tr>
    //         <tr><td>${addr.last}</td></tr>
    //     `).join('')}
    //     </table>
    //     `;
    // const data = [
    //     { first: '<Jane>', last: 'Bond' },
    //     { first: 'Lars', last: '<Croft>' },
    // ];
    // console.log(tmpl(data));

    // let str = 'return ' + '`Hello ${name}!`';
    // let func = new Function('name', str);
    // console.log(func('Jack')); // "Hello Jack!"

    // let str = '(name) => `Hello ${name}!`';
    // let func = eval.call(null, str);
    // console.log(func('Jack')); // "Hello Jack!"

    // let a = eval(function(a) {
    //     alert(1);
    //     return a;
    // }); // eval返回当前函数，并不执行，但如果是字符串，就会执行其中的js代码
    // console.log(a(5));

    // let a = eval('var x = 1;var y = 2;console.log(x + y)');

    //     var template = `
    // <ul>
    //   <% for(var i=0; i < data.supplies.length; i++) { %>
    //     <li><%= data.supplies[i] %></li>
    //   <% } %>
    // </ul>
    // `;

    //     var evalExpr = /<%=(.+?)%>/g;
    //     var expr = /<%([\s\S]+?)%>/g;

    //     template = template
    //         .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    //         .replace(expr, '`); \n $1 \n  echo(`');
    //     console.log(template);
    //     template = 'echo(`' + template + '`);';
    //     console.log(template);

    // var c = 10;
    // var a = function() {
    //     return `(function(c){console.log(c,${c});})`;
    // };
    // var b = eval(a());
    // b(6);

    // var a = eval('(function(c){console.log(c);})');
    // a(6); // 6

    // var a = eval('function(c){console.log(c);}');
    // a(6); // Unexpected token (  报错,eval中写函数1不用引号，2用引号还要用()包上

    // 标签模版
    alert `123`;

}

export { stringExtend };

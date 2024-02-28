const express = require('express');
const app = express();

const sym = Symbol("Naveen Vishak");
const sym2 = Symbol("Naveen Vishak"); 
// console.log(sym, sym2, sym===sym2);

// app.get('/', fun);
// app.listen(3000, () => console.log("Server runs in port 3000"));

// async function fun(req, res) {
//   try {
//     const r1 = (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
//     const r2 = (await fetch('https://jsonplaceholder.typicode.com/posts/2')).json();
//     const r3 = (await fetch('https://jsonplaceholder.typicode.com/posts/3')).json();
//     Promise.race([r1, r2, r3]).then(d => res.send(d));
//   } catch(err) {
//     res.send(err);
//   }
// }
// type conversion การแปลงชนิดข้อมูล
// คือ การเปลี่ยนชนิดข้อมูลจากชนิดหนึ่งเป็นอีกชนิดหนึ่ง
//------------------------------
// string conversion
let aa = '123';
console.log(Number(aa) / 5 )


// number conversion
let bb = 123;
let cc = 200;

console.log(String(bb) + String(cc));
console.log(bb + cc);
console.log(bb.toFixed(2));
console.log(cc.toFixed(4));

// boolean conversion
let dd = true;
let ee = false;
console.log(Number(dd), Number(ee));

console.log(dd.toString());
console.log(ee.toString());

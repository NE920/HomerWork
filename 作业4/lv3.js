var a = {n:1};  //创建对象a，包含属性n
var b = a;      //创建一个a的引用，名b
a.x = a = {n:2};//为a对象新增一个属性x，x为一个包含a对象的属性

console.log(a);//打印a

console.log(b);//打印b

a.n = 3;       //修改属性n的值
console.log(b);//打印对象b，结果与打印a相同且n的值为3
// 寄生组合式继承
// 其基本思路是通过借用构造函数来继承属性，通过原型链的混成形式来继承方法，就是为了不必为了子类型的原型去调用父类型的构造函数


function inheritPrototype(superPerson,person)
{
  var prototype=Object.create(person.prototype);
  prototype.construtor = superPerson;
  superPerson.prototype = prototype;
}
function Person(name)
{ 
  this.name = name;
  this.frieds =  ["Jack", "John", "Kim"];
}
Person.prototype.getName = function(){
  console.log(this.name);
};
function SuperPerson(name,sex){
  Person.call(this,name);
  this.sex = sex;
}
inheritPrototype(SuperPerson,Person);
SuperPerson.prototype.getSex = function(){
  console.log(this.sex);
};
var Tom=new SuperPerson("Tom","man");
Tom.getName();//Tom
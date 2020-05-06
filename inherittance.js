

/*jshint  esversion:6, globalstrict:true*/


/*global assert, Account, SavingsAccount, Bank */



function user (name){
    this.name = name;


}

user.prototype.sayHi =function(){
    alert(this.name);
}

let usertwo= new user("mesfin");
    usertwo.sayHi();







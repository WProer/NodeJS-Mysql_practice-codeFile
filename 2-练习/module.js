let num = 10;

function fn(){
    console.log(666);
}

let obj = {
    name:"hhh",
    age:20,
    fn(){
        console.log(888);
    }
}

module.exports.num = num;
module.exports.fn = fn;
module.exports.obj = obj;
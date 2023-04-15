function fn1(callback){
    function fn2(){
        function fn3(){
            if(Math.random() < 0.5){
                callback( new Error('fn3 err') )
            }else{
                // null, undefined
                callback(null, 'fn3')
            }

            // setTimeout(()=>{
            //     callback( new Error('fn3 err') )
            // }, 2000)
        }
        fn3()
        console.log('fn2')
    }
    fn2()
    console.log('fn1')
}

fn1(function(err, res){
    if(err){
        console.log('err.message ---->', err.message);
        return 
    }
    console.log('res ---->', res);
})

// try{
//     fn1()
// }catch(e){
//     console.log('e ---->', e.message);  // fn3 err
    
// }

console.log('----4----')
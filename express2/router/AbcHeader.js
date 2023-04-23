class ABC{
    a(){
        return (req,res)=>{
            res.send("aa");
        }
    };
    b(){
        return (req,res)=>{
            res.send("bb");
        }
    };
    c(){
        return (req,res)=>{
            res.send("cc");
        }
    }
}

module.exports = ABC;
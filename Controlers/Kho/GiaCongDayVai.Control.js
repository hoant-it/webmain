const db = require("../../databases/kho/GiaCongDayVai.Db");

module.exports.GiaCongDayVaiLoad= async(req,res)=>{
    res.render("kho/GiaCongDayVai", {
        title: "Gia Công Dây Vai",
        userId: req.signedCookies.userId,
        html: "",
      });
}

module.exports.GiaCongDayVaiInput = async(req,res)=>{
    let lError={}
    try {
        let result= await db.GiaCongDayVaiInput(req.file.filename,req.signedCookies.userId)
        res.send(result);
    } catch (error) {
        lError.errMes = "Lỗi: " + error;
        lError.statusErr = false;
        res.send(lError)
    }
}



module.exports.wacoal_GiaCongDayVai_MaHang_V1 = async(req, res) =>{
    const{MAHANG}= req.params
    try {
       await  db.wacoal_GiaCongDayVai_MaHang_V1(MAHANG).then(result=>{
           res.json({
               data:result,
               message:`ok`
           })
       })
        
    } catch (error) {
        res.json({
            data:{},
            message:`Err ${error}`
        })
    
    }
}

module.exports.wacoal_MaHang_GCDV_Select_V1 = async(req, res) =>{
    try {
       await  db.wacoal_MaHang_GCDV_Select_V1().then(result=>{
           res.json({
               data:result,
               message:`ok`
           })
       })
        
    } catch (error) {
        res.json({
            data:{},
            message:`Err ${error}`
        })
    
    }
}

module.exports.wacoal_GiaCongDayVai_MaHang_CT_V1 = async(req, res) =>{
    const{MAHANG}= req.params
    try {
       await  db.wacoal_GiaCongDayVai_MaHang_CT_V1(MAHANG).then(result=>{
           res.json({
               data:result,
               message:`ok`
           })
       })
        
    } catch (error) {
        res.json({
            data:{},
            message:`Err ${error}`
        })
    
    }
}

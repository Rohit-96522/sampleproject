let express =require('express');
let router =express.Router();

router.post("/register",(req,res)=>{
    let data=req.body;
    res.send(data.name);
});
router.post("/login",(req,res)=>{
    res.send("login is called")
});
router.get("/viewtasks",(req,res)=>{
    res.send("view tasks is called")
});
router.get("/viewtodo",(req,res)=>{
    res.send("viewtodo is called")
});
router.post("/updateprofile",(req,res)=>{
    res.send("updateprofile is called")
})

module.exports=router;
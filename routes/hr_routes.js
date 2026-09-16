let express =require('express');
let router =express('express');

router.get("/employees",(req,res)=>{
    res.send("employees called");
});
router.post("/assign-task",(req,res)=>{
    res.send("assign ttask page called");
});router.get("/tasks",(req,res)=>{
    res.send("tasks called");
});
router.get("/notification",(req,res)=>{
    res.send("notification called");
});

module.exports=router;
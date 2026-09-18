let express =require('express');
let hrroutes=require('./routes/hr_routes');
let emproutes=require('./routes/emp_routes');
const mongoose = require('mongoose'); // 👈 Add this line

let app =express();

mongoose.connect("mongodb://localhost:27017/hrmangement").then(
    () => console.log("Connected to MongoDB successfully!")
).catch(
    (err) => console.error("Failed to connect to MongoDB:", err)
);


app.use(express.json());
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes);


app.listen(3000,()=>{
    console.log("server running on port 3000")
})
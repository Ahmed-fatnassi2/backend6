// const express = require("express")
// const router = express.Router()
// const ProdControler = require("../api/ProdControler")


// router.get("/test", ProdControler.test);
// router.post("/", (req, res) => {
//     res.send({ data: " prod" });
// });
// router.delete("/", (req, res) => {
//     res.send({ data: " prod" });
// });

// module.exports = router;

// http://localhost:5000/prod/test

const express = require("express");
const router = express.Router()
const mysql = require("mysql")

const connectDB = require("../config/db")
;
console.log(connectDB)
router.get('/', function(req,res) {
    // var query="select * from product ";
    var query="select * from product";

    connectDB.query(query, function(err, result){
        if(err){
            console.log(err);
            res.send("unable to get the products")
        }
        else{
            res.send(result);
        }
    })
})
///////////////
// router.get('/f', function(req,res) {
//     // var query="SELECT SCOPE_IDENTITY('order_cmd')"
//     var query="SELECT id_product, id_order_cmd FROM product ,order_cmd WHERE product.id_product=order_cmd.command_id";
//     // var query="SELECT MAX(id_order_cmd) AS m FROM order_cmd";



//     connectDB.query(query, function(err, result){
//         if(err){
//             console.log(err);
//             res.send("unable to get the products")
//         }
//         else{
//             res.send(result);
//         }
//     })
// })
////////////
// router.get('/f2', function(req,res) {
//     
//     var query="SELECT id_product, id_order_cmd FROM product ,order_cmd WHERE product.id_product=order_cmd.command_id";
//     // var query="SELECT MAX(id_order_cmd) AS m FROM order_cmd";



//     connectDB.query(query, function(err, result){
//         if(err){
//             console.log(err);
//             res.send("unable to get the products")
//         }
//         else{
//             res.send(result);
//         }
//     })
// })
///
router.put('/:id', (req,res)=>{
    const data = [req.body.price,req.params.id];
    connectDB.query("UPDATE product SET price = ? where id_product = ?",data,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result);
        }
    })
});

module.exports = router;
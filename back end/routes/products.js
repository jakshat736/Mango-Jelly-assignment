var express = require('express');
var router = express.Router();
var pool=require('./pool')

router.post('/add_items', function(req, res, next) {
  console.log(req.body)
pool.query("insert into items set categoryname=?,subcategoryname=?,productname=?,price=?,offerprice=?",[req.body.categoryname,req.body.subcategoryname,req.body.productname,req.body.price,req.body.offerprice],function(error,result)
{
   if(error)
   {console.log(error) 
    return res.status(500).json({status:false,error:error})
  }
  else
  {
      return res.status(200).json({status:true,result: result})
  }

})
});


router.get('/displayallitems',function(req,res,next){

 pool.query("select * from items",function(error,result){

  if(error)
  {
    return res.status(500).json({status:false,error:error})
  }
  else
  {
    return res.status(200).json({ data: result })
  }


 })


 
})
router.post('/deleteitem', function (req, res, next) {
  console.log(req.body)
  pool.query("delete from items where productid=?", [req.body.productid], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ status: false, error: error })
      }
      else {
          return res.status(200).json({ status: true })
      }
  })
});

router.post('/updateitem', function (req, res, next) {
  console.log(req.body)
  pool.query("update items set categoryname=?,subcategoryname=?,productname=?,price=?,offerprice=? where productid=?", [req.body.categoryname,req.body.subcategoryname,req.body.productname,req.body.price,req.body.offerprice,req.body.productid], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ status: false, error: error })
      }
      else {
          return res.status(200).json({ status: true })
      }
  })
});

module.exports = router;

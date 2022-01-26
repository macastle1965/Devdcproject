const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
 res.send("I'm on my way...Don't stop me now!!!");
});

module.exports = router;
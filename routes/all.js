const express = require("express"),
   router = express.Router();
   const data = {
       powerrangers: [{
               name: "Owens",
               status: "boss"
           },
           {
               name: "Michelle",
               status: "worker"
           }
       ]
   };
router.get("/", (req, res) => {
   let json =
       data
   ;
   res.status(200).send(json).end();
});
module.exports = router;
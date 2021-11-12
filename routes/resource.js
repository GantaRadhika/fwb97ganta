var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 

var apple_controller = require('../controllers/apples'); 
 
/// API ROUTE /// 



/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/apples', apple_controller.apple_create_post); 

// DELETE request to delete Costume. 
router.delete('/apples/:id', apple_controller.apple_delete); 

// PUT request to update Costume. 
router.put('/apples/:id', 
apple_controller.apple_update_put); 
 
// GET request for one Costume. 
router.get('/apples/:id', apple_controller.apple_detail); 
 
// GET request for list of all Costume items. 
router.get('/apples', apple_controller.apple_list); 
 
module.exports = router; 
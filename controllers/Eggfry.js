var Eggfry = require('../models/Eggfry'); 
 
// List of all Eggfrys 
exports.Eggfry_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Eggfry list'); 
}; 
 
// for a specific Eggfry. 
// for a specific Eggfry. 
exports.Eggfry_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Eggfry.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Eggfry create on POST. 
exports.Eggfry_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Eggfry create POST'); 
}; 
 
// Handle Eggfry delete form on DELETE. 
exports.Eggfry_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Eggfry delete DELETE ' + req.params.id); 
}; 
 
// Handle Eggfry update form on PUT. 
exports.Eggfry_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Eggfry update PUT' + req.params.id); 
}; 
// List of all Eggfrys 
exports.Eggfry_list = async function(req, res) { 
    try{ 
        theEggfry = await Eggfry.find(); 
        res.send(theEggfry); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.Eggfry_view_all_Page = async function(req, res) { 
    try{ 
        theEggfrys = await Eggfry.find(); 
        res.render('Eggfry', { title: 'Eggfry Search Results', results: theEggfrys }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// Handle Eggfry create on POST. 
exports.Eggfry_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Eggfry(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Eggfry_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
exports.Eggfry_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Eggfry.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Onions)  
               toUpdate.Onions = req.body.Onions; 
        if(req.body.spices) toUpdate.spices = req.body.spices; 
        if(req.body.curry) toUpdate.curry = req.body.curry; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
const express=require('express');
const router=express.Router();
const appoinmentController=require('../controllers/appoinment');


router.get('/',appoinmentController.getAllAppoinment);
router.get('/:id',appoinmentController.getAppoinmentById);
router.post('/',appoinmentController.createAppoinment);
router.put('/:id',appoinmentController.updateAppoinment);
router.delete('/:id',appoinmentController.deleteAppoinment);


module.exports=router;
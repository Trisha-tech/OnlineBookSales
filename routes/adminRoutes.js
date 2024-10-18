const express=require('express');
const { authorizeRoles } = require('../middlewares/auth');
const router=express.Router();
const {retriveFeedbacks,retriveFeedbacksById,updateFeeback}=require('../controllers/adminController');





router.get('/feedback',retriveFeedbacks);


router.get('/feedback/:id',retriveFeedbacksById);

router.post('/feedback/update/:id',updateFeeback);



module.exports=router;

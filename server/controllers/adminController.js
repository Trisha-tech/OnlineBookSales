const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Feedback = require("../models/feebackSchema");


//get all feedbacks
exports.retriveFeedbacks=catchAsyncErrors(async(req,res,next)=>{
    const feedbacks=await Feedback.find();

    res.status(200).json({
        success:true,
        feedbacks
    });

});

//get feedback by id
exports.retriveFeedbacksById=catchAsyncErrors(async(req,res,next)=>{
    const feedback=await Feedback.findById(req.params.id);

    if(!feedback){
        return next(new ErrorHandler("Feedback not found",404));
    }

    res.status(200).json({
        success:true,
        feedback
    });
});


//update feedback
exports.updateFeeback=catchAsyncErrors(async(req,res,next)=>{
    let feedback
    feedback=await Feedback.findById(req.params.id);
    if(!feedback){
        return next(new ErrorHandler("Feedback not found",404));
    }
    feedback=await Feedback.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    }); 
    res.status(200).json({
        success:true,
        feedback
    });
    //update feedback
});
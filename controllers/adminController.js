const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Feedback = require("../models/feebackSchema");
const errorHandler = require("../utils/errorHandler");
const responseHandler = require("../utils/responseHandler");

//get all feedbacks
exports.retriveFeedbacks = catchAsyncErrors(async (req, res, next) => {
  const feedbacks = await Feedback.find();

  return res.status(200).send({
    response: {
      data: { feedbacks },
      title: "Feedbacks Retrieved",
      message: "Feedbacks Retrieved Successfully!",
      status: 200,
    },
    errors: {},
  });
});

//get feedback by id
exports.retriveFeedbacksById = catchAsyncErrors(async (req, res, next) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    return res
      .status(404)
      .send(
        errorHandler(404, "Invalid request", "Feedback not found for given id")
      );
  }

  return res.status(200).send({
    response: {
      data: { feedback },
      title: "Feedbacks Retrieved",
      message: "Feedbacks Retrieved Successfully!",
      status: 200,
    },
    errors: {},
  });
});

//update feedback
exports.updateFeeback = catchAsyncErrors(async (req, res, next) => {
  let feedback;
  feedback = await Feedback.findById(req.params.id);
  if (!feedback) {
    return res
      .status(404)
      .send(
        errorHandler(404, "Invalid request", "Feedback not found for given id")
      );
  }
  feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  return res.status(200).send({
    response: {
      data: { feedback },
      title: "Feedbacks Retrieved",
      message: "Feedbacks Retrieved Successfully!",
      status: 200,
    },
    errors: {},
  });
});

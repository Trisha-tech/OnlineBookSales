import * as yup from "yup";

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Email format invalid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const registerValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email format invalid")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum length should be 6")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

import * as yup from "yup";

export const schema = yup.object({

    
    email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),
  
  
    mobileNumber: yup
      .string().min(10)
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Enter a valid phone number"
      ).required(),
  
    addressline01: yup.string("address should be a string").
    required("please provide address"),
    addressline02: yup.
    string("address should be a string").required(
        "please provide address"
    ),
    state: yup.
    string("state should be a string"),
  
  
    pincode: yup.string().min(8).required(),
  });
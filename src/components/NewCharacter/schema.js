import * as Yup from "yup";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  height: Yup.number("Need a number")
    .typeError("Must be a number")
    .required("Required")
    .positive("Must be positive")
    .integer("Must be integer"),
  mass: Yup.number()
    .typeError("Must be a number")
    .required("Required")
    .positive("Must be positive")
    .integer("Must be integer"),
  hair_color: Yup.string().required("Required"),
  skin_color: Yup.string().required("Required"),
  eye_color: Yup.string().required("Required"),
  birth_year: Yup.string().min(4, "Too Short!").required("Required"),
  gender: Yup.string().required("Required"),
});

export default DisplayingErrorMessagesSchema;

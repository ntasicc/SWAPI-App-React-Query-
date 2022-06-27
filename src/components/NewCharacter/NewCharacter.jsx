import { useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import { swDataActions } from "../../store/swData-slice";
import { Formik, Field, Form } from "formik";
import classes from "./NewCharacter.module.css";
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

const NewCharacter = (props) => {
  const dispatch = useDispatch();

  const addCharacterHandler = (value) => {
    dispatch(swDataActions.addCustomCharacter({ fromDB: false, ...value }));
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <Formik
        initialValues={{
          name: "",
          height: "",
          mass: "",
          hair_color: "",
          skin_color: "",
          eye_color: "",
          birth_year: "",
          gender: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values) => addCharacterHandler(values)}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <InputComponent
              name={"name"}
              text={"Name"}
              errors={errors.name}
              touched={touched.name}
            />
            <InputComponent
              name={"height"}
              text={"Height"}
              errors={errors.height}
              touched={touched.height}
            />
            <InputComponent
              name={"mass"}
              text={"Mass"}
              errors={errors.mass}
              touched={touched.mass}
            />
            <InputComponent
              name={"hair_color"}
              text={"Hair Color"}
              errors={errors.hair_color}
              touched={touched.hair_color}
            />
            <InputComponent
              name={"skin_color"}
              text={"Skin Color"}
              errors={errors.skin_color}
              touched={touched.skin_color}
            />
            <InputComponent
              name={"eye_color"}
              text={"Eye Color"}
              errors={errors.eye_color}
              touched={touched.eye_color}
            />
            <InputComponent
              name={"birth_year"}
              text={"Birth Year"}
              errors={errors.birth_year}
              touched={touched.birth_year}
            />
            <InputComponent
              name={"gender"}
              text={"Gender"}
              errors={errors.gender}
              touched={touched.gender}
            />

            <button className={classes.addBtn} type="submit">
              Add
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

const InputComponent = (props) => {
  return (
    <div className={classes.inputDiv}>
      <label htmlFor={props.name}>
        {props.text}{" "}
        {props.touched && props.errors && (
          <span className="text-red-700 text-sm"> ({props.errors})</span>
        )}
      </label>
      <Field id={props.name} name={props.name} />
    </div>
  );
};

export default NewCharacter;

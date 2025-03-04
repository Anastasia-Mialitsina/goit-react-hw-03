//import { useState } from "react";
import { nanoid } from "nanoid";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.string().matches(
      /^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,3}\)?[-.\s]?)?[\d\s.-]{7,15}$/,
      "Invalid phone number"
    )
    .required("Required"),
  });
  const initialValues = {
    name: "",
    number: "",
  };
  
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number
    });
    resetForm();
  };
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.fieldWrapper}>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            className={styles.input}
          />
          <ErrorMessage
            name="name"
            component="div"
            className={styles.error}
          />
        </div>
        <div className={styles.fieldWrapper}>
          <label htmlFor="number">Number</label>
          <Field
            type="text"
            id="number"
            name="number"
            placeholder="Enter number"
            className={styles.input}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Add Contact</button>
      </Form>
    </Formik>
  );
}
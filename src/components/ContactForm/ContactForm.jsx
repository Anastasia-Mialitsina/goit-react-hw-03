//import { useState } from "react";
import { nanoid } from "nanoid";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      //.matches(/^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,3}\)?[-.\s]?)?[\d\s.-]{7,15}$/)
      .matches(/^\d+$/, 'Required')
      .min(6, 'Too short for a phone number')
      .max(15, 'Too long for a phone number')
      .required('Required'),
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
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <div className={styles.fieldWrapper}>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className={classNames(styles.input, {
                [styles.error]: errors.name && touched.name,
                [styles.success]: !errors.name && touched.name,
              })}
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
              className={classNames(styles.input, {
                [styles.errors]: errors.number && touched.number,
                [styles.success]: !errors.number && touched.number,
              })}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
import * as Yup from 'yup'

export const replyFormValidation = Yup.object().shape({
    name: Yup.string()
        .min(2, "*Names must have at least 2 characters")
        .max(20, "*Names can't be longer than 20 characters")
        .required("*Name is required"),
    email: Yup.string()
        .email("*Must be a valid email address")
        .max(100, "*Email must be less than 100 characters")
        .required("*Email is required"),
    comment: Yup.string()
        .required("*Comment is required")
})
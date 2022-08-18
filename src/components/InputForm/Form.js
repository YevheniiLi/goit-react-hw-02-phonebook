import { ButtonForm , LabelStyle} from './Form.styyled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


// import PropTypes from 'p rop-types'


// import { FormName } from './Form.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export const InputForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };


  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off">
          <LabelStyle htmlFor="name">
            Name :
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              
            />
            <ErrorMessage name="name" component="div" />
          </LabelStyle>
          
          <LabelStyle htmlFor="number">
            Tel :
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
            <ButtonForm type="submit">Add contact</ButtonForm>
          </LabelStyle>
        </Form>
      </Formik>
    </>
  );
};

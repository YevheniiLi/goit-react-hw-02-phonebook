import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

// import { Component } from 'react';
// import { FormStyle } from './Form.styyled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const InputForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };



  

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </label>
        <br />
        <label htmlFor="number">
          Tel
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
          <button type="submit">Add contact</button>
        </label>
      </Form>
    </Formik>
  );
};

// import { Component } from 'react';
// import { nanoid } from "nanoid"

// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();

//   };

// reset = () => {
//     this.setState({
//         name: '',
//         number: '',
//     })
// }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//             Name
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}
//           id={this.nameInputId}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
// </label>
//         <label htmlFor={this.numberInputId}>
//             Number
//         <input
//           type="tel"
//           name="number"
//           value={this.state.number}
//           onChange={this.handleChange}
//           id={this.numberInputId}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <button type="submit">Add contact</button>
//         </label>
//       </form>
//     );
//   }
// }

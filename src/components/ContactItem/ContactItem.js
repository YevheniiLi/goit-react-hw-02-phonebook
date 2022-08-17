import { ContactName, ContactNumber, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onRemoveClick }) => {
  return (
    <>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button type="button" onClick={() => onRemoveClick(id)}>
        Remove
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
//   onRemoveClick: PropTypes.func.isRequired,
};

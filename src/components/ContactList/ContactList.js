import { Box } from 'components/Box';
import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onRemoveClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Box as="li" mb={3} key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onClick={() => onRemoveClick(id)}
          />
        </Box>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  // onRemoveClick: PropTypes.func.isRequired,
};

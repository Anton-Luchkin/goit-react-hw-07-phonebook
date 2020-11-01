import React from 'react';
import { connect } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.filter}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(phonebookActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

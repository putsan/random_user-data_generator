import React from 'react';
import PropTypes from 'prop-types';
import { WiredButton } from 'wired-elements-react/lib/WiredButton';
import './DataSettings.scss';

export const DataSettings = ({ changeUserData }) => {
  return (
  <div className='data-settings'>
    <WiredButton>Generate</WiredButton>
  </div>
  )
};

DataSettings.propTypes = {
  fullName: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { WiredButton } from 'wired-elements-react/lib/WiredButton';
import { getUser } from '../../data-requests/randomuser';
import './DataSettings.scss';

export const DataSettings = ({ changeUserData }) => {
  return (
  <div className='data-settings'>
    <WiredButton onClick={() => getUser(changeUserData)}>Generate</WiredButton>
  </div>
  )
};

DataSettings.propTypes = {
  changeUserData: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { WiredButton } from 'wired-elements-react/lib/WiredButton';
import { getFullData } from '../../data-requests/randomUser';
import './DataSettings.scss';

export const DataSettings = ({ changeUserData }) => {
  const getNewData = () => {
    getFullData(changeUserData)
  }

  return (
  <div className='data-settings'>
    <WiredButton onClick={getNewData}>Generate</WiredButton>
  </div>
  )
};

DataSettings.propTypes = {
  changeUserData: PropTypes.func,
};

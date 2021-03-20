import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';

import './SocialButton.scss';

const SocialButton = (props) => {
  return (
    <button className={`social-button ${props.name}`} {...props}>
      {props.name == 'facebook' ? <FaFacebookF /> : undefined}
      {props.name == 'twitter' ? <FaTwitter /> : undefined}
      {props.name == 'google' ? <FaGoogle /> : undefined}
    </button>
  );
};

SocialButton.propTypes = {
  name: PropTypes.oneOf(['facebook', 'twitter', 'google']),
};

export default SocialButton;

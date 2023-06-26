import React from 'react';
import PropTypes from 'prop-types';

const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <i className={`feature-card__icon ${feature.icon}`} />
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__description">{feature.description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeatureCard;

import React from 'react';
import PropTypes from 'prop-types';

const CustomSection = ({children, title, className, isFlex = true}) => {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className={`row ${isFlex ? 'flex' : ''}`}>
          {title && <h2 className='title'>{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
}

CustomSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  isFlex: PropTypes.bool,
};

export default CustomSection;

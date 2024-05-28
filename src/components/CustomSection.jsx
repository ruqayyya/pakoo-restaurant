import React from "react";
import PropTypes from "prop-types";

const CustomSection = ({ children, title, className, isFlex }) => {
  return (
    <section className="section">
      <div className="container">
        <div className={("row", { flex: isFlex })}>
          <h2 className="title">{title}</h2>
          <div className={className}>{children}</div>
        </div>
      </div>
    </section>
  );
};



CustomSection.defaultProps = {
  isFlex: true,
};

export default CustomSection;

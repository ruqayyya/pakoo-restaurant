import React from 'react'

const CustomSection = ({children, title,className}) => {
  return (
    <section className="section" >
    <div className="container">
      <div className="row">
        <h2 className='title'> {title}</h2>
        <div className={className}>{children}</div>
      </div>
    </div>
  </section>
  )
}

export default CustomSection
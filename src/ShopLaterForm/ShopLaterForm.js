import React from 'react'
import './ShopLaterForm.css'

export default function ShopLaterForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['ShopLater-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}

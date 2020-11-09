import Button from '@material-ui/core/Button'
import classNames from 'classnames/bind'
import React from 'react'
import './KarmakurierButton.atom.scss'

const KarmakurierButton = ({ label, variant, size, link, onClick }) => {
  let btnSize = 'btnNormal'
  let fullWidth = false

  switch (size) {
    case 'full': {
      btnSize = 'btnFull'
      fullWidth = true
      break
    }

    default: {
      break
    }
  }

  const classes = classNames('buttonclass', variant, btnSize)
  const btnType = variant === 'outlined' || variant === 'menuitem' ? 'outlined' : 'contained'

  return (
    <div className={classes}>
      <Button fullWidth={fullWidth} variant={btnType} href={link} onClick={onClick}>
        {label}
      </Button>
    </div>
  )
}

export default KarmakurierButton

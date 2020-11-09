import React from 'react'
import './title.atom.scss'
// import { ReactComponent as NeedImage } from '../../../assets/images/atom_graphic_brauchen.svg'

const Title = (props) => {
  const { title } = props
  return <div className="title">{title}</div>
}

export default Title

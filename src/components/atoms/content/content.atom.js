import React from 'react'
import './content.atom.scss'
// import { ReactComponent as NeedImage } from '../../../assets/images/atom_graphic_brauchen.svg'

const Content = (props) => {
  const { content } = props
  return <div className="content-main">{content}</div>
}

export default Content

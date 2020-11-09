import React from 'react'
import './CardA.organism.scss'
// import { ReactComponent as NeedImage } from '../../../assets/images/atom_graphic_brauchen.svg'

const CardA = (props) => {
  const { headline, subheadline } = props
  return (
    <div className="card">
      <div className="card-image">
        <props.image />
      </div>
      <div className="card-content">
        <div className="card-content-headline">{headline}</div>
        <div className="card-content-subheadline">{subheadline}</div>
      </div>
    </div>
  )
}

export default CardA

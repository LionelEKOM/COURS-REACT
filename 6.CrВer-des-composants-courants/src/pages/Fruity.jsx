import React from 'react'
import FruityCard from './FruityCard'

export default function Fruity() {
  return (
    <div>
      <h1 className="text-4xl text-slate-100 font-bold">
        Fruity
      </h1>
      <p className="text-xl text-slate-200 mb-10">
        Fruity is a simple and intuitive way to track your daily fruit intake.
        Pick your fruits and get delivered the next day.
      </p>
      <ul className="flex gap-4 mb-4">

      </ul>
      <FruityCard />
    </div>
  )
}

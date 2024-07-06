import React from 'react'
import FruityCard from './FruityCard'
import { useSelector } from 'react-redux'

export default function Fruity() {

    const fruitsList = useSelector(state => state.fruits)

  return (
    <div>
      <h1 className="text-4xl text-slate-100 font-bold">Fruity</h1>
      <p className="text-xl text-slate-200 mb-10">
        Pick your fruits and get delivered the next day.
      </p>
      <ul className="flex gap-4 mb-4">
        {fruitsList.list.map(fruit => (
            <li 
                key={fruit.id}
                className='bg-slate-100 p-4 w-full rounded'
            >
                <img 
                className='w-full h-[250px] object-cover mb-3'
                src={fruit.url} 
                alt="fruits de saison" 
                title={fruit.name}
                />

                <div className="flex justify-between items-baseline mb-4">
                    <h2 className='text-2xl mb-2 font-semibold'>{ fruit.name }</h2>
                    <p className='text-lg font-semibold'>Prix per: { fruit.price }$</p>
                </div>

                <div className="flex gap-2">
                    <button 
                    className="w-full bg-green-600 
                    hover:bg-green-500 text-slate-100 p-2 
                    rounded text-lg"
                    title=' Add one'
                    >
                        Add one
                    </button>
                    <button 
                    className="w-full bg-red-600 hover:bg-red-500 
                    text-slate-100 p-2 
                    rounded text-lg"
                    title='Remove one'
                    >
                        Remove one
                    </button>
                </div>
            </li>
        ))}
      </ul>
      <FruityCard />
    </div>
  )
}

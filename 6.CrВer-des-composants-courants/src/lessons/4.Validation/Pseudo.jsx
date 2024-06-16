import React from 'react'

export default function Pseudo({inputState, setInputState, showValidation}) {
  return (
    <div>
      <label htmlFor="username" className="text-slate-50 inline-block mt-2">
        Votre pseudo (3 a 64 caracteres).
      </label>
      <input
        type="text"
        className="rounded w-full p-1 m-2"
        id="username"
        placeholder="Ashuka"
        value={inputState.pseudo}
        onChange={(e) => setInputState({ ...inputState, pseudo: e.target.value })}
      />
      {showValidation.pseudo && (
        <p className='text-red-400 font-semibold'>Votre pseudo doit contenir entre 03 et 64 caracteres</p>
      )}
    </div>
  );
}

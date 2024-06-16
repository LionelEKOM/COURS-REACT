import React from 'react'

export default function Password({inputState, setInputState, showValidation}) {
  return (
     <div>
      <label htmlFor="password" className="text-slate-50 inline-block mt-2">
        Votre mot de passe : Au moins 1 chiffre et 06 characteres.
      </label>
      <input
        type="password"
        className="rounded w-full p-1 m-2"
        id="password"
        placeholder="password"
        value={inputState.password}
        onChange={(e) => setInputState({ ...inputState, password: e.target.value })}
      />
      {showValidation.password && (
        <p className='text-red-400 font-semibold'>Votre mots de passe doit contenir au moins 1 chiffre et 6 characteres</p>
      )}
    </div>
  )
}

import React from 'react'

export default function Confirmation({inputState, setInputState, showValidation}) {
  return (
    <div>
    <label htmlFor="confirmation" className="text-slate-50 inline-block mt-2">
      Confirmer votre mot de passe
    </label>
    <input
      type="password"
      className="rounded w-full p-1 m-2"
      id="confirmation"
      placeholder="password confirmation"
      value={inputState.passwordConf}
        onChange={(e) => setInputState({ ...inputState, passwordConf: e.target.value })}
    />
    {showValidation.passwordConf && (
        <p className='text-red-400 font-semibold'>Vos mots de passe ne correspondent pas !!</p>
      )}
  </div>
  )
}

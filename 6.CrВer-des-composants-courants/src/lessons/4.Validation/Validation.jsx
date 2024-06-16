import React, { useState } from 'react'
import Pseudo from './Pseudo';
import Password from './Password';
import Confirmation from './Confirmation';

export default function Validation() {

    const[inputState, setInputState] = useState({
        pseudo : "",
        password : "",
        passwordConf : ""
    })

    // console.log(inputState)

    const[showValidation, setshowValidation] = useState({
        pseudo : false,
        password : false,
        passwordConf : false
    })

    function handleSubmit(e){
        e.preventDefault();
        if(ValidationCheck()) {
            console.log("Formulaire envoyé");
        }
    }

    function ValidationCheck(){
        const areValid = {
            pseudo : false,
            password : false,
            passwordConf : false
        }
        if(inputState.pseudo.length < 3 || inputState.pseudo.length > 64 ) {
            setshowValidation(state => ({...state, pseudo:true}))
        } else {
            areValid.pseudo = true
            setshowValidation(state => ({...state, pseudo:false}))
        }
        if(inputState.password.length < 6 || !/\d/.test(inputState.password)) {
            setshowValidation(state => ({...state, password:true}))
        } else {
            areValid.password = true
            setshowValidation(state => ({...state, password:false}))
        }
        if(inputState.passwordConf !== inputState.password) {
            setshowValidation(state => ({...state, passwordConf:true}))
        } else {
            areValid.passwordConf = true
            setshowValidation(state => ({...state, passwordConf:false}))
        }
        if(Object.values(areValid).every(values => values)){
            return true
        } else {
            return false
        }
    }

  return (
    <div>
      <form onSubmit = {handleSubmit} action="" className="max-w-xl mx-auto border p-10 rounded">
        <p className='text-slate-100 text-xl mb-6'>Creer votre nom d'utilisateur et mot de passe</p>
            <Pseudo 
            inputState = {inputState}
            setInputState = {setInputState}
            showValidation = {showValidation}
            />
            <Password 
            inputState = {inputState}
            setInputState = {setInputState}
            showValidation = {showValidation}
            />
            <Confirmation 
            inputState = {inputState}
            setInputState = {setInputState}
            showValidation = {showValidation}
            />
        <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded">
            valider
        </button>
      </form>
    </div>
  )
}

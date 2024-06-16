import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfil() {

    const params = useParams()
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center pt-10">
        User Profil : {params.id}
      </h1>
    </div>
  )
}

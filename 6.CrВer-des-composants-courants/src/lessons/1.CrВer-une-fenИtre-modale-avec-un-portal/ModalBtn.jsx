import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './ModalContent';

export default function ModalBtn() {
    const [showModal, setshowModal] = useState(true)
  return (
    <>
      <button 
      onClick={() => setshowModal(true)}
      className="block mx-auto bg-slate-200 text-slate-900 p-2 rounded">
        Ouvrer la modal
      </button>
      {showModal && createPortal(<ModalContent closeModal = {
        () => setshowModal(false)
      } />, document.body)}
    </>
  );
}

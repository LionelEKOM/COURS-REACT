import React from 'react'

export default function ModalContent({closeModal}) {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-slate-800/75 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-slate-900 rounded p-10 relative mb-[10vh]"
      >
        <button
            onClick={closeModal}
            className="absolute top-1 right-1 text-slate-100 w-10 h-8 rounded bg-red-500 items-center justify-center"
        >
            x
        </button>
        <p>Hello world !!</p>
      </div>
    </div>
  );
}

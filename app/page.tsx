import React from 'react'

export default function InicialPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6 ">
        <div className="p-10 shadow-sm  max-w-2xl">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-6">
            Bem-Vindo ao <span className="text-[#0B00A9]">CondoConnect</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            O CondoConnect simplifica a administração do seu condomínio, oferecendo 
            comunicação ágil e gerenciamento de reservas das áreas comuns.
          </p>
        </div>
      </main>
    </div>
  )
}
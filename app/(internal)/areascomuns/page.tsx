'use client'

import { Card } from "@/components/ui/card" 

const espacos = [
    { 
        id: 1, 
        nome: "Salão de Festas (Bloco A)", 
        desc: "Espaço climatizado com cozinha completa, churrasqueira e sistema de som integrado.", 
        cap: 50 
    },
    { 
        id: 2, 
        nome: "Academia Fitness", 
        desc: "Equipamentos modernos de musculação e área para cardio. Acesso via biometria.", 
        cap: 12 
    },
    { 
        id: 3, 
        nome: "Piscina Adulto/Infantil", 
        desc: "Área de lazer do Bloco B. Necessário exame médico atualizado para acesso.", 
        cap: 30 
    },
    { 
        id: 4, 
        nome: "Espaço Gourmet", 
        desc: "Ambiente reservado para jantares pequenos, equipado com adega e forno de pizza.", 
        cap: 15 
    },
    { 
        id: 5, 
        nome: "Coworking", 
        desc: "Sala de estudos e trabalho silenciosa com Wi-Fi de alta velocidade e mesas individuais.", 
        cap: 10 
    },
    { 
        id: 6, 
        nome: "Quadra Poliesportiva", 
        desc: "Quadra para futebol de salão, basquete e vôlei. Iluminação disponível até as 22h.", 
        cap: 20 
    }
];

export default function areascomuns (){
return (
    <div className="p-8 max-w-6xl mx-auto">
    <header className="mb-10">
        <h1 className="text-3xl font-bold">Áreas Comuns</h1>
        <p className="text-gray-500">Selecione um espaço para reserva ou mais detalhes.</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {espacos.map((item) => (
        <Card key={item.id} className="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow border-gray-100">
            <div className="flex justify-between items-start">
            <div>
                <h2 className="text-xl font-bold text-gray-800">{item.nome}</h2>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                Capacidade: {item.cap} pessoas
                </span>
            </div>
            <div className="p-2 bg-gray-100 rounded-full">💻</div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
            </p>

            <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-[#455a64] text-white py-2 rounded-lg font-medium hover:brightness-90 transition-all">
                Reservar
            </button>
            <button className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all">
                Detalhes
            </button>
            </div>
        </Card>
        ))}
    </div>
    </div>
)
}

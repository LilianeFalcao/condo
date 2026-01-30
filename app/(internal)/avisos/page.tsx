'use client'
import { Card } from "@/components/ui/card"
import { Bell, Info, AlertTriangle } from "lucide-react" // Ícones ajudam muito

const listaAvisos = [
    { 
        id: 1, 
        tipo: "urgente",
        titulo: "Manutenção no Elevador (Bloco B)", 
        desc: "Prezados, entre os dias 26 e 28 de Janeiro 2026, o nosso elevador estará indisponível por conta de uma manutenção preventiva.", 
        data: "25/01/2026" 
    },
    { 
        id: 2, 
        tipo: "informativo",
        titulo: "Assembleia Geral Extraordinária", 
        desc: "Reunião para votação da nova pintura da fachada. Sua presença é fundamental para o quórum.", 
        data: "20/01/2026" 
    },
]

export default function avisos() {
    return (
        <section className="py-12 px-6 max-w-4xl mx-auto">
            <header className="flex items-center gap-3 mb-10 border-b pb-4">
                <Bell className="text-[#455a64]" />
                <h2 className="text-3xl font-bold text-gray-800">Mural de Avisos</h2>
            </header>

            <div className="space-y-6">
                {listaAvisos.map((aviso) => (
                    <Card key={aviso.id} className="p-0 overflow-hidden border-l-4 shadow-sm hover:shadow-md transition-shadow" 
                        style={{ borderLeftColor: aviso.tipo === 'urgente' ? '#ef4444' : '#455a64' }}>
                        
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-2">
                                    {aviso.tipo === 'urgente' ? 
                                        <AlertTriangle className="w-5 h-5 text-red-500" /> : 
                                        <Info className="w-5 h-5 text-[#455a64]" />
                                    }
                                    <h3 className="text-xl font-bold text-gray-800">{aviso.titulo}</h3>
                                </div>
                                <span className="text-sm text-gray-400 font-mono">{aviso.data}</span>
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                {aviso.desc}
                            </p>

                            <div className="mt-4 flex justify-end">
                                <button className="text-sm font-semibold text-[#455a64] hover:underline">
                                    Marcar como lido
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Send, Building2, User } from "lucide-react"

export default function manutencoes (){
return (
    <section className="py-9 px-4 bg-gray-50 min-h-screen flex justify-center items-start">
    <Card className="w-full max-w-xl shadow-lg border-none">
        <CardHeader className="p-4 bg-[#455a64] text-white rounded-t-xl">
        <CardTitle className="text-2xl flex items-center gap-2">
            Solicitar Manutenção
        </CardTitle>
        <p className="text-gray-200 text-sm">
            Relate problemas técnicos em áreas comuns ou no seu bloco.
        </p>
        </CardHeader>

        <CardContent className="p-8 space-y-6">
        <form className="space-y-6">
            
            {/* Seção de Identificação */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="nome" className="text-gray-700 font-semibold">Seu Nome</Label>
                <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input id="nome" placeholder="Ex: Linn Yohan" className="pl-10" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="bloco" className="text-gray-700 font-semibold">Bloco / Apto</Label>
                <div className="relative">
                <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input id="bloco" placeholder="Ex: Bloco B - 402" className="pl-10" />
                </div>
            </div>
            </div>

            {/* Descrição do Problema */}
            <div className="space-y-2">
            <Label htmlFor="descricao" className="text-gray-700 font-semibold">Descrição do Problema</Label>
            <Textarea 
                id="descricao" 
                placeholder="Descreva o que aconteceu em detalhes..." 
                className="min-h-[120px] resize-none focus:border-[#455a64]"
            />
            </div>

            {/* Upload de Foto (Simulado) */}
            <div className="space-y-2">
            <Label className="text-gray-700 font-semibold">Anexar Foto (Opcional)</Label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                <Camera className="w-8 h-8 text-gray-400 group-hover:text-[#455a64] mb-2" />
                <span className="text-sm text-gray-500">Clique para enviar ou arraste a imagem</span>
            </div>
            </div>

            {/* Botão de Envio */}
            <Button className="w-full bg-[#455a64] hover:bg-[#37474f] text-white h-12 text-lg font-bold transition-all shadow-md group">
            Enviar Solicitação
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
        </form>
        </CardContent>
    </Card>
    </section>
)
}
"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label" 

export default function RegisterPage() {
    const router = useRouter()
    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
            <Card className="w-full max-w-md border-none shadow-2xl">
                <CardHeader className="space-y-1 pt-8 text-center">
                    <CardTitle className="text-2xl font-bold tracking-tight text-gray-800">
                        CondoConnect
                    </CardTitle>
                    <CardDescription className="text-balance text-gray-500">
                        Seja bem-vindo ao seu portal de informações do condomínio!
                    </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4 px-8">
                    <form className="space-y-4">
                        <div className="grid gap-2 text-left">
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                id="name"
                                type="name"
                                placeholder="Insira seu nome completo"
                                className="bg-gray-50 focus-visible:ring-[#455a64]"
                                required
                            />
                        </div>
                        <div className="grid gap-2 text-left">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                className="text-black border-none"
                                required
                            />
                        </div>
                        <div className="grid gap-2 text-left">
                            <Input
                                id="password"
                                type="password"
                                placeholder="Digite sua senha"
                                className="text-black border-none"
                                required
                            />
                        </div>
                        <Button className="w-full bg-[#455a64] hover:bg-[#37474f] text-white transition-all shadow-md">
                            Entrar na conta
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col border-t bg-gray-50/50 py-6 text-center">
                    <p className="text-sm text-gray-600">
                        Já tem conta?{' '}
                        <button 
                            className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                            onClick={() => router.push("/login")}
                            >
                            Acesse aqui
                        </button>
                    </p>
                </CardFooter>
            </Card>
        </main>
    )
}
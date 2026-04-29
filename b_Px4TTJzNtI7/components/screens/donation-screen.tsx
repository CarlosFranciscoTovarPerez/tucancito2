"use client"

import { ArrowLeft, Heart, Building, MapPin, Recycle, Info, CheckCircle, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface DonationScreenProps {
  onBack: () => void
  onComplete: () => void
}

const donationOptions = [
  {
    id: "caritas",
    icon: Heart,
    title: "Donar a Caritas / Banco de Alimentos",
    description: "Tu donacion llegara a familias que mas lo necesitan en Cancun y zonas aledanas",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "community",
    icon: MapPin,
    title: "Enviar a punto comunitario",
    description: "Centros de ayuda cercanos a tu ubicacion que distribuyen a personas en situacion vulnerable",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "compost",
    icon: Recycle,
    title: "Canalizar a compostaje",
    description: "Si no es apto para consumo humano, evita el desperdicio convirtiendolo en composta",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
]

export function DonationScreen({ onBack, onComplete }: DonationScreenProps) {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [isConfirmed, setIsConfirmed] = useState(false)

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 border-0 shadow-xl text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto animate-in zoom-in duration-300">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-2">
            Gracias por tu donacion!
          </h1>
          <p className="text-muted-foreground mb-8">
            Tu aporte ayuda a reducir el desperdicio y apoya a quienes mas lo necesitan en la comunidad
          </p>

          <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-foreground">Impacto de tu donacion</p>
                <p className="text-muted-foreground">
                  ~5 kg de alimentos rescatados
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-3 bg-muted/50 rounded-xl">
              <p className="text-xl font-bold text-primary">5 kg</p>
              <p className="text-xs text-muted-foreground">rescatados</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-xl">
              <p className="text-xl font-bold text-green-600">10</p>
              <p className="text-xs text-muted-foreground">comidas</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-xl">
              <p className="text-xl font-bold text-secondary-foreground">5 kg</p>
              <p className="text-xs text-muted-foreground">CO2 evitado</p>
            </div>
          </div>

          <Button 
            onClick={onComplete}
            size="lg"
            className="w-full h-14 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90"
          >
            Volver al panel
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 sm:p-6 border-b border-border bg-card sticky top-0 z-10">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-foreground">Donar excedente</h1>
            <p className="text-sm text-muted-foreground">Evita el desperdicio, ayuda a tu comunidad</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Alert card */}
          <Card className="p-6 bg-amber-50 border-amber-200">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-amber-800">
                  Este paquete no se vendio a tiempo
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  Deseas donarlo a un aliado comunitario? Tu donacion puede hacer la diferencia.
                </p>
              </div>
            </div>
          </Card>

          {/* Package info */}
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Paquete a donar</h3>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center">
                <span className="text-4xl">🥐</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Paquete panaderia</p>
                <p className="text-sm text-muted-foreground">Cantidad: ~5 kg</p>
                <p className="text-sm text-muted-foreground">Valor original: $45</p>
              </div>
            </div>
          </Card>

          {/* Donation options */}
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">
              Elige una opcion de donacion
            </h3>
            <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
              <div className="space-y-4">
                {donationOptions.map((option) => (
                  <div 
                    key={option.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all border-2 ${
                      selectedOption === option.id 
                        ? "border-primary bg-primary/5" 
                        : "border-transparent bg-muted/50 hover:bg-muted"
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <div className="flex items-start gap-4">
                      <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                      <div className={`w-12 h-12 ${option.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <option.icon className={`w-6 h-6 ${option.color}`} />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor={option.id} className="text-base font-semibold text-foreground cursor-pointer">
                          {option.title}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </Card>

          {/* Info note */}
          <Card className="p-6 bg-primary/5 border-0">
            <div className="flex gap-4">
              <Building className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Nota importante</p>
                <p className="text-sm text-muted-foreground">
                  Rescate Local complementa a los bancos de alimentos, no los reemplaza. 
                  Trabajamos en conjunto para maximizar el impacto social y reducir el desperdicio alimentario en Cancun.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Action button */}
        <div className="sticky bottom-0 p-4 sm:p-6 bg-card border-t border-border">
          <Button 
            onClick={() => setIsConfirmed(true)}
            disabled={!selectedOption}
            size="lg"
            className="w-full h-14 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90 disabled:opacity-50"
          >
            <Heart className="w-5 h-5 mr-2" />
            Confirmar donacion
          </Button>
        </div>
      </div>
    </div>
  )
}

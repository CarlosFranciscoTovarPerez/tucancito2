"use client"

import { ArrowLeft, Shield, CheckCircle, QrCode, AlertTriangle, Clock, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface FoodSafetyScreenProps {
  onBack: () => void
}

const trafficLightLevels = [
  {
    color: "green",
    bgColor: "bg-green-500",
    borderColor: "border-green-500",
    textColor: "text-green-700",
    bgLight: "bg-green-50",
    title: "Verde - Apto para consumo",
    description: "El alimento esta en optimas condiciones. Cumple con todos los estandares de calidad y puede consumirse con total confianza.",
  },
  {
    color: "yellow",
    bgColor: "bg-yellow-500",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-700",
    bgLight: "bg-yellow-50",
    title: "Amarillo - Consumir hoy",
    description: "El alimento esta en buenas condiciones pero debe consumirse el mismo dia de compra para garantizar su frescura.",
  },
  {
    color: "red",
    bgColor: "bg-red-500",
    borderColor: "border-red-500",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    title: "Rojo - No publicable",
    description: "El alimento no cumple con los estandares minimos de seguridad y no puede ser publicado en la plataforma.",
  },
]

const trustElements = [
  {
    icon: CheckCircle,
    title: "Comercios verificados",
    description: "Todos los comercios pasan por un proceso de verificacion de higiene y buenas practicas antes de poder publicar.",
  },
  {
    icon: Shield,
    title: "Checklist sanitario",
    description: "Cada paquete publicado cumple con un checklist obligatorio de seguridad alimentaria que el comercio debe confirmar.",
  },
  {
    icon: QrCode,
    title: "Trazabilidad por QR",
    description: "Cada paquete tiene un codigo unico que permite rastrear su origen, condiciones de almacenamiento y fecha de preparacion.",
  },
  {
    icon: AlertTriangle,
    title: "Informacion de alergenos",
    description: "Todos los paquetes incluyen informacion clara y visible sobre alergenos presentes para tu seguridad.",
  },
  {
    icon: Clock,
    title: "Horarios limite de consumo",
    description: "Cada paquete indica claramente hasta cuando es seguro consumir el alimento para garantizar tu bienestar.",
  },
]

const communityStats = [
  { value: "2,450", label: "kg rescatados", color: "text-primary" },
  { value: "156", label: "comercios activos", color: "text-secondary-foreground" },
  { value: "4,820", label: "rescatadores", color: "text-green-600" },
  { value: "98%", label: "satisfaccion", color: "text-primary" },
]

export function FoodSafetyScreen({ onBack }: FoodSafetyScreenProps) {
  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-6 hover:bg-primary-foreground/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-9 h-9 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Seguridad alimentaria
              </h1>
              <p className="text-primary-foreground/80">
                Comida segura, comunidad segura
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Traffic light explanation */}
        <Card className="p-6 md:p-8 border-0 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Leaf className="w-6 h-6 text-primary" />
            Semaforo sanitario
          </h2>
          <p className="text-muted-foreground mb-6">
            Cada paquete en Rescate Local tiene un indicador de semaforo que te permite conocer el estado del alimento de un vistazo.
          </p>
          <div className="space-y-4">
            {trafficLightLevels.map((level) => (
              <div 
                key={level.color}
                className={`p-4 md:p-6 rounded-xl ${level.bgLight} border ${level.borderColor}/30`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full ${level.bgColor} flex-shrink-0 mt-0.5`} />
                  <div>
                    <p className={`text-lg font-semibold ${level.textColor}`}>
                      {level.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Trust elements */}
        <Card className="p-6 md:p-8 border-0 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-primary" />
            Elementos de confianza
          </h2>
          <p className="text-muted-foreground mb-6">
            En Rescate Local implementamos multiples medidas para garantizar que cada alimento rescatado sea seguro para ti.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {trustElements.map((element) => (
              <div key={element.title} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <element.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {element.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {element.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Brand message */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-0 text-center">
          <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
            {'"No vendemos comida caducada"'}
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Rescatamos alimentos aptos antes de que se desperdicien. 
            Ahorra dinero, apoya comercios locales y contribuye a un Cancun mas sustentable.
          </p>
        </Card>

        {/* Community impact */}
        <Card className="p-6 md:p-8 border-0 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Impacto en la comunidad de Cancun
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {communityStats.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-muted/50 rounded-xl">
                <p className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Back button */}
        <Button 
          onClick={onBack}
          size="lg"
          className="w-full h-14 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90"
        >
          Entendido
        </Button>
      </div>
    </div>
  )
}

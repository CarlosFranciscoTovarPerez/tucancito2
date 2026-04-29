"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, Store, MapPin, Heart, ShoppingBag, TrendingDown, Users, CheckCircle, ArrowRight } from "lucide-react"
import type { UserType } from "@/app/page"

interface OnboardingScreenProps {
  onSelectUserType: (type: UserType) => void
}

const stats = [
  { value: "72%", label: "de ahorro promedio", icon: TrendingDown },
  { value: "1,200+", label: "kg rescatados este mes", icon: Leaf },
  { value: "85", label: "comercios participantes", icon: Store },
  { value: "3,500+", label: "usuarios activos", icon: Users },
]

const features = [
  {
    icon: ShoppingBag,
    title: "Paquetes sorpresa",
    description: "Recoge paquetes variados de comida a precios increibles"
  },
  {
    icon: MapPin,
    title: "Cerca de ti",
    description: "Encuentra ofertas de comercios en tu colonia"
  },
  {
    icon: CheckCircle,
    title: "Comercios verificados",
    description: "Solo trabajamos con negocios que cumplen normas sanitarias"
  },
  {
    icon: Heart,
    title: "Impacto real",
    description: "Cada compra reduce desperdicio y apoya a tu comunidad"
  },
]

export function OnboardingScreen({ onSelectUserType }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              {/* Logo */}
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                  <Leaf className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                    Rescate Local
                  </h1>
                  <p className="text-sm text-primary font-semibold">Cancun, Quintana Roo</p>
                </div>
              </div>

              {/* Main tagline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
                Comida que aun sirve, cerca de quien la necesita
              </h2>
              
              {/* Secondary text */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
                Ahorra dinero, apoya comercios locales y reduce el desperdicio alimentario en tu comunidad. 
                Conectamos negocios con excedente de comida con personas que buscan opciones economicas.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                {["Ahorra hasta 70%", "Comercios verificados", "Impacto real"].map((feature) => (
                  <span 
                    key={feature}
                    className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => onSelectUserType("user")}
                  size="lg"
                  className="h-14 px-8 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Buscar comida
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button 
                  onClick={() => onSelectUserType("business")}
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-base font-bold rounded-2xl border-2 border-secondary bg-secondary/10 text-secondary-foreground hover:bg-secondary/20"
                >
                  <Store className="w-5 h-5 mr-2" />
                  Soy comercio
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-6 max-w-md mx-auto lg:mx-0">
                No vendemos comida caducada: rescatamos alimentos aptos antes de que se desperdicien
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="hidden lg:block">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl transform -rotate-3" />
                
                {/* Main card */}
                <Card className="relative p-8 border-0 shadow-2xl">
                  <div className="flex flex-col items-center">
                    {/* Floating elements */}
                    <div className="relative w-full h-64 mb-6">
                      <div className="absolute top-0 left-4 w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                        <span className="text-4xl">🥐</span>
                      </div>
                      <div className="absolute top-8 right-8 w-16 h-16 bg-secondary/30 rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                        <span className="text-3xl">🥬</span>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                        <ShoppingBag className="w-12 h-12 text-primary-foreground" />
                      </div>
                      <div className="absolute bottom-8 left-8 w-14 h-14 bg-card border-2 border-primary/20 rounded-xl flex items-center justify-center shadow-md">
                        <Heart className="w-7 h-7 text-primary" />
                      </div>
                      <div className="absolute bottom-12 right-4 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-md">
                        <MapPin className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground mb-2">$35</p>
                      <p className="text-sm text-muted-foreground line-through mb-1">$90 valor original</p>
                      <p className="text-xs text-primary font-semibold">Paquete sorpresa de panaderia</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Como funciona Rescate Local
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-xs font-bold text-secondary-foreground">
                    {index + 1}
                  </span>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 text-center">
          <Card className="max-w-2xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
            <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Unete al movimiento de rescate alimentario
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Juntos podemos reducir el desperdicio de alimentos y hacer que la comida buena llegue a quienes la necesitan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onSelectUserType("user")}
                size="lg"
                className="h-12 px-6 font-bold rounded-xl"
              >
                Comenzar ahora
              </Button>
              <Button 
                onClick={() => onSelectUserType("business")}
                variant="outline"
                size="lg"
                className="h-12 px-6 font-bold rounded-xl"
              >
                Registrar mi negocio
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="py-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            2024 Rescate Local - Hackathon Mi Comunidad
          </p>
        </footer>
      </div>
    </div>
  )
}

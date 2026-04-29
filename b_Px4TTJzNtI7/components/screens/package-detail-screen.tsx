"use client"

import { ArrowLeft, MapPin, Clock, AlertTriangle, CheckCircle, Snowflake, Info, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import type { Screen } from "@/app/page"

interface PackageDetailScreenProps {
  packageId: number | null
  onReserve: () => void
  onBack: () => void
  onNavigate: (screen: Screen) => void
}

const packageData = {
  id: 1,
  name: "Paquete sorpresa de panaderia",
  business: "Panaderia La Ceiba",
  address: "Av. Tulum 123, SM 4, Cancun",
  originalPrice: 90,
  rescuePrice: 35,
  pickupTime: "7:00 PM - 8:30 PM",
  consumeBefore: "Hoy 10:00 PM",
  contains: ["gluten", "lacteos"],
  refrigeration: false,
  safetyLevel: "green" as const,
  image: "🥐",
  verified: true,
  description: "Este paquete sorpresa contiene una variedad de panes y dulces frescos del dia. Puede incluir conchas, cuernos, orejas, donas y mas delicias de nuestra panaderia artesanal.",
  available: 3,
}

export function PackageDetailScreen({ onReserve, onBack, onNavigate }: PackageDetailScreenProps) {
  const pkg = packageData

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with image */}
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[120px] md:text-[160px]">{pkg.image}</span>
          </div>
          
          {/* Back button */}
          <button 
            onClick={onBack}
            className="absolute top-4 left-4 w-10 h-10 bg-card/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          
          {/* Share button */}
          <button className="absolute top-4 right-16 w-10 h-10 bg-card/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-card transition-colors">
            <Share2 className="w-5 h-5 text-foreground" />
          </button>
          
          {/* Safety badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500 text-white border-0 px-3 py-1.5">
              <div className="w-2 h-2 bg-white rounded-full mr-2" />
              Apto para consumo
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <Card className="p-6 md:p-8 border-0 shadow-xl mb-6">
            {/* Title and price */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{pkg.name}</h1>
                <p className="text-base text-muted-foreground flex items-center gap-2">
                  {pkg.business}
                  {pkg.verified && (
                    <CheckCircle className="w-5 h-5 text-primary fill-primary/20" />
                  )}
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4" />
                  {pkg.address}
                </p>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl">
                <div>
                  <span className="text-sm text-muted-foreground line-through block">
                    ${pkg.originalPrice}
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    ${pkg.rescuePrice}
                  </span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-sm px-3 py-1">
                  Ahorras {Math.round((1 - pkg.rescuePrice / pkg.originalPrice) * 100)}%
                </Badge>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {pkg.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Pickup info */}
              <Card className="p-4 bg-muted/50 border-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Horario de recoleccion</p>
                    <p className="text-base font-semibold text-foreground">{pkg.pickupTime}</p>
                  </div>
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-4 bg-muted/50 border-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-secondary-foreground">{pkg.available}</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Paquetes disponibles</p>
                    <p className="text-base font-semibold text-foreground">Reserva ahora</p>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Safety traffic light */}
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                Semaforo sanitario
                <button onClick={() => onNavigate("food-safety")}>
                  <Info className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </button>
              </h3>
              <div className="flex items-center gap-6">
                <div className="flex gap-3">
                  <div className={`w-8 h-8 rounded-full ${pkg.safetyLevel === "green" ? "bg-green-500 ring-4 ring-green-500/30" : "bg-muted"}`} />
                  <div className={`w-8 h-8 rounded-full ${pkg.safetyLevel === "yellow" ? "bg-yellow-500 ring-4 ring-yellow-500/30" : "bg-muted"}`} />
                  <div className={`w-8 h-8 rounded-full ${pkg.safetyLevel === "red" ? "bg-red-500 ring-4 ring-red-500/30" : "bg-muted"}`} />
                </div>
                <span className="text-sm text-green-600 font-medium">Verde: apto para consumo</span>
              </div>
            </Card>

            {/* Product info */}
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-base font-semibold text-foreground mb-4">Informacion del producto</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Consumir antes de
                  </div>
                  <span className="text-sm font-medium text-foreground">{pkg.consumeBefore}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <AlertTriangle className="w-4 h-4" />
                    Contiene
                  </div>
                  <div className="flex gap-2">
                    {pkg.contains.map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Snowflake className="w-4 h-4" />
                    Requiere refrigeracion
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {pkg.refrigeration ? "Si" : "No"}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Trust message */}
          <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl mt-6">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="text-sm text-muted-foreground">
              Comercio verificado por Rescate Local. Cumple con normas sanitarias y de seguridad alimentaria.
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              onClick={onReserve}
              size="lg"
              className="flex-1 h-14 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90"
            >
              Reservar paquete - ${pkg.rescuePrice}
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="h-14 px-8 text-base font-medium rounded-2xl"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Ver ubicacion
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

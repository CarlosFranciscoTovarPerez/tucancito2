"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, MapPin, List } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Screen } from "@/app/page"

interface MapScreenProps {
  onSelectPackage: (packageId: number) => void
  onNavigate: (screen: Screen) => void
}

const filters = [
  { id: "cheap", label: "Menos de $50", active: false },
  { id: "today", label: "Recoger hoy", active: true },
  { id: "solidary", label: "Precio solidario", active: false },
  { id: "verified", label: "Verificados", active: true },
]

const mapPins = [
  { id: 1, x: 30, y: 25, name: "Panaderia La Ceiba", price: 35, image: "🥐" },
  { id: 2, x: 55, y: 40, name: "Mercado San Juan", price: 45, image: "🥬" },
  { id: 3, x: 70, y: 60, name: "Cocina Dona Maria", price: 30, image: "🍛" },
  { id: 4, x: 25, y: 65, name: "Tienda Don Pepe", price: 55, image: "📦" },
  { id: 5, x: 50, y: 75, name: "Fruteria El Sol", price: 40, image: "🍎" },
]

const nearbyOffers = [
  {
    id: 1,
    name: "Paquete sorpresa de panaderia",
    business: "Panaderia La Ceiba",
    distance: "1.2 km",
    price: 35,
    originalPrice: 90,
    image: "🥐",
  },
  {
    id: 2,
    name: "Frutas y verduras frescas",
    business: "Mercado San Juan",
    distance: "0.8 km",
    price: 45,
    originalPrice: 120,
    image: "🥬",
  },
  {
    id: 3,
    name: "Comida preparada del dia",
    business: "Cocina Dona Maria",
    distance: "2.1 km",
    price: 30,
    originalPrice: 85,
    image: "🍛",
  },
]

export function MapScreen({ onSelectPackage, onNavigate }: MapScreenProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>(["today", "verified"])
  const [selectedPin, setSelectedPin] = useState<number | null>(null)
  const [showList, setShowList] = useState(false)

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-0 lg:gap-6 min-h-[calc(100vh-4rem)]">
          {/* Map section */}
          <div className="lg:col-span-2 relative h-[60vh] lg:h-auto lg:min-h-[calc(100vh-4rem)]">
            {/* Search and filters overlay */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 space-y-3">
              {/* Search bar */}
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Buscar en el mapa"
                  className="pl-12 pr-12 h-12 bg-card border-0 rounded-2xl shadow-lg text-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <SlidersHorizontal className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>

              {/* Filter pills */}
              <div className="flex gap-2 flex-wrap">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilters.includes(filter.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground shadow-sm hover:bg-muted"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Map area */}
            <div className="h-full bg-gradient-to-br from-primary/5 via-muted to-secondary/5 relative">
              {/* Stylized map background */}
              <div className="absolute inset-0">
                {/* Grid lines to simulate map */}
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute left-0 right-0 h-px bg-foreground/30"
                      style={{ top: `${(i + 1) * 10}%` }}
                    />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute top-0 bottom-0 w-px bg-foreground/30"
                      style={{ left: `${(i + 1) * 10}%` }}
                    />
                  ))}
                </div>

                {/* "Streets" */}
                <div className="absolute top-1/4 left-0 right-0 h-2 bg-muted-foreground/10 rounded-full" />
                <div className="absolute top-1/2 left-0 right-0 h-3 bg-muted-foreground/15 rounded-full" />
                <div className="absolute top-3/4 left-0 right-0 h-2 bg-muted-foreground/10 rounded-full" />
                <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-muted-foreground/10 rounded-full" />
                <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-muted-foreground/15 rounded-full" />
                <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-muted-foreground/10 rounded-full" />

                {/* Map pins */}
                {mapPins.map((pin) => (
                  <button
                    key={pin.id}
                    onClick={() => setSelectedPin(selectedPin === pin.id ? null : pin.id)}
                    className="absolute transform -translate-x-1/2 -translate-y-full"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  >
                    <div className={`relative ${selectedPin === pin.id ? "scale-125 z-20" : ""} transition-transform`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                        selectedPin === pin.id ? "bg-secondary" : "bg-primary"
                      }`}>
                        <span className="text-xl">{pin.image}</span>
                      </div>
                      {selectedPin === pin.id && (
                        <Card 
                          onClick={() => onSelectPackage(pin.id)}
                          className="absolute -top-20 left-1/2 -translate-x-1/2 p-3 shadow-xl whitespace-nowrap cursor-pointer hover:bg-muted transition-colors border-0"
                        >
                          <p className="text-sm font-semibold text-foreground">{pin.name}</p>
                          <p className="text-lg text-primary font-bold">${pin.price}</p>
                        </Card>
                      )}
                    </div>
                  </button>
                ))}

                {/* User location */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-3 border-white shadow-lg" />
                    <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle list view on mobile */}
            <Button
              onClick={() => setShowList(!showList)}
              className="lg:hidden absolute bottom-4 right-4 h-12 px-4 rounded-full shadow-lg"
            >
              <List className="w-5 h-5 mr-2" />
              Ver lista
            </Button>
          </div>

          {/* Sidebar with offers */}
          <div className={`${showList ? 'block' : 'hidden'} lg:block bg-card lg:bg-transparent p-4 lg:p-0 lg:py-4`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Ofertas cercanas</h2>
              <Badge variant="secondary">{nearbyOffers.length} disponibles</Badge>
            </div>
            
            <div className="space-y-4">
              {nearbyOffers.map((offer) => (
                <Card 
                  key={offer.id}
                  onClick={() => onSelectPackage(offer.id)}
                  className="p-4 cursor-pointer hover:shadow-lg transition-all border-0 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-4xl">{offer.image}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-1">{offer.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{offer.business}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{offer.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground line-through">${offer.originalPrice}</span>
                        <span className="text-lg font-bold text-primary">${offer.price}</span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                          -{Math.round((1 - offer.price / offer.originalPrice) * 100)}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button 
              onClick={() => onNavigate("home")}
              variant="outline"
              className="w-full mt-6 h-12 rounded-xl"
            >
              Ver todos los paquetes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Search, MapPin, ChevronRight, Clock, Leaf } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { FoodPackageCard } from "@/components/food-package-card"
import type { Screen } from "@/app/page"

interface HomeScreenProps {
  onSelectPackage: (packageId: number) => void
  onNavigate: (screen: Screen) => void
}

const categories = [
  { id: 1, name: "Panaderia", emoji: "🥖" },
  { id: 2, name: "Comida", emoji: "🍲" },
  { id: 3, name: "Frutas", emoji: "🍎" },
  { id: 4, name: "Despensa", emoji: "🛒" },
  { id: 5, name: "Solidario", emoji: "💚" },
  { id: 6, name: "Lacteos", emoji: "🥛" },
]

const packages = [
  {
    id: 1,
    name: "Paquete sorpresa de panaderia",
    business: "Panaderia La Ceiba",
    distance: "1.2 km",
    originalPrice: 90,
    rescuePrice: 35,
    badge: "Consumir hoy",
    badgeType: "warning" as const,
    safetyLevel: "green" as const,
    pickupTime: "7:00 PM - 8:30 PM",
    image: "🥐",
  },
  {
    id: 2,
    name: "Frutas y verduras frescas",
    business: "Mercado San Juan",
    distance: "0.8 km",
    originalPrice: 120,
    rescuePrice: 45,
    badge: "Proximo a vencer",
    badgeType: "secondary" as const,
    safetyLevel: "green" as const,
    pickupTime: "5:00 PM - 7:00 PM",
    image: "🥬",
  },
  {
    id: 3,
    name: "Comida preparada del dia",
    business: "Cocina Dona Maria",
    distance: "2.1 km",
    originalPrice: 85,
    rescuePrice: 30,
    badge: "Solidario",
    badgeType: "primary" as const,
    safetyLevel: "yellow" as const,
    pickupTime: "8:00 PM - 9:00 PM",
    image: "🍛",
  },
  {
    id: 4,
    name: "Despensa basica",
    business: "Tienda Don Pepe",
    distance: "1.5 km",
    originalPrice: 150,
    rescuePrice: 55,
    badge: "Verificado",
    badgeType: "outline" as const,
    safetyLevel: "green" as const,
    pickupTime: "6:00 PM - 8:00 PM",
    image: "📦",
  },
  {
    id: 5,
    name: "Sushi del dia",
    business: "Sushi Cancun",
    distance: "3.2 km",
    originalPrice: 180,
    rescuePrice: 65,
    badge: "Consumir hoy",
    badgeType: "warning" as const,
    safetyLevel: "green" as const,
    pickupTime: "9:00 PM - 10:00 PM",
    image: "🍣",
  },
  {
    id: 6,
    name: "Tortas y pasteles",
    business: "Pasteleria Dulce",
    distance: "0.5 km",
    originalPrice: 95,
    rescuePrice: 40,
    badge: "Nuevo",
    badgeType: "primary" as const,
    safetyLevel: "green" as const,
    pickupTime: "6:00 PM - 7:30 PM",
    image: "🎂",
  },
]

export function HomeScreen({ onSelectPackage, onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary-foreground/80" />
                <span className="text-sm font-medium text-primary-foreground">
                  Cancun, Quintana Roo
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Encuentra comida cerca de ti
              </h1>
            </div>
            
            {/* Search bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Buscar comida, comercios..."
                className="pl-12 h-12 bg-card border-0 rounded-2xl text-sm placeholder:text-muted-foreground shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Categorias</h2>
            <button className="text-sm text-primary font-medium flex items-center hover:underline">
              Ver todas <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <button 
                key={cat.id}
                className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-xs font-medium text-muted-foreground">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Impact banner */}
        <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm text-muted-foreground">Hoy se han rescatado en Cancun</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">128 kg de comida</p>
              <p className="text-sm text-muted-foreground">Equivalente a 256 comidas salvadas del desperdicio</p>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-0 px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              En vivo
            </Badge>
          </div>
        </Card>

        {/* Available packages */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Disponible cerca de ti</h2>
            <button 
              onClick={() => onNavigate("map")}
              className="text-sm text-primary font-medium flex items-center hover:underline"
            >
              Ver mapa <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <FoodPackageCard 
                key={pkg.id}
                package={pkg}
                onClick={() => onSelectPackage(pkg.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

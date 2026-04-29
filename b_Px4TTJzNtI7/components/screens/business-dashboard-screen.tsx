"use client"

import { Plus, TrendingUp, Package, Leaf, Star, Award, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Screen } from "@/app/page"

interface BusinessDashboardScreenProps {
  onNavigate: (screen: Screen) => void
  onNewPackage: () => void
}

const stats = [
  { label: "Ingresos recuperados", value: "$1,850", icon: TrendingUp, color: "text-green-600", bgColor: "bg-green-100" },
  { label: "Paquetes rescatados", value: "46", icon: Package, color: "text-primary", bgColor: "bg-primary/10" },
  { label: "Comida no desperdiciada", value: "72 kg", icon: Leaf, color: "text-green-600", bgColor: "bg-green-100" },
  { label: "Calificacion promedio", value: "4.8", icon: Star, color: "text-yellow-500", bgColor: "bg-yellow-100" },
]

const weeklyData = [
  { day: "L", value: 30 },
  { day: "M", value: 45 },
  { day: "Mi", value: 60 },
  { day: "J", value: 40 },
  { day: "V", value: 80 },
  { day: "S", value: 95 },
  { day: "D", value: 55 },
]

const recentPackages = [
  { id: 1, name: "Paquete panaderia", status: "sold", price: 35, time: "Hace 2h", items: "12 panes variados" },
  { id: 2, name: "Comida del dia", status: "pending", price: 30, time: "Hace 4h", items: "3 porciones" },
  { id: 3, name: "Frutas variadas", status: "expired", price: 45, time: "Ayer", items: "2 kg aprox" },
  { id: 4, name: "Paquete sorpresa", status: "sold", price: 40, time: "Ayer", items: "8 productos" },
]

export function BusinessDashboardScreen({ onNavigate, onNewPackage }: BusinessDashboardScreenProps) {
  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-secondary to-secondary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-4 border-card/30">
                <AvatarFallback className="bg-card text-secondary-foreground font-bold text-xl">
                  PL
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-secondary-foreground">Panaderia La Ceiba</h1>
                  <Badge className="bg-primary text-primary-foreground border-0">
                    <Award className="w-3 h-3 mr-1" />
                    Verificado
                  </Badge>
                </div>
                <p className="text-sm text-secondary-foreground/70">Panel de comercio</p>
              </div>
            </div>

            {/* Rescue badge */}
            <Card className="p-4 bg-card/20 backdrop-blur border-0 md:min-w-[280px]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-secondary-foreground/80">Tu negocio es un</p>
                  <p className="text-lg font-bold text-secondary-foreground">Negocio Rescatador</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-secondary-foreground">72</p>
                  <p className="text-xs text-secondary-foreground/70">kg rescatados</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 border-0 shadow-sm">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly chart */}
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Impacto semanal</h3>
              <span className="text-sm text-muted-foreground">kg rescatados</span>
            </div>
            <div className="flex items-end justify-between h-40 gap-3">
              {weeklyData.map((item, i) => (
                <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className={`w-full rounded-t-lg transition-all ${
                      i === weeklyData.length - 2 ? "bg-primary" : "bg-primary/30"
                    }`}
                    style={{ height: `${item.value}%` }}
                  />
                  <span className="text-xs text-muted-foreground font-medium">{item.day}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent packages */}
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Paquetes recientes</h3>
              <button className="text-sm text-primary font-medium flex items-center hover:underline">
                Ver todos <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {recentPackages.map((pkg) => (
                <div 
                  key={pkg.id}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-xl cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => {
                    if (pkg.status === "expired") {
                      onNavigate("donation")
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      pkg.status === "sold" ? "bg-green-500" :
                      pkg.status === "pending" ? "bg-yellow-500" : "bg-red-500"
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{pkg.name}</p>
                      <p className="text-xs text-muted-foreground">{pkg.items} - {pkg.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">${pkg.price}</p>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        pkg.status === "sold" ? "text-green-600 border-green-200 bg-green-50" :
                        pkg.status === "pending" ? "text-yellow-600 border-yellow-200 bg-yellow-50" : 
                        "text-red-600 border-red-200 bg-red-50"
                      }`}
                    >
                      {pkg.status === "sold" ? "Vendido" : 
                       pkg.status === "pending" ? "Pendiente" : "Expirado"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* New package button */}
        <Button 
          onClick={onNewPackage}
          size="lg"
          className="w-full md:w-auto h-14 px-8 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Publicar nuevo paquete
        </Button>
      </div>
    </div>
  )
}

"use client"

import { Share2, Settings, ChevronRight, Award, ShoppingBag, DollarSign, Leaf, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import type { Screen } from "@/app/page"

interface ProfileScreenProps {
  onNavigate: (screen: Screen) => void
}

const impactStats = [
  { icon: ShoppingBag, label: "Paquetes rescatados", value: "8", color: "text-primary", bgColor: "bg-primary/10" },
  { icon: DollarSign, label: "Dinero ahorrado", value: "$420", color: "text-secondary-foreground", bgColor: "bg-secondary/20" },
  { icon: Leaf, label: "Kg no desperdiciados", value: "12", color: "text-green-600", bgColor: "bg-green-100" },
]

const badges = [
  { id: 1, name: "Rescatador local", icon: "🦸", earned: true },
  { id: 2, name: "Compra solidaria", icon: "💚", earned: true },
  { id: 3, name: "Cero desperdicio", icon: "♻️", earned: true },
  { id: 4, name: "Embajador", icon: "⭐", earned: false },
  { id: 5, name: "Super ahorrador", icon: "💰", earned: false },
  { id: 6, name: "Heroe local", icon: "🏆", earned: false },
]

const recentActivity = [
  { id: 1, action: "Rescataste un paquete", detail: "Panaderia La Ceiba", time: "Hace 2 dias", emoji: "🥐" },
  { id: 2, action: "Ganaste una insignia", detail: "Cero desperdicio", time: "Hace 1 semana", emoji: "♻️" },
  { id: 3, action: "Invitaste a un amigo", detail: "Juan se unio", time: "Hace 2 semanas", emoji: "👋" },
]

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 border-4 border-primary-foreground/30">
                <AvatarFallback className="bg-primary-foreground text-primary text-2xl font-bold">
                  MC
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground">Maria Castillo</h1>
                <p className="text-sm text-primary-foreground/80">Rescatador desde Enero 2024</p>
              </div>
            </div>
            <Button 
              variant="secondary" 
              className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 border-0"
            >
              <Settings className="w-4 h-4 mr-2" />
              Configuracion
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Impact card */}
        <Card className="p-6 shadow-xl border-0 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Tu impacto
            </h3>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-sm text-primary"
              onClick={() => onNavigate("food-safety")}
            >
              Ver mas <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`w-14 h-14 mx-auto mb-3 ${stat.bgColor} rounded-2xl flex items-center justify-center`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Badges section */}
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary-foreground" />
                Insignias
              </h3>
              <span className="text-sm text-muted-foreground">
                {badges.filter(b => b.earned).length}/{badges.length}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge) => (
                <div 
                  key={badge.id}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl ${
                    badge.earned ? "bg-secondary/10" : "bg-muted opacity-50"
                  }`}
                >
                  <span className="text-3xl">{badge.icon}</span>
                  <span className="text-xs text-muted-foreground text-center">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Next badge progress */}
            <div className="mt-6 p-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-card rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">Proxima insignia</p>
                  <p className="text-xs text-muted-foreground">Embajador - Invita a 3 amigos</p>
                </div>
              </div>
              <Progress value={33} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">1 de 3 amigos invitados</p>
            </div>
          </Card>

          {/* Recent activity */}
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-6">Actividad reciente</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-3 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{activity.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.detail}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <Button 
            size="lg"
            className="h-14 text-base font-bold rounded-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Invitar a un amigo
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="h-14 text-base font-bold rounded-2xl"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Ver mis reservas
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client"

import { MapPin, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface FoodPackage {
  id: number
  name: string
  business: string
  distance: string
  originalPrice: number
  rescuePrice: number
  badge: string
  badgeType: "warning" | "secondary" | "primary" | "outline"
  safetyLevel: "green" | "yellow" | "red"
  pickupTime: string
  image: string
}

interface FoodPackageCardProps {
  package: FoodPackage
  onClick: () => void
}

export function FoodPackageCard({ package: pkg, onClick }: FoodPackageCardProps) {
  const badgeVariants = {
    warning: "bg-amber-100 text-amber-700 border-amber-200",
    secondary: "bg-secondary/20 text-secondary-foreground border-secondary/30",
    primary: "bg-primary/10 text-primary border-primary/20",
    outline: "bg-card text-muted-foreground border-border",
  }

  const safetyColors = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  }

  return (
    <Card 
      onClick={onClick}
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-all border-0 shadow-sm group"
    >
      {/* Image area */}
      <div className="relative h-32 sm:h-40 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
        <span className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform">{pkg.image}</span>
        
        {/* Badge */}
        <Badge 
          className={`absolute top-3 left-3 text-xs font-medium border ${badgeVariants[pkg.badgeType]}`}
        >
          {pkg.badge}
        </Badge>
        
        {/* Safety indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-card/90 backdrop-blur px-2 py-1 rounded-full">
          <div className={`w-2.5 h-2.5 rounded-full ${safetyColors[pkg.safetyLevel]}`} />
          <span className="text-[10px] font-medium text-foreground">Apto</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-1">{pkg.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{pkg.business}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground line-through">${pkg.originalPrice}</span>
            <span className="text-lg font-bold text-primary">${pkg.rescuePrice}</span>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-[10px]">
            -{Math.round((1 - pkg.rescuePrice / pkg.originalPrice) * 100)}%
          </Badge>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {pkg.distance}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {pkg.pickupTime}
          </div>
        </div>
      </div>
    </Card>
  )
}

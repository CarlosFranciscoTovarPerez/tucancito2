"use client"

import { Home, Map, ShoppingBag, Heart, User, LayoutDashboard, Package, Gift, Leaf, Menu, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { Screen, UserType } from "@/app/page"

interface WebNavigationProps {
  currentScreen: Screen
  userType: UserType
  onNavigate: (screen: Screen) => void
  onLogout: () => void
}

export function WebNavigation({ currentScreen, userType, onNavigate, onLogout }: WebNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const userNavItems = [
    { id: "home" as Screen, icon: Home, label: "Inicio" },
    { id: "map" as Screen, icon: Map, label: "Mapa" },
    { id: "food-safety" as Screen, icon: Heart, label: "Impacto" },
    { id: "profile" as Screen, icon: User, label: "Perfil" },
  ]

  const businessNavItems = [
    { id: "business-dashboard" as Screen, icon: LayoutDashboard, label: "Panel" },
    { id: "business-panel" as Screen, icon: Package, label: "Publicar" },
    { id: "donation" as Screen, icon: Gift, label: "Donar" },
    { id: "profile" as Screen, icon: User, label: "Perfil" },
  ]

  const navItems = userType === "user" ? userNavItems : businessNavItems

  const handleNavClick = (screen: Screen) => {
    onNavigate(screen)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick(userType === "user" ? "home" : "business-dashboard")}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-foreground">Rescate Local</span>
              <span className="text-xs text-muted-foreground block -mt-0.5">Cancun, Q. Roo</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id || 
                (item.id === "home" && currentScreen === "package-detail") ||
                (item.id === "business-dashboard" && currentScreen === "business-panel")
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? "stroke-[2.5]" : ""}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Salir
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-muted"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id || 
                (item.id === "home" && currentScreen === "package-detail") ||
                (item.id === "business-dashboard" && currentScreen === "business-panel")
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : ""}`} />
                  <span className="text-base font-medium">{item.label}</span>
                </button>
              )
            })}
            <hr className="my-2 border-border" />
            <button
              onClick={() => {
                onLogout()
                setMobileMenuOpen(false)
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-base font-medium">Salir</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

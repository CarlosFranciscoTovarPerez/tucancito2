"use client"

import { useState } from "react"
import { OnboardingScreen } from "@/components/screens/onboarding-screen"
import { HomeScreen } from "@/components/screens/home-screen"
import { PackageDetailScreen } from "@/components/screens/package-detail-screen"
import { ReservationScreen } from "@/components/screens/reservation-screen"
import { MapScreen } from "@/components/screens/map-screen"
import { ProfileScreen } from "@/components/screens/profile-screen"
import { BusinessPanelScreen } from "@/components/screens/business-panel-screen"
import { BusinessDashboardScreen } from "@/components/screens/business-dashboard-screen"
import { DonationScreen } from "@/components/screens/donation-screen"
import { FoodSafetyScreen } from "@/components/screens/food-safety-screen"
import { WebNavigation } from "@/components/web-navigation"

export type Screen = 
  | "onboarding" 
  | "home" 
  | "package-detail" 
  | "reservation" 
  | "map" 
  | "profile" 
  | "business-panel" 
  | "business-dashboard"
  | "donation"
  | "food-safety"

export type UserType = "user" | "business"

export default function RescateLocalApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding")
  const [userType, setUserType] = useState<UserType>("user")
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  const handleSelectUserType = (type: UserType) => {
    setUserType(type)
    if (type === "user") {
      setCurrentScreen("home")
    } else {
      setCurrentScreen("business-dashboard")
    }
  }

  const handleSelectPackage = (packageId: number) => {
    setSelectedPackage(packageId)
    setCurrentScreen("package-detail")
  }

  const handleReserve = () => {
    setCurrentScreen("reservation")
  }

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen)
  }

  const handleLogout = () => {
    setCurrentScreen("onboarding")
    setUserType("user")
  }

  const showNavigation = currentScreen !== "onboarding" && currentScreen !== "reservation"

  return (
    <div className="min-h-screen bg-background">
      {showNavigation && (
        <WebNavigation 
          currentScreen={currentScreen}
          userType={userType}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      )}
      
      <main className={showNavigation ? "pt-16" : ""}>
        {currentScreen === "onboarding" && (
          <OnboardingScreen onSelectUserType={handleSelectUserType} />
        )}
        {currentScreen === "home" && (
          <HomeScreen 
            onSelectPackage={handleSelectPackage} 
            onNavigate={handleNavigate}
          />
        )}
        {currentScreen === "package-detail" && (
          <PackageDetailScreen 
            packageId={selectedPackage}
            onReserve={handleReserve}
            onBack={() => setCurrentScreen("home")}
            onNavigate={handleNavigate}
          />
        )}
        {currentScreen === "reservation" && (
          <ReservationScreen 
            packageId={selectedPackage}
            onBack={() => setCurrentScreen("package-detail")}
            onComplete={() => setCurrentScreen("home")}
          />
        )}
        {currentScreen === "map" && (
          <MapScreen 
            onSelectPackage={handleSelectPackage}
            onNavigate={handleNavigate}
          />
        )}
        {currentScreen === "profile" && (
          <ProfileScreen onNavigate={handleNavigate} />
        )}
        {currentScreen === "business-panel" && (
          <BusinessPanelScreen 
            onBack={() => setCurrentScreen("business-dashboard")}
            onPublish={() => setCurrentScreen("business-dashboard")}
          />
        )}
        {currentScreen === "business-dashboard" && (
          <BusinessDashboardScreen 
            onNavigate={handleNavigate}
            onNewPackage={() => setCurrentScreen("business-panel")}
          />
        )}
        {currentScreen === "donation" && (
          <DonationScreen 
            onBack={() => setCurrentScreen("business-dashboard")}
            onComplete={() => setCurrentScreen("business-dashboard")}
          />
        )}
        {currentScreen === "food-safety" && (
          <FoodSafetyScreen onBack={() => setCurrentScreen("home")} />
        )}
      </main>
    </div>
  )
}

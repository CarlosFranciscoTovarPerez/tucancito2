"use client"

import { useState } from "react"
import { ArrowLeft, Minus, Plus, CreditCard, Gift, MapPin, CheckCircle, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface ReservationScreenProps {
  packageId: number | null
  onBack: () => void
  onComplete: () => void
}

export function ReservationScreen({ onBack, onComplete }: ReservationScreenProps) {
  const [quantity, setQuantity] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [useSolidaryCredit, setUseSolidaryCredit] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const pkg = {
    name: "Paquete sorpresa de panaderia",
    business: "Panaderia La Ceiba",
    address: "Av. Tulum 123, SM 4, Cancun",
    rescuePrice: 35,
    image: "🥐",
    pickupTime: "7:00 PM - 8:30 PM",
  }

  const total = pkg.rescuePrice * quantity - (useSolidaryCredit ? 10 : 0)

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 border-0 shadow-xl">
          {/* Success animation */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>

            <h1 className="text-2xl font-bold text-foreground mb-2">
              Reserva confirmada!
            </h1>
            <p className="text-muted-foreground mb-8">
              Muestra este codigo QR al recoger tu pedido
            </p>

            {/* QR Code placeholder */}
            <div className="w-56 h-56 bg-foreground rounded-2xl flex items-center justify-center mb-4">
              {/* QR pattern simulation */}
              <div className="grid grid-cols-7 gap-1 p-4">
                {Array.from({ length: 49 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-5 h-5 ${Math.random() > 0.4 ? "bg-card" : "bg-foreground"} rounded-sm`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Codigo: <span className="font-mono font-bold">RL-2024-{Math.floor(Math.random() * 10000)}</span>
            </p>

            {/* Order summary */}
            <div className="w-full p-4 bg-muted/50 rounded-xl mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center">
                  <span className="text-3xl">{pkg.image}</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{pkg.name}</p>
                  <p className="text-sm text-muted-foreground">{pkg.business}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Recoger:</span>
                  <span className="font-medium text-foreground">{pkg.pickupTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Direccion:</span>
                  <span className="font-medium text-foreground text-right">{pkg.address}</span>
                </div>
              </div>
            </div>

            {/* Impact message */}
            <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-xl w-full mb-6">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Con esta compra rescataste aproximadamente 1.5 kg de comida
              </span>
            </div>

            <div className="w-full space-y-3">
              <Button 
                size="lg"
                className="w-full h-14 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Ver como llegar
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={onComplete}
                className="w-full h-12 text-base font-medium rounded-xl"
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 sm:p-6 border-b border-border bg-card">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Reservar paquete</h1>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Package summary */}
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center">
                <span className="text-4xl">{pkg.image}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.business}</p>
                <p className="text-2xl font-bold text-primary mt-2">${pkg.rescuePrice}</p>
              </div>
            </div>
          </Card>

          {/* Quantity selector */}
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-foreground">Cantidad</span>
                <p className="text-sm text-muted-foreground">Maximo 5 por persona</p>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-2xl font-bold w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(5, quantity + 1))}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            </div>
          </Card>

          {/* Payment method */}
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Metodo de pago</h3>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
              <div className={`flex items-center space-x-4 p-4 rounded-xl transition-colors ${paymentMethod === 'card' ? 'bg-primary/5 border-2 border-primary' : 'bg-muted/50 border-2 border-transparent'}`}>
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-3 flex-1 cursor-pointer">
                  <CreditCard className="w-6 h-6 text-muted-foreground" />
                  <div>
                    <span className="font-medium text-foreground">Tarjeta de credito/debito</span>
                    <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex</p>
                  </div>
                </Label>
              </div>
              <div className={`flex items-center space-x-4 p-4 rounded-xl transition-colors ${paymentMethod === 'cash' ? 'bg-primary/5 border-2 border-primary' : 'bg-muted/50 border-2 border-transparent'}`}>
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="flex items-center gap-3 flex-1 cursor-pointer">
                  <span className="text-2xl">💵</span>
                  <div>
                    <span className="font-medium text-foreground">Efectivo al recoger</span>
                    <p className="text-xs text-muted-foreground">Paga en el comercio</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </Card>

          {/* Solidary credit */}
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Credito solidario</p>
                  <p className="text-sm text-muted-foreground">Tienes $10 disponibles</p>
                </div>
              </div>
              <Switch 
                checked={useSolidaryCredit}
                onCheckedChange={setUseSolidaryCredit}
              />
            </div>
          </Card>

          {/* Order summary */}
          <Card className="p-6 border-0 shadow-sm bg-muted/30">
            <h3 className="font-semibold text-foreground mb-4">Resumen del pedido</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({quantity} paquete{quantity > 1 ? 's' : ''})</span>
                <span className="font-medium">${pkg.rescuePrice * quantity}</span>
              </div>
              {useSolidaryCredit && (
                <div className="flex justify-between text-green-600">
                  <span>Credito solidario</span>
                  <span>-$10</span>
                </div>
              )}
              <div className="flex justify-between pt-3 border-t border-border text-lg">
                <span className="font-semibold text-foreground">Total a pagar</span>
                <span className="font-bold text-primary">${total}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-4 sm:p-6 bg-card border-t border-border">
          <Button 
            onClick={() => setIsConfirmed(true)}
            size="lg"
            className="w-full h-14 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90"
          >
            Confirmar reserva - ${total}
          </Button>
        </div>
      </div>
    </div>
  )
}

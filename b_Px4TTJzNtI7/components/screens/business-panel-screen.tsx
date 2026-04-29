"use client"

import { useState } from "react"
import { ArrowLeft, Camera, Clock, AlertTriangle, Snowflake, CheckCircle, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

interface BusinessPanelScreenProps {
  onBack: () => void
  onPublish: () => void
}

export function BusinessPanelScreen({ onBack, onPublish }: BusinessPanelScreenProps) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    quantity: "1",
    originalPrice: "",
    rescuePrice: "",
    pickupTime: "",
    expiryDate: "",
    allergens: [] as string[],
    refrigeration: false,
  })

  const [checklist, setChecklist] = useState({
    aptForConsumption: false,
    properlyConserved: false,
    goodPackaging: false,
    acceptRules: false,
  })

  const allChecked = Object.values(checklist).every(Boolean)

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 sm:p-6 border-b border-border bg-card sticky top-0 z-10">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-foreground">Publicar excedente</h1>
            <p className="text-sm text-muted-foreground">Rescata comida, genera ingresos</p>
          </div>
        </div>

        {/* Form content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Photo upload */}
          <Card className="p-8 border-dashed border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center">
                <span className="text-base font-medium text-foreground block">Añadir foto del producto</span>
                <span className="text-sm text-muted-foreground">Arrastra una imagen o haz clic para subir</span>
              </div>
              <Button variant="outline" size="sm" className="mt-2">
                <Upload className="w-4 h-4 mr-2" />
                Seleccionar archivo
              </Button>
            </div>
          </Card>

          {/* Form fields */}
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="font-semibold text-foreground mb-6">Informacion del paquete</h3>
            <FieldGroup>
              <Field>
                <FieldLabel>Nombre del paquete</FieldLabel>
                <Input 
                  placeholder="Ej: Paquete sorpresa de panaderia"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </Field>

              <Field>
                <FieldLabel>Tipo de alimento</FieldLabel>
                <Select onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Selecciona una categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bakery">Panaderia</SelectItem>
                    <SelectItem value="prepared">Comida preparada</SelectItem>
                    <SelectItem value="fruits">Frutas y verduras</SelectItem>
                    <SelectItem value="grocery">Despensa</SelectItem>
                    <SelectItem value="dairy">Lacteos</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Cantidad disponible</FieldLabel>
                  <Input 
                    type="number"
                    placeholder="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </Field>
                <Field>
                  <FieldLabel>Precio original</FieldLabel>
                  <Input 
                    type="number"
                    placeholder="$90"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel>Precio rescate</FieldLabel>
                <Input 
                  type="number"
                  placeholder="$35"
                  value={formData.rescuePrice}
                  onChange={(e) => setFormData({ ...formData, rescuePrice: e.target.value })}
                  className="h-12 rounded-xl"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Recomendamos 30-50% del precio original para maximizar ventas
                </p>
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Hora limite recoleccion
                  </FieldLabel>
                  <Input 
                    type="time"
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </Field>
                <Field>
                  <FieldLabel>Consumir antes de</FieldLabel>
                  <Input 
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Alergenos
                </FieldLabel>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Gluten", "Lacteos", "Huevo", "Frutos secos", "Soya", "Mariscos"].map((allergen) => (
                    <button
                      key={allergen}
                      type="button"
                      onClick={() => {
                        const allergens = formData.allergens.includes(allergen)
                          ? formData.allergens.filter(a => a !== allergen)
                          : [...formData.allergens, allergen]
                        setFormData({ ...formData, allergens })
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        formData.allergens.includes(allergen)
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {allergen}
                    </button>
                  ))}
                </div>
              </Field>

              <Field>
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <div className="flex items-center gap-3">
                    <Snowflake className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">Requiere refrigeracion</span>
                  </div>
                  <Checkbox 
                    checked={formData.refrigeration}
                    onCheckedChange={(checked) => setFormData({ ...formData, refrigeration: !!checked })}
                  />
                </div>
              </Field>
            </FieldGroup>
          </Card>

          {/* Safety checklist */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Checklist obligatorio de inocuidad
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Debes confirmar todos los puntos antes de publicar tu paquete
            </p>
            <div className="space-y-4">
              {[
                { key: "aptForConsumption", label: "El alimento esta apto para consumo humano" },
                { key: "properlyConserved", label: "Fue conservado correctamente (temperatura, higiene)" },
                { key: "goodPackaging", label: "El empaque esta en buen estado y sellado" },
                { key: "acceptRules", label: "Acepto las reglas de inocuidad de Rescate Local" },
              ].map((item) => (
                <div key={item.key} className="flex items-start gap-4 p-4 bg-card rounded-xl">
                  <Checkbox 
                    id={item.key}
                    checked={checklist[item.key as keyof typeof checklist]}
                    onCheckedChange={(checked) => setChecklist({ ...checklist, [item.key]: !!checked })}
                    className="mt-0.5"
                  />
                  <Label htmlFor={item.key} className="text-sm text-foreground cursor-pointer leading-relaxed">
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Submit button */}
        <div className="sticky bottom-0 p-4 sm:p-6 bg-card border-t border-border">
          <Button 
            onClick={onPublish}
            disabled={!allChecked}
            size="lg"
            className="w-full h-14 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90 disabled:opacity-50"
          >
            Publicar paquete
          </Button>
        </div>
      </div>
    </div>
  )
}

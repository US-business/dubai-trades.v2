"use client"

import { useCartStore } from "@/lib/stores/cart-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcnUI/card"
import { Separator } from "@/components/shadcnUI/separator"
import { cn } from "@/lib/utils"
import BackLink from "@/components/shared/BackLink"
import { EmptyCart } from "./EmptyCart"
import { CartItem } from "./CartItem"
import { CartSummary } from "./CartSummary"

interface GuestCartViewProps {
  dir: "rtl" | "ltr"
  dictionary: any
}

export default function GuestCartView({ dir, dictionary }: GuestCartViewProps) {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore()
  const totalPrice = getTotalPrice()

  if (items.length === 0) {
    return <EmptyCart dir={dir} dictionary={dictionary} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className={cn("flex items-center justify-between", dir === "rtl" && "flex-row-reverse")}>
                  <span>
                    {dictionary.cart.title} ({items.length} {dictionary.cart.items})
                  </span>
                  <BackLink dir={dir} className="my-4" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item, index) => (
                  <CartItem 
                    key={item.id}
                    item={item}
                    dir={dir}
                    onRemove={removeItem}
                    onUpdateQuantity={updateQuantity}
                    showSeparator={index < items.length - 1}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <CartSummary 
            dir={dir} 
            totalPrice={totalPrice} 
            dictionary={dictionary} 
          />
        </div>
      </div>
    </div>
  )
}

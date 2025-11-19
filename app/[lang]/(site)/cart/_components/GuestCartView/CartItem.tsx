import { Trash2 } from "lucide-react"
import { Button } from "@/components/shadcnUI/button"
import { Separator } from "@/components/shadcnUI/separator"
import { cn } from "@/lib/utils"
import { calculateProductPrice } from "@/lib/utils/pricing"
import { CartItem as CartItemType } from "@/lib/stores/cart-store"

interface CartItemProps {
  item: CartItemType
  dir: "rtl" | "ltr"
  onRemove: (id: number) => void
  onUpdateQuantity: (id: number, quantity: number) => void
  showSeparator?: boolean
}

export function CartItem({ item, dir, onRemove, onUpdateQuantity, showSeparator = true }: CartItemProps) {
  const finalPrice = calculateProductPrice(item.product)
  const itemPrice = Number(item.product.price || 0)

  return (
    <div>
      <div className={cn("flex items-center space-x-4", dir === "rtl" && "space-x-reverse")}>
        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
          {item.product.images?.[0] ? (
            <img
              src={item.product.images[0]}
              alt={dir === "rtl" ? item.product.nameAr : item.product.nameEn}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">
            {dir === "rtl" ? item.product.nameAr : item.product.nameEn}
          </h3>
          <div className={cn("flex items-center space-x-2 mt-1", dir === "rtl" && "space-x-reverse")}>
            <span className="font-bold text-primary">EGP{finalPrice.toFixed(2)}</span>
            {item.product.discountType !== 'none' && Number(item.product.discountValue || 0) > 0 && (
              <span className="text-sm text-gray-500 line-through">EGP{itemPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
        <div className={cn("flex items-center space-x-2", dir === "rtl" && "space-x-reverse")}>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="h-8 w-8"
          >
            -
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="h-8 w-8"
          >
            +
          </Button>
        </div>
        <div className="text-right">
          <p className="font-bold">EGP{(finalPrice * item.quantity).toFixed(2)}</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(item.id)}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {showSeparator && <Separator className="mt-4" />}
    </div>
  )
}

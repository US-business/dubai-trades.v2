import { Button } from "@/components/shadcnUI/button"
import { Heart, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/shadcnUI/separator"
import { calculateProductPrice } from "@/lib/utils/pricing"
import Image from "next/image"
import type { WishlistItem as WishlistItemType } from "@/lib/stores/wishlist-store"
import type { Dictionary } from "@/lib/i18n/dictionary-types"

interface WishlistItemProps {
  item: WishlistItemType
  dir: "rtl" | "ltr"
  dictionary: Dictionary
  onRemove: (productId: number) => void
  showSeparator?: boolean
}

export default function WishlistItem({ 
  item, 
  dir, 
  dictionary, 
  onRemove,
  showSeparator = false 
}: WishlistItemProps) {
  const finalPrice = calculateProductPrice(item.product)
  const hasDiscount = item.product.discountType !== 'none' && item.product.discountValue
  const isOutOfStock = (item.product.quantityInStock ?? 0) <= 0

  return (
    <div>
      <div className={cn("flex gap-4", dir === "rtl" && "flex-row-reverse")}>
        {/* Product Image */}
        <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
          {item.product.images?.[0] ? (
            <Image
              src={item.product.images[0]}
              alt={dir === "rtl" ? item.product.nameAr : item.product.nameEn}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-gray-400" />
            </div>
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {dir === "rtl" ? "نفذ" : "Out of Stock"}
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <h3 className={cn("font-medium text-gray-900 mb-1", dir === "rtl" && "text-right")}>
            {dir === "rtl" ? item.product.nameAr : item.product.nameEn}
          </h3>
          
          {/* Price */}
          <div className={cn("flex items-center gap-2 mb-2", dir === "rtl" && "flex-row-reverse justify-end")}>
            <span className="text-lg font-bold text-primary">
              ${finalPrice.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                ${parseFloat(item.product.price!).toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {isOutOfStock && (
            <span className="text-xs text-red-600 font-medium">
              {dictionary.cart.outOfStock}
            </span>
          )}
        </div>

        {/* Remove Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRemove(item.productId)}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      {showSeparator && <Separator className="mt-4" />}
    </div>
  )
}

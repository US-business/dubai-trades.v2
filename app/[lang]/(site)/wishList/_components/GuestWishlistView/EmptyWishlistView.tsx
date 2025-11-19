import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import BackLink from "@/components/shared/BackLink"
import type { Dictionary } from "@/lib/i18n/dictionary-types"

interface EmptyWishlistViewProps {
  dir: "rtl" | "ltr"
  dictionary: Dictionary
}

export default function EmptyWishlistView({ dir, dictionary }: EmptyWishlistViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
          <Heart className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className={cn("text-2xl font-bold text-gray-900", dir === "rtl" && "text-right")}>
          {dictionary.wishlist.emptyWishlist}
        </h1>
        <p className={cn("text-gray-600", dir === "rtl" && "text-right")}>
          {dictionary.wishlist.emptyWishlistDescription}
        </p>
        <BackLink
          dir={dir}
          className="my-4"
          href="/products"
          text={dictionary.wishlist.startBrowsing}
        />
      </div>
    </div>
  )
}

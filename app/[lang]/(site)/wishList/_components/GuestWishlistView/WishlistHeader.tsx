import { CardHeader, CardTitle } from "@/components/shadcnUI/card"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import BackLink from "@/components/shared/BackLink"
import type { Dictionary } from "@/lib/i18n/dictionary-types"

interface WishlistHeaderProps {
  dir: "rtl" | "ltr"
  dictionary: Dictionary
  totalItems: number
}

export default function WishlistHeader({ dir, dictionary, totalItems }: WishlistHeaderProps) {
  return (
    <CardHeader>
      <CardTitle className={cn("flex items-center justify-between", dir === "rtl" && "flex-row-reverse")}>
        <span className="flex items-center gap-2">
          <Heart className="w-5 h-5 fill-current text-red-500" />
          {dictionary.wishlist.title} ({totalItems} {dictionary.wishlist.items})
        </span>
        <BackLink dir={dir} />
      </CardTitle>
    </CardHeader>
  )
}

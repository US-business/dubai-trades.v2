import { Card, CardContent } from "@/components/shadcnUI/card"
import { Heart, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"

interface InfoCardProps {
  dir: "rtl" | "ltr"
}

export default function InfoCard({ dir }: InfoCardProps) {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
      <CardContent className="pt-6">
        <div className={cn("space-y-4", dir === "rtl" && "text-right")}>
          <div className="flex items-start gap-3">
            <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">
                {dir === "rtl" ? "احفظ مفضلاتك" : "Save Your Favorites"}
              </h3>
              <p className="text-sm text-gray-600">
                {dir === "rtl"
                  ? "احتفظ بالمنتجات التي تعجبك لشرائها لاحقاً"
                  : "Keep the products you love for later purchase"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShoppingBag className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">
                {dir === "rtl" ? "أضف للسلة بسهولة" : "Easy Add to Cart"}
              </h3>
              <p className="text-sm text-gray-600">
                {dir === "rtl"
                  ? "انقل المنتجات من المفضلة إلى السلة بضغطة واحدة"
                  : "Move products from wishlist to cart with one click"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

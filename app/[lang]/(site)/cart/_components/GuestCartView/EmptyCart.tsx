import { ShoppingBag } from "lucide-react"
import BackLink from "@/components/shared/BackLink"

interface EmptyCartProps {
  dir: "rtl" | "ltr"
  dictionary: {
    cart: {
      emptyCart: string
      emptyCartDescription: string
      startShopping: string
    }
  }
}

export function EmptyCart({ dir, dictionary }: EmptyCartProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          {dictionary.cart.emptyCart}
        </h1>
        <p className="text-gray-600">
          {dictionary.cart.emptyCartDescription}
        </p>
        <BackLink dir={dir} className="my-4" href="/" text={dictionary.cart.startShopping} />
      </div>
    </div>
  )
}

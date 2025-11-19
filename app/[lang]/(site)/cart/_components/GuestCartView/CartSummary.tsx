import { Button } from "@/components/shadcnUI/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcnUI/card"
import { Separator } from "@/components/shadcnUI/separator"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface CartSummaryProps {
  dir: "rtl" | "ltr"
  totalPrice: number
  dictionary: {
    cart: {
      orderSummary: string
      subtotal: string
    }
    common: {
      total: string
      signIn: string
    }
  }
}

export function CartSummary({ dir, totalPrice, dictionary }: CartSummaryProps) {
  const router = useRouter()
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{dictionary.cart.orderSummary || "ملخص الطلب"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={cn("flex justify-between", dir === "rtl" && "flex-row-reverse")}>
            <span className="text-muted-foreground">{dictionary.cart.subtotal || "المجموع الفرعي"}</span>
            <span className="font-medium">EGP{totalPrice.toFixed(2)}</span>
          </div>
          <Separator />
          <div className={cn("flex justify-between font-bold text-lg", dir === "rtl" && "flex-row-reverse")}>
            <span>{dictionary.common.total || "الإجمالي"}</span>
            <span>EGP{totalPrice.toFixed(2)}</span>
          </div>
          
          {/* Message for guests to sign in */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center space-y-3">
            <p className="text-blue-900 font-medium">
              {dir === "rtl" 
                ? "💡 سجل دخولك لحفظ عربة التسوق والحصول على مزايا إضافية!"
                : "💡 Sign in to save your cart and get extra benefits!"}
            </p>
            <Button 
              onClick={() => router.push('/signin')}
              className="w-full"
            >
              {dictionary.common.signIn || "تسجيل الدخول"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

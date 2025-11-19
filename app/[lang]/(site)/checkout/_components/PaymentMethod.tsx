import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcnUI/card'
import { RadioGroup, RadioGroupItem } from '@/components/shadcnUI/radio-group'
import { CreditCard } from 'lucide-react'
import { type PaymentMethodProps } from './types'

export function PaymentMethod({ dir }: PaymentMethodProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">4</span>
                    </div>
                    <CreditCard className="w-5 h-5 text-primary" />
                    {dir === 'rtl' ? 'طريقة الدفع' : 'Payment Method'}
                </CardTitle>
                <CardDescription>
                    {dir === 'rtl' ? 'اختر طريقة الدفع المفضلة' : 'Choose your preferred payment method'}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RadioGroup defaultValue="cash" className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="cash" id="cash-payment" />
                        <input type="hidden" name="paymentMethod" value="cash" />
                        <label htmlFor="cash-payment" className="flex items-center gap-3 cursor-pointer">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 text-lg font-bold">$</span>
                            </div>
                            <div>
                                <div className="font-medium">
                                    {dir === 'rtl' ? 'الدفع عند الاستلام' : 'Cash on delivery'}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {dir === 'rtl' ? 'ادفع عند وصول الطلب' : 'Pay when your order arrives'}
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors opacity-50">
                        <RadioGroupItem value="card" id="card-payment" disabled />
                        <label htmlFor="card-payment" className="flex items-center gap-3 cursor-not-allowed">
                            <CreditCard className="w-10 h-10 text-blue-600" />
                            <div>
                                <div className="font-medium">
                                    {dir === 'rtl' ? 'بطاقة ائتمانية / خصم مباشر' : 'Credit / Debit card'}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {dir === 'rtl' ? 'قريبًا' : 'Coming soon'}
                                </div>
                            </div>
                        </label>
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
    )
}

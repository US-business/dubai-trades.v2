import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcnUI/card'
import { RadioGroup, RadioGroupItem } from '@/components/shadcnUI/radio-group'
import { Badge } from '@/components/shadcnUI/badge'
import { Truck, Zap } from 'lucide-react'
import { type ShippingMethodProps } from './types'

export function ShippingMethod({ dir, shippingMethod, onShippingMethodChange }: ShippingMethodProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">3</span>
                    </div>
                    <Truck className="w-5 h-5 text-primary" />
                    {dir === 'rtl' ? 'طريقة التوصيل' : 'Shipping Method'}
                </CardTitle>
                <CardDescription>
                    {dir === 'rtl' ? 'اختر طريقة التوصيل المناسبة' : 'Choose your preferred shipping method'}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RadioGroup
                    value={shippingMethod}
                    onValueChange={onShippingMethodChange}
                    className="space-y-4"
                >
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="contact" id="contact-shipping" />
                        <label htmlFor="contact-shipping" className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <Truck className="w-4 h-4 text-gray-500" />
                                        <span className="font-medium">
                                            {dir === 'rtl' ? 'التواصل مع العميل وتحديد تكلفة الشحن' : 'Contact customer to set shipping cost'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {dir === 'rtl' ? 'سيتم تحديد المدة والتكلفة بعد التواصل' : 'Time and cost determined after contact'}
                                    </p>
                                </div>
                                <Badge variant="secondary">
                                    {dir === 'rtl' ? 'لاحقًا' : 'TBD'}
                                </Badge>
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="express" id="express-shipping" />
                        <label htmlFor="express-shipping" className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-yellow-500" />
                                        <span className="font-medium">
                                            {dir === 'rtl' ? 'توصيل سريع' : 'Express Shipping'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {dir === 'rtl' ? '1-2 أيام عمل' : '1-2 business days'}
                                    </p>
                                </div>
                                <Badge variant="outline" className="font-semibold">
                                    200 {dir === 'rtl' ? 'ج.م' : 'EGP'}
                                </Badge>
                            </div>
                        </label>
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
    )
}

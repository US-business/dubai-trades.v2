import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcnUI/card'
import { Input } from '@/components/shadcnUI/input'
import { Label } from '@/components/shadcnUI/label'
import { Mail, Phone } from 'lucide-react'
import { type ContactInformationProps } from './types'

export function ContactInformation({ dir }: ContactInformationProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">1</span>
                    </div>
                    <Mail className="w-5 h-5 text-primary" />
                    {dir === 'rtl' ? 'معلومات التواصل' : 'Contact Information'}
                </CardTitle>
                <CardDescription>
                    {dir === 'rtl' ? 'أدخل بياناتك للتواصل معك' : 'Enter your contact details'}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            {dir === 'rtl' ? 'البريد الإلكتروني *' : 'Email *'}
                        </Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder={dir === 'rtl' ? 'example@email.com' : 'example@email.com'}
                            className="mt-1"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {dir === 'rtl' ? 'رقم الهاتف *' : 'Phone *'}
                        </Label>
                        <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            placeholder={dir === 'rtl' ? '+20 1234567890' : '+20 1234567890'}
                            className="mt-1"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

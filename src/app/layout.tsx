import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thermaguard - Skischoen warmhouden | Beste oplossing koude voeten skiën',
  description: 'Specialisten in verwarmde skischoenen en thermische bescherming. Waterdichte overschoenen voor skischoenen en warmte-isolerende hoes voor skischoenen. Tips voor warme voeten tijdens skiën.',
  keywords: 'skischoen warmhouden, bescherming skischoen, isolatie hoes voor skischoenen, koude voeten tijdens skiën, cold feet while skiing, hoes skischoenen, koude voeten wintersport, beste oplossing koude voeten skiën, tips voor warme voeten tijdens skiën, voordelen van skischoen warmer voor wintersport, koude tenen skischoenen oplossen, waterdichte overschoenen voor skischoenen, thermische overschoen voor skiboots, warmte-isolerende hoes voor skischoenen, overschoen tegen sneeuw in skischoenen, neopreen skischoen covers voor extra comfort, skischoen overtrek tegen koude tenen, ski boot cover voor natte omstandigheden, extra warme skischoen hoes voor kinderen, beste overschoen voor skiën in extreme kou',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon-thermaguard.ico" />
        
        {/* Touch Icons voor iOS en Android */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/thermaguard-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/thermaguard-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/thermaguard-logo.png" />
        
        {/* Meta tags voor social media */}
        <meta property="og:image" content="/images/thermaguard-logo.png" />
        <meta property="og:title" content="Thermaguard - Optimale warmte, duurzame bescherming" />
        <meta property="og:description" content="Specialisten in verwarmde skischoenen en thermische bescherming. Waterdichte overschoenen voor skischoenen en warmte-isolerende hoes voor skischoenen." />
        <meta property="og:url" content="https://thermaguard.nl" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Thermaguard - Optimale warmte, duurzame bescherming" />
        <meta name="twitter:description" content="Specialisten in verwarmde skischoenen en thermische bescherming. Waterdichte overschoenen voor skischoenen en warmte-isolerende hoes voor skischoenen." />
        <meta name="twitter:image" content="/images/thermaguard-logo.png" />
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0JYRSDTFDE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0JYRSDTFDE');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
} 
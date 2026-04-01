import "./globals.css"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export const metadata = {
  metadataBase: new URL("https://excite.limited"),
  title: "Excite! Innovation",
  description: "Premier digital product innovation company specializing in UIUX Research, Design & Software Engineering",
  
  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://excite.limited",
  },

  openGraph: {
    title: "Excite! Innovation",
    description:"Premier digital product innovation company specializing in UIUX Research, Design & Software Engineering",
    url: "https://excite.limited",
    siteName: "Excite! Innovation",
    type: "website",
    images: [
      {
        url: "/excite-website.png",
        width: 1200,
        height: 630,
        alt: "Excite! Innovation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Excite! Innovation",
    description:"Premier digital product innovation company specializing in UIUX Research, Design & Software Engineering",
    images: ["/excite-website.png"],
  },
};

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

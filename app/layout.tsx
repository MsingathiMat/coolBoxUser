import type { Metadata } from "next";
import { Inter, Just_Another_Hand } from "next/font/google";
import "./globals.css";
import { JotaiProvider } from "./AppDomain/Store/JotaiAtoms/JotaiProvider";

const jah = Just_Another_Hand({
  weight:'400',
  variable:'--jah',
  subsets: ["latin"]
})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      <body className={`${inter.className} ${jah.variable}` }>
        
        <JotaiProvider>
        {children}
        </JotaiProvider>
        </body>
    </html>
  );
}

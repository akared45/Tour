import "./globals.css";

import { AuthContextProvider } from "@/components/providers/contexts/auth-context";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>My Next App</title>
      </head>
      <body>
        <AuthContextProvider>
          <Toaster />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}

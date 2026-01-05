import "./globals.css";

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
          <Toaster />
          {children}
      </body>
    </html>
  );
}

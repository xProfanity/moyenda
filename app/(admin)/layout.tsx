import React from "react";

import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

interface AdminLayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <ClerkProvider>
      <html>
        <body>
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}

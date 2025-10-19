import React from "react";

import "../globals.css";

interface AdminLayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

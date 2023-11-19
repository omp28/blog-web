import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// RootLayout.js

import React from "react";

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;

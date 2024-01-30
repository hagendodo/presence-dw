import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Presence Dimensi Web",
  description:
    "Web presence for every activity in BSO Dimensi Web UIN Sunan Gunung Djati Bandung.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Presensi Dimensi Web",
  description:
    "Web presence for every activity in BSO Dimensi Web UIN Sunan Gunung Djati Bandung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

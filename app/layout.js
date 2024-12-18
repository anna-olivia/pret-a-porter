import "./globals.css";

export const metadata = {
  title: "webdev anna-olivia lebert-wietholtz",
  description: "Portfolio created and designed by anna-olivia lebert-wietholtz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}

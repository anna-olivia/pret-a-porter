import "./globals.css";

export const metadata = {
  title: "webdev anna-olivia lebert-wietholtz",
  description: "Portfolio created and designed by anna-olivia lebert-wietholtz",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

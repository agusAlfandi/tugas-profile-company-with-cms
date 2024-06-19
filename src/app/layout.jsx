import "../app/global.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyProvider from "./MyProvider";

export const metadata = {
  title: "Profile Company",
  description: "Profile Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </MyProvider>
    </html>
  );
}

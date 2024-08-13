import "./globals.css";
import ScrollToTop from "@/components/modules/scrollToTopBtn/ScrollToTop";

export const metadata = {
  title: "فروشگاه اینترنتی قهوه | SET Coffee - صفحه اصلی",
  describtion: "CoffeeShop App with AmiNoise - Next13",

  icons: {
    icon: "/images/coffee-svg-2.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-theme="light" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AFC | Adarsha Futanta Club",
  description: "Adarsha Futanta Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Link to the CSS file directly from the root */}
        <link rel="icon" href="/static/images/favicon.ico" />
        <link rel="stylesheet" href="/static/css/additional.css" />
        <link rel="stylesheet" href="/static/css/main.css" />
        {/* <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css" ></link>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" ></link> */}

      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

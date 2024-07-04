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
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css" ></link>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" ></link>

      </head>
      <body className={inter.className}>

        {children}
        <script defer="" noModule="" src="/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
        <script src="/static/chunks/webpack-59c5c889f52620d6.js" defer=""></script>
        <script src="/static/chunks/framework-2c79e2a64abdb08b.js" defer=""></script>
        <script src="/static/chunks/main-0ecb9ccfcb6c9b24.js" defer=""></script>
        {/* <script src="/static/chunks/pages/_app-6a77b8ac5e334f71.js" defer=""></script> */}
        <script src="/static/chunks/66-c8aedb1c7bcfa7a6.js" defer=""></script>
        <script src="/static/chunks/823-47d0141ce7cd7001.js" defer=""></script>
        <script src="/static/chunks/pages/index-two-a861bd78166c3e82.js" defer=""></script>
        <script src="/static/_2M1KmmBrJLZVl6J6lBR9/_buildManifest.js" defer=""></script>
        <script src="/static/_2M1KmmBrJLZVl6J6lBR9/_ssgManifest.js" defer=""></script>
        <script src="/static/chunks/pages/main.js" defer=""></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}

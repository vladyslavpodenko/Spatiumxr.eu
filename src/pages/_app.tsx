import type { AppProps } from "next/app";
import "@/styles/globals.css";
import '@/styles/Index.css';
import '@/styles/Footer.css';
import '@/styles/Navbar.css';
import '@/styles/Products.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return  <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

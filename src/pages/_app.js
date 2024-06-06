import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}

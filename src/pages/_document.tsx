import {Html, Head, Main, NextScript} from "next/document";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/x-icon" href="/icon.ico"></link>
                <title>Spatium</title>
            </Head>
            <body>
            <Navbar/>
            <Main/>
            <NextScript/>
            <Footer/>
            </body>
        </Html>
    );
}

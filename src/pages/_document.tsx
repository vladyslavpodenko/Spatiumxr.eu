import {Html, Head, Main, NextScript} from "next/document";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/x-icon" href="/icon.ico"></link>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

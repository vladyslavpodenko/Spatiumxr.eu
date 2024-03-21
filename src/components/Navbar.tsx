import Image from "next/image";
import {images} from "@/constants";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav>
            <Link href='/' className="nav-logo">
                <Image src={images.Tools} alt="Logo" className="logo-image"/>
                <div id="logo">Spatium</div>
            </Link>
            <div id="nav-links">
                <Link href="/products" className="nav-link">Products</Link>
                <Link href="/pricing" className="nav-link">Pricing</Link>
                <Link href="https://calendly.com/vladsolop/15min" className="nav-button">Book a call</Link>
            </div>
        </nav>
    )
}
export default Navbar;
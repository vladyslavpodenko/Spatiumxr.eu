import Image from "next/image";
import {images} from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav>
            <Link href='/' className="nav-logo">
                <Image src={images.Tools} alt="Logo" className="logo-image"/>
                <div className="logo">Gmail autopilot</div>
            </Link>
            <div className="nav-links">
                <Link href="/products" className="nav-link"></Link>
                <div onClick={(e) => {
                    e.stopPropagation();
                    const scroll=document.getElementById('development-packages')
                    if(scroll!==null) {
                        scroll.scrollIntoView({behavior: 'smooth'});
                    }
                }} className="nav-link">Pricing
                </div>
                <Link href="https://calendly.com/vladsolop/15min" className="nav-button">Book a demo</Link>
            </div>
        </nav>
    )
}
export default Navbar;

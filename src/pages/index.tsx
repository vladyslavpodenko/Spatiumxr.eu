import Link from "next/link";
import React from "react";
import {images} from "@/constants";
import Image from "next/image";
import FaqItem from "@/components/FaqItem";

export default function Home() {
    return (
        <>
            <title>Sales Autopilot for Gmail</title>
            <header>
                <h1>Create AI autopilot for Gmail</h1>
                <p>AI copilot will handle repetitive questions, requests, and follow-ups based on your simple instructions and company knowledge base.</p>
                <div className="header-buttons">
                    <a onClick={(e) => {
                        e.preventDefault();
                        // @ts-ignore
                        document.getElementById('development-packages').scrollIntoView({behavior: 'smooth'});
                    }} className="button">Get an early access</a>
                    <a href="https://calendly.com/vladsolop/15min" className="button__book">Book a demo {">"}</a>
                </div>
            </header>


            <section className="problems-section">
                <div className="sections__header">
                    <Image src={images.Problem} alt="Proble"/>
                    <>The Problem</>
                </div>
                <h2 className="section-title">As the number of leads has grown it has become harder to communicate</h2>
                <div className="problems">
                    <div className="problem-item">
                        <div className="icon-container">
                            <Image src={images.Rocket} alt="Problem 1"/>
                        </div>
                        <p>You need to address numerous repetitive questions about your product, processes, and organization.</p>
                    </div>
                    <div className="problem-item">
                        <div className="icon-container">
                            <Image src={images.Alarm} alt="Problem 2"/>
                        </div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>Your clients expect prompt responses and assurance that you are attending to their requests.</p>
                    </div>
                    <div className="problem-item">
                        <div className="icon-container">
                            <Image src={images.Controller} alt="Problem 3"/>
                        </div>
                        <p>Your answers should follow personal and company communication standards.</p>
                    </div>
                </div>
            </section>


            <section className="solutions-section">
                <div className="sections__header">
                    <Image src={images.Solution} alt="Solution"/>
                    Solution
                </div>
                <h2 className="section-title">We created an AI copilot that can:</h2>
                <div className="solutions">
                    <div className="solution-item">
                        <div className="icon-container">
                            <Image src={images.Vision} alt="Problem 1"/>
                        </div>
                        <p>Answer client questions using your company’s knowledge base or past responses to similar inquiries.</p>
                    </div>
                    <div className="solution-item">
                        <div className="icon-container">
                            <Image src={images.Ideavalidation} alt="Problem 2"/>
                        </div>
                        <p>Notify clients that their requests are being processed or schedule calls automatically, without your intervention.</p>
                    </div>
                    <div className="solution-item">
                        <div className="icon-container">
                            <Image src={images.NewPlatform} alt="Problem 3"/>
                        </div>
                        <p>Follow instructions accurately and mimic your communication style.</p>
                    </div>
                </div>
            </section>

            <section id="development-packages" className="development-packages">
                <div className="sections__header">
                    <Image src={images.Pricing} alt="Pricing"/>
                    Pricing
                </div>
                <h2>Exclusive Offer: First 30 Users Receive 6 Months Free!</h2>
                <div className="development-packages-cards">
                    <div className="package-card">
                        <h1>For Individuals:</h1>
                       
                        <h5 className="package-card-first">-Ready to use application</h5>
                        <h5>-Immersive experience</h5>
                        <h5>-Windows and Volumes based features</h5>
                        <h5>-Adaptation of your Quest application</h5>
                        <h5>-Development on Unity (+550$)</h5>
                        <h5 style={{color:'black'}}>3950$<p>, one-time, done in 8 weeks</p></h5>
                        <Link href="/packages" className="button">Book an intro call</Link>
                    </div>
                    <div className="package-card">
                        <h1>PoC development for exciting product ideas</h1>
                        <h4>For startups that have an idea of a product for Apple Vision</h4>
                        <h5>-Prototype that will show the potential of your idea</h5>
                        <h5>-Immersive experience</h5>
                        <h5>-Windows and Volumes based features</h5>
                        <h5>-Two consultation sessions</h5>
                        <h5>-Discount on future services</h5>
                        <h5>-Optimization and testing</h5>
                        <h5 style={{color: 'black'}}>Free<p>, done in 6 weeks</p></h5>
                        <Link href="/discuss" className="button">Discuss the idea</Link>
                    </div>
                </div>
            </section>


            <section className="faq-section">
                <h2 className="faq-title">Frequently asked questions</h2>
                <div className="faq-container">
                    <FaqItem
                        question="What is your experience with the VisionOS application development?"
                        answer="We are early adopters of Vison OS and possess experience in augmented reality (AR) and virtual reality(VR) technologies, particularly on Apple's Vision Pro platform."
                    />
                    <FaqItem
                        question="Do you have an experience with Unity or ARkit?"
                        answer="We have some with Unity and no experience with ARkit"
                    />
                    <FaqItem
                        question="Why are you offering free PoC development to early-stage startups with an exciting idea?"
                        answer="We believe in a future of spatial computing and see as our goal to help this ecosystem to create products that will use full XR potential. Maybe its a right time to create a new Uber or AirBnb."
                    />
                </div>
            </section>
        </>
    );
}

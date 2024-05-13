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
                    }} href="https://jbd22dr7xmp.typeform.com/to/kT5IuWDP" className="button">Get an early access</a>
                 <a onClick={(e) => {
                        e.preventDefault();
                        // @ts-ignore
                        document.getElementById('development-packages').scrollIntoView({behavior: 'smooth'});
            
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
                        <h4>SDR, AE, SE, BDR etc</h4>
                        <h5 className="package-card-first">-Onboarding call</h5>
                        <h5>-Assistance with knowledge base setup</h5>
                        <h5>-Ability to connect one email</h5>
                        <h5>-Unlimited messages</h5>
                        <h5>-Customizable instructions</h5>
                        <h5 style={{color:'black'}}>Free<p>, Start Using in Less Than 20 minutes</p></h5>
                        <Link href="/packages" className="button">Get an early access</Link>
                    </div>
                    <div className="package-card">
                        <h1>For Organizations:</h1>
                        <h4>For SaaS Companies and Cloud Solutions Resellers</h4>
                        <h5>-Onboarding call</h5>
                        <h5>-Assistance with knowledge base setup</h5>
                        <h5>-Unlimited support</h5>
                        <h5>-Unlimited seats</h5>
                        <h5>-Customizable instructions</h5>
                        <h5>-Future access to software integrations</h5>
                        <h5 style={{color: 'black'}}>Free<p>, Integrate in Less Than 2 Hours</p></h5>
                        <Link href="/discuss" className="button">Get an early access</Link>
                    </div>
                </div>
            </section>


            <section className="faq-section">
                <h2 className="faq-title">Frequently asked questions</h2>
                <div className="faq-container">
                    <FaqItem
                        question="How do I create a Gmail Copilot?"
                        answer="1. Connect your copilot to your email.
                        2. Enter your name and inform us about your product and company details that the sales assistant should know."
                    />
                    <FaqItem
                        question="How can I choose which threads the copilot will handle?"
                        answer="Simply label the threads as Assistant Active. The co-pilot will then manage these communications on your behalf."
                    />
                    <FaqItem
                        question="Will my manager know that I am using Gmail Copilot?"
                        answer="No, enjoy your flexibility!"
                    />
                </div>
            </section>
        </>
    );
}

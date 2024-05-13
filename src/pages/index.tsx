import Link from "next/link";
import React from "react";
import {images} from "@/constants";
import Image from "next/image";
import FaqItem from "@/components/FaqItem";

export default function Home() {
    return (
        <>
            <head>
                <title>Sales Autopilot for Gmail: AI-powered Copilot to Streamline Email Tasks</title>
                <meta name="description" content="Streamline your email tasks with our AI-powered copilot for Gmail. Handle repetitive questions, requests, and follow-ups effortlessly using your company's knowledge base." />
                <meta name="keywords" content="AI autopilot, Gmail autopilot, email automation, Inbox, AI email assistant, GPT, Gmail" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Best Regards AI" />
                <meta property="og:title" content="AI Sales Autopilot for Gmail" />
                <meta property="og:description" content="Streamline your email tasks with our AI-powered copilot for Gmail. Handle repetitive questions, requests, and follow-ups effortlessly using your company's knowledge base." />
                <meta property="og:url" content="https://emailaicopilot.com/" />
                <meta property="og:type" content="https://emailaicopilot.com/" />
                <meta name="twitter:title" content="Sales Autopilot for Gmail: AI-powered Copilot to Streamline Email Tasks" />
                <meta name="twitter:description" content="Streamline your email tasks with our AI-powered copilot for Gmail. Handle repetitive questions, requests, and follow-ups effortlessly using your company's knowledge base." />
            </head>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VYZRN0PNC6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VYZRN0PNC6');
</script>
            
            <header>
                <h1>Create AI autopilot for Gmail</h1>
                <p>AI copilot will handle repetitive questions, requests, and follow-ups based on your simple instructions and company knowledge base.</p>
                <div className="header-buttons">
                    <a onClick={(e) => {
                        e.preventDefault();
                        // @ts-ignore
                        document.getElementById('development-packages').scrollIntoView({behavior: 'smooth'});
                    }} href="https://jbd22dr7xmp.typeform.com/to/kT5IuWDP" className="button">Get an early access</a>
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
                            🤔
                        </div>
                        <p>You need to address numerous repetitive questions about your product, processes, and organization.</p>
                    </div>
                    <div className="problem-item">
                        <div className="icon-container">
                            🤨
                        </div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>Your clients expect prompt responses and assurance that you are attending to their requests.</p>
                    </div>
                    <div className="problem-item">
                        <div className="icon-container">
                            🤐
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
                            🙌
                        </div>
                        <p>Answer client questions using your company’s knowledge base or past responses to similar inquiries.</p>
                    </div>
                    <div className="solution-item">
                        <div className="icon-container">
                            🤝
                        </div>
                        <p>Notify clients that their requests are being processed or schedule calls automatically, without your intervention.</p>
                    </div>
                    <div className="solution-item">
                        <div className="icon-container">
                            😉
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
                        <h4>SDRs, Account Executives, and Sales Executives</h4>
                        <h5>-Onboarding call</h5>
                        <h5>-Assistance with knowledge base setup</h5>
                        <h5>-Ability to connect one email</h5>
                        <h5>-Unlimited messages</h5>
                        <h5>-Customizable instructions</h5>
                        <h5 style={{color:'black'}}>Free<p>, Integrate in Under 20 Minutes</p></h5>
                        <Link href="https://jbd22dr7xmp.typeform.com/to/kT5IuWDP" className="button">Get an early access</Link>
                    </div>
                    <div className="package-card">
                        <h1>For Organizations:</h1>
                        <h4>SaaS Companies and Cloud Solutions Resellers</h4>
                        <h5>-Onboarding call</h5>
                        <h5>-Assistance with knowledge base setup</h5>
                        <h5>-Unlimited support</h5>
                        <h5>-Unlimited seats</h5>
                        <h5>-Customizable instructions</h5>
                        <h5 style={{color: 'black'}}>Free<p>, Integrate in Less Than 2 Hours</p></h5>
                        <Link href="https://jbd22dr7xmp.typeform.com/to/kT5IuWDP" className="button">Get an early access</Link>
                    </div>
                </div>
            </section>


            <section className="faq-section">
                <h2 className="faq-title">Frequently asked questions</h2>
                <div className="faq-container">
                    <FaqItem
                        question="How do I create a Gmail Copilot?"
                        answer="Connect copilot to your email. 
                        Enter your name, Calendly link, and product/company details for the sales assistant."
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

import React from "react";
import "../styles/pages/_membership.scss";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Title from "../components/ui/Title";

const plans = [
    {
        name: "solfany",
        price: "$20/mo",
        features: ["Brands: 1", "Storage: 5GB", "AI Generated Images: 50", "Published Posts: 50", "Editors: 1", "AI Ideas: 1"],
        button: "Try Starter for Free"
    },
    {
        name: "Growth Plan",
        price: "$30/mo",
        features: ["Brands: 5", "Storage: 25GB", "AI Generated Images: 200", "Published Posts: 500", "Editors: 10", "AI Ideas: 10"],
        button: "Try Growth for Free",
        popular: true
    },
    {
        name: "Professional Plan",
        price: "$150/mo",
        features: ["Brands: 30", "Storage: 100GB", "AI Generated Images: 500", "Published Posts: Unlimited", "Editors: Unlimited", "AI Ideas: Unlimited"],
        button: "Try Professional for Free"
    },
    {
        name: "Custom",
        price: "Enterprise",
        features: ["Tailored Solutions", "Custom Storage", "Unlimited AI Generated Images", "Unlimited Published Posts", "Unlimited Editors", "Custom AI Ideas"],
        button: "Book Demo"
    }
];

const Membership = () => {
    return (

        <Container>
            <Section>
                <Title>플랜을 선택하세요!</Title>
                <p className="subtitle">Build your social presence for your entire team with STORI for free.</p>
                <div className="toggle-container">
                    <button className="toggle-button">Monthly</button>
                    <button className="toggle-button">Annually <span className="discount">20% OFF</span></button>
                </div>
                <div className="plans-container">
                    {plans.map((plan, index) => (
                        <div key={index} className={`plan-card ${plan.popular ? "popular" : ""}`}>
                            <h2>{plan.name}</h2>
                            <p className="price">{plan.price}</p>
                            <ul>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <button className="plan-button">{plan.button}</button>
                        </div>
                    ))}
                </div>
                <p className="footer-note">Plan automatically renews until canceled. No commitment. Cancel anytime. Get a full refund within 7 days of payment.</p>
            </Section>
        </Container>
    );
};

export default Membership;

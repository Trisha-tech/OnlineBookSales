import React, { useState } from 'react';

const FAQ = () => {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            question: "What is this website about?",
            answer: "This website provides information about online book sales."
        },
        {
            question: "How can I contact support?",
            answer: "You can contact support via the contact form available on the website."
        },
        {
            question: "What types of books are available?",
            answer: "We offer a wide range of genres including fiction, non-fiction, educational, and children's books."
        },
        {
            question: "How do I place an order?",
            answer: "To place an order, simply browse our catalog, select the book you want, and follow the checkout process."
        },
        {
            question: "Can I return a book?",
            answer: "Yes, you can return a book within 30 days of purchase if it's in original condition."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to select countries. Please check our shipping policy for more details."
        },
        {
            question: "Is there a membership program?",
            answer: "Yes, we have a membership program that offers discounts and early access to new arrivals. Sign up for more information."
        },
        {
            question: "How can I track my order?",
            answer: "After placing an order, you will receive a confirmation email with tracking information."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including credit cards, PayPal, and other online payment options."
        },
        {
            question: "How do I reset my password?",
            answer: "If you forget your password, click on 'Forgot Password?' at the login page, and follow the instructions."
        },
    ];

    const toggleFAQ = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section id="faq">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
                    {open === index && <p>{faq.answer}</p>}
                </div>
            ))}
        </section>
    );
};

export default FAQ;

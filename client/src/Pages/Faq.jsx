import React, { useState,useEffect } from 'react';
import Preloader from '../Components/Preloader';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Online Book Sales?',
      answer:
        'Online Book Sales is an e-commerce platform that offers a wide variety of books for purchase online. Our goal is to provide book lovers with a convenient way to browse and buy books from the comfort of their homes.',
    },
    {
      question: 'How do I register for an account?',
      answer:
        'To register for an account:\n\n1. Click on the \'Register\' button on the homepage.\n2. Fill in the required details such as your name, email, and password.\n3. Submit the registration form.\n',
    },
    {
      question: 'How do I log in to my account?',
      answer:
        'To log in:\n\n1. Click on the \'Login\' button on the homepage.\n2. Enter your registered email and password.\n3. Click \'Submit\' to access your account.',
    },
    {
      question: 'What types of books are available for purchase?',
      answer:
        'We offer a vast catalog of books across various genres, including:\n\n- Fiction\n- Non-fiction\n- Science Fiction\n- Romance\n- Mystery & Thriller\n- Biographies\n- Self-help\n- Children\'s Books\n- Academic & Educational Books',
    },
    {
      question: 'How do I add books to my shopping cart?',
      answer:
        'To add books to your shopping cart:\n\n1. Browse through our catalog and select the book you wish to purchase.\n2. Click on the \'Add to Cart\' button on the book\'s detail page.\n3. You can continue shopping or proceed to checkout.',
    },
    {
      question: 'How do I purchase the books in my shopping cart?',
      answer:
        'To purchase books:\n\n1. Go to your shopping cart by clicking the cart icon on the top right corner.\n2. Review the items in your cart.\n3. Click \'Checkout\' to proceed.\n4. Enter your shipping and payment details.\n5. Confirm your order to complete the purchase.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept a variety of payment methods, including:\n\n- Credit/Debit Cards (Visa, MasterCard, American Express)\n- PayPal\n- Bank Transfers\n- Digital Wallets',
    },
    {
      question: 'How do I track my order?',
      answer:
        'To track your order:\n\n1. Log in to your account.\n2. Go to \'My Orders\' section.\n3. Select the order you want to track.\n4. You will find the tracking information and order status.',
    },
    {
      question: 'Can I cancel or modify my order?',
      answer:
        'To cancel or modify your order:\n\n1. Log in to your account.\n2. Go to \'My Orders\' section.\n3. Select the order you wish to cancel or modify.\n4. Click \'Cancel Order\' or \'Modify Order\' and follow the instructions.\n\nNote that cancellations and modifications may only be possible before the order is shipped.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'For any queries or support:\n\n1. Visit the \'Contact Us\' page on our website.\n2. Fill out the contact form with your query.\n3. Our support team will get back to you within 24-48 hours.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
   useEffect(()=>{
    window.scrollTo(0,0)
   },[])
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };


  return (
    <>
    <Preloader />
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">FAQ</h2>
      <dl className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 text-left focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`h-6 w-6 transition-transform duration-500 transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={openIndex === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                  />
                </svg>
              </div>
            </button>
            {openIndex === index && (
              <p className="p-4 text-base text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </dl>
    </div>
    </>
  );
};

export default FAQ;



import React, { useEffect } from 'react';
// import styled from 'styled-components';
import Preloader from '../Components/Preloader';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Preloader />
      <div className="py-8 mb-5 sm:w-[90vw] dark:text-gray-300 justify-start mt-10 w-full max-w-screen-lg mx-auto">
        <div className='text-center'>
          <div className='privacy'>
            <h1 className='text-4xl font-bold dark:text-gray-200 mb-6'>Privacy Policy</h1>
            <section className='text-left'>
              <p>Last updated: August 8, 2024</p>
              <p>Welcome to Online Book Sales - Book4U. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regard to your personal information, please contact us <a href="mailto:supportbook4u@onlinebooksales.com">supportbook4u@onlinebooksales.com.</a></p>
            </section>
            <section className='text-left'>
              <h2>Information We Collect</h2>
              <p>We collect personal information that you provide to us, such as your name, address, contact information, and payment details. We collect this information when you register for our services, make a purchase, or otherwise interact with our website.</p>
            </section>
            <section className='text-left'>
              <h2>How We Use Your Information</h2>
              <p>We use the personal information we collect to process transactions, manage your orders, and communicate with you about our products and services. We may also use this information for customer support, marketing purposes, and to improve our website and services.</p>
            </section>
            <section className='text-left'>
              <h2>Sharing Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website and processing payments.</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to a valid request from law enforcement or other government authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our company, your information may be transferred as part of the transaction.</li>
              </ul>
            </section>
            <section className='text-left'>
              <h2>Security of Your Information</h2>
              <p>We implement a variety of security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.</p>
            </section>
            <section className='text-left'>
              <h2>Contact Us</h2>
              <p>If you have any questions or comments about this privacy policy, please contact us at: <a href="mailto:supportbook4u@onlinebooksales.com">supportbook4u@onlinebooksales.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

// const PolicyWrapper = styled.div`
//   padding: 20px;
//   max-width: 800px;
//   margin: 0 auto;
//   color: #333;
//   line-height: 1.6;
//   margin-top: -65px;

  
//   h1 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     font-weight: bold;
//     color: #002147;
//   }

//   h2 {
//     font-size: 1.5rem;
//   }

//   p {
//     margin: 10px 0;
//   }

//   ul {
//     list-style-type: disc;
//     margin-left: 20px;
//   }

//   li {
//     margin: 10px 0;
//   }
// `;

export default PrivacyPolicy;

import React, { useEffect } from 'react';
import Preloader from '../Components/Preloader';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className="py-8 mb-5 sm:w-[90vw] justify-start mt-10 w-full max-w-screen-lg mx-auto text-black dark:text-gray-200 my-12">
        <div className='text-center'>
          <div className='policy'>
            <h1 className='text-center text-4xl font-bold mb-8'>Cancellations/Returns</h1>
            <section className='text-left my-4'>
              <p>Last updated: August 8, 2024</p>
              <p>Welcome to Online Book Sales - Book4U. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regard to your personal information, please contact us at <a href="mailto:supportbook4u@onlinebooksales.com">supportbook4u@onlinebooksales.com</a>.</p>
            </section>

            <section className='text-left my-4'>
              <h2>Cancellations & Returns</h2>
              <p>We understand that sometimes you may need to cancel an order or return a product. Below are the details of our cancellation and return policy:</p>
              <ul>
                <li><strong>Order Cancellations:</strong> Orders can be canceled within 24 hours of placement. After this window, cancellations may not be accepted if the book has already been shipped.</li>
                <li><strong>Returns:</strong> You can return books within 14 days of delivery. Returned books must be in their original condition, without any damage or markings. Please contact our support team to initiate a return process.</li>
                <li><strong>Non-returnable Items:</strong> Certain items, such as digital or e-books, are not eligible for returns. Please ensure you review your purchase before completing the order.</li>
                <li><strong>Refund Process:</strong> Refunds for canceled or returned items will be processed within 7-10 business days after we receive the returned book in good condition.</li>
                <li><strong>Return Shipping Costs:</strong> Customers are responsible for return shipping fees unless the return is due to a defect or an error on our part.</li>
              </ul>
              <p>If you have any further questions regarding cancellations or returns, feel free to contact us at <a href="mailto:supportbook4u@onlinebooksales.com">supportbook4u@onlinebooksales.com</a>.</p>
            </section>

            <section className='text-left my-4'>
              <h2>Information We Collect</h2>
              <p>We collect personal information that you provide to us, such as your name, address, contact information, and payment details. We collect this information when you register for our services, make a purchase, or otherwise interact with our website.</p>
            </section>

            <section className='text-left my-4'>
              <h2>How We Use Your Information</h2>
              <p>We use the personal information we collect to process transactions, manage your orders, and communicate with you about our products and services. We may also use this information for customer support, marketing purposes, and to improve our website and services.</p>
            </section>

            <section className='text-left my-4'>
              <h2>Sharing Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website and processing payments.</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to a valid request from law enforcement or other government authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our company, your information may be transferred as part of the transaction.</li>
              </ul>
            </section>

            <section className='text-left my-4'>
              <h2>Security of Your Information</h2>
              <p>We implement a variety of security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.</p>
            </section>

            <section className='text-left my-4'>
              <h2>Contact Us</h2>
              <p>If you have any questions or comments about this privacy policy or our cancellation and return policies, please contact us at <a href="mailto:supportbook4u@onlinebooksales.com">supportbook4u@onlinebooksales.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

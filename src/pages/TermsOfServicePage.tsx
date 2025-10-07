import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">Terms of Service</h1>
        <div className="mt-8 prose prose-lg text-gray-600 mx-auto">
          <p>
            Welcome to Guggulr Global Foods! These Terms of Service ("Terms") govern your use of our website and the
            services we offer. By accessing or using our website, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8">1. Use of Our Website</h2>
          <p>
            You may use our website for lawful purposes only. You agree not to use our website:
          </p>
          <ul className="list-disc list-inside">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate Guggulr Global Foods, a Guggulr Global Foods employee, another user, or any other person or entity.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8">2. Intellectual Property</h2>
          <p>
            The content on our website, including text, graphics, logos, images, and software, is the property of
            Guggulr Global Foods and is protected by copyright and other intellectual property laws. You may not
            reproduce, distribute, modify, or create derivative works of any content on our website without our prior
            written consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8">3. Disclaimer of Warranties</h2>
          <p>
            Our website is provided "as is" and "as available" without any warranties of any kind, either express or
            implied. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other
            harmful components.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8">4. Limitation of Liability</h2>
          <p>
            In no event shall Guggulr Global Foods be liable for any damages whatsoever, including but not limited to
            any direct, indirect, special, incidental, consequential, or punitive damages, arising out of or in
            connection with your use of our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8">5. Changes to These Terms</h2>
          <p>
            We may revise these Terms at any time by posting the revised Terms on our website. You are expected to
            check this page from time to time to take notice of any changes we made, as they are binding on you.
          </p>

          <p>This policy is effective as of 1 August 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

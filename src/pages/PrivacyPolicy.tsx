import { PolicyLayout } from '@/components/PolicyLayout';

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="July 2, 2025">
      <h2>1. Information We Collect</h2>
      <p>We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include:</p>
      <ul>
        <li>Name and contact information</li>
        <li>Email address</li>
        <li>Company name</li>
        <li>Payment information</li>
        <li>Any other information you choose to provide</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We may use the information we collect for various purposes, including to:</p>
      <ul>
        <li>Provide, maintain, and improve our services</li>
        <li>Process transactions and send related information</li>
        <li>Send you technical notices and support messages</li>
        <li>Respond to your comments and questions</li>
        <li>Monitor and analyze trends and usage</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>We do not share your personal information with third parties except as described in this policy. We may share information with:</p>
      <ul>
        <li>Service providers who perform services on our behalf</li>
        <li>Law enforcement or other government officials, in response to a verified request</li>
        <li>Other parties in connection with a company transaction</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

      <h2>5. Your Rights</h2>
      <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
      <ul>
        <li>Access to your personal information</li>
        <li>Correction of inaccurate information</li>
        <li>Deletion of your information</li>
        <li>Restriction of processing</li>
        <li>Data portability</li>
      </ul>

      <h2>6. Changes to This Policy</h2>
      <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

      <h2>7. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@socialsync.example.com" className="text-primary hover:underline">privacy@socialsync.example.com</a>.</p>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;

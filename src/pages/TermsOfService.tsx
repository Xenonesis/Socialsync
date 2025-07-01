import { PolicyLayout } from '@/components/PolicyLayout';

const TermsOfService = () => {
  return (
    <PolicyLayout title="Terms of Service" lastUpdated="July 2, 2025">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>

      <h2>2. Description of Service</h2>
      <p>We provide digital marketing and web development services including but not limited to website design, social media management, and search engine optimization.</p>

      <h2>3. User Responsibilities</h2>
      <p>As a user of our services, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Maintain the security of your account credentials</li>
        <li>Not use our services for any illegal or unauthorized purpose</li>
        <li>Comply with all applicable laws and regulations</li>
      </ul>

      <h2>4. Payment Terms</h2>
      <p>Fees for our services are as described on our website or in a separate agreement. Payment is due as specified in your service agreement.</p>

      <h2>5. Intellectual Property</h2>
      <p>All content and materials available on our website and through our services, including but not limited to text, graphics, logos, and software, are the property of Social Sync or its licensors.</p>

      <h2>6. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, Social Sync shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>

      <h2>7. Termination</h2>
      <p>We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including without limitation if you breach these Terms of Service.</p>

      <h2>8. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the updated terms on our website.</p>

      <h2>9. Governing Law</h2>
      <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Social Sync is established.</p>

      <h2>10. Contact Information</h2>
      <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@sync-mentor.com" className="text-primary hover:underline">legal@sync-mentor.com</a>.</p>
    </PolicyLayout>
  );
};

export default TermsOfService;

import { PolicyLayout } from '@/components/PolicyLayout';

const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="July 2, 2025">
      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the site owners.</p>

      <h2>2. How We Use Cookies</h2>
      <p>We use cookies for several purposes, including:</p>
      <ul>
        <li>Essential cookies: Necessary for the website to function properly</li>
        <li>Performance cookies: Help us understand how visitors interact with our website</li>
        <li>Functionality cookies: Enable enhanced functionality and personalization</li>
        <li>Targeting cookies: Used to deliver relevant content and advertisements</li>
      </ul>

      <h2>3. Types of Cookies We Use</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Strictly Necessary Cookies</h3>
          <p>These cookies are essential for the website to function and cannot be switched off in our systems.</p>
        </div>
        <div>
          <h3 className="font-semibold">Performance Cookies</h3>
          <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
        </div>
        <div>
          <h3 className="font-semibold">Functional Cookies</h3>
          <p>These enable the website to provide enhanced functionality and personalization.</p>
        </div>
        <div>
          <h3 className="font-semibold">Targeting Cookies</h3>
          <p>These cookies may be set through our site by our advertising partners to build a profile of your interests.</p>
        </div>
      </div>

      <h2>4. Managing Your Cookie Preferences</h2>
      <p>You can manage your cookie preferences through your browser settings. Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.</p>

      <h2>5. Third-Party Cookies</h2>
      <p>We may also use various third-party cookies to report usage statistics of the service, deliver advertisements, and so on. These are set by third parties that we use for various services.</p>

      <h2>6. Changes to This Cookie Policy</h2>
      <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>

      <h2>7. Contact Us</h2>
      <p>If you have any questions about this Cookie Policy, please contact us at <a href="mailto:privacy@socialsync.example.com" className="text-primary hover:underline">privacy@socialsync.example.com</a>.</p>
    </PolicyLayout>
  );
};

export default CookiePolicy;

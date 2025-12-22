import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: December 22, 2025
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Sisimaro (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered workplace assistant service.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              By using Sisimaro, you consent to the data practices described in this policy. If you do not agree with this policy, please discontinue use of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              2. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              2.1 Information You Provide
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li><strong>Account Information:</strong> Name, email address, company name, job title, and password</li>
              <li><strong>Profile Data:</strong> Optional profile photo, bio, preferences, and settings</li>
              <li><strong>Communication Data:</strong> Messages, questions, and feedback you send to Sisimaro</li>
              <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through third-party providers)</li>
              <li><strong>Workplace Content:</strong> Documents, meeting notes, calendar events, and other content you share with Sisimaro</li>
            </ul>

            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              2.2 Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li><strong>Usage Data:</strong> How you interact with Sisimaro, features used, time spent, and queries made</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Log Data:</strong> Access times, error logs, and system activity</li>
              <li><strong>Cookies:</strong> Tracking technologies to remember preferences and analyze usage</li>
            </ul>

            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              2.3 Information from Third-Party Integrations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When you connect Sisimaro to workplace tools (Slack, Microsoft Teams, Google Workspace, etc.), we may access data you authorize, such as messages, files, calendar events, and contact information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li><strong>Provide the Service:</strong> Process queries, generate responses, search knowledge bases, and deliver AI assistance</li>
              <li><strong>Personalization:</strong> Customize your experience and improve relevance of responses</li>
              <li><strong>AI Model Training:</strong> Improve our AI models using anonymized and aggregated data (with opt-out available)</li>
              <li><strong>Service Improvement:</strong> Analyze usage patterns, fix bugs, and develop new features</li>
              <li><strong>Communication:</strong> Send service updates, security alerts, and support messages</li>
              <li><strong>Security:</strong> Detect fraud, prevent abuse, and protect our systems</li>
              <li><strong>Compliance:</strong> Meet legal obligations and enforce our Terms of Service</li>
              <li><strong>Analytics:</strong> Understand user behavior and measure effectiveness</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              4. How We Share Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We do not sell your personal information. We may share data in these circumstances:
            </p>
            
            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              4.1 Service Providers
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We work with trusted third parties who assist with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li>Cloud hosting and infrastructure (AWS, Google Cloud, etc.)</li>
              <li>Payment processing (Stripe, etc.)</li>
              <li>Analytics and monitoring</li>
              <li>Customer support tools</li>
            </ul>

            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              4.2 Within Your Organization
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              For enterprise accounts, authorized team members and administrators may access shared knowledge, meeting notes, and analytics according to your organization&apos;s permissions.
            </p>

            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              4.3 Legal Requirements
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We may disclose information if required by law, court order, or government request, or to protect rights, safety, and security.
            </p>

            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              4.4 Business Transfers
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If Sisimaro is acquired or merged, your information may be transferred to the new entity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              5. Data Retention
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We retain your information for as long as necessary to provide the Service and fulfill the purposes outlined in this policy. Specifically:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li><strong>Account Data:</strong> Retained while your account is active and for 90 days after deletion</li>
              <li><strong>Conversation History:</strong> Retained according to your organization&apos;s settings (default: 1 year)</li>
              <li><strong>Anonymized Data:</strong> May be retained indefinitely for AI training and analytics</li>
              <li><strong>Legal/Compliance Data:</strong> Retained as required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Encryption in transit (TLS/SSL) and at rest (AES-256)</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication (including multi-factor authentication)</li>
              <li>Employee training on data protection</li>
              <li>Incident response and breach notification procedures</li>
              <li>SOC 2 Type II compliance (in progress)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              However, no system is completely secure. We cannot guarantee absolute security but continuously work to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              7. Your Rights and Choices
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            
            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              7.1 GDPR Rights (EU/EEA)
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Opt out of data processing you previously consented to</li>
            </ul>

            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              7.2 CCPA Rights (California)
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li><strong>Know:</strong> Learn what personal information we collect and how it&apos;s used</li>
              <li><strong>Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt out of the sale of personal information (we do not sell data)</li>
              <li><strong>Non-Discrimination:</strong> Receive equal service regardless of exercising your rights</li>
            </ul>

            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              7.3 Marketing Communications
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              You can opt out of marketing emails by clicking &quot;unsubscribe&quot; in any email or updating your preferences in account settings.
            </p>

            <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
              7.4 AI Training Opt-Out
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Enterprise customers can opt out of having their data used for AI model training. Contact us to enable this setting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Required for authentication and security</li>
              <li><strong>Analytics Cookies:</strong> Understand usage patterns (Google Analytics, etc.)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You can manage cookie preferences in your browser settings. Disabling cookies may limit Service functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Sisimaro operates globally. Your data may be transferred to and processed in countries outside your jurisdiction. We use standard contractual clauses (SCCs) and other safeguards to ensure adequate protection in accordance with GDPR and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Sisimaro is not intended for children under 16 (or under 13 in the U.S.). We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the data immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              11. Third-Party Links
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Sisimaro may contain links to third-party websites or services. We are not responsible for their privacy practices. Please review their privacy policies before providing information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes via email or through the Service. The &quot;Last Updated&quot; date at the top indicates when the policy was last revised. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              13. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <p className="text-gray-900 dark:text-white font-medium mb-2">Sisimaro</p>
              <p className="text-gray-600 dark:text-gray-400 mb-1">Email: founders@sisimaro.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              14. Supervisory Authority
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you are located in the EU/EEA and believe we have not adequately addressed your privacy concerns, you have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: December 22, 2025
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              By accessing or using Sisimaro (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Sisimaro provides an AI-powered workplace assistant that helps teams access knowledge, manage meetings, automate tasks, and make informed decisions. The Service includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Natural language AI chat interface</li>
              <li>Knowledge management and search</li>
              <li>Meeting transcription and note-taking</li>
              <li>Task automation and research capabilities</li>
              <li>Integration with workplace tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              3. User Accounts and Registration
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              To use Sisimaro, you must:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You are responsible for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              4. Acceptable Use Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Use the Service for any illegal purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Scrape, copy, or replicate our AI models or proprietary technology</li>
              <li>Use the Service to generate spam, harassment, or misleading content</li>
              <li>Share or resell your access to the Service without authorization</li>
              <li>Violate any third-party rights, including intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              5. AI and Content Generation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Sisimaro uses artificial intelligence to provide responses and generate content. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li>AI-generated content may not always be accurate or complete</li>
              <li>You are responsible for verifying important information before acting on it</li>
              <li>Sisimaro does not provide legal, financial, or medical advice</li>
              <li>You retain ownership of your input data and resulting outputs</li>
              <li>We may use anonymized interaction data to improve our AI models</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              6. Data and Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Your use of Sisimaro is also governed by our Privacy Policy. We take data protection seriously and implement appropriate security measures. By using the Service, you consent to the collection and use of your data as described in our Privacy Policy.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              For enterprise customers, separate data processing agreements (DPAs) may apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              7. Subscription and Payment Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              <strong>Billing:</strong> Subscriptions are billed in advance on a recurring basis (monthly or annually). You authorize us to charge your payment method on file.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              <strong>Price Changes:</strong> We may modify subscription prices with 30 days&apos; notice. Continued use after notice constitutes acceptance of new pricing.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              <strong>Cancellation:</strong> You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong>Refunds:</strong> Refunds are handled on a case-by-case basis. Contact founders@sisimaro.com for refund requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              <strong>Our Rights:</strong> Sisimaro and all related technology, content, and trademarks are owned by us or our licensors. You may not copy, modify, distribute, or reverse engineer any part of the Service.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong>Your Rights:</strong> You retain all rights to your input data and content. By using Sisimaro, you grant us a license to process your data solely to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              9. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We may suspend or terminate your access to Sisimaro at any time for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Any reason with or without notice</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Upon termination, your right to use the Service immediately ceases. We may delete your data after a reasonable retention period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              10. Disclaimers and Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              <strong>Service &quot;As Is&quot;:</strong> Sisimaro is provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted, error-free, or secure service.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or use.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              11. Indemnification
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You agree to indemnify and hold harmless Sisimaro and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              12. Dispute Resolution and Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              <strong>Governing Law:</strong> These Terms are governed by the laws of United States, without regard to conflict of law principles.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              <strong>Arbitration:</strong> Any disputes arising from these Terms or the Service shall be resolved through binding arbitration, except where prohibited by law.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis and waive any right to participate in class action lawsuits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              13. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update these Terms from time to time. We will notify you of material changes via email or through the Service. Continued use after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              14. Severability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              15. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <p className="text-gray-900 dark:text-white font-medium mb-2">Sisimaro</p>
              <p className="text-gray-600 dark:text-gray-400">Email: founders@sisimaro.com</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


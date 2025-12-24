import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Storyalizer",
  description: "Privacy Policy for Storyalizer - Author tools for uploading to storyalíz",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-[#B63E32] mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <p className="text-gray-700 mb-4">
              Welcome to storyalizer ("we," "our," or "us"). storyalizer provides author tools for uploading content to{" "}
              <a href="https://storyaliz.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                storyalíz
              </a>. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p className="text-gray-700">
              By using Storyalizer, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-[#B63E32] mb-3">2.1 Information You Provide</h3>
            <p className="text-gray-700 mb-4">
              You are required to sign in with Google to access your Google Docs when using storyalizer.
              However, we do not collect or retain any of your information, other than what is needed to provide storyalizer access to your Google Docs.
              Any Google Docs shared with you from storyalíz remain the property of storyalíz. Any Google Docs that you own remain yours.
            </p>

            <h3 className="text-xl font-medium text-[#B63E32] mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              We do not automatically collect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>To process and facilitate content uploads to storyalíz</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not share or sell your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
              the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have certain rights regarding your personal information:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Access:</strong> You can request access to your personal information</li>
              <li><strong>Correction:</strong> You can update or correct your information through your account settings</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal information, subject to legal obligations</li>
              <li><strong>Opt-out:</strong> You can opt-out of marketing communications by following the unsubscribe instructions</li>
              <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided in the Contact section below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies to store your authentication session, and for no other purpose. 
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@storyaliz.com" className="text-blue-600 hover:underline">
                  support@storyaliz.com
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <Link href="/" className="text-blue-600 hover:underline">
                  storyaliz.com
                </Link>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}


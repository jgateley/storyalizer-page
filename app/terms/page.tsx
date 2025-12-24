import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions - Storyalizer",
  description: "Terms and Conditions for Storyalizer - Author tools for uploading to storyalíz",
};

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-[#B63E32] mb-2">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to storyalizer ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to 
              and use of storyalizer, which provides author tools for preparing manuscripts for uploading to{" "}
              <a href="https://storyaliz.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                storyalíz
              </a>.
            </p>
            <p className="text-gray-700">
              By accessing or using storyalizer, you agree to be bound by these Terms. If you do not agree to these Terms, 
              you may not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">2. Permitted Use</h2>
            <p className="text-gray-700 mb-4">
              storyalizer grants authors and editors the right to use storyalizer solely for the purpose of preparing 
              manuscripts for uploading to storyalíz. This is the only permitted use of our service.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>No other use is permitted.</strong> You may not use storyalizer for any other purpose, including but 
              not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Preparing manuscripts for platforms other than storyalíz</li>
              <li>Using storyalizer as a general document editing or management tool</li>
              <li>Reselling, redistributing, or sublicensing access to storyalizer</li>
              <li>Reverse engineering, decompiling, or disassembling storyalizer</li>
              <li>Using storyalizer in any manner that violates applicable laws or regulations</li>
              <li>Using storyalizer to transmit malicious code, viruses, or harmful data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">3. User Accounts and Authentication</h2>
            <p className="text-gray-700 mb-4">
              To use storyalizer, you must sign in with Google to access your Google Docs. By signing in, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">4. Content Ownership and Rights</h2>
            <p className="text-gray-700 mb-4">
              <strong>Your Content:</strong> Any Google Docs that you own remain your property. You retain all rights, 
              title, and interest in your original content.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>storyalíz Content:</strong> Any Google Docs shared with you from storyalíz remain the property of 
              storyalíz. You may not claim ownership or rights to content owned by storyalíz.
            </p>
            <p className="text-gray-700 mb-4">
              By using storyalizer, you grant us a limited, non-exclusive license to access and process your content 
              solely for the purpose of providing our services and facilitating uploads to storyalíz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">5. Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Use storyalizer for any purpose other than preparing manuscripts for storyalíz</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Upload or transmit content that is illegal, harmful, or violates third-party rights</li>
              <li>Attempt to gain unauthorized access to storyalizer or related systems</li>
              <li>Interfere with or disrupt the operation of storyalizer</li>
              <li>Use automated systems or bots to access storyalizer without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">6. Service Availability</h2>
            <p className="text-gray-700 mb-4">
              We strive to provide reliable service but do not guarantee that storyalizer will be available at all times. 
              We reserve the right to modify, suspend, or discontinue any aspect of storyalizer at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              storyalizer is provided "as is" and "as available" without warranties of any kind, either express or implied. 
              We do not warrant that storyalizer will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or 
              indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of storyalizer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">9. Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to terminate or suspend your access to storyalizer immediately, without prior notice, 
              if you violate these Terms or engage in any prohibited activities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on 
              this page and updating the "Last updated" date. Your continued use of storyalizer after such changes 
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us:
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

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to its 
              conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}




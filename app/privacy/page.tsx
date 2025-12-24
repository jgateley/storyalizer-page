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
            <p className="text-gray-700 mb-4 font-medium">
            This privacy policy ONLY applies to the Google Docs Add-on "storyalizer classic."
            This free Add-on is provided solely for authors contributing to <a href="https://storyaliz.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                storyalíz
              </a>, to aid in formatting manuscripts.
            No information from the Add-on is collected.
            It is NOT a requirement to create an account or provide information on the storyaliz or storyalizer website to freely use the Add-on "storyalizer."
            </p>
            <p className="text-gray-700">
            This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context.
            Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
             </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">What personal information do we collect from the people that visit the storyalizer website or use the add-on?</h2>
            <p className="text-gray-700 mb-4">
            We do not collect information from visitors of this website or the Add-on "Roster Extras by Schoolytics."            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">How we store PII</h2>
            <p className="text-gray-700 mb-4">We do not gather or store any PII.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We do not gather or use any PII</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">How we use Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies to store your authentication session, and for no other purpose. 
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not share or sell your personal information with any third party.
            </p>
          </section>



          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Contact Us</h2>
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


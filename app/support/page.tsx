import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support - Storyalizer",
  description: "Get support for Storyalizer - Author tools for uploading to storyalíz",
};

export default function SupportPage() {
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
          <h1 className="text-4xl font-bold text-[#B63E32] mb-2">Support</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <p className="text-gray-700 text-lg">
              Contact{" "}
              <a 
                href="mailto:support@storyaliz.com" 
                className="text-blue-600 hover:underline"
              >
                support@storyaliz.com
              </a>{" "}
              for support.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


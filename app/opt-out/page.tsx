import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opt-out - Storyalizer",
  description: "Opt-out of the storyalizer classic add-on",
};

export default function OptOutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-0 px-4 py-8 md:py-0">
      {/* Logo Section */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6 w-full max-w-6xl">
        <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
          <Image
            src="/StoryalizLogo.png"
            alt="Storyaliz Logo"
            width={400}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Opt-out Text Section */}
      <div className="flex-1 flex items-center justify-center px-4">
        <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl">
          To request opting out of the storyalizer classic add-on, send an email to{" "}
          <a href="mailto:support@storyaliz.com" className="underline hover:opacity-70 transition-opacity">
            support@storyaliz.com
          </a>
        </p>
      </div>

      {/* Back to Home Link */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-gray-600 dark:text-gray-400 hover:text-[#B63E32] transition-colors underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}


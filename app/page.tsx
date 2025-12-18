import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center min-h-screen pt-0 px-4 py-8 md:py-0">
      {/* Logo and Headline Section */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-6xl">
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
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">
            Love reading
          </h1>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="flex-1 flex items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400">
          storyalizer: Author tools for uploading to{' '}
          <a href="https://storyaliz.com" className="underline hover:opacity-70 transition-opacity">storyalíz</a>
        </p>
      </div>

      {/* Description Section */}
      <div className="flex-1 flex items-center justify-center px-4">
        <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl">
          storyalizer is your tool for formatting manuscripts to prepare them for uploading to storyalíz. It will help you format and break your story into bite-sized pieces.
          Unless you have a relationship with storyalíz, you do not need this tool.
        </p>
      </div>

      {/* Social Section */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8 w-full max-w-5xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-base md:text-xl lg:text-2xl">
          <Link 
            href="/instructions" 
            className="text-gray-700 dark:text-gray-300 hover:text-[#B63E32] transition-colors underline"
          >
            Instructions
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="/privacy" 
            className="text-gray-700 dark:text-gray-300 hover:text-[#B63E32] transition-colors underline"
          >
            Privacy
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="/support" 
            className="text-gray-700 dark:text-gray-300 hover:text-[#B63E32] transition-colors underline"
          >
            Support
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="/terms" 
            className="text-gray-700 dark:text-gray-300 hover:text-[#B63E32] transition-colors underline"
          >
            Terms
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-6 md:gap-10">
          <a
            href="https://x.com/storyaliz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Follow us on X"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 fill-current text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61581387166588"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Follow us on Facebook"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 fill-current text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/readserializ/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Follow us on Instagram"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 fill-current text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@storializ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Follow us on TikTok"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 fill-current text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

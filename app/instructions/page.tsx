import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instructions - Storyalizer",
  description: "Instructions for using Storyalizer - Author tools for uploading to storyalíz",
};

export default function InstructionsPage() {
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
          <h1 className="text-4xl font-bold text-[#B63E32] mb-2">Instructions</h1>
          <p className="text-gray-600">How to use storyalizer to format and prepare your manuscripts</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Getting Started</h2>
            <p className="text-gray-700 mb-4">
              storyalizer is your tool for formatting manuscripts to prepare them for uploading to{" "}
              <a href="https://storyaliz.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                storyalíz
              </a>. 
              It will help you format and break your story into bite-sized pieces.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Step 1: Get storyalizer</h2>
            <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
              <li>Download storyalizer from the Google add-ons marketplce</li>
              <li>Install it</li>
            </ol>
            <p className="text-gray-700 mb-4">
              Note: storyalizer only accesses the Google Docs that you explicitly share with it or that have been shared with you from storyalíz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Step 2: Sign In</h2>
            <p className="text-gray-700 mb-4">
              The first time you use storyalizer, and occasionally thereafter you will need to sign in to your Google account and give storyalizer access.
              This happens automatically. When it kicks off, follow the steps below
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
              <li>Select the Google account that has access to your manuscript documents</li>
              <li>Grant storyalizer permission to access your Google Docs</li>
            </ol>
            <p className="text-gray-700 mb-4">
              Note: storyalizer only accesses the Google Docs that you explicitly share with it or that have been shared with you from storyalíz. It retains no other data about you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Step 3: Open Your Document</h2>
            <p className="text-gray-700 mb-4">
              In your Google Doc, you will find storyalizer under the Extensions menu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Step 4: Initial cleanup</h2>
            <p className="text-gray-700 mb-4">
              Run "Initial Cleanup" in the storyalizer menu. It will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Convert episode titles with no text (typically images) into non-titles</li>
              <li>Merge episode titles that are separated by whitespace only</li>
              <li>Convert multi-line titles into a single line</li>
            </ul>
            <p className="text-gray-700 mb-4">
              storyalizer reports the count of items changed in each category. This only needs to be run once, but it is okay to rerun.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Step 5: Title Image Cleanup</h2>
            <p className="text-gray-700 mb-4">
              Some manuscripts have images that should appear at the top of an episode, and sometime the images are in the manuscript immediately above the title.
              The Chapter Image Cleanup looks for images that appear immediately above an episode title, and displays them in the sidebar.
              You can move each one individually (which moves it directly below the title), or move all at once.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Step 6: Story Title, Dedication, Epigram and Foreward</h2>
            <p className="text-gray-700 mb-4">
              storyalíz expects an episode named "Title" at the beginning, followed by optional "Dedication", "Forward", and "Epigram" episdodes in that order.
              The "Opening Sequence" menu items assist in creating these, but you can always do it manually as well. To use these:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Select the portion of the manuscript (including images) you want to make a title or other opening page</li>
              <li>Click Extensions -&gt; storyalizer -&gt; Opening Sequence -&gt; Add Title (or other page)</li>
              <li>The text will be moved to the appropriate place in the manuscript, and the episode title inserted.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#B63E32] mb-4">Step 7: Break Into Bite-Sized Pieces</h2>
            <p className="text-gray-700 mb-4">
              Episode length is important. When converting existing stories, often chapters should be broken into multiple episodes.
              The "Episode List" sidebar helps with this task. The ideal length is 900 words. The following ranges are used:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>&lt; 500: too short, flagged in red</li>
              <li>500 - 700: too short, flagged in yellow</li>
              <li>700 - 1100: good length, not flagged</li>
              <li>1100 - 1300: too long, flagged in yellow</li>
              <li>&gt; 1300: too long, flagged in red</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Run the Episode List from the storyalizer menu. This will open a sidebar with all episodes listed, together with word counts.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Click on an episode to navigate to that portion of the doc</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To split an episode into two smaller episodes, move the cursor into the last paragraph before your proposed break.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Move the cursor to the paragraph immediately preceding the desired break</li>
              <li>Click "Show Wordcount if Split"</li>
              <li>A dialog will pop up showing the original count, and the word count for the two proposed smaller episodes.</li>
              <li>If the wordcount is not good, move the cursor and try again</li>
              <li>If the wordcount is good, click "Add Episode Title after paragraph</li>
              <li>A generic episode title will be generated, and the episode list refreshed</li>
              <li>If the episode list appears out of sync, click Refresh to regenerate it</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}


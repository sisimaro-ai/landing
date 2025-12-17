"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import { Briefcase, Mic, MessageCircle, Clock, Lightbulb, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import { TeamsIcon, SlackIcon } from "./components/icons";

export default function Home() {
  const handleWaitlistClick = () => {
    window.open("https://tally.so/r/BzKKL4", "_blank");
  };
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light mb-8">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Coming soon to 

            </span>
            <div className="flex items-center gap-2">
              <TeamsIcon />
              <SlackIcon />
            </div>
          </div>

          <span className="text-4xl inline-flex font-heading md:text-6xl lg:text-7xl text-gray-900 dark:text-white leading-tight -tracking-widest">
            Your Personal AI Pal at Work
          </span>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Sisimaro turns corporate mess into magic: one friendly chat for
            knowledge, research, access, and decisions that actually work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleWaitlistClick}
              className="w-full flex items-center justify-center gap-2 cursor-pointer sm:w-auto bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl text-2xl font-medium font-heading transition-colors"
            >
              Join the Waitlist
              <div className="">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="max-w-5xl mx-auto mt-16 md:mt-24">
          <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden min-h-[400px] p-6 md:p-10">
            {/* Add your images or videos here */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-6 bg-gray-50 dark:bg-gray-800/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Not just another chatbot
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sisimaro is the cheeky, reliable teammate every employee needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
                Unified Knowledge
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Transform fragmented company data into instant, accurate answers.
                No more digging through silos or chasing down information.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
                Integrated Meeting Notetaker
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                All meeting recordings and notes are automatically captured and
                updated to your team&apos;s knowledge base. Never miss a decision or insight.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
                Natural Conversations
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Unlike other chatbots, Sisimaro&apos;s responses are more natural,
                playful, and friendly. Chat like you would with a real teammate.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
                Decision Memory
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Recalls every decision, context, and outcome. Never lose track of
                what was decided and why.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
                Smart Research
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Brainstorm, research, or complete tasks—all in one place. No need
                to juggle between other chatbots.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
                Enterprise-Grade
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Playful vibes meet serious security. Built for scale with the
                reliability your business demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 px-6 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              How{" "}
              <span className="font-special text-primary">Sisimaro</span>{" "}
              works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Getting started is simple. No complex setup, no learning curve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6 font-heading">
                1
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
                Connect Your Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Link your existing workplace tools and data sources. Sisimaro
                integrates seamlessly with what you already use.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6 font-heading">
                2
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
                Ask Naturally
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Just chat like you would with a colleague. Ask questions, request
                information, or get help with decisions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6 font-heading">
                3
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-3">
                Get Things Done
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Receive instant, accurate answers with full context. Make better
                decisions faster, without the hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-linear-to-b from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-6">
            Ready to meet your new{" "}
            <span className="font-special text-primary">work pal</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
            Join the waitlist and be among the first to experience a friendlier
            way to work with AI.
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleWaitlistClick}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-medium font-heading transition-colors whitespace-nowrap"
            >
              Get Early Access
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            No spam, ever. We&apos;ll only reach out when we&apos;re ready for you.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

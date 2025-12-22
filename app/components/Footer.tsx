import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/short-logo.png"
              alt="Sisimaro logo"
              width={40}
              height={40}
            />
            <span className="text-5xl hidden md:block font-bold font-heading text-primary transition-colors -tracking-[0.04em]">Sisimaro</span>

          </div>

          <div className="flex items-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Terms
            </a>
            <a
              href="mailto:founders@sisimaro.com"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Sisimaro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">AlgoZ</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Advanced algorithmic trading solutions for traders of all experience levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Features</a></li>
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Pricing</a></li>
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Strategies</a></li>
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">About</a></li>
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Blog</a></li>
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Careers</a></li>
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Terms</a></li>
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Privacy</a></li>
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Cookies</a></li>
              <li><a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-neutral-600 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} AlgoZ. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Trading involves risk. Only risk capital you're prepared to lose. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}

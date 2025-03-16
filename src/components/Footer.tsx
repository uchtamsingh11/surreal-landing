
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AlgoZ</h3>
            <p className="text-white/60 mb-4">
              Advanced algorithmic trading solutions for traders of all experience levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Strategies</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} AlgoZ. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Trading involves risk. Only risk capital you're prepared to lose. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}

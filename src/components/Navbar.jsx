import { useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';

export default function Navbar({ lang, setLang }) {
  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const toggleLang = () => {
    const next = lang === 'en' ? 'fr' : 'en';
    setLang(next);
    localStorage.setItem('lang', next);
  };

  const labels = {
    en: { home: 'Home', projects: 'Projects', skills: 'Skills', experience: 'Experience', education: 'Education', contact: 'Contact' },
    fr: { home: 'Accueil', projects: 'Projets', skills: 'Compétences', experience: 'Expérience', education: 'Éducation', contact: 'Contact' },
  };

  const L = labels[lang];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 dark:text-white text-lg">Alaa Eddine Daly</a>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
          <a href="#home" className="hover:text-teal-500">{L.home}</a>
          <a href="#projects" className="hover:text-teal-500">{L.projects}</a>
          <a href="#skills" className="hover:text-teal-500">{L.skills}</a>
          <a href="#experience" className="hover:text-teal-500">{L.experience}</a>
          <a href="#education" className="hover:text-teal-500">{L.education}</a>
          <a href="#contact" className="hover:text-teal-500">{L.contact}</a>
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle language" onClick={toggleLang} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-teal-600 text-white hover:bg-teal-500 transition">
            <Globe size={16} />
            <span className="text-xs font-medium uppercase">{lang}</span>
          </button>
          <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <Sun className="hidden dark:block" size={18} />
            <Moon className="dark:hidden" size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}

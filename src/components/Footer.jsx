export default function Footer({ t, lang, setLang }) {
  const year = new Date().getFullYear();
  const labels = { en: 'English', fr: 'Français' };
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
        <p>© {year} Alaa Eddine Daly. {t('footer.rights')}</p>
        <div className="flex items-center gap-4">
          <button onClick={() => { const next = lang === 'en' ? 'fr' : 'en'; setLang(next); localStorage.setItem('lang', next); }} className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
            {labels[lang]}
          </button>
        </div>
      </div>
    </footer>
  );
}

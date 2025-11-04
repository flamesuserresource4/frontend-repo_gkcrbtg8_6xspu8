import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-400">{subtitle}</p>}
      </motion.div>
      <div className="mt-10">
        {children}
      </div>
    </div>
  </section>
);

export default function MainSections({ t }) {
  const projects = [
    {
      name: 'Finora',
      stack: 'React Native, Expo, PostgreSQL',
      desc: t('projects.finora'),
    },
    {
      name: 'Packajungle',
      stack: 'HTML, CSS, JS, PHP',
      desc: t('projects.packajungle'),
    },
    {
      name: 'Secure File Storage System',
      stack: 'Spring Boot, Kotlin, MySQL',
      desc: t('projects.secure'),
    },
    {
      name: 'Restaurant Management System',
      stack: 'Java, Swing, MySQL',
      desc: t('projects.restaurant'),
    },
  ];

  const skillGroups = [
    { title: t('skills.languagesTitle'), items: ['Java', 'Kotlin', 'JavaScript / TypeScript', 'Python', 'SQL'] },
    { title: t('skills.frameworksTitle'), items: ['Spring Boot', 'React Native', 'React', 'Expo'] },
    { title: t('skills.toolsTitle'), items: ['MySQL', 'PostgreSQL', 'Git', 'Maven', 'Gradle', 'JWT', 'REST APIs', 'JDBC', 'Clerk Auth', 'Postman'] },
    { title: t('skills.conceptsTitle'), items: ['Microservices', 'RBAC', 'OOP', 'Database Design', 'Mobile Development'] },
  ];

  return (
    <>
      {/* About */}
      <Section id="about" title={t('about.title')} subtitle={t('about.subtitle')}>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2 text-slate-700 dark:text-slate-300">
            <p>{t('about.body')}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300"><MapPin size={16} /> Sousse, Tunisia</span>
              <a className="inline-flex items-center gap-2 hover:text-teal-600" href="#contact"><Mail size={16} /> {t('contact.email')}</a>
              <a className="inline-flex items-center gap-2 hover:text-teal-600" href="#contact"><Github size={16} /> GitHub</a>
              <a className="inline-flex items-center gap-2 hover:text-teal-600" href="#contact"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-600/20 to-blue-600/20 dark:from-teal-400/10 dark:to-blue-400/10 border border-white/20 dark:border-white/10 shadow-inner" />
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t('about.photoNote')}</p>
          </motion.div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title={t('projects.title')} subtitle={t('projects.subtitle')}>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-600/10 transition">
              <div className="h-36 mb-4 rounded-xl bg-gradient-to-br from-teal-600/20 to-blue-600/20 dark:from-teal-400/10 dark:to-blue-400/10" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-teal-700 dark:text-teal-300">{p.stack}</p>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title={t('skills.title')} subtitle={t('skills.subtitle')}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((g) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl p-5 border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
              <h4 className="font-semibold text-slate-900 dark:text-white">{g.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title={t('experience.title')} subtitle={t('experience.subtitle')}>
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Smoft ERP — {t('experience.internship')}</h3>
              <span className="text-sm text-slate-600 dark:text-slate-400">June–July 2025</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
              <li>{t('experience.ecom')}</li>
              <li>{t('experience.ocr')}</li>
              <li>{t('experience.erp')}</li>
              <li>{t('experience.debug')}</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title={t('education.title')} subtitle={t('education.subtitle')}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Bachelor’s in Computer Science — ISITCOM, Hammam Sousse</h3>
          <p className="mt-1 text-slate-700 dark:text-slate-300">2023–Present</p>
        </motion.div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={t('contact.title')} subtitle={t('contact.subtitle')}>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
              <h4 className="font-semibold text-slate-900 dark:text-white">{t('contact.reach')}</h4>
              <div className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                <p>{t('contact.email')}: <span className="font-medium">—</span></p>
                <p>{t('contact.phone')}: <span className="font-medium">—</span></p>
                <div className="flex items-center gap-3 pt-2">
                  <a href="#" aria-label="GitHub" className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><Github size={18} /></a>
                  <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><Linkedin size={18} /></a>
                  <a href="#" aria-label="Email" className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><Mail size={18} /></a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => { e.preventDefault(); alert(t('contact.formThanks')); }}
            className="rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">{t('contact.name')}</label>
                <input required className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">{t('contact.email')}</label>
                <input type="email" required className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">{t('contact.message')}</label>
                <textarea rows={4} required className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <button className="mt-2 inline-flex justify-center px-5 py-2.5 rounded-full bg-teal-600 text-white hover:bg-teal-500 transition shadow-lg shadow-teal-600/20">{t('contact.send')}</button>
            </div>
          </motion.form>
        </div>
        <div className="mt-10 rounded-2xl h-64 bg-gradient-to-br from-teal-600/20 to-blue-600/20 dark:from-teal-400/10 dark:to-blue-400/10 flex items-center justify-center text-slate-700 dark:text-slate-300">
          <span>3D map/marker for Sousse, Tunisia</span>
        </div>
      </Section>
    </>
  );
}

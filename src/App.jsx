import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

  const dict = useMemo(() => ({
    en: {
      hero: {
        title: 'Alaa Eddine Daly — Full Stack Developer',
        subtitle: 'Building intelligent and scalable digital solutions with Spring Boot, React Native, and Cloud technologies.',
        viewWork: 'View My Work',
        downloadCV: 'Download CV',
      },
      about: {
        title: 'About Me',
        subtitle: 'Who I am and what I love to build',
        body: "I’m a passionate Full Stack Developer specializing in Spring Boot, React Native, and cloud solutions. I love building applications that improve everyday life — from finance management tools to e‑commerce platforms.",
        photoNote: 'Profile photo placeholder — replace with your photo when ready.',
      },
      projects: {
        title: 'Projects',
        subtitle: 'Selected work that showcases impact and craft',
        finora: 'Cross-platform finance tracking app with AI chatbot and interactive visualizations.',
        packajungle: 'Full-stack e-commerce packaging platform built during internship.',
        secure: 'RESTful API with JWT authentication and role-based access control (RBAC).',
        restaurant: 'Desktop app with role-based workflows for admin, chef, and server.',
      },
      skills: {
        title: 'Skills',
        subtitle: 'Technologies I use to ship high-quality software',
        languagesTitle: 'Languages',
        frameworksTitle: 'Frameworks',
        toolsTitle: 'Databases & Tools',
        conceptsTitle: 'Concepts',
      },
      experience: {
        title: 'Experience',
        subtitle: 'Hands-on experience and internships',
        internship: 'Internship',
        ecom: 'Built features for an e-commerce platform, enhancing catalog and checkout flows.',
        ocr: 'Developed an OCR app using TesseractOCR and Gemini for smart document extraction.',
        erp: 'Improved ERP data quality and optimized workflows.',
        debug: 'Resolved critical bugs and improved performance across modules.',
      },
      education: {
        title: 'Education',
        subtitle: 'Academic background',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Let’s collaborate on your next project',
        reach: 'Reach me at',
        email: 'Email',
        phone: 'Phone',
        name: 'Name',
        message: 'Message',
        send: 'Send Message',
        formThanks: 'Thanks! Your message was captured on the client — connect this form to your preferred email/backend to receive messages.',
      },
      footer: {
        rights: 'All rights reserved.'
      }
    },
    fr: {
      hero: {
        title: 'Alaa Eddine Daly — Développeur Full Stack',
        subtitle: 'Créer des solutions numériques intelligentes et évolutives avec Spring Boot, React Native et les technologies Cloud.',
        viewWork: 'Voir mes projets',
        downloadCV: 'Télécharger le CV',
      },
      about: {
        title: 'À propos',
        subtitle: 'Qui je suis et ce que j’aime construire',
        body: "Je suis un développeur Full Stack passionné, spécialisé en Spring Boot, React Native et les solutions cloud. J’adore créer des applications qui améliorent le quotidien — de la gestion financière aux plateformes e‑commerce.",
        photoNote: 'Espace réservé pour la photo de profil — remplacez par votre photo.',
      },
      projects: {
        title: 'Projets',
        subtitle: 'Sélection de travaux alliant impact et qualité',
        finora: 'Application de suivi financier multiplateforme avec chatbot IA et visualisations interactives.',
        packajungle: 'Plateforme e‑commerce de packaging réalisée pendant le stage.',
        secure: 'API REST avec authentification JWT et contrôle d’accès basé sur les rôles (RBAC).',
        restaurant: 'Application de bureau avec flux par rôle pour admin, chef et serveur.',
      },
      skills: {
        title: 'Compétences',
        subtitle: 'Technologies utilisées pour livrer des logiciels de qualité',
        languagesTitle: 'Langages',
        frameworksTitle: 'Frameworks',
        toolsTitle: 'Bases de données & Outils',
        conceptsTitle: 'Concepts',
      },
      experience: {
        title: 'Expérience',
        subtitle: 'Expérience pratique et stages',
        internship: 'Stage',
        ecom: 'Développement de fonctionnalités pour une plateforme e‑commerce (catalogue et paiement).',
        ocr: 'Application OCR avec TesseractOCR et Gemini pour l’extraction intelligente de documents.',
        erp: 'Amélioration de la qualité des données ERP et optimisation des workflows.',
        debug: 'Correction de bugs critiques et amélioration des performances.',
      },
      education: {
        title: 'Éducation',
        subtitle: 'Parcours académique',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Collaborons sur votre prochain projet',
        reach: 'Me contacter',
        email: 'Email',
        phone: 'Téléphone',
        name: 'Nom',
        message: 'Message',
        send: 'Envoyer',
        formThanks: 'Merci ! Votre message a été saisi côté client — connectez ce formulaire à votre email/backend.',
      },
      footer: {
        rights: 'Tous droits réservés.'
      }
    }
  }), []);

  const t = (key) => {
    const parts = key.split('.');
    let cur = dict[lang];
    for (const p of parts) cur = cur?.[p];
    return cur ?? key;
  };

  // Global gradient background and smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <MainSections t={t} />
      </main>
      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  );
}

export default App;

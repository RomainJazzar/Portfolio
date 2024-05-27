// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Portfolio": "Portfolio",
            "Home": "Home",
            "About": "About",
            "Projects": "Projects",
            "Contact": "Contact",
            "DownloadCV": "Download CV",
            "NameHeading": "I'm Romain Jazzar",
            "developer": "Developer",
            "Introduction": "a Front-end Developer. As a full-stack developer, I blend creativity and technical expertise to turn your digital dreams into reality. Passionate about solving problems and with a keen eye for design, I create captivating web experiences that engage your audience. Driven by excellence, I love to bring ideas to life and exceed expectations. Collaboration is at the heart of my approach: I design tailor-made solutions to realize your vision, creating impactful digital experiences that resonate with your audience. Let's create something extraordinary together.",
            "HireMe": "HIRE ME",
            "WhatI": "What I",
            "Do": "Do",
            "CrazyFullStackDeveloper": "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
            "FullStackDevelopment": "Full Stack Development",
            "li1": "⚡️ Development of responsive web applications (SPA) and PWAs with React.js",
            "li2": "⚡️ Creation of reactive static websites with HTML/CSS and JavaScript",
            "li3": "⚡️ Implementation of RESTful APIs with MongoDB and Node.js",
            "li4": "⚡️ Database management with MongoDB Atlas",
            "li5": "⚡️ UI design with Photoshop",
            "MyRecentWorks": "My Recent",
            "work": "Works",
            "RecentWorksIntro": "Here are a few projects I've worked on recently.",
            "HireMeFooter": "HIRE ME",
            "UniqueProductDevelopment": "Together, let's develop your unique and innovative product!",
            "LookingForward": "Don't hesitate to write to me, I look forward to helping you turn your visions into reality!",
            "AskQuestion": "Ask a question",
            "FirstNameLastName": "First Name - Last Name",
            "PhoneNumber": "Phone Number",
            "EmailAddress": "Email Address",
            "Message": "Message",
            "SendMessage": "Send the message",
            "BookiProject": "Development of an elegant and functional homepage for a travel agency, using HTML & CSS to provide an intuitive user interface that highlights attractive travel services and destinations.",
            "SophieBluelInteriorDesign": "Creation of a captivating homepage for an interior design agency, where the use of dynamic JavaScript enhances the presentation of projects and Sophie Bluel's portfolio.",
            "MenuMakerByQwenta": "Design of an interactive web page for planning client site development, with JavaScript for smooth navigation and advanced features that showcase the services offered.",
            "NinaCarducciPhotography": "Meticulous planning and design of a website for a photographer, focusing on a smooth user experience and a sleek design that highlights her portfolio.",
            "Kasa": "Diagnosis and optimization of a web application for real estate rentals, using React to improve performance and correct errors, thus ensuring a fast and efficient interface.",
            "MonVieuxGrimoire": "Development of the backend infrastructure for a book review site, implementing secure and scalable solutions for rich interaction and easy management of user ratings and comments.",

        }
    },
    fr: {
        translation: {
            "Portfolio": "Portfolio",
            "Home": "Accueil",
            "About": "À propos",
            "Projects": "Projets",
            "Contact": "Contact",
            "DownloadCV": "Télécharger CV",
            "NameHeading": "Je suis Romain Jazzar",
            "developer": "développeur",
            "Introduction": " développeur Front-end. En tant que développeur full-stack, je mêle créativité et expertise technique pour concrétiser vos rêves numériques. Passionné par la résolution de problèmes et doté d'un œil attentif pour le design, je crée des expériences web captivantes qui engagent votre audience. Animé par l'excellence, j'adore donner vie aux idées et dépasser les attentes. La collaboration est au cœur de ma démarche : je conçois des solutions sur mesure pour concrétiser votre vision, créant des expériences numériques impactantes qui résonnent auprès de votre public. Créons quelque chose d'extraordinaire ensemble.",
            "HireMe": "ME CONTRACTER",
            "WhatI": "Ce que je",
            "Do": "faire",
            "CrazyFullStackDeveloper": "DÉVELOPPEUR FULL STACK ENTHOUSIASTE QUI SOUHAITE EXPLORER CHAQUE TECH STACK",
            "FullStackDevelopment": "Développement Full Stack",
            "li1": "⚡️ Développement d'applications web réactives (SPA) et PWA avec React.js",
            "li2": "⚡️ Création de sites web statiques réactifs avec HTML/CSS et JavaScript",
            "li3": "⚡️ Mise en place d'API RESTful avec MongoDB et Node.js",
            "li4": "⚡️ Gestion de base de données avec MongoDB Atlas",
            "li5": "⚡️ Conception d'interfaces utilisateur (UI) avec Photoshop",
            "MyRecentWorks": "Mes derniers",
            "work": "Travaux",
            "RecentWorksIntro": "Voici quelques projets sur lesquels j'ai récemment travaillé.",
            "HireMeFooter": "ME CONTRACTER",
            "UniqueProductDevelopment": "Ensemble, développons votre produit unique et innovant !",
            "LookingForward": "N'hésitez pas à m'écrire, je suis impatient de vous aider à réaliser vos visions en réalité !",
            "AskQuestion": "Poser une question",
            "FirstNameLastName": "Prénom - Nom",
            "PhoneNumber": "Numéro de téléphone",
            "EmailAddress": "Adresse e-mail",
            "Message": "Message",
            "SendMessage": "Envoyer le message",
            "BookiProject": "Développement d'une page d'accueil élégante et fonctionnelle pour une agence de voyages, utilisant HTML & CSS pour offrir une interface utilisateur intuitive qui met en avant des services et destinations de voyages attractifs.",
            "SophieBluelInteriorDesign": "Création d'une page d'accueil captivante pour une agence de design d'intérieur, où l'utilisation de JavaScript dynamise la présentation des projets et le portfolio de Sophie Bluel.",
            "MenuMakerByQwenta": "Conception d'une page web interactive pour planifier le développement de sites clients, avec JavaScript pour une navigation fluide et des fonctionnalités avancées qui valorisent les services offerts.",
            "NinaCarducciPhotography": "Planification et conception méticuleuse d'un site web pour une photographe, avec un accent sur la fluidité de l'expérience utilisateur et un design épuré qui met en valeur son portfolio.",
            "Kasa": "Diagnostic et optimisation d'une application web pour la location immobilière, utilisant React pour améliorer les performances et corriger les erreurs, assurant ainsi une interface rapide et efficace.",
            "MonVieuxGrimoire": "Développement de l'infrastructure backend pour un site de critique de livres, avec la mise en place de solutions sécurisées et évolutives permettant une interaction riche et une gestion aisée des notes et commentaires des utilisateurs.",
        }
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Initial language
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;

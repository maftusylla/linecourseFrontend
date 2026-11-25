# Maquette statique HTML5 / CSS3 — LineCourse

Maquette front-end statique, responsive et épurée conçue exclusivement en **HTML5** et **CSS3** (sans aucun fichier ni balise JavaScript), respectant une séparation stricte entre l’espace public et les espaces privés par rôle (`apprenant`, `enseignant`, `admin`), prête à être branchée manuellement sur le backend **LineCourse**.

## Organisation des fichiers

### 1. Espace public (`/template/`)
Navigation strictement limitée à **Accueil**, **Catalogue**, **Connexion** et **Inscription** :
- `index.html` — Accueil public (présentation, cours mis en avant, catalogue des cours, fonctionnement général).
- `catalogue.html` — Catalogue public des formations avec barre de recherche visuelle, filtres et pagination.
- `detail-cours.html` — Fiche publique d’une formation (bannière, objectifs, programme et appel à la connexion/inscription).
- `connexion.html` — Connexion et états visuels de référence.
- `inscription.html` — Création de compte apprenant et états visuels.
- `verification-email.html` — Confirmation d’adresse e-mail par jeton.
- `mot-de-passe-oublie.html` — Demande de réinitialisation du mot de passe.
- `reinitialisation-mot-de-passe.html` — Définition d’un nouveau mot de passe.

### 2. Espace apprenant (`/template/apprenant/`)
Navigation dédiée (`Tableau de bord`, `Catalogue`, `Mes cours`, `Apprentissage`, `Profil & sécurité`, `Déconnexion`) :
- `apprenant/tableau-de-bord.html` — Vue d’ensemble, formations suivies, progression moyenne et cours accessibles.
- `apprenant/catalogue.html` — Catalogue connecté avec état des inscriptions.
- `apprenant/detail-cours.html` — Programme détaillé et inscription à une formation.
- `apprenant/mes-cours.html` — Formations inscrites, pourcentages et barres d’avancement.
- `apprenant/apprentissage.html` — Lecteur pédagogique par modules et leçons avec curseur d’avancement visuel (0–100 %).
- `apprenant/profil.html` — Informations personnelles, e-mail, mot de passe, sessions actives et désactivation du compte.

### 3. Espace enseignant (`/template/enseignant/`)
Navigation dédiée (`Tableau de bord`, `Catalogue`, `Cours créés`, `Studio`, `Inscriptions`, `Profil & sécurité`, `Déconnexion`) :
- `enseignant/tableau-de-bord.html` — Indicateurs de l’enseignant et accès rapide aux formations créées.
- `enseignant/catalogue.html` — Vue catalogue depuis l’espace enseignant.
- `enseignant/cours-crees.html` — Liste des formations créées par l’enseignant (publiées et brouillons).
- `enseignant/studio.html` — Création/édition de formation, publication, suppression de brouillon, gestion des modules et des leçons.
- `enseignant/inscriptions.html` — Apprenants inscrits, progression par formation et inscription manuelle.
- `enseignant/profil.html` — Informations personnelles, mot de passe, sessions actives et désactivation du compte.

### 4. Espace administrateur (`/template/admin/`)
Navigation dédiée (`Tableau de bord`, `Utilisateurs`, `Cours`, `Rôles & accès`, `Sécurité`, `Profil & sécurité`, `Déconnexion`) :
- `admin/tableau-de-bord.html` — Vue globale de la plateforme (données fictives de maquette).
- `admin/utilisateurs.html` — Recherche, filtrage, fiche utilisateur et création de compte.
- `admin/cours.html` — Supervision globale de toutes les formations (publication, dépublication, suppression).
- `admin/roles-acces.html` — Attribution des rôles (`Apprenant`, `Enseignant`, `Administrateur`), activation/désactivation et périmètre des droits.
- `admin/securite.html` — Journal des événements d’authentification et supervision des sessions actives.
- `admin/profil.html` — Profil et sécurité du compte administrateur.

### 5. Feuilles de style (`assets/css/`)
- `assets/css/theme-light.css` — Palette claire (*graphite, pierre et ambre*).
- `assets/css/theme-dark.css` — Palette sombre activable sans JavaScript via `class="theme-dark"` sur `<html>` ou via `prefers-color-scheme: dark`.
- `assets/css/base.css` — Socle typographique, espacements et accessibilité.
- `assets/css/components.css` — Barre de navigation fixe, barre latérale d’espace, cartes, tableaux, formulaires et bandeaux d’état.
- `assets/css/pages.css` — Mises en page spécifiques et breakpoints responsives.

### 6. Ressources graphiques (`assets/images/`)
- `hero-studio.jpg`, `course-architecture.jpg`, `course-security.jpg`, `course-ui-systems.jpg`, `course-database.jpg`, `course-devops.jpg`, `course-pedagogy.jpg`, `instructor-portrait.jpg`, `learner-portrait.jpg`.

## Visualisation

1. Ouvrez **`/preview/index.html`** sur le serveur de développement local (ou servez le dossier `template/` avec tout serveur HTTP statique).
2. Accédez aux maquettes privées via `/preview/apprenant/tableau-de-bord.html`, `/preview/enseignant/tableau-de-bord.html` et `/preview/admin/tableau-de-bord.html`.
3. Pour tester le mode sombre, ajoutez `class="theme-dark"` sur la balise `<html>` ou activez le thème sombre système.

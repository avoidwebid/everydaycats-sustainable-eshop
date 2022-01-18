# Everyday Cats - sustainable eshop 🛍️🌳🧏‍♂️

**Note**
- This app is built using [Commerce.js](https://commercejs.com/) v2 SDK

# Table des matières

 * [Introduction](#introduction)
 * [Installation](#installation)
 * [Xtreme tech whatching](#xtrem-tech-watching)

# Introduction
Workshop autour des impacts du numérique : sociaux / sociétaux et environnementaux.
Le but est de travailler par itérations, comme dans un contexte professionnel.

# 🔥 Xtreme Tech Watch
Vous allez commencer par un petit échauffement : un Xtreme tech watch.
Il s'agit d'un atelier vous permettant de rapidement capter de l'information sur des sujets tech. variés et en très peu de temps.
> Plus d'info sur le site [speaker deck de Yoan Thirion](https://speakerdeck.com/thirion/xtrem-tech-watch-9997c945-5122-462b-9e18-6913ef56a112?slide=3)

## Les sujets
- C'est quoi le `serverless` et en quoi ça consomme moins de ressources / d'énergie ?
- L'accessibilité ça sert à quoi et qu'est ce que le `RGAA` / `WCAG` ?
- Vous avez dit `JAMStack` ? C'est quoi ?
- `GraphQL` qu'est ce que c'est ? Et par rapport aux API `REST` ?
- C'est quoi la `Low Tech Web` ?
- C'est quoi `Lighthouse` ?

## Faites votre choix en solo (1'')
Expliquez-nous votre choix et constituer les équipes

## Recherche en solo (10'')
C'est parti pour 5 minutes de recherche sur le sujet. 
Pensez à prendre des notes.

## Combinez vos recherches (10'')
Discutez-en avec les autres participants ayant choisi le même sujet que vous.

## Retour en exploration (10'')
Cette fois en équipe, synthétisez vos découvertes de manière a pouvoir les présenter au groupe.

## Restitution
Chaque équipe parle du sujet au reste du groupe. C'est le moment de partager vos découvertes mais aussi vos incompréhensions.

# 🎯 La mesure
Nous allons tester ensemble les outils de mesure disponibles sur le marché.
Choissez un site (ecommerce, artiste, administration ...) sur lequel vous allez effectuer vos analyses.
## Google Lighthouse
Ouvrez le navigateur chrome et ouvrez les devtools.
Dans l'onglet `Lighthouse` vous trouverez un outil vous proposant un certain nombre d'indicateurs.
Lancez une analyse sur le site choisi et notez 3 points à améliorer.


# 🦯 Introduction à l'accessibilité

## Installation d'une liseuse d'écran

NVDA est une liseuse d'écran très utilisée qui permet aux aveugles et déficients visuels de pouvoir dicter l'écran en cours de lecture.
Téléchargez cette liseuse et installez la (pensez à utiliser votre casque 😄 )

## Quelques éléments pour la suite du TP
- Pensez aux contrastes : il faut toujours un contraste suffisant entre la couleur de fond et les textes ou images.
- Il est important de pouvoir naviguer au clavier sur un site web : utilisation de `button` et par exemple de `tabindex`
- Les liens doivent toujours expliquer vers quoi ils dirigent.
## Exercice simple

Les articles disponibles sur le site [Developer Mozilla : Accessibilité](https://developer.mozilla.org/fr/docs/Learn/Accessibility) sont excellents pour commencer.

- Lisez cette page permettant d'obtenir plus d'éléments pour la suite du TP : 
    * [HTML : une bonne base pour l'accessibilité](https://developer.mozilla.org/fr/docs/Learn/Accessibility/HTML)
    * [Bonnes pratiques d'accessibilité CSS et JavaScript](https://developer.mozilla.org/fr/docs/Learn/Accessibility/CSS_and_JavaScript)
- Vous trouverez un exercice simple à l'adresse suivantes : [l'accessibilité en CSS et JavaScript
](https://developer.mozilla.org/fr/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility#accessibilit%C3%A9_en_css_-_exercice_1)

Mettez en application ces principes sur le projet d'étude.
# 🧑🏽‍💻 Projet d'étude
## Installation
Vos prérequis :
- IDE ou code editor de votre choix (vscode par exemple)
- Node (v8.2.0 ou plus récent)
- NPM (inclus dans l'installer nodejs) ou Yarn

## Clone du projet en local
Ouvrez votre bash préféré.
```bash
git clone https://github.com/avoidwebid/nextbeer-sustainable-eshop.git
```

## Installation
Ouvrez votre bash préféré.

```bash
npm install
cp .env.example .env
```

Il vous faudra ensuite renseigner le document .env avec les informations que je vous aurai transmises.

## Démarrage du projet

```bash
npm run dev
```

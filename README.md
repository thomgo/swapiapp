# Application REACT pour la consommation de l'API SWAPI

Il s'agit d'une application développée dans le cadre de mon poste de formateur en développement web. L'objectif est que les apprenants réalisent à l'aide la librairie REACT JS un client front-end pour exploiter et mettre en forme les données de l'univers de Star Wars fournies par l'API gratuite et ouverte SWAPI (https://swapi.dev/).

Au travers de cet exercice, les étudiants apprennent à :

- Démarrer un projet REACT
- Utiliser le CLI REACT
- Découper son projet en composants
- Utiliser les classes JavaScript
- Utilisez les hooks REACT
- Echanger des informations entre composants
- Utiliser les cycles de vie des composants
- Gérer son routing en JavaScript à l’aide d’un module
- Effectuer des requêtes http
- Gérer l’asynchrone dans son application
- Comprendre le concept d’API
- Consommer une API
- Exploiter des données au format JSON

## Consignes

Une association de fan des films StarWars vous a contacté pour réaliser un site de diffusion du savoir autour de la saga. Vous avez de la chance, l’association a déjà développé une API (swapi) qui recense tout ce qu’il y a à savoir sur cet univers.

Votre tâche est de réaliser une application REACT qui grâce à Swapi vous permet d'afficher des informations sur les différents héros, planètes et autres éléments de StarWars. Ces informations seront affichées de manières responsives et visuellement engageantes pour l’utilisateur.

**Spécifications fonctionnelles** :

Votre application se composera à minima des deux pages suivantes intégrées dans un template :

- Une page d'accueil qui affiche par défaut les différents types de ressources disponibles (espèces, personnages, véhicules etc…) Les types de ressources sont récupérés depuis l’API via une requête.
- Une page de recherche qui permet d’effectuer une recherche dynamiquement. La recherche est effectuée à chaque fois que l’utilisateur tape une lettre

**Spécifications techniques** :

- Dernière version stable de REACT
- Usage de l’API Swapi
- Pour les requêtes http vous êtes libres d’utiliser la librairie de votre choix ou de les faire à la main
- Utilisation de Bootstrap 5 pour le design de l’interface

Le rendu se fera via TEAMS, vous devrez déposer avant dimanche soir minuit un fichier txt avec votre nom et prénom contenant le lien vers votre repository.

**Conseils** :

REACT peut être difficile à appréhender quand on débute, ne vous lancez pas tête baissée dans l’application en essayant de tout faire en même temps, cela ne donnera rien de bon. Il est important de gérer votre projet correctement à l’aide des méthodes déjà vues et surtout de vous poser des jalons, c’est-à-dire des objectifs intermédiaires atteignables et facilement débugables au besoin. C’est en réalisant ces objectifs intermédiaires que votre application prendra forme. Voici par exemple une proposition d’organisation indicative :

- Découpez la maquette en composants
- Identifiez les composants du template et créez un dossier par composant du template
- Créez les fichiers du template avec un code minimal (un paragraphe ou autre pour débuter)
- Chargez ces fichiers dans le composant d’accueil et vérifiez leur affichage
- Enrichissez le HTML du template et mettez-le en forme. Votre application ne fait mais commence à ressembler à quelque chose
- Attaquez-vous aux composants fonctionnels tels que l’accueil
- Comme précédemment réalisez d’abord un affichage simple pour vérifier leur chargement
- Si le composant doit gérer des données commencez par les rentrer en dur et les mettre en forme
- Tentez de requêter l’API et vérifier sa réponse sans l’exploiter. Il est crucial de s’assurer que les données renvoyées correspondent à vos attentes
- Tentez de remplacer vos données d’essai avec les données que l’API vous a renvoyées


## Pour aller plus loin

- Une page de détail de ressource accessible en cliquant sur une ressource qui affiche les entrées de la ressource sous forme de liste paginée. En cliquant sur suivant ou précédent on passe à une autre tranche de la liste.

- Une page détail de l’entrée accessible quand on clique sur une entrée d’une ressource. Celle affiche les informations du personnage, du véhicule ou autre.

Les éléments sont présentés sous la forme d'une liste et quand l'utilisateur clique sur l'un d'entre eux, il accède à une page de détails où on lui présente toutes les spécificités de l'élément sur lequel il a cliqué.

Par exemple, sur la page d’accueil, si je sélectionne véhicule dans le dropdown, je vois une liste de véhicules s’afficher et si je clique sur un véhicule en particulier j’accède à sa page de description

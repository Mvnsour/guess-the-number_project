# 🎓 Projet final

## Setup
Dans le terminal, entre dans un dossier pour ton projet.

Effectue la commande mkdir 2.functions-final pour créer un dossier (sur MacOS), dans ce dossier effectue npm init pour initier le projet puis fais entrer sur tous les paramètres.

Dans le fichier package.json ajoute cette ligne sous la version :

JSON

"type": "module",
Crée un fichier JS avec la commande touch index.js ainsi qu'un fichier prompt avec la commande touch prompt.js.

Installe la librairie readline-sync avec npm install readline-sync puis dans le fichier prompt ajoute le code suivant :

JS

<code>import readlineSync from 'readline-sync';</code>

<code>// 🦁 Nos fonctions vont utiliser la méthode `prompt`
// J'utilise une librairie afin que `prompt` soit synchrone pour éviter que tu aies besoin 
// De gérer l’asynchrone dans tes fonctions
export function prompt(question) {
// readlineSync.question returns the user's input once they hit enter
const answer = readlineSync.question(question);
return answer;
}</code>

Maintenant, tu peux lancer la commande node index.js pour lancer facilement ton script.

⚠️ Pour importer prompt dans ton fichier index il faut ajouter le suffixe js

JS

<code>import { prompt } from './prompt.js';</code>

Ta mission pour cet exercice :

Créer l'application "Guess The Number".

Le concept est simple. Au début du script, notre application va générer un nombre aléatoire entre 0 et 100 qu'on va appeler targetNumber

Ensuite, il va demander à l'utilisateur de rentrer un nombre.

Si le nombre n'est pas valide, il informe qu'il faut rentrer un nombre entre 0 et 100

Si le nombre est plus petit, il va informer que le nombre targetNumber est plus grand

Si le nombre est trop grand, il va informer que le nombre targetNumber est plus petit

Si c'est le bon nombre : fin de la partie ! (affiche le nombre d'essais)

### Il faut compter le nombre d'essais de l'utilisateur et le but est de le faire en moins d'essais possible.

## Pour t'aider, voici quelques astuces que tu vas devoir utiliser :

Trouver une manière de générer un nombre aléatoire entre 0 et 100 (Google est ton ami)
Utiliser une fonction récursive pour demander à l'utilisateur un nombre tant qu'il n'a pas trouvé le bon nombre
Trouver un moyen de "compter" le nombre d'essais

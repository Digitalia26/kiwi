# Kiwi Organisation

Maquette du site de l’association Kiwi Organisation, réalisée avec Sites à partir de la plaquette et des captures fournies.

Site : https://kiwi-organisation-plaquette.equalnova4.chatgpt.site

## Lancer le site localement

Le site est en HTML, CSS et JavaScript. Aucune installation de dépendances ni compilation n’est nécessaire.

Depuis la racine du dépôt :

```sh
python3 -m http.server 4173 --directory dist
```

Ouvrir ensuite http://localhost:4173 dans le navigateur.

## Fichiers

- `dist/index.html` : contenu de la page et navigation.
- `dist/style.css` : mise en page et styles adaptés aux différents écrans.
- `dist/script.js` : menu mobile, vidéo et défilement des partenaires.
- `dist/assets/` : images, illustrations et polices.
- `.openai/hosting.json` : identité du site existant et configuration de son hébergement sur Sites.

Le dossier `dist/` peut être servi directement par un hébergement statique.

## Sources et visuels

Le contenu a été repris des captures fournies. La palette, les illustrations, le portrait d’Anne-Sophie Pic et les polices intégrées proviennent de la plaquette. Les caractères absents des sous-ensembles de polices utilisent une police de secours. L’arrière-plan de la photo d’accueil a été prolongé par génération d’image pour obtenir un cadrage plus large.

Certaines photos de la maquette initiale n’étant pas disponibles, elles ont été remplacées par des visuels de la plaquette ou des illustrations. Les images d’actualités chargées depuis le site officiel disposent d’illustrations de remplacement. Les noms des partenaires sont reproduits en texte.

La vidéo se charge à la demande. Les dons renvoient vers le formulaire HelloAsso vérifié ; le site ne traite lui-même aucun paiement ni aucune donnée personnelle.

## Synchronisation avec Sites

Ce dépôt contient une copie des sources de la version publiée sur Sites. Un commit GitHub ne met pas automatiquement à jour le site hébergé sur Sites, et les modifications faites sur Sites ne sont pas automatiquement envoyées sur GitHub.

Import initial : version Sites 5, commit source `b5fee84fedbb8a474cae185873591486908f0472`.

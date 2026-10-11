# Portfolio trail — présentation aux marques

Audit et révision du 11 octobre 2026. Pages concernées : `/fr/trail/` et `/trail/`.

Le positionnement proposé est celui d’un traileur Espoir auvergnat qui construit sa progression en ultra et la raconte sur TikTok. Les preuves disponibles soutiennent ce récit : victoire Espoir à La Gentiane, deux autres podiums Espoir, un ultra de 114 km terminé, trois ambitions personnelles pour 2027 et un compte de contenu déjà actif.

## Ce que montrent les références

Mathieu Blanchard présente plusieurs dimensions de son identité, ses aventures et une contribution au développement de produits. Cela donne aux marques plusieurs sujets de collaboration. [Présentation officielle](https://www.mathieu-blanchard.com/en/).

La page Salomon de François D’Haene associe identité personnelle, territoire, vidéos et résultats. L’article de Petzl décrit un travail concret entre son expérience du terrain et les équipes techniques. [Profil Salomon](https://www.salomon.com/fr-fr/athlete/francois-dhaene), [collaboration Petzl](https://www.petzl.com/CA/fr/Sport/Actu/2022-10-13/Francois-D-haene-et-Petzl-inventent-la-meilleure-lampe-de-trail-running).

Interprétation pour ce portfolio : rendre visibles une identité, des preuves et un projet commun possible. Ces références servent à comparer la présentation ; elles ne prouvent ni une équivalence de niveau sportif ni une probabilité de sponsoring.

## Freins repérés et modifications réalisées

| Frein dans la page précédente                                         | Modification                                                                                                                              |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Introduction centrée sur la passion et le rêve, sans preuve immédiate | Accroche « Des volcans. Vers la longue distance. », victoire Espoir, 114 km terminé et audience TikTok dès l’entrée                       |
| Index UTMB placé avant les résultats et fortement exposé              | Podiums de catégorie en premier ; index, catégorie 100M sans index et historique complet dans un détail accessible                        |
| Podiums Espoir peu lisibles à côté du chrono                          | Place et catégorie agrandies ensemble ; chrono et classement général restent lisibles                                                     |
| Trois objectifs de même poids, sans projet distinctif                 | GR441 en tête, avec un traitement visuel spécifique et une piste de collaboration ; inscriptions toujours présentées comme non confirmées |
| Aucune preuve de contenu personnel                                    | Véritable miniature du compte TikTok, lien vers la sortie au puy de Dôme, chiffres datés et lien vers les autres vidéos                   |
| Invitation au contact très générale                                   | Trois propositions : matériel sur le terrain, récit autour du GR441, accompagnement de saison ; soutien et contribution explicités        |
| Parcours vers le contact de marque peu visible                        | Action principale dans l’introduction, lien dans la navigation, proposition de partenariat et e-mail prérempli                            |

La palette neutre, le portrait interactif et la composition du portfolio sont conservés. Les objectifs et les résultats restent distincts. Aucun sponsor, témoignage, statut professionnel, contrat ou chiffre d’engagement n’a été créé.

## Chiffres TikTok

Profil confirmé par l’utilisateur : [EnzoQuiCourt — @enzo_gubbiotti](https://www.tiktok.com/@enzo_gubbiotti).

Au 11 octobre 2026, le profil public affichait **2 968 abonnés** et **50,5 k mentions J’aime cumulées sur le compte**. La miniature présentée correspond à [la sortie longue au puy de Dôme fournie par l’utilisateur](https://www.tiktok.com/@enzo_gubbiotti/video/7691968723619499296).

Ces données ont été lues dans le navigateur. Elles ne fournissent pas la portée récente, la démographie, le taux d’engagement ni le nombre d’abonnés intéressés spécifiquement par le trail. Elles sont stockées avec leur date dans `src/data/trail-social.ts`.

## Contenu à compléter pour une prospection plus solide

1. **Photographies personnelles nettes** : un portrait en tenue, une photo d’action et une photo à l’arrivée ou sur le podium. La vidéo apporte déjà de l’authenticité ; les paysages restent des illustrations créditées.
2. **Statistiques TikTok récentes** : vues sur 30 ou 90 jours, vues médianes des publications trail et données d’audience si disponibles. Les totaux du compte seuls ne permettent pas d’estimer la performance d’une collaboration.
3. **Cadre du GR441** : période envisagée, catégorie de tentative, préparation, logistique, budget et soutien recherché. La page présente le projet au stade réellement connu.
4. **Justificatifs des podiums Espoir** : liens officiels ou classements de catégorie, actuellement confirmés directement par Enzo. Les temps et classements généraux sont ceux du snapshot UTMB du 4 octobre 2026.

Le discours privilégie une progression documentée, un projet lié à l’Auvergne et une proposition de collaboration concrète. L’obtention de partenariats dépendra aussi des résultats, du contenu et de l’adéquation avec chaque marque.

## Vérifications réalisées

Le build Astro génère les quatre routes. Les liens et fichiers locaux générés sont résolus. Les pages trail française et anglaise ont été contrôlées à 320, 375, 812 et 1 280 px, y compris en paysage, sans débordement horizontal de la page. L’historique s’ouvre au clavier et conserve les sept résultats, l’abandon et les cinq catégories d’index. Les liens de partenariat contiennent l’objet et le corps du message ; aucun e-mail n’a été envoyé.

La miniature TikTok charge depuis le fichier local. Aucune erreur JavaScript de page n’a été relevée. Les contrastes des textes principaux, textes sur la surface du GR441 et boutons dépassent 4,5:1 dans les deux thèmes. Les nouvelles transitions sont désactivées avec la préférence de réduction des animations.

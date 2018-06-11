-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 11 juin 2018 à 16:48
-- Version du serveur :  10.1.30-MariaDB
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `quiz`
--

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `migration_versions`
--

INSERT INTO `migration_versions` (`version`) VALUES
('20180611135139');

-- --------------------------------------------------------

--
-- Structure de la table `openquizzdb`
--

CREATE TABLE `openquizzdb` (
  `quizz_id` mediumint(8) UNSIGNED NOT NULL,
  `theme` varchar(100) NOT NULL,
  `question` varchar(255) NOT NULL,
  `prop1` varchar(40) NOT NULL,
  `prop2` varchar(40) NOT NULL,
  `prop3` varchar(40) NOT NULL,
  `prop4` varchar(40) NOT NULL,
  `difficulte` varchar(9) NOT NULL,
  `anecdote` varchar(255) NOT NULL,
  `wiki` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `openquizzdb`
--

INSERT INTO `openquizzdb` (`quizz_id`, `theme`, `question`, `prop1`, `prop2`, `prop3`, `prop4`, `difficulte`, `anecdote`, `wiki`) VALUES
(1, 'Logiciels et applications web', 'Quel logiciel de traitement de texte a été mis au point par Microsoft ?', 'Word', 'Excel', 'PowerPoint', 'Access', 'Débutant', 'Microsoft publie plusieurs logiciels de traitement de texte, mais Word en reste la « vedette ».', 'Microsoft_Word'),
(2, 'Logiciels et applications web', 'Le logiciel Excel extrait de la suite bureautique Microsoft Office est un...', 'Tableur', 'Traitement de texte', 'Navigateur internet', 'Client de messagerie', 'Débutant', 'Excel a été critiqué pour ses problèmes de précision sur calculs à virgule flottante.', 'Microsoft_Excel'),
(3, 'Logiciels et applications web', 'En informatique, comment appelle-t-on une erreur de programmation encore non localisée ?', 'Un bug', 'Un crack', 'Un spam', 'Un virus', 'Débutant', 'La gravité du dysfonctionnement informatique peut aller de bénigne à majeure.', 'Bug_(informatique)'),
(4, 'Logiciels et applications web', 'Quelle version de Windows Microsoft a-t-il lancé le vendredi 26 octobre 2012 ?', 'Windows 8', 'Windows 7', 'Windows CE', 'Windows Mobile', 'Débutant', 'La version Windows 8.1 est une mise à jour gratuite de Windows 8 disponible depuis 2013. ', 'Windows_8'),
(5, 'Logiciels et applications web', 'Comment est communément abrégée la publication assistée par ordinateur ?', 'PAO', 'USB', 'VGA', 'CIO', 'Débutant', 'La PAO consiste à créer des documents imprimés en travaillant la composition et la typographie de documents.', 'Publication_assistée_par_ordinateur'),
(6, 'Logiciels et applications web', 'Quelle application informatique de la société Apple permet de gérer facilement un iPod ?', 'iTunes', 'QuickTime', 'FileMaker', 'HyperCard', 'Débutant', 'iTunes faisait partie de la suite logicielle d\'Apple iLife jusqu\'à la version \'06.', 'ITunes'),
(7, 'Logiciels et applications web', 'En informatique, quel logiciel permet de créer des calculs automatiques ?', 'Un tableur', 'Un débogueur', 'Un navigateur', 'Un explorateur', 'Débutant', 'Une feuille de calcul est une table d\'informations la plupart du temps financières.', 'Tableur'),
(8, 'Logiciels et applications web', 'Quel pirate informatique casse les systèmes informatique et les logiciels protégés ?', 'Un hacker', 'Un blagueur', 'Un forceur', 'Un pirateur', 'Débutant', 'Certains utilisent ce savoir-faire dans un cadre légal, d\'autres étant hors-la-loi.', 'Hacker_(sécurité_informatique)'),
(9, 'Logiciels et applications web', 'Quels logiciels installés sur PC, tablette ou smartphone, permettent de « surfer » sur Internet ?', 'Des navigateurs', 'Des tableurs', 'Des éditeurs', 'Des émulateurs', 'Débutant', 'Le premier navigateur stable et largement diffusé fut NCSA Mosaic, en 1993.', 'Navigateur_Web'),
(10, 'Logiciels et applications web', 'Quel outil développé par le géant Google permet de gérer son emploi du temps ?', 'Google Agenda', 'Google TimeLine', 'Google Tempo', 'Google Mobile', 'Débutant', 'Google Agenda permet de partager des événements et des agendas et de les publier sur internet ou sur un site Web.', 'Google_Agenda'),
(11, 'Logiciels et applications web', 'Quelle grande société a reçu le feu vert en 2011 pour le rachat de Skype ?', 'Microsoft', 'Google', 'Apple', 'Facebook', 'Confirmé', 'Skype est un logiciel gratuit qui permet de passer des appels téléphoniques et vidéo via Internet, ainsi que le partage d\'écran.', 'Skype'),
(12, 'Logiciels et applications web', 'Quel est probablement le plus connu des systèmes informatiques dits « libre » ?', 'Linux', 'Windows', 'MS-DOS', 'Mac OS', 'Confirmé', 'Linux est un système informatique qui fonctionne sur du matériel allant du téléphone portable au supercalculateur.', 'Linux'),
(13, 'Logiciels et applications web', 'Quelle est le nom de la solution professionnelle de services Google ?', 'Google Apps', 'Google Pro', 'Google Serve', 'Google Mac', 'Confirmé', 'Ce site Web au service des entreprises met en ligne de nombreuses applications.', 'Google_Apps'),
(14, 'Logiciels et applications web', 'Quel logiciel est mis gratuitement et librement à disposition par son créateur ?', 'Un freeware', 'Un malware', 'Un adware', 'Un software', 'Confirmé', 'Il ne faut toutefois pas confondre freeware (gratuiciel) et shareware (partagiciel).', 'Freeware'),
(15, 'Logiciels et applications web', 'En avril 2012, quelle start-up Facebook a-t-il racheté pour un milliard de dollars ?', 'Instagram', 'Globalnet', 'Valve', 'Backelite', 'Confirmé', 'Instagram est une application cofondée et lancée par l\'américain Kevin Systrom et le Brésilien Michel Mike Krieger en octobre 2010.', 'Instagram'),
(16, 'Logiciels et applications web', 'Au Québec, quel mot est souvent utilisé pour désigner le courrier électronique ?', 'Courriel', 'Emel', 'Lettrinter', 'Copitel', 'Confirmé', 'Le courriel tend à être reconnu comme moyen valide de contacter une personne.', 'Courrier_électronique'),
(17, 'Logiciels et applications web', 'Quel logiciel de Microsoft a remplacé Windows Live Messenger en 2013 ?', 'Skype', 'Instagram', 'QuickTime', 'Pidgin', 'Confirmé', 'Skype a été fondé en Estonie par Niklas Zennström et Janus Friis en 2003 et développé par 3 Estoniens à l\'origine du logiciel KaZaA.', 'Skype'),
(18, 'Logiciels et applications web', 'Quel nom portait le navigateur Internet de Microsoft, devenu aujourd\'hui Microsoft Edge ?', 'Internet Explorer', 'Safari', 'Chrome', 'Firefox', 'Confirmé', 'La version 11 du navigateur sera toujours présente dans Windows 10 avant le passage progressif à Microsoft Edge.', 'Internet_Explorer'),
(19, 'Logiciels et applications web', 'Quel logiciel est indispensable pour protéger votre ordinateur sur Internet ?', 'Un antivirus', 'Un chat', 'Un navigateur', 'Une messagerie', 'Confirmé', 'Les antivirus peuvent balayer le contenu d\'un disque dur, mais également la mémoire vive de l\'ordinateur.', 'Logiciel_antivirus'),
(20, 'Logiciels et applications web', 'Qui est le tout premier pape à avoir envoyé un message sur Twitter ?', 'Benoît XVI', 'François', 'Jean-Paul II', 'Paul VI', 'Confirmé', 'Réputé conservateur, le cardinal Ratzinger a été élu le 19 avril 2005 pour succéder à Jean-Paul II.', 'Benoît_XVI'),
(21, 'Logiciels et applications web', 'Quel courrielleur créé par Mozilla est le compagnon idéal du navigateur Firefox ?', 'Thunderbird', 'Incredimail', 'Sylpheed', 'Foxmail', 'Expert', 'Tout comme Firefox, Thunderbird et son interface en XUL est basé sur le moteur Gecko.', 'Mozilla_Thunderbird'),
(22, 'Logiciels et applications web', 'Quel nom porte la suite bureautique en ligne proposée par Microsoft ?', 'Office 365', 'KOffice', 'OpenOffice', 'StarOffice', 'Expert', 'Les abonnements Office 365 pour les particuliers permettent de bénéficier de la version complète de la suite Office que l\'on connaît.', 'Microsoft_Office_365'),
(23, 'Logiciels et applications web', 'Quel était le nom de code de la version 3.1 de Windows ?', 'Janus', 'Startus', 'Uranus', 'Opus', 'Expert', 'La version 3 a été la première à connaître un large succès, permettant à Microsoft de rivaliser avec l\'Apple Macintosh.', 'Windows_3.x'),
(24, 'Logiciels et applications web', 'Quel nom porte le service de stockage en ligne de Windows Live ?', 'Onedrive', 'Dropbox', 'RapidShare', 'MediaFire', 'Expert', 'Ce service en ligne de stockage et d\'applications, créé en 2007, est une manifestation du concept de cloud computing.', 'OneDrive'),
(25, 'Logiciels et applications web', 'Quel est le nouveau nom du logiciel gratuit de messagerie instantanée Gaim ?', 'Pidgin', 'Connect', 'iShare', 'Komunnity', 'Expert', 'Gaim a été renommé en Pidgin en 2007 en raison de plaintes de la société AOL et de sa marque AIM.', 'Pidgin_(logiciel)'),
(26, 'Logiciels et applications web', 'Quelle suite logicielle équivaut à Microsoft Office chez le géant Google ?', 'Google Documents', 'OpenOffice', 'Google Sites', 'Works', 'Expert', 'Google Documents est une suite des évolutions de Google Spreadsheets et de Writely, logiciel de traitement de texte.', 'Google_Documents'),
(27, 'Logiciels et applications web', 'De quel pays la suite logicielle gratuite Opera est-elle originaire ?', 'Norvège', 'France', 'Italie', 'Autriche', 'Expert', 'Opera est un navigateur Web développé par la société norvégienne Opera Software, qui propose plusieurs logiciels relatifs à Internet.', 'Opera'),
(28, 'Logiciels et applications web', 'Lequel de ces outils ne permet pas de visionner des pages web ?', 'Acrobat Reader', 'Mozilla Firefox', 'Google Chrome', 'Internet Explorer', 'Expert', 'Adobe change régulièrement le nom des produits de la famille Acrobat et cela en subdivisant ses produits.', 'Adobe_Acrobat_DC'),
(29, 'Logiciels et applications web', 'Combien de téléchargements dénombrait-on sur le célèbre App Store fin 2012 ?', '35 milliards', '25 milliards', '15 milliards', '5 milliards', 'Expert', 'Depuis la mise à jour du système d\'exploitation d\'Apple iOS 7 en septembre 2013, l\'App Store possède un tout nouveau design.', 'App_Store'),
(30, 'Logiciels et applications web', 'Quelle est la date « officielle » de création de Wikipédia en Français ?', 'Le 23 mars 2001', 'Le 2 janvier 1999', 'Le 15 janvier 2002', 'Le 8 décembre 2000', 'Expert', 'Plusieurs moyens de consulter l\'encyclopédie existent, tels que des sites web miroirs ou des applications pour smartphone.', 'Wikipédia_en_français'),
(31, '', '', '', '', '', '', '', '', ''),
(32, '', '', '', '', '', '', '', '', ''),
(33, '', '', '', '', '', '', '', '', ''),
(34, '', '', '', '', '', '', '', '', ''),
(35, 'stjhjhng', 'stjhjhjhring', 'string', 'strjhjhing', 'strjhjhing', 'string', 'strijhjhn', 'strinjhjhg', 'strjhjhing'),
(36, 'stjhjhng', 'stjhjhjhring', 'string', 'strjhjhing', 'strjhjhing', 'string', 'strijhjhn', 'strinjhjhg', 'strjhjhing');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `openquizzdb`
--
ALTER TABLE `openquizzdb`
  ADD PRIMARY KEY (`quizz_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `openquizzdb`
--
ALTER TABLE `openquizzdb`
  MODIFY `quizz_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

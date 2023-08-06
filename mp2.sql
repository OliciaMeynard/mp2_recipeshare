-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2023 at 10:33 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mp2`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `postedBy` varchar(80) NOT NULL,
  `recipeId` int(11) NOT NULL,
  `body` text NOT NULL,
  `datePosted` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `postedBy`, `recipeId`, `body`, `datePosted`) VALUES
(1, 'aziAcosta', 73, 'first comment', '2023-07-23 10:40:27'),
(2, 'aziAcosta', 73, 'Test this comment', '2023-07-23 10:40:57'),
(3, 'aziAcosta', 73, 'try to comment now', '2023-07-23 10:52:41'),
(4, 'aziAcosta', 73, 'this is a post', '2023-07-23 10:54:12'),
(5, 'aziAcosta', 73, 'comment attempt', '2023-07-23 10:54:59'),
(7, 'aziAcosta', 73, 'check again', '2023-07-23 11:13:52'),
(8, 'blazeDreyden', 73, 'comment from blaze', '2023-07-23 11:37:34'),
(9, 'meynard', 73, '12:39PM comment', '2023-07-23 12:39:38'),
(10, 'meynard', 73, '12:44PM comment', '2023-07-23 12:44:37'),
(11, 'aziAcosta', 73, 'this is Azi', '2023-07-23 12:45:35'),
(12, 'aziAcosta', 73, 'try to comment again', '2023-07-23 19:35:08'),
(13, 'jdCoke', 74, 'try to comment', '2023-07-23 19:39:03'),
(14, 'jdCoke', 73, 'this is a comment from JD', '2023-07-23 19:54:45'),
(15, 'jdCoke', 73, 'check if working', '2023-07-23 19:57:34'),
(16, 'jdCoke', 74, '2nd comment', '2023-07-23 19:59:53'),
(17, 'blazeDreyden', 80, 'Nice', '2023-07-27 10:53:21'),
(18, 'jdCoke', 80, 'I will try this one', '2023-07-27 10:53:42'),
(19, 'aziAcosta', 78, 'first comment', '2023-07-27 11:14:38'),
(20, 'jdCoke', 78, 'looks nice', '2023-07-27 13:05:11'),
(21, 'sample', 81, 'this is a comment', '2023-07-29 09:29:43'),
(22, 'johnsmith', 77, 'this is a comment', '2023-08-01 20:19:27'),
(23, 'johnsmith', 77, 'comment 2', '2023-08-01 20:19:38');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `commentId` int(11) NOT NULL,
  `recipeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `username`, `commentId`, `recipeId`) VALUES
(10, 'blazeDreyden', 0, 75),
(21, 'aziAcosta', 0, 75),
(125, 'meynard', 0, 75),
(306, 'jdCoke', 0, 74),
(313, 'jdCoke', 0, 73),
(329, 'blazeDreyden', 0, 73),
(335, 'sheene', 0, 73),
(336, 'aziAcosta', 0, 73),
(337, 'blazeDreyden', 0, 77),
(338, 'blazeDreyden', 0, 78),
(340, 'jdCoke', 0, 80),
(345, 'sample', 0, 81),
(347, 'aziAcosta', 0, 79),
(348, 'jdCoke', 0, 86),
(349, 'meynard', 0, 85),
(350, 'richie', 0, 77),
(351, 'meynard', 0, 80),
(352, 'johnsmith', 0, 77),
(353, 'johnsmith', 0, 94);

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `title` varchar(89) NOT NULL,
  `ingredients` varchar(255) NOT NULL,
  `filePath` varchar(255) NOT NULL,
  `privacy` int(11) NOT NULL,
  `uploadDate` datetime NOT NULL DEFAULT current_timestamp(),
  `views` int(11) NOT NULL,
  `uploadedBy` varchar(60) NOT NULL,
  `category` varchar(80) NOT NULL,
  `howtocook` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `ingredients`, `filePath`, `privacy`, `uploadDate`, `views`, `uploadedBy`, `category`, `howtocook`, `description`) VALUES
(74, 'Cook steak like a chef', '2 (6 ounce) filet mignon steaks\r\n\r\n1 teaspoon olive oil\r\n\r\nCoarse kosher salt and freshly ground black pepper\r\n\r\n1/2 cup Cabernet Sauvignon\r\n\r\n2 tablespoons butter', '64b7d12c60789Cheffy-Garlic-Butter-Steak_7.webp', 0, '2023-07-19 20:03:56', 213, 'aziAcosta', 'asiancuisine', 'Bring to room temp: Take the steak out of the fridge 30 minutes prior to bring to room temperature.\r\n\r\nDry steaks: Pat dry with paper towels.,\r\nHeat skillet: Heat oil in a heavy based skillet over high heat until it is very hot – you should see smoke!\r\n\r\nSeason: Sprinkle each side of the steak generously with salt and pepper, then immediately place in the skillet.\r\n\r\nSear Side 1: Cook for 2 – 2.5 minutes until you get a great crust then turn.\r\nGarlic Butter: Leave for 1 minute, then push steaks to one side and toss in butter, garlic and thyme. BE CAREFUL – the thyme will sputter!\r\n\r\nBaste: As soon as the butter is melted, continuously spoon the butter over the steak until it’s cooked to your liking – 2 minutes in total for the 2nd side for medium rare (52C/125F, chart below for other doneness temps)\r\n\r\nBasting also renders fat on the side of the steak – use tongs to sear the edges at the end if you want it browned more.,\r\nRest: Transfer steak to a plate and cover loosely with foil, rest for 5 to 10 minutes.\r\n\r\nServe steak with a bit of the butter from the skillet drizzled on top. Pictured in post with Crispy Smashed Potatoes.', 'A steak is a thick cut of meat generally sliced across the muscle fibers, sometimes including a bone. It is normally grilled or fried. Steak can be diced, cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers'),
(75, 'Home Made Pizza', '1 package (1/4 ounce) active dry yeast\r\n\r\n1 teaspoon sugar\r\n\r\n1-1/4 cups warm water (110° to 115°)\r\n\r\n1/4 cup canola oil\r\n\r\n1 teaspoon salt\r\n\r\n3-1/2 to 4 cups all-purpose flour\r\n\r\n1/2 pound ground beef\r\n\r\n1 small onion, chopped\r\n\r\n1 can (15 ounces) tomato', '64b7d237ca53eSimply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.webp', 0, '2023-07-19 20:08:23', 242, 'aziAcosta', 'europeandish', 'In large bowl, dissolve yeast and sugar in water; let stand for 5 minutes. Add oil and salt. Stir in flour 1 cup at a time until a soft dough forms.\r\n\r\nTurn onto a floured surface; knead until smooth and elastic 2-3 minutes. Place in a greased bowl turning once to grease the top. Cover and let rise in a warm place until doubled about 45 minutes. Meanwhile, cook beef and onion over medium heat until beef is no longer pink breaking meat into crumbles; drain.\r\n\r\nPunch down dough; divide in half. Press each half into a greased 12-in. pizza pan. Combine the tomato sauce, oregano and basil; spread over each crust. Top with beef mixture, green pepper and cheese.\r\n\r\nBake at 400° for 25-30 minutes or until crust is lightly browned.', 'Make perfect pizza at home with this classic homemade pizza recipe, including a pizza dough recipe, topping suggestions, and step-by-step instructions with photos.'),
(77, 'Perfect Sushi Rice', '2 cups uncooked glutinous white rice (sushi rice),\r\n\r\n3 cups water,\r\n\r\n½ cup rice vinegar,\r\n\r\n1 tablespoon vegetable oil,\r\n\r\n¼ cup white sugar,\r\n\r\n1 teaspoon salt', '64bfaa398e240sushi.jpg', 1, '2023-07-25 18:55:53', 58, 'meynard', 'asiancuisine', 'Gather all ingredients.\r\n\r\nRinse the rice in a strainer or colander under cold running water until the water runs clear.\r\n\r\nCombine rice and water in a saucepan over medium-high heat and bring to a boil., Reduce heat to low, cover, and cook until rice is tender and all water has been absorbed, about 20 minutes., Remove from stove and set aside until cool enough to handle.\r\n\r\nMeanwhile combine rice vinegar - oil, - sugar - and salt in a small saucepan over medium heat. Cook until the sugar has dissolved. Allow to cool  then stir into the cooked rice. While mixture will appear very wet at first, keep stirring and rice will dry as it cools.\r\n', 'Here is my recipe for the perfect sushi rice. You can eat this alone or roll into your favorite sushi roll with ingredients of choice. I use strips of carrots, cucumbers and slices of avocado. You can adjust the amount of vinegar in this recipe to suit your taste.'),
(78, 'Spinach and Sun-Dried Tomato Pasta', '1 cup vegetable broth\r\n\r\n12 dehydrated sun-dried tomatoes\r\n\r\n1 (8 ounce) package uncooked penne pasta\r\n\r\n2 tablespoons pine nuts\r\n\r\n1 tablespoon olive oil\r\n\r\n¼ teaspoon crushed red pepper flakes\r\n\r\n1 clove garlic, minced\r\n\r\n1 bunch fresh spinach', '64bfae2ed13a5spinachandsundriedtomatopastasalad1-1-of-1.jpg', 1, '2023-07-25 19:12:46', 114, 'meynard', 'vegetarian', 'In a small saucepan bring the broth to a boil. Remove from heat. Place the sun-dried tomatoes in the broth 15 minutes  or until softened. Drain reserving broth, and coarsely chop.,\r\n\r\nBring a large pot of lightly salted water to a boil. Place penne pasta in the pot cook 9 to 12 minutes until al dente and drain.,\r\n\r\nPlace the pine nuts in a skillet over medium heat. Cook and stir until lightly toasted.,\r\n\r\nHeat the olive oil and red pepper flakes in a skillet over medium heat and saute the garlic 1 minute until tender. Mix in the spinach and cook until almost wilted. Pour in the reserved broth, and stir in the chopped sun-dried tomatoes. Continue cooking 2 minutes, or until heated through.,\r\n\r\nIn a large bowl toss the cooked pasta with the spinach and tomato mixture and pine nuts. Serve with Parmesan cheese.', 'I created this simple Sicilian-style pasta dish one day when trying to use up some sun-dried tomatoes.'),
(79, 'Greek Couscous Salad', '½ cup water,\r\n\r\n¼ cup chicken broth,\r\n\r\n1 teaspoon minced garlic,\r\n\r\n½ cup pearl (Israeli) couscous,\r\n\r\n1 cup canned chickpeas (garbanzo beans), rinsed and drained,\r\n\r\n¼ cup chopped sun-dried tomatoes,\r\n\r\n¼ cup sliced Kalamata olives,\r\n\r\n2 tablespoons cru', '64bfaee8602831389405-19d4e5ab57bb43c6a023b8a3b9b267b3.webp', 1, '2023-07-25 19:15:52', 14, 'meynard', 'salad', 'Pour water and chicken broth into a saucepan; stir in the garlic and bring to a boil. Stir in pearl couscous, cover the pan and remove from heat. Allow couscous to stand until water has been absorbed, about 5 minutes; fluff with a fork. Allow couscous to cool to warm temperature.,\r\n\r\nLightly toss couscous, chickpeas, sun-dried tomatoes, olives, and feta cheese in a large serving bowl.,\r\n\r\nTo make the dressing: Mix white wine vinegar, lemon juice, oregano, and black pepper in a small bowl until well combined. Pour over couscous mixture; toss again to serve.', 'This hearty Greek couscous salad uses Israeli couscous. So delicious!'),
(80, 'Salmon Couscous Salad', '1/2 cup mayonnaise,\r\n\r\n1/2 cup buttermilk,\r\n\r\n1/4 cup prepared pesto,\r\n\r\n1 lemon, juiced,\r\n\r\n1 clove garlic,\r\n\r\nground black pepper to taste,\r\n\r\nCouscous:,\r\n\r\n1 (5.8 ounce) package herb and garlic couscous,\r\n\r\nSalmon:,\r\n\r\n1/2 pound salmon filet, with skin', '64bfb0378f17f7561932_Salmon-Couscous-Salad_TheDailyGourmet_4x3-e770324e8ab44d2097bbbc9c48be0122.webp', 0, '2023-07-25 19:21:27', 160, 'blazeDreyden', 'asiancuisine', 'Add mayonnaise buttermilk pesto, lemon juice, and garlic to the bowl of a food processor. Blend until smooth. Season to taste with black pepper. Set dressing aside.,\r\n\r\nMeanwhile heat a skillet over medium-high heat. Season salmon with Greek seasoning. Cut salmon into two filets. Melt butter in a skillet over medium heat and add olive oil. Place salmon, skin side down, in the hot skillet. Cook until salmon flakes easily with a fork, about 8 minutes.,\r\n\r\nBring water to a boil in a saucepan; remove from heat and stir couscous into the water. Cover saucepan and let stand until water is absorbed completely about 10 minutes.,\r\n\r\nTo assemble place salad mixture into 2 dinner bowls and sprinkle chopped tomatoes over the salad. Fluff couscous with a fork. Mound couscous in the center of each bowl. Sprinkle Parmesan cheese around couscous. Place a salmon filet to the side of the couscous. Pour 1 to 2 tablespoons pesto dressing on top of dish. Sprinkle with pepitas. Serve immediately.,\r\n\r\n\r\nNutrition data for this recipe includes the full amount of dressing ingredients. The actual amount of dressing consumed will vary.', 'This salmon couscous salad recipe features salmon, couscous, and arugula salad layered in a bowl and drizzled with homemade pesto dressing for a unique presentation. This dish is a nod to a dish I tried at a local restaurant.'),
(81, 'Tarragon Chicken Salad', '4 boneless, skinless chicken breasts\r\n\r\n1 tablespoon olive oil\r\n\r\n1 pinch salt\r\n\r\n1 pinch freshly ground black pepper\r\n\r\n\r\n1/2 cup mayonnaise\r\n\r\n1/4 cup plain Greek yogurt\r\n\r\n2 tablespoons freshly squeezed lemon juice\r\n\r\n1 teaspoon Dijon mustard\r\n\r\n2 tabl', '64c1ed950a124chicken_taragon.jpg', 1, '2023-07-27 12:07:49', 28, 'jdCoke', 'salad', 'Gather the ingredients. Preheat the oven to 350 F.\r\n\r\nRub the chicken breasts with the olive oil and place them on a sheet pan. Sprinkle with salt and pepper. Roast them in the oven for 35 to 40 minutes, until the chicken is cooked through. Set aside to cool.\r\n\r\nOnce the chicken has cooled, dice or shred it with two forks.\r\n\r\nMake the dressing by whisking together the mayonnaise, Greek yogurt, fresh lemon juice, Dijon mustard and fresh chopped tarragon. Stir in the diced celery, diced onion and chicken. Taste and season with additional salt and pepper, if needed.\r\n\r\nServe the chicken salad on a bed of the mixed salad greens alongside crackers or toasted bread and fresh seedless grapes.', 'Chicken salad is a deli and sandwich favorite for many. Chunks of cooked skinless, boneless chicken breast tossed in mayonnaise dressing often with diced celery is delicious. We love it on bread or just served on the side with crackers and fruit, but this comforting classic leaves lots of room for variations and improvements.'),
(85, 'Honey Walnut Shrimp', '1 cup water\r\n\r\n⅔ cup white sugar\r\n\r\n½ cup walnuts\r\n\r\n4 large egg whites\r\n\r\n⅔ cup mochiko (glutinous rice flour)\r\n\r\n1 cup vegetable oil for frying\r\n\r\n1 pound large shrimp, peeled and deveined\r\n\r\n¼ cup mayonnaise\r\n\r\n2 tablespoons honey\r\n\r\n1 tablespoon canne', '64c45ed2de686honey-walnut-shrimp-5.jpg', 0, '2023-07-27 17:45:26', 79, 'jdCoke', 'asiancuisine', 'Stir together water and sugar in a small saucepan over high heat. Bring to a boil and add walnuts. Boil for 2 minutes, then drain and place walnuts on a cookie sheet to dry.\r\n\r\nWhip egg whites in a medium bowl until foamy. Stir in mochiko until it has a pasty consistency.\r\n\r\nHeat oil in a heavy deep skillet over medium-high heat.\r\n\r\nDip shrimp in mochiko batter, then fry in batches in hot oil until golden brown, about 5 minutes. Remove with a slotted spoon and drain on paper towels.\r\n\r\nStir together mayonnaise, honey, and sweetened condensed milk in a medium serving bowl. Add fried shrimp and toss to coat with sauce. Sprinkle candied walnuts on top and serve.', 'This honey walnut shrimp is a Hong Kong-style recipe! Crispy battered shrimp are tossed in a creamy sauce and topped with sugar-coated walnuts.'),
(86, 'sample', 'sample\r\n\r\nsample\r\n\r\nsample\r\n\r\nsample\r\n\r\nsample\r\n', '64c46b5664c48b56cf5a82570ac42edbe03559c0d8c12.jpg', 0, '2023-07-29 09:28:11', 80, 'sample', 'asiancuisine', 'sample\r\n\r\nsamplesample\r\n\r\nsample\r\n', 'sample samplesample'),
(87, 'Burger', 'sugar\r\n\r\nspice\r\n\r\neverything nice', '64c6157e980a1fast-food-burgers.webp', 0, '2023-07-30 15:47:10', 23, 'dkong', 'salad', '111111111111\r\n\r\n222222222\r\n\r\n3333333333\r\n\r\n\r\n4444444444', 'gfhyjjjjjjjjjjjjjjjjjjjjjjjjjjj'),
(94, 'tempura', 'shrimp\r\n\r\ning1\r\n\r\ning2\r\n\r\ning3', '64cbb7769882d1107115_l-2.jpg', 0, '2023-08-01 20:15:40', 8, 'johnsmith', 'asiancuisine', 'testing\r\n\r\n\r\ntesting\r\n\r\ntesting', 'testing');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL,
  `userTo` varchar(100) NOT NULL,
  `userFrom` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `userTo`, `userFrom`) VALUES
(13, 'meynard', 'jdCoke'),
(67, 'meynard', 'sheene'),
(68, 'aziAcosta', 'jdCoke'),
(73, 'meynard', 'blazeDreyden'),
(75, 'meynard', 'aziAcosta'),
(77, 'jdCoke', 'sample'),
(81, 'blazeDreyden', 'jdCoke'),
(82, 'sample', 'jdCoke'),
(83, 'jdCoke', 'meynard'),
(84, 'meynard', 'dkong'),
(87, 'meynard', 'rayMont'),
(88, 'meynard', 'richie'),
(90, 'blazeDreyden', 'meynard'),
(141, 'meynard', 'johnsmith');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `signUpDate` datetime NOT NULL DEFAULT current_timestamp(),
  `profilePic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `username`, `email`, `password`, `signUpDate`, `profilePic`) VALUES
(2, 'Meynard', 'Olicia', 'meynard', 'olicia.meynard@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-18 00:56:39', 'qxkj97e87_img_1.jpg'),
(4, 'Blaze', 'Olicia', 'blazeDreyden', 'blaze@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-18 20:10:51', 'default.webp'),
(5, 'Sheene Shazy Lou', 'Olicia', 'sheene', 'tabladasheene@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-18 20:13:58', 'default.webp'),
(6, 'Azi', 'Acosta', 'aziAcosta', 'azi@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-18 20:17:47', 'az.webp'),
(8, 'Jane', 'Deleon', 'jdCoke', 'janedeleon@olicia.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-22 07:36:23', 'jd.jpg'),
(9, 'Donkey', 'Kong', 'dkong', 'dk@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-25 16:38:34', 'ddddddd_dk.jpg'),
(10, 'Monkey', 'Luffy', 'luffy', 'luffy@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-25 16:40:15', 'default.webp'),
(11, 'Sample', 'Sample', 'sample', 'sample@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-29 09:26:44', 'default.webp'),
(12, 'Ray Marvin', 'Montero', 'rayMont', 'ray@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-30 19:41:18', 'default.webp'),
(13, 'Richarddie', 'Fernandezz', 'richie', 'rich@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-07-30 19:48:50', '64c674c32e44eR.jpg'),
(14, 'John', 'Smith', 'johnsmith', 'meynard@gmail.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', '2023-08-01 20:14:14', '64c8f7c8ba048llllllll.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_to_recipe` (`uploadedBy`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=354;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `recipes`
--
ALTER TABLE `recipes`
  ADD CONSTRAINT `users_to_recipe` FOREIGN KEY (`uploadedBy`) REFERENCES `users` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

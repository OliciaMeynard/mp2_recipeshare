<?php
include 'models.php';
include 'function.php';
include 'env.php';


include_once '../includes/classes/RecipeUploadData.php';
include_once '../includes/classes/recipeProcessor.php';
include_once '../includes/classes/Recipe.php';
include_once '../includes/classes/Account.php';
include_once '../includes/classes/User.php';
include_once '../includes/classes/FormSanitizer.php';
include_once '../includes/classes/Comment.php';

// unlink('../uploads/recipeImgs/text.txt');

ob_start(); //turns on output buffering
session_start();
date_default_timezone_set('Asia/Manila');


try {
    $con= new PDO("mysql:dbname=" . MP2. ";host=" . DB_HOST. ";port=3306", "root", "");
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


$usernameLoggedIn = isset($_SESSION["userLoggedIn"]) ? $_SESSION["userLoggedIn"] : "";
$userLoggedInObj = new User($con, $usernameLoggedIn);

$data = $userLoggedInObj->getUserData();

// unset($_SESSION["userLoggedIn"]);


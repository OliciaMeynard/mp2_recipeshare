<?php
require_once "includes/classes/User.php";



$usernameLoggedIn = isset($_SESSION["userLoggedIn"]) ? $_SESSION["userLoggedIn"] : "";
$userLoggedInObj = new User($con, $usernameLoggedIn);

$data = $userLoggedInObj->getUserData();


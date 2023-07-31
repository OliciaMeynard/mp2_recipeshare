<?php
// require_once "../../api/config.php";
require_once "Constants.php";


class Account{


    private $con;
    public $errorArray = array();
  
    

    public function __construct($con)
    {
        $this->con = $con;
    }

    public function login($userName, $password){
            $password = hash("sha512", $password);
            $query = $this->con->prepare("SELECT * FROM ".TBL_USERS." WHERE username=:userName AND password=:password");
            $query->bindParam(":userName", $userName);
            $query->bindParam(":password", $password);
            $query->execute();
        if($query->rowCount() == 1){
            return true;          
        }
        else {
            array_push($this->errorArray, Constants::$errorLogIn);
        }
    }



    public function getErr(){
        return $this->errorArray;
    }

    public function register($firstName,
                            $lastName,
                            $userName,
                            $email,
                            $email2,
                            $password,
                            $password2){
        $this->validateFirstname($firstName);
        $this->validatelastname($lastName);
        $this->validateUsername($userName);
        $this->validateEmail($email, $email2);
        $this->validatePassword($password, $password2);

         if(empty($this->errorArray)){
            return $this->insertUserDetails($firstName,
                                        $lastName,
                                        $userName,
                                        $email,
                                        $password);
         }  else {

            return false;
         }                     
    }

    public function insertUserDetails($firstName,
                                        $lastName,
                                        $userName,
                                        $email,
                                        $password){
                /////////HASHING PASSWORD
                $password = hash("sha512", $password);
                /////////HASHING PASSWORD
                $profilePic = "default.webp";
                $query = $this->con->prepare("INSERT INTO ".TBL_USERS."(firstName, lastName, username, email, password,profilePic)
                                             VALUES(:firstName, :lastName, :username, :email, :password,:profilePic)");

                $query->bindParam(":firstName", $firstName);
                $query->bindParam(":lastName", $lastName);
                $query->bindParam(":username", $userName);
                $query->bindParam(":email", $email);
                $query->bindParam(":password", $password);
                $query->bindParam(":profilePic", $profilePic);


                return $query->execute();
        
    }

    private function validateFirstname($firstName){
        if(strlen($firstName) > 30 || strlen($firstName) < 2){
            array_push($this->errorArray, Constants::$firstNameCharacters);
        }
    }
    private function validateLastname($lastName){
        if(strlen($lastName) > 30 || strlen($lastName) < 2){
            array_push($this->errorArray, Constants::$lastNameCharacters);
        }
    }
    private function validateUsername($userName){
        if(strlen($userName) > 30 || strlen($userName) < 5){
            array_push($this->errorArray, Constants::$userNameCharacters);
        }

    
            $query = $this->con->prepare("SELECT username FROM users WHERE username=:userName");
            $query->bindParam(":userName", $userName);
            $query->execute();
        if($query->rowCount() != 0){
            array_push($this->errorArray, Constants::$userNameTaken);           
        }

    }


    private function validateEmail($email, $email2){
        if( $email != $email2){
            array_push($this->errorArray, Constants::$emailsNotmatch);
            // $this->errorArray[] = Constants::$emailsNotmatch;
            // return;
        }

           //Filters a variable with a specified filter
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)) { ///FILTER_VALIDATE_EMAIL built in
                array_push($this->errorArray, Constants::$emailInvalid);
                // return;
            }
            $query = $this->con->prepare("SELECT email FROM users WHERE email=:email");
            $query->bindParam(":email", $email);
            $query->execute();
        if($query->rowCount() != 0){
            array_push($this->errorArray, Constants::$emailTaken);           
        }

    }

    private function validatePassword($password, $password2){
        if( $password != $password2){
            array_push($this->errorArray, Constants::$passwordsNotmatch);
            // $this->errorArray[] = Constants::$emailsNotmatch;
            // return;
        }
        if( preg_match("/[^A-Za-z0-9]/",$password)){
            array_push($this->errorArray, Constants::$passwordNotAlphaNumeric);
            // $this->errorArray[] = Constants::$emailsNotmatch;
            // return;
        }

        if(strlen($password) > 30 || strlen($password) < 5){
            array_push($this->errorArray, Constants::$passwordLength);
            // return;
        }

    }

    // public function getError($error){
    //     if(in_array($error, $this->errorArray)){
    //         echo "<span class='errorMessage'>$error</span>";
    //     }
    // }

    public function getErrors(){
        return $this->errorArray;
    }



    


} 
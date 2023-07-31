<?php
class User{

    private $con, $sqlData;

    public function __construct($con, $userName)
    {
        $this->con = $con;
        $query = $this->con->prepare("SELECT * FROM ".TBL_USERS." WHERE username=:userName");
        $query-> bindValue(':userName', $userName );
        $query->execute();

        $this->sqlData = $query->fetch(PDO::FETCH_ASSOC);
    }


    public function getUserName(){
        return $this->sqlData["username"];
    }
    public function getUserId(){
        return $this->sqlData["id"];
    }
    public function getName(){
        return $this->sqlData["firstName"]. " ".$this->sqlData["lastName"];
    }
    public function getEmail(){
        return $this->sqlData["email"];
    }
    public function getProfilePic(){
        return $this->sqlData["profilePic"];
    }
    public function getSignUpDate(){
        return $this->sqlData["signUpDate"];
    }


    public function getUserData(){
        return $this->sqlData;
    }

    // return $this->sqlData;

    

}
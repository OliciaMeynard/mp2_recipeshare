<?php
class Recipe{

    private $con, $sqlData, $userLoggedInObj;

    public function __construct($con, $input, $userLoggedInObj)
    {
        $this->con = $con;
        $this->userLoggedInObj = $userLoggedInObj;

        if(is_array($input)){
            $this->sqlData = $input;
        }

        else {
            
            $query = $this->con->prepare("SELECT * FROM ".TBL_RECIPES." WHERE id=:id");
            $query-> bindParam(':id', $input );
            $query->execute();
    
            $this->sqlData = $query->fetch(PDO::FETCH_ASSOC);
        }


    }

    public function getUserName(){
        return $this->sqlData["username"];
    }
    public function getId(){
        return $this->sqlData["id"];
    }
    public function getUploadedBy(){
        return $this->sqlData["uploadedBy"];
    }
    public function getTitle(){
        return $this->sqlData["title"];
    }
    public function getDescription(){
        return $this->sqlData["description"];
    }
    public function getPrivacy(){
        return $this->sqlData["privacy"];
    }
    public function getFilePath(){
        return $this->sqlData["filePath"];
    }
    public function getCategory(){
        return $this->sqlData["category"];
    }
    public function getUploadDate() {
        $date = $this->sqlData["uploadDate"];
        return date("M j, Y", strtotime($date));
    }
    public function getViews(){
        return $this->sqlData["views"];
    }

    public function incrementViews(){
        $recipeId = $this->getId();
        $query = $this->con->prepare("UPDATE ".TBL_RECIPES." SET views=views+1 WHERE id=:id");
        $query-> bindParam(':id', $recipeId );
        $query->execute();
        // $this->sqlData["views"] = $this->sqlData["views"] + 1;
    }

    public function getFavorites(){
        $recipeId = $this->getId();
        $query = $this->con->prepare("SELECT count(*) as 'count' FROM ".TBL_FAVORITES." WHERE recipeId = :recipeId ");
        $query->bindParam(":recipeId", $recipeId);
        $query->execute();

        $data = $query->fetch(PDO::FETCH_ASSOC);
        return $data["count"];
    }
    public function getSumComments(){
        $recipeId = $this->getId();
        $query = $this->con->prepare("SELECT count(*) as 'count' FROM ".TBL_COMMENTS." WHERE recipeId = :recipeId");
        $query->bindParam(":recipeId", $recipeId);
        $query->execute();

        $data = $query->fetch(PDO::FETCH_ASSOC);
        return $data["count"];
    }


    public function favorite(){
        $id = $this->getId();
        $username = $this->userLoggedInObj->getUserName();
        $query = $this->con->prepare("SELECT * FROM ".TBL_FAVORITES." where username=:username AND recipeId=:recipeId");
        $query->bindParam(':username', $username);
        $query->bindParam(':recipeId', $id);
        $query->execute();
        if($query->rowCount() > 0){
            //user has already Liked     
        $query = $this->con->prepare("DELETE FROM ".TBL_FAVORITES." where username=:username AND recipeId=:recipeId");
        $query->bindParam(':username', $username);
        $query->bindParam(':recipeId', $id);
        $query->execute();
        }

        else {
            //user has not liked
            $query = $this->con->prepare("INSERT INTO ".TBL_FAVORITES."(username, recipeId) VALUES(:username, :recipeId)");
            $query->bindParam(':username', $username);
            $query->bindParam(':recipeId', $id);
            $query->execute();
        }
    }

    


    public function getRecipeData(){
        return $this->sqlData;
    }

    // return $this->sqlData;

    public function checkIfLiked(){
        $id = $this->getId();
        $username = $this->userLoggedInObj->getUserName();
        $query = $this->con->prepare("SELECT * FROM ".TBL_FAVORITES." WHERE username=:username AND recipeId=:recipeId");
        $query->bindParam(':username', $username);
        $query->bindParam(':recipeId', $id);
        $query->execute();
        return $query->rowCount();
    }
    public function getUploaderProfilePic(){    
        $username = $this->sqlData["uploadedBy"];
        $query = $this->con->prepare("SELECT  profilePic FROM ".TBL_USERS." WHERE username=:username");
        $query->bindParam(':username', $username);
        $query->execute();
        $data = $query->fetch(PDO::FETCH_ASSOC);
        return $data['profilePic'];
    }
    public function getUploaderId(){    
        $username = $this->sqlData["uploadedBy"];
        $query = $this->con->prepare("SELECT  id FROM ".TBL_USERS." WHERE username=:username");
        $query->bindParam(':username', $username);
        $query->execute();
        $data = $query->fetch(PDO::FETCH_ASSOC);
        return $data['id'];
    }

    

}
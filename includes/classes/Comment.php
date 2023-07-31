<?php



class Comment{

    private $con, $sqlData, $userLoggedInObj, $recipeId;

    public function __construct($con, $input, $userLoggedInObj, $recipeId)
    {

            echo "ID $input";

            if(!is_array($input)){
                $query = $con->prepare("SELECT * FROM comments WHERE id=:id");
                $query->bindparam(":id", $input);
                $query->execute();
                $input = $query->fetch(PDO::FETCH_ASSOC);

            }

            $this->sqlData = $input;
            $this->con = $con;
            $this->userLoggedInObj = $userLoggedInObj;
            $this->recipeId = $recipeId;
        
    }

    public function getLastInserted(){
        
    }




}




?>
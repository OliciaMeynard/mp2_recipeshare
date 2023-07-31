<?php

    include 'config.php';
    $response = array();


    if(isset($_POST['sub'])){
        $sub = json_decode($_POST['sub']);
        $userTo = $sub->userTo;
        $userFrom = $sub->userFrom;

        //check if the user is subbed
        $query = $con->prepare("SELECT * FROM ".TBL_SUBSCRIBERS." WHERE userTo=:userTo AND
                                userFrom=:userFrom");
        $query->bindParam(":userTo", $userTo);
        $query->bindParam(":userFrom", $userFrom);
        $query->execute();

        if($query->rowCount() == 0){
            //insert
            $query = $con->prepare("INSERT  INTO ".TBL_SUBSCRIBERS."(userTo, userFrom)
                        VALUES(:userTo, :userFrom)");
            $query->bindParam(":userTo", $userTo);
            $query->bindParam(":userFrom", $userFrom);
            $query->execute();

        }

        else {
            //delete
            $query = $con->prepare("DELETE FROM ".TBL_SUBSCRIBERS." WHERE userTo=:userTo AND
            userFrom=:userFrom");
            $query->bindParam(":userTo", $userTo);
            $query->bindParam(":userFrom", $userFrom);
            $query->execute();
            
        }
        
        //return new number of subs
        $query = $con->prepare("SELECT * FROM ".TBL_SUBSCRIBERS." WHERE userTo=:userTo");
        $query->bindParam(":userTo", $userTo);
        $query->execute();
        
        function ifSubbed (){
            global $con, $userFrom, $userTo;
            
            $query = $con->prepare("SELECT * FROM ".TBL_SUBSCRIBERS." WHERE userTo=:userTo AND
            userFrom=:userFrom");
            $query->bindParam(":userTo", $userTo);
            $query->bindParam(":userFrom", $userFrom);
            $query->execute();
            

           return $query->rowCount();
            
        }
        $resData['ifSubbed'] = ifSubbed();
        $resData['subsNum'] = $query->rowCount();
        $resData['from'] =  $userFrom;
        $resData['To'] =  $userTo;
        $response = createResponse(200, 'user from to', 'user from to', $resData);
        echo json_encode($response);


      
    }

    else{
        echo json_encode('Invalid');
    }
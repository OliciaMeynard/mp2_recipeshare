<?php

class RecipeUploadData {
    public $recipeDataArray, $title, $ingredients, $privacy;
    public  $uploadedBy;
    public  $category, $howtocook, $description;
    
    public function  __construct($recipeDataArray, $title, $ingredients,
    $privacy, $category, $howtocook, $description, $uploadedBy){

        $this->recipeDataArray = $recipeDataArray;
        $this->title = $title;
        $this->ingredients = $ingredients;
        $this->privacy = $privacy;
        $this->category = $category;
        $this->howtocook = $howtocook;
        $this->description = $description;
        $this->uploadedBy = $uploadedBy;

    }


}



?>
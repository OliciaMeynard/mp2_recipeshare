<?php

class FormSanitizer {

    public static function sanitizeFormString($inputText){
        $inputText = ucwords(strtolower(strip_tags($inputText)));
        // $inputText = str_replace(" ", "", $inputText);
        $inputText = trim($inputText);

        return $inputText;
    }
    public static function sanitizeFormUserName($inputText){
        $inputText = strip_tags($inputText);
        $inputText = trim($inputText);
        $inputText = str_replace(" ", "", $inputText);

        return $inputText;
    }
    public static function sanitizeFormEmail($inputText){
        $inputText = strip_tags($inputText);
        $inputText = str_replace(" ", "", $inputText);
        $inputText = trim($inputText);
        return $inputText;
    }
    public static function sanitizeFormPassword($inputText){
        $inputText = strip_tags($inputText);

        return $inputText;
    }





}
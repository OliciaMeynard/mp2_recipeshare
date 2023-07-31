<?php


class ButtonProvider{
    public static function createButton($text, $imageSrc, $action, $class){
        $image = ($imageSrc == null) ? "" : "<img src='$imageSrc' />";
        
        
        ///change action if needed
        return "<button class='$class' onClick='$action'>
                     $image
                    <span class='text'>
                        $text
                    </span>
                </button>";
    }
}

?>
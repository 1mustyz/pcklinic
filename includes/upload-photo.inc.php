<?php
include("../classes/controller.class.php");


    $photo = $_FILES['image']['name'];
    $userId = $_SESSION['user'];
  	
      $target = "images/".basename($photo);
      
      if (move_uploaded_file($_FILES['image']['tmp_name'], $photo)) {
        echo $msg = "Image uploaded successfully";

        $newUser = new Controller();
                //parse registration message to script file
                print_r(json_encode($newUser->uploadPhoto($userId,$photo)));
                
         
    }else{
        echo $msg = "Failed to upload image";
        // echo $target;
    }
    
      
?>
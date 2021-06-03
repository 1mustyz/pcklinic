<?php
    include("../classes/controller.class.php");

    echo 'hello';
    if(isset($_SESSION['user'])){

        $singleUser = new Controller();
        //parse registration message to script file
         print_r(json_encode($singleUser->getOneUser($_SESSION['user'])));
    }

?>
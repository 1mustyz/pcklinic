<?php
include("model.class.php");

class Controller extends Model{

    public function registerUser($firstName,$lastName,$email,$phone,$address,$photo,$password) {
        return Model::registerUser($firstName,$lastName,$email,$phone,$address,$photo,$password);
    }

    public function login($email,$password){
        return Model::login($email,$password);
    }

    public function getOneUser($userId){
        return Model::getOneUser($userId);
    }

    public function uploadPhoto($userId, $photo){
        return Model::uploadPhoto($userId, $photo);
    }
}

// $con = new Controller();
// var_dump($con->createUser('hadiza','yusuf','f@gmail.com','098373773','jambutu','mypic','1234'));

// var_dump($con->viewStock());
?>
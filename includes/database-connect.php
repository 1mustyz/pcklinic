<?php


class Connection
{
    private $host = "localhost";
    private $db_name = "blog_db";
    private $password = "";
    private $name = "root";
    
    protected function conn()
    {

        $connection = new mysqli($this->host, $this->name, $this->password, $this->db_name);

        if ($connection->connect_error) {
            die("connection failed: " . $connection->connect_error);
        }
        return $connection;
    }
}

//  $conn = new Connection();
//  var_dump($conn->conn());

<?php

define('DB_USER', "your username"); // db user
define('DB_PASSWORD', "your password"); // db password (mention your db password here)
define('DB_DATABASE', "your db name"); // database name
define('DB_SERVER', "your server name"); // db server

$con = mysqli_connect(DB_SERVER,DB_USER,DB_PASSWORD,DB_DATABASE);
 
// Check connection
if(mysqli_connect_errno())
{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
?>
<?php

include 'db_connect.php';
include 'functions.php';

$con = mysqli_connect(DB_SERVER,DB_USER,DB_PASSWORD,DB_DATABASE);

//Get the input request parameters
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); //convert JSON into array

 
$email = $input['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $input['password'];

//Applying User Login query with email and password match.
$Sql_Query = "select * from uye where email = '$email' and password = '$password'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));
$result = mysqli_query($con,$Sql_Query);
$userid = 0;

while ($row = mysqli_fetch_assoc($result)) {
    $userid = $row["id"];
}

if(isset($check)){
 
 $SuccessLoginMsg = 'Data Matched '.$userid;
 
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson ; 
 
 }
 
 else{
 
 // If the record inserted successfully then show the message.
$InvalidMSG = 'Invalid Username or Password Please Try Again' ;
 
// Converting the message into JSON format.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 echo $InvalidMSGJSon ;

 }
 
 mysqli_close($con);
?>
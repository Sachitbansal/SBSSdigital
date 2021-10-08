<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "info@sbssdigital.com";
$subject = $_POST['subject'];
$phone = $_POST['phone'];
$txt ="Message From ". $name . "\r\n" . $message;
$num ="Number ". $phone;
$headers = "From: $email" . "\r\n" . "CC: $email";
if($email!=NULL){
    mail($to,$subject,$txt,$headers,$num);
}

// redirect
echo 'Sent Successfuly';

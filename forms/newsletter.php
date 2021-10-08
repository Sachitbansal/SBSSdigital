<?php
//get data from form  
$email= $_POST['email'];
$to = "info@sbssdigital.com";
$txt = 'I Subscribed';
$headers = "From: $email";
if($email!=NULL){
    mail($to,$txt,$headers);
}
// redirect
echo 'Sent Successfuly';
?>
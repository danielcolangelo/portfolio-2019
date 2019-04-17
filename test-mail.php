<!-- PHP FOR FORMS -->

<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $first-name = $_POST['first name'];
    $last-name = $_POST['last name'];
    $email = $_POST['email'];
    $work = $_POST['work'];
    $message = $_POST['message'];
    $from = 'From: danielcolangelo.com'; 
    $to = 'info@danielcolangelo.com'; 
    $subject = 'Contact form danielcolangelo.com';

    $body = "From: $firstname $lastname\n E-Mail: $email\n Work: $work\n Message:\n $message";

    echo "The email message was sent.";
?>

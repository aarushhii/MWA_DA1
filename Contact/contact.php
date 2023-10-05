<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = 'your_email@example.com';
    $subject = 'Contact Form Submission';
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you, $name, for your message. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>

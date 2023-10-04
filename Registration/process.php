<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the form data from POST
    $name = $_POST["regName"];
    $email = $_POST["regEmail"];
    $mobile = $_POST["regMobile"];
    $password = $_POST["regPassword"];

    // Basic validation, you can add more validation as needed
    if (empty($name) || empty($email) || empty($mobile) || empty($password)) {
        $response = array('success' => false, 'message' => 'All fields are required.');
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response = array('success' => false, 'message' => 'Invalid email format.');
    } elseif (!preg_match('/^[0-9]{10}$/', $mobile)) {
        $response = array('success' => false, 'message' => 'Invalid mobile number format.');
    } elseif (strlen($password) < 6) {
        $response = array('success' => false, 'message' => 'Password must be at least 6 characters long.');
    } else {
        // Registration is successful, you can store the data or perform other actions here
        $response = array('success' => true, 'message' => 'Registration successful!');
    }

    // Send the response back to JavaScript as JSON
    echo json_encode($response);
} else {
    // Handle the case where the request method is not POST
    $response = array('success' => false, 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>

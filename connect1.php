<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$place = $_POST['place'];
$message = $_POST['message'];


// Database connection
$conn = new mysqli('localhost', 'root', '', 'contact_form_2');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO contact_form_2(name, phone, email, place, message) VALUES (?,?,?, ?, ?)");
    $stmt->bind_param("sssss", $name, $phone, $email, $place, $message);
    $stmt->execute();
    echo "Message Sent Successfully....";
    $stmt->close();
    $conn->close();
}

<?php 
$data = json_decode(file_get_contents("php://input"));
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydb";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "UPDATE employees SET 
name ='$data->name', dept ='$data->dept', area ='$data->area',
status ='$data->status', contact ='$data->contact', 
salary ='$data->salary' WHERE id = $data->id ";

$qry = $conn->query($sql);
$conn->close();
?>
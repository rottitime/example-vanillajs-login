<?php
if (!isset($_COOKIE['token']) || $_COOKIE['token'] !== '1') {
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
</head>
<body>
   <h1>Hoempage</h1>

   <a href="logout.php">Logout</a>
</body>
</html>
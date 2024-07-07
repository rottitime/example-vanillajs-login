<?php
if (!isset($_COOKIE['token']) || $_COOKIE['token'] !== '1') {
    header('Location: index.php');
    exit();
} ?>
<?php include '_header.php'; ?>
   <h1>Hoempage</h1>

   <a href="logout.php">Logout</a>
<?php include '_footer.php'; ?>

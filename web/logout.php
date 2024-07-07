<?php
// Delete the "token" cookie
setcookie("token", "", time() - 3600, "/");

// Redirect to index.php
header("Location: index.php");
exit;
?>
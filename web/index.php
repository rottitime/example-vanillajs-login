<?php
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === 'test' && $password === 'test123') {
        setcookie('token', '1');
        header('Location: home.php');
        exit();
    } else {
        $error = 'Username or password is incorrect. Please try again.';
    }
}
?>
<?php include '_header.php'; ?>
    <h1>Login Form</h1>


    <?php if ($error): ?>
        <div class="alert error">
        <p><?php echo $error; ?></p>
        </div>
    <?php endif; ?>

    <form action="index.php" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        
        <input type="submit" value="Login">
    </form>

    
    
<?php include '_footer.php'; ?>

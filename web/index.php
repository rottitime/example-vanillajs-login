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

    <div class="card">
        <form action="index.php" method="POST">

            <div class="row">
            <label for="username">Email:</label>
            <input type="email" id="username" name="username" required placeholder="e.g. test@test.com" ><br><br>
            </div>
            
            <div class="row">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            </div>
            
            <button>Login</button>

        </form>
    </div>

    
    
<?php include '_footer.php'; ?>

<?php
if (!isset($_COOKIE['token']) || $_COOKIE['token'] !== '1') {
    header('Location: index.php');
    exit();
} ?>
<?php include '_header.php'; ?>


<div class="action">
        


        

        <div class="card">

        <div class="content">
        <p><a href="logout.php">Logout</a></p>
        </div>
            
        </div>
    </div>
    

   

   
<?php include '_footer.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="week01.php" style="display: flex;flex-direction: column;width: 12%;" method="GET">
        <label for="name">Name</label>
        <input type="text" name="name" id="" required >   
        <label for="Email">Email</label>
        <input type="text" name="email" id="" required>
        <button type="submit" > Submit</button>
    </form>
    <div class="output">
        <?php
            if(isset($_GET['name'])){
                echo "User Name :" . $_GET['name'] . "<br>";
            }
            if(isset($_GET['email'])){
                echo "User Email :" . $_GET['email'] . "<br>";
            }
       ?>
    </div>
    
    
</body>
</html>
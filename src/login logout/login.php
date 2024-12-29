<?php
    session_start();
    $message="";
    if(count($_POST)>0) {
        $con = mysqli_connect('localhost','root','','softmusk') or die('Unable To connect');
        $result = mysqli_query($con,"SELECT * FROM employee WHERE id='" . $_POST["id"] . "' ");
        $row  = mysqli_fetch_array($result);
        if(is_array($row)) {
        $_SESSION["id"] = $row['id'];
        $_SESSION["cust_name"] = $row['cust_name'];
        $_SESSION["cust_amount"] = $row['cust_amount'];
        } else {
         $message = "<h3> Sorry Invalid User-ID!</h3><hr>";
        }
    }
    if(isset($_SESSION["id"])) {
    header("Location:index.php");
    }
?>
<html>
<head>
   <title>User Login</title>
   <link rel="stylesheet" type="text/css" href="form-style.css">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="login-form">
        <h1>Login Form</h1>
            <form name="frmUser" method="post">
                <div class="message"><strong><?php if($message!="") { echo $message; } ?></strong></div>
            
                   <p>CUSTOMER ID</p>
                   <input type="text" placeholder="xxx-xxx-xx" name="id">
                   <input type="submit" class="button" name="submit" value="Submit">
            
            </form>
    </div>
</body>
</html>
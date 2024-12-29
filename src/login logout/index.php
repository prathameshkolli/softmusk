<?php
session_start();
?>
<html>
<head>
<title>User Login</title>
<link rel="stylesheet" type="text/css" href="form-style.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<?php
if($_SESSION["id"]) {
?>
<div class="login-form">
 <form>
 <h1>WELLCOME</h1>

   <p>CUSTOMER ID</p>
   <input type="text" class="form-control" value="<?php echo $_SESSION["id"]; ?> " >
 
   <p>CUSTOMER NAME</p>
   <input type="text"class="form-control" value="<?php echo $_SESSION["cust_name"]; ?> ">

   <p>CUSTOMER AMOUNT</p>
   <input type="text"class="form-control" value="<?php echo $_SESSION["cust_amount"]; ?> ">
 
<button class="button"><a href="logout.php" id ="al">back</a></button>

</strong>
</form>
</div>
<?php
}else echo "<h1>Please login first .</h1>";
?>
</body>
</html>

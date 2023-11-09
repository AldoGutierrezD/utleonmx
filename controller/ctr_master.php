<?php
<<<<<<< HEAD
$peticion = "zonaUTL";
=======
  $peticion="index";
  extract($_REQUEST);
  switch($peticion){
    case "index":
        break;
    case "...":
        break;
    default:
    header('location:?peticion=index');
        break;
  }
>>>>>>> 8367398ca6c26dfb950c4eb7073326122a6be6b3

if (isset($_REQUEST['peticion'])) {
  $peticion = $_REQUEST['peticion'];
}

switch ($peticion) {
  case "zonaUTL":
    break;
  case "...":
    break;
  default:
    header('location:zonaUTL.php');
    break;
}

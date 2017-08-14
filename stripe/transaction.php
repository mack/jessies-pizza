<?php
require_once('vendor/autoload.php');

$configs = include('config.php');

\Stripe\Stripe::setApiKey($configs['secretKey']);
$token = $_POST['stripeToken'];

$charge = \Stripe\Charge::create(array(
  "amount" => 10000,
  "currency" => "cad",
  "description" => "Example charge",
  "source" => $token,
));
?>

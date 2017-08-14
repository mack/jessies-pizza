

<form action="transaction.php" method="POST">
  test
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="<?php $configs = include('config.php'); echo $configs['publicKey']?>"
    data-amount="4242"
    data-name="Mackenzie Boudreau"
    data-description="Widget"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-zip-code="true"
    data-currency="cad">
  </script>
</form>

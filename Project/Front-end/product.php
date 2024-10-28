<?php
include '../Back-end/forms/contentdbs.php';

$db = 'SELECT * FROM products';
$dbm = $pdo->query($db);

$dbms = $dbm->fetchAll(PDO::FETCH_ASSOC);




?>

<style>
    .product__item__pic {
        object-fit: cover;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
</style>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>New product</h4>
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <ul class="filter__controls">
                    <li class="active" data-filter="*">All</li>
                    <li data-filter=".women">Women’s</li>
                    <li data-filter=".men">Men’s</li>
                    <li data-filter=".kid">Kid’s</li>
                    <li data-filter=".accessories">Accessories</li>
                    <li data-filter=".cosmetic">Cosmetics</li>
                </ul>
            </div>
        </div>
        <div class="row property__gallery">

        <?php
        foreach ($dbms as $product) {
            echo '<div class="col-lg-3 col-md-4 col-sm-6 mix women">';
            echo '<div class="product__item">';
            echo '<div class="product__item__pic " style="background-image: url(../back-end/image/' . htmlspecialchars($product['image']) . ');">';
            echo '<ul class="product__hover">';
            echo '<li><a href="../back-end/image/' . htmlspecialchars($product['image']) . '" class="image-popup"><span class="arrow_expand"></span></a></li>';
            echo '<li><a href="#"><span class="icon_heart_alt"></span></a></li>';
            echo '<li><a href="#"><span class="icon_bag_alt"></span></a></li>';
            echo '</ul>';
            echo '</div>';
            echo '<div class="product__item__text">';
            echo '<h6><a href="#"> ' . htmlspecialchars($product['title']) . '</a></h6>';
            echo '<div class="text-warning gap-5">';
            echo '<i class="fa fa-star "></i>';
            echo '<i class="fa fa-star"></i>';
            echo '<i class="fa fa-star"></i>';
            echo '<i class="fa fa-star"></i>';
            echo '<i class="fa fa-star"></i>';
            echo '</div>';
            echo '<div class="product__price"> $' . htmlspecialchars($product['price']) . '</div>';
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }
        ?>
</section>

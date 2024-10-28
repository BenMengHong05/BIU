<?php

include('../Back-end/forms/contentdbs.php');

$db = "SELECT * FROM trends";
$dbs = $pdo->query($db);
$dbms = $dbs->fetchAll(PDO::FETCH_ASSOC);

?>


<section class="trend spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="trend__content">
                    <div class="section-title">
                        <h4>Hot Trend</h4>
                    </div>
                    <?php
                    foreach ($dbms as $index => $trend) {

                        if ($index <= 2) {
                            echo '<div class="trend__item">';
                            echo '<div class="trend__item__pic">';
                            echo "<img src=\"../back-end/image/" . htmlspecialchars($trend['image']) .  "\" width='100' height='90'>";
                            echo ' </div>';
                            echo '<div class="trend__item__text">';
                            echo "<h6>" . htmlspecialchars($trend['title']) . "</h6>";
                            echo '<div class="text-warning">';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '</div>';
                            echo "<div class='product__price'> " .  htmlspecialchars($trend['price']) . " </div>";
                            echo '</div>';
                            echo '  </div>';
                        }
                    }
                    ?>
                    <!-- <div class="trend__item">
                        <div class="trend__item__pic">
                            <img src="img/trend/ht-2.jpg" alt="">
                        </div>
                        <div class="trend__item__text">
                            <h6>Pendant earrings</h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div class="trend__item">
                        <div class="trend__item__pic">
                            <img src="img/trend/ht-3.jpg" alt="">
                        </div>
                        <div class="trend__item__text">
                            <h6>Cotton T-Shirt</h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ 59.0</div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="trend__content">
                    <div class="section-title">
                        <h4>Best seller</h4>
                    </div>
                    <?php


                    foreach ($dbms as $index => $trend) {

                        if ($index > 2 && $index <= 5) {
                            echo '<div class="trend__item">';
                            echo '<div class="trend__item__pic">';
                            echo "<img src=\"../back-end/image/" . htmlspecialchars($trend['image']) .  "\" width='100' height='90'>";
                            echo ' </div>';
                            echo '<div class="trend__item__text">';
                            echo "<h6>" . htmlspecialchars($trend['title']) . "</h6>";
                            echo '<div class="text-warning">';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '</div>';
                            echo "<div class='product__price'> " .  htmlspecialchars($trend['price']) . " </div>";
                            echo '</div>';
                            echo '  </div>';
                        }
                    }
                    ?>
                    <!-- <div class="trend__item">
                        <div class="trend__item__pic">
                            <img src="img/trend/bs-2.jpg" alt="">
                        </div>
                        <div class="trend__item__text">
                            <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                            <div class="text-warning">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ 59.0</div>
                        </div>
                    </div>
                    <div class="trend__item">
                        <div class="trend__item__pic">
                            <img src="img/trend/bs-3.jpg" alt="">
                        </div>
                        <div class="trend__item__text">
                            <h6>Round leather bag</h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ 59.0</div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="trend__content">
                    <div class="section-title">
                        <h4>Feature</h4>
                    </div>
                    <?php


                    foreach ($dbms as $index => $trend) {

                        if ($index > 5 && $index <= 8) {
                            echo '<div class="trend__item">';
                            echo '<div class="trend__item__pic">';
                            echo "<img src=\"../back-end/image/" . htmlspecialchars($trend['image']) .  "\" width='100' height='90'>";
                            echo ' </div>';
                            echo '<div class="trend__item__text">';
                            echo "<h6>" . htmlspecialchars($trend['title']) . "</h6>";
                            echo '<div class="text-warning">';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '<i class="fa fa-star"></i>';
                            echo '</div>';
                            echo "<div class='product__price'> " .  htmlspecialchars($trend['price']) . " </div>";
                            echo '</div>';
                            echo '  </div>';
                        }
                    }
                    ?>

                </div>
            </div>
        </div>
    </div>
</section>
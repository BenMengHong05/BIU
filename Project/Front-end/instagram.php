<?php

include('../Back-end/forms/contentdbs.php');

$db = "SELECT * FROM instagrams";
$dbs = $pdo->query($db);
$dbms = $dbs->fetchAll(PDO::FETCH_ASSOC);

?>

<div class="instagram">
    <div class="container-fluid">
        <div class="row">
            <?php
            foreach ($dbms as $index=>$instagram){
                echo '<div class="col-lg-2 col-md-4 col-sm-4 p-0">';
                echo '<div class="instagram__item " style="background-image: url(../back-end/image/' . htmlspecialchars($instagram['image']) . ');">';
                echo '<div class="instagram__text">';
                echo '<i class="fa fa-instagram"></i>';
                echo '<a href="#">@ ashion_shop</a>';
                echo '</div>';
                echo '</div>';
                echo '</div>';

            }
            ?>
            <!-- <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div class="instagram__item set-bg" data-setbg="img/instagram/insta-2.jpg">
                    <div class="instagram__text">
                        <i class="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div class="instagram__item set-bg" data-setbg="img/instagram/insta-3.jpg">
                    <div class="instagram__text">
                        <i class="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div class="instagram__item set-bg" data-setbg="img/instagram/insta-4.jpg">
                    <div class="instagram__text">
                        <i class="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div class="instagram__item set-bg" data-setbg="img/instagram/insta-5.jpg">
                    <div class="instagram__text">
                        <i class="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div class="instagram__item set-bg" data-setbg="img/instagram/insta-6.jpg">
                    <div class="instagram__text">
                        <i class="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</div>
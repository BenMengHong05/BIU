<?php

include('../Back-end/forms/contentdbs.php');

$db = "SELECT * FROM discounds";
$dbs = $pdo->query($db);
$dbms = $dbs->fetchAll(PDO::FETCH_ASSOC);
?>
<section class="discount">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 p-0">
                <div class="discount__pic">
                    <?php
                    foreach ($dbms as $discound) {
                        echo "<img src=\"../back-end/image/" . htmlspecialchars($discound['image']) .  "\">";
                    }
                    ?>
                </div>
            </div>
            <div class="col-lg-6 p-0">
                <div class="discount__text">
                    <div class="discount__text__title">
                        <span>Discount</span>
                        <?php
                        foreach ($dbms as $discound) {
                            echo " <h2>" . htmlspecialchars($discound['title'])  . "</h2>";
                            echo "  <h5><span>Sale</span>" . htmlspecialchars($discound['description']) . "</h5>";
                        }
                        ?>
                       
                    </div>
                    <div class="discount__countdown" id="countdown-time">
                        <div class="countdown__item">
                            <span>22</span>
                            <p>Days</p>
                        </div>
                        <div class="countdown__item">
                            <span>18</span>
                            <p>Hour</p>
                        </div>
                        <div class="countdown__item">
                            <span>46</span>
                            <p>Min</p>
                        </div>
                        <div class="countdown__item">
                            <span>05</span>
                            <p>Sec</p>
                        </div>
                    </div>
                    <a href="#">Shop now</a>
                </div>
            </div>
        </div>
    </div>
</section>
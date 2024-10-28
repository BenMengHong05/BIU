<?php
// Include the database connection file
include '../Back-end/forms/contentdbs.php';

// Query to get all hero entries
$db = 'SELECT * FROM hero';
$dbm = $pdo->query($db);

// Fetch all hero entries as associative arrays
$dbms = $dbm->fetchAll(PDO::FETCH_ASSOC);

$firstEntry = array_shift($dbms);


?>

<style>
    .categories__item {
        background-size: cover;
    }
</style>



<section class="categories">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 p-0">
                <?php

                if ($firstEntry) {
                    echo '<div class="categories__item categories__large__item"
                        style="background-image: url(../back-end/image/' . htmlspecialchars($firstEntry['image']) . ');">';
                    echo '<div class="categories__text">';
                    echo '<h1>' .  htmlspecialchars($firstEntry['title']) . '</h1>'; // You can modify this title if needed
                    echo '<p>' . htmlspecialchars($firstEntry['description']) . '</p>';
                    echo '<a href="#">Shop now</a>';
                    echo '</div>';
                    echo '</div>'; 
                }
                ?>
            </div>
            <div class="col-lg-6">
                <div class="row">
                    <?php
                    foreach ($dbms as $dbm) {                      
                            echo '<div class="col-lg-6 col-md-6 col-sm-6 p-0">';
                            echo '<div class="categories__item" style="background-image: url(../back-end/image/' . htmlspecialchars($dbm['image']) . ');">';
                            echo '<div class="categories__text">';
                            echo '<h4>' .  htmlspecialchars($dbm['title']) . '</h4>'; // You can modify this title if needed
                            echo '<p>' . htmlspecialchars($dbm['description']) . '</p>';
                            echo '<a href="#">Shop now</a>';
                            echo '</div>';
                            echo '</div>';
                            echo '</div>';
                        
                    }

                    ?>

                </div>
            </div>
        </div>
    </div>
</section>
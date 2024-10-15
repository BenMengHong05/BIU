<?php 
$con = mysqli_connect("localhost", "root", "", "project");
if (!$con) {  
    die("Connection failed: " . mysqli_connect_error()); 
} else { 
    $query = "SELECT * FROM `testimonial`";
    $result = mysqli_query($con, $query);
    
    // Check if the query was successful
    if (!$result) {
        die("Query failed: " . mysqli_error($con));
    }

    // Fetch all results into an array
    $testimonialdatabase = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $testimonialdatabase[] = $row;
    }
    mysqli_free_result($result);
    mysqli_close($con);  // Close the connection when done
}
?>

<div class="testimonial">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="titlepage text_align_center">
                    <h2>Testimonial</h2>
                </div>
            </div>
        </div>
        <!-- start slider section -->
        <div class="row">
            <div class="col-md-12">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <?php
                        foreach ($testimonialdatabase as $index => $testimonial) {
                            $activeClass = ($index == 0) ? 'class="active"' : '';
                            echo '<li data-target="#myCarousel" data-slide-to="'.$index.'" '.$activeClass.'></li>';
                        }
                        ?>
                    </ol>
                    <div class="carousel-inner">
                        <?php
                        foreach ($testimonialdatabase as $index => $testimonial) {
                            $activeClass = ($index == 0) ? 'active' : '';
                            echo '<div class="carousel-item '.$activeClass.'">';
                                echo '<div class="container-fluid">';
                                    echo '<div class="carousel-caption relative">';
                                        echo '<div class="row d_flex justify-content-center">';
                                            echo '<div class="col-md-6">';
                                                echo '<div class="test_box bg-warning white_bg text_align_center">';
                                                    echo '<span><img src="images/test2.png" alt="#" /></span>';
                                                    echo '<h4>'. htmlspecialchars($testimonial['title']) .'</h4>';
                                                    echo '<img class="img_responsive" src="images/te2.png" alt="#" />';
                                                    echo '<p>'. htmlspecialchars($testimonial['description']) .'</p>';
                                                echo '</div>';
                                            echo '</div>';
                                        echo '</div>';
                                    echo '</div>';
                                echo '</div>';
                            echo '</div>';
                        }
                        ?>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

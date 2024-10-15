<?php 

$con = mysqli_connect("localhost", "root", "", "project");
if (!$con) {  
    die("Connection failed: " . mysqli_connect_error()); 
} else { 
    $query = "SELECT * FROM `shop`"; // Replace with your table name
    $result = mysqli_query($con, $query);
    
    // Check if the query was successful
    if (!$result) {
        die("Query failed: " . mysqli_error($con));
    }

    // Fetch all results into an array
    $shopdatabase = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $shopdatabase[] = $row; // Store each row in an array
    }
    mysqli_free_result($result);
}

?>

<div class="shop">
         <div class="container-fluid">
            <div class="row d_flex d_grid">
               <div class="col-md-7">
                  <div class="shop_img text_align_center" data-aos="fade-right">
                     <figure><img class="img_responsive" src="images/shop.png" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-5 order_1_mobile">
               <?php
                  foreach($shopdatabase as $shop){
                     echo '<div class="titlepage text_align_left ">';
                        echo ' <h2>'. htmlspecialchars($shop['title']).'</h2>';
                        echo ' <p>'. htmlspecialchars($shop['description']).'</p>';
                        echo ' <a class="read_more" href="shop.html">Buy Now</a>';
                     echo '</div>';
                  }
               ?>
               </div>
            </div>
         </div>
      </div>
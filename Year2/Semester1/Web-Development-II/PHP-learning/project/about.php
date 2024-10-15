<?php 

$con = mysqli_connect("localhost", "root", "", "project");
if (!$con) {  
    die("Connection failed: " . mysqli_connect_error()); 
} else { 
    $query = "SELECT * FROM `about`"; // Replace with your table name
    $result = mysqli_query($con, $query);
    
    // Check if the query was successful
    if (!$result) {
        die("Query failed: " . mysqli_error($con));
    }

    // Fetch all results into an array
    $aboutdatabase = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $aboutdatabase[] = $row; // Store each row in an array
    }
    mysqli_free_result($result);
}

?>



<div class="about">
   <div class="container-fluid">
      <div class="row d_flex">
         <div class="col-md-6">
            <?php
            foreach ($aboutdatabase as $about){
               echo '<div class="titlepage text_align_left">';
                     echo '<h2>'. htmlspecialchars($about['title']) .'</h2>';
                     echo '<p>'. htmlspecialchars($about['description']) .'</p>';
                     echo '<img src="'.$about['image'].'" alt="'.htmlspecialchars($about['image']).'" />';
                     
                     echo ' <div class="link_btn">';
                        echo '<a class="read_more" href="about.html">Read More</a>';
                     echo '</div>';
               echo '</div>';
            }
            ?>
         </div>
         <div class="col-md-6">
            <div class="about_img text_align_center">
               <figure><img src="images/about.png" alt="#" /></figure>
       
            </div>
         </div>
      </div>
   </div>
</div>
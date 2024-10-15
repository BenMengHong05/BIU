<?php 

$con = mysqli_connect("localhost", "root", "", "project");
if (!$con) {  
    die("Connection failed: " . mysqli_connect_error()); 
} else { 
    $query = "SELECT * FROM `our`"; // Replace with your table name
    $result = mysqli_query($con, $query);
    
    // Check if the query was successful
    if (!$result) {
        die("Query failed: " . mysqli_error($con));
    }

    // Fetch all results into an array
    $database = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $database[] = $row; // Store each row in an array
    }
    mysqli_free_result($result);
}

?>
<div class="class">
         <div class="container">
            <div class="row">
               <?php
                  foreach ($database as $our){
                     echo '<div class="col-md-4 margi_bottom">';
                        echo '<div class="class_box text_align_center">';
                           echo '<h3>'.  htmlspecialchars($our['title'])  .'</h3>';
                           echo ' <p>'.  htmlspecialchars($our['description']) .'</p>';
                        echo '</div>';
                     echo '<a class="read_more" href="Javascript:void(0)">Read More</a>';
                  echo '</div>';
               }
               ?>
            </div>
         </div>
      </div>
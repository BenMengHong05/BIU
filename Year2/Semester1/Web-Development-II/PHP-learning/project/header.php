<?php 

$con = mysqli_connect("localhost", "root", "", "project");
if (!$con) {  
    die("Connection failed: " . mysqli_connect_error()); 
} else { 
    $query = "SELECT * FROM `header`"; // Replace with your table name
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

<div class="header">
    <div class="container-fluid">
        <div class="row d_flex">
            <div class="col-md-2 col-sm-3 col logo_section">
                <div class="full">
                    <div class="center-desk">
                        <div class="logo">
                            <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-sm-12">
                <nav class="navigation navbar navbar-expand-md navbar-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarsExample04">
                        <?php
                            echo '<ul class="navbar-nav mr-auto ">';
                            foreach ($database as $header) {
                                echo '<li class="nav-item">';
                                echo '<a class="nav-link">' . htmlspecialchars($header['name']) . '</a>'; // Replace 'link' and 'name' with your actual column names
                                echo '</li>';
                            }
                            echo '</ul>';
                        ?>
                    </div>
                </nav>
            </div>
            <div class="col-md-2">
                <ul class="email text_align_right">
                    <li class="d_none"><a href="Javascript:void(0)"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                    <li class="d_none"><a href="Javascript:void(0)"><i class="fa fa-search" style="cursor: pointer;" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<?php
// Close the connection
mysqli_close($con);
?>

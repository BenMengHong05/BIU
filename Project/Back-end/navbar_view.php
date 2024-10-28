<?php
include("./forms/contentdbs.php");

// Check if ID is provided
$id = $_GET['id'] ?? null;
if ($id) {
    // Fetch the navbar details
    $stmt = $pdo->prepare("SELECT * FROM navbars WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $navbar = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check if navbar exists
    if (!$navbar) {
        echo "Record not found.";
        exit;
    }
} else {
    echo "No ID provided.";
    exit;
}
?>



    <!-- ======= Header ======= -->
    <?php
    include("header.php");
    ?>
    <!-- End Header -->
    <!-- ======= Sidebar ======= -->
    <?php
    include("siderbar.php");
    ?>
    <!-- End Sidebar-->
    <!-- ======= Main ======= -->
    <main id="main" class="main">
        <div class="pagetitle">

            <h1>Table Add</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
            <?php
            // insert_doctor.php

            // Include the database connection file
            include './forms/contentdbs.php';

            // Enable error reporting for debugging
            error_reporting(E_ALL);
            ini_set('display_errors', 1);

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // Retrieve form data
                if (isset($_POST['namenavbars'])) {
                    $name = $_POST['namenavbars'];
                } else {
                    echo "No data received!";
                    exit;
                }

                // Prepare the SQL statement
                $sql = "INSERT INTO navbars (name) VALUES (:name)";
                $stmt = $pdo->prepare($sql);

                // Bind parameters
                $stmt->bindParam(':name', $name);

                // Execute the statement and check for success
                if ($stmt->execute()) {
                    header("Location: navbar_table.php?message=add");
                    echo '<div class="alert alert-success" role="alert">Insert Data to Database Successfully!!</div>';
                } else {
                    echo '<div class="alert alert-danger" role="alert">Insert Data to Database Successfully!!</div>';
                    print_r($stmt->errorInfo());
                }
            }
            ?>
        </div><!-- End Page Title -->
        <section class="section dashboard">
            <div class="row ">
                <!-- Left side columns -->
                <div class="col-lg-12">
                    <div class="row">
                        <!-- Sales Card -->
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">ID</th>
                                    <th scope="row">Name</th>
                                </tr>
                                <tr>
                                    <td><?php echo htmlspecialchars($navbar['id']); ?></td> 
                                    <td><?php echo htmlspecialchars($navbar['name']); ?></td>
                                </tr>
                                <!-- Add other fields here as necessary -->
                            </tbody>
                        </table>
                       
                    </div><!-- End Customers Card -->
                </div>

            </div>
            <div class="row">
                <div class="col-lg-12 d-flex align-items-center justify-content-end">
                    <a href="navbar_table.php" class="btn btn-secondary" style="width: 5%;">Back</a>
                </div>
            </div>
            </div>
        </section>
    </main>
    <!-- End #main -->
    <!-- ======= Footer ======= -->
    <?php
    include("footer.php");
    ?>
    <!-- End Footer -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Dashboard - NiceAdmin Bootstrap Template</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
  * Template Name: NiceAdmin
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Updated: Apr 20 2024 with Bootstrap v5.3.3
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

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
                        <form action="insert_navbar.php" method="POST">
                            <label for="form-control">Name Navbar</label>
                            <input type="text" class="form-control mt-2" id="name" name="namenavbars" required>
                            <button type="submit" class="btn btn-primary mt-4 float-end">Submit</button>
                        </form>
                    </div><!-- End Customers Card -->
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

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/chart.js/chart.umd.js"></script>
    <script src="assets/vendor/echarts/echarts.min.js"></script>
    <script src="assets/vendor/quill/quill.js"></script>
    <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
    <script src="assets/vendor/tinymce/tinymce.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>

</body>

</html>
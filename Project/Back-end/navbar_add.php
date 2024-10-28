

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
                        <form  method="POST">
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

   
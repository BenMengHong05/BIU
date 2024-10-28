

        <!-- ======= Header ======= -->
        <?php include("header.php"); ?>
        <!-- End Header -->

        <!-- ======= Sidebar ======= -->
        <?php include("siderbar.php"); ?>
        <!-- End Sidebar -->

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
                // Include the database connection
                include('./forms/contentdbs.php'); // Adjust path as necessary
                error_reporting(E_ALL);
                ini_set('display_errors', 1);

                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    if (isset($_POST['title'], $_POST['price'], $_FILES['image'])) {
                        $title = $_POST['title'];
                        $price = $_POST['price'];
                        $image = $_FILES['image'];
                
                        if ($image['error'] === UPLOAD_ERR_OK) {
                            $uploadDir = __DIR__ . '/image/';
                            if (!file_exists($uploadDir)) {
                                mkdir($uploadDir, 0777, true);
                            }
                            $imageName = basename($image['name']);
                            $uploadFile = $uploadDir . $imageName;
                
                            if (move_uploaded_file($image['tmp_name'], $uploadFile)) {
                                $sql = "INSERT INTO products (title, price, image) VALUES (:title, :price, :image)";
                                $stmt = $pdo->prepare($sql);
                                $stmt->bindParam(':title', $title);
                                $stmt->bindParam(':price', $price);
                                $stmt->bindParam(':image', $imageName); // Save just the image name
                                if ($stmt->execute()) {
                                    echo '<div class="alert alert-success">Data inserted successfully!</div>';
                                }
                            } else {
                                echo '<div class="alert alert-danger">Failed to upload image!</div>';
                            }
                        } else {
                            echo '<div class="alert alert-danger">Error uploading image!</div>';
                        }
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
                            <form method="POST" enctype="multipart/form-data">
                                <label for="form-control">Title</label>
                                <input type="text" class="form-control mt-2" id="title" name="title" required>

                                <label for="form-control">price</label>
                                <input type="text" class="form-control mt-2" id="price" name="price" required>

                                <label for="form-control">Image</label>
                                <input type="file" class="form-control mt-2" id="image" name="image" accept="image/*" required>

                                <button type="submit" class="btn btn-primary mt-4 float-end">Submit</button>
                            </form>
                        </div><!-- End Customers Card -->
                    </div>
                </div>
            </section>
        </main>
        <!-- End #main -->

        <!-- ======= Footer ======= -->
        <?php include("footer.php"); ?>
        <!-- End Footer -->

 
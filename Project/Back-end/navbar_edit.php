<?php
include("./forms/contentdbs.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {
    $id = $_POST['id'];
    $name = $_POST['name'];

    // Update query
    $sql = "UPDATE navbars SET name = :name WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    if ($stmt->execute()) {
        header("Location: navbar_table.php?message=updated"); // Redirect after update
        exit;
    } else {
        echo "Error updating record: " . $stmt->errorInfo()[2];
    }
}

// Fetch the current data for the specified ID
$id = $_GET['id'] ?? null;
if ($id) {
    $stmt = $pdo->prepare("SELECT * FROM navbars WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $navbar = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$navbar) {
        echo "Record not found.";
        exit;
    }
} else {
    echo "No ID provided.";
    exit;
}
?>

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
            include './forms/contentdbs.php';
            error_reporting(E_ALL);
            ini_set('display_errors', 1);
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
                        <form action="" method="POST">
                            <input type="hidden" name="id" value="<?php echo htmlspecialchars($navbar['id']); ?>">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" name="name" value="<?php echo htmlspecialchars($navbar['name']); ?>" required>
                            </div>
                            <button type="submit" name="update" class="btn btn-primary">Update</button>
                            <a href="navbar_table.php" class="btn btn-secondary">Cancel</a>
                        </form>
                    </div><!-- End Customers Card -->
                </div>
            </div>
            </div>
        </section>
    </main>
    <?php
    include("footer.php");
    ?>
    <!-- End Footer -->

   
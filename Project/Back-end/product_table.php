<?php
include("./forms/contentdbs.php");

$dbs = "SELECT * FROM products";
$dbms = $pdo->query($dbs);
$databases = $dbms->fetchAll(PDO::FETCH_ASSOC);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
    $id = $_POST['delete'];

    // Delete query
    $sql = "DELETE FROM products WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    if ($stmt->execute()) {
        header("Location: product_table.php?message=deleted"); // Redirect after deletion
        exit; // Make sure to exit after redirecting
    } else {
        echo "Error deleting record: " . $stmt->errorInfo()[2];
    }
}
?>


    <!-- ======= Header ======= -->
    <?php include("header.php"); ?>
    <!-- End Header -->
    <!-- ======= Sidebar ======= -->
    <?php include("siderbar.php"); ?>
    <!-- End Sidebar -->
    
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>General Tables</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Tables</li>
                    <li class="breadcrumb-item active">General</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->
        
        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Table To Database Navbars</h5>
                            <?php
                            if (isset($_GET['message'])) {
                                $messageClass = $_GET['message'] === 'deleted' ? 'alert-danger' : 'alert-success';
                                $messageText = $_GET['message'] === 'deleted' ? 'Deleted successfully!' : 'Updated successfully!';
                                echo '<div class="alert ' . $messageClass . '">' . $messageText . '</div>';
                            }
                            ?>
                            <a href="product_add.php" class="btn btn-success px-3">Add</a>
                            
                            <!-- Default Table -->
                            <table class="table mt-2">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">price</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $index = 1;
                                    foreach ($databases as $datab) {
                                        echo "<tr>";
                                        echo "<td>" . htmlspecialchars($index) . "</td>";
                                        echo "<td>" . htmlspecialchars($datab['title']) . "</td>";
                                        echo "<td>" . htmlspecialchars($datab['price']) . "</td>";
                                        echo '<td><img class="image" src="image/' . htmlspecialchars($datab['image']) . '" width="100"></td>';
                                        echo "<td>";
                                        echo '<div class="d-flex gap-2">';
                                            echo '<a href="product_view.php?id=' . htmlspecialchars($datab['id']) . '" class="btn btn-primary"><i class="fa-regular fa-eye fa-sm"></i> View</a>';
                                            echo '<a href="product_edit.php?id=' . htmlspecialchars($datab['id']) . '" class="btn btn-warning"><i class="fa-solid fa-pen-to-square fa-sm"></i> Edit</a>';
                                            echo '<form action="product_table.php" method="POST"  style="display:inline;">';
                                            echo '<input type="hidden" name="delete" value="' . htmlspecialchars($datab['id']) . '">';
                                            echo '<button type="submit" class="btn btn-danger px-3" onclick="return confirm(\'Are you sure?\');">';
                                            echo '<i class="fa-solid fa-trash fa-sm"></i> Delete';
                                            echo '</button>';
                                            echo '</form>';
                                            echo '</div>';
                                        echo "</td>";
                                        echo "</tr>";
                                        $index++;
                                    }
                                    ?>
                                </tbody>
                            </table>
                            <!-- End Default Table Example -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main><!-- End #main -->
    
    <!-- ======= Footer ======= -->
    <?php include("footer.php"); ?>
    <!-- End Footer -->

   
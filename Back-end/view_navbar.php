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
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>View Navbar - NiceAdmin Bootstrap Template</title>
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <main id="main" class="main">
        <div class="container mt-5">
            <h1>View Navbar Details</h1>
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row">ID</th>
                        <td><?php echo htmlspecialchars($navbar['id']); ?></td>
                    </tr>
                    <tr>
                        <th scope="row">Name</th>
                        <td><?php echo htmlspecialchars($navbar['name']); ?></td>
                    </tr>
                    <!-- Add other fields here as necessary -->
                </tbody>
            </table>
            <a href="tablesdata.php" class="btn btn-secondary">Back to Table</a>
        </div>
    </main>

    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>

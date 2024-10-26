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
        header("Location: tablesdata.php?message=updated"); // Redirect after update
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
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Edit Navbar - NiceAdmin Bootstrap Template</title>
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <main id="main" class="main">
        <div class="container mt-5">
            <h1>Edit Navbar</h1>
            <form action="edit_navbar.php" method="POST">
                <input type="hidden" name="id" value="<?php echo htmlspecialchars($navbar['id']); ?>">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" value="<?php echo htmlspecialchars($navbar['name']); ?>" required>
                </div>
                <button type="submit" name="update" class="btn btn-primary">Update</button>
                <a href="tablesdata.php" class="btn btn-secondary">Cancel</a>
            </form>
        </div>
    </main>

    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>
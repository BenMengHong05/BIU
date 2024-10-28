<?php
include("./forms/contentdbs.php");

// Check if ID is provided
$id = $_GET['id'] ?? null;
if ($id) {
    // Fetch the navbar details
    $stmt = $pdo->prepare("SELECT * FROM hero WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $hero = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check if navbar exists
    if (!$hero) {
        echo '<div class="alert alert-danger" role="alert">Record not found.</div>';
        exit;
    }
} else {
    echo '<div class="alert alert-danger" role="alert">No ID provided.</div>';
    exit;
}
?>


    <?php include("header.php"); ?>
    <?php include("siderbar.php"); ?>

    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Navbar Details</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                    <li class="breadcrumb-item active">Navbar Details</li>
                </ol>
            </nav>
        </div>

        <section class="section dashboard">
            <div class="row">
                <div class="col-lg-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><?php echo htmlspecialchars($hero['id']); ?></td>
                                <td><?php echo htmlspecialchars($hero['title']); ?></td>
                                <td><?php echo htmlspecialchars($hero['description']); ?></td>
                                <td><?php echo ' <img src="image/' . htmlspecialchars($hero['image']) . '" width="100">'; ?></td>
                        </tbody>
                    </table>
                    <a href="hero_table.php" class="btn btn-secondary">Back</a>
                </div>
            </div>
        </section>
    </main>

    <?php include("footer.php"); ?>
   
<?php
// Include the database connection file
include './forms/contentdbs.php';

// Get the ID from the query string
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Fetch the existing record
    $sql = "SELECT * FROM discounds WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $discounds = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$discounds) {
        echo '<div class="alert alert-danger" role="alert">No record found!</div>';
        exit;
    }
}

// Handle form submission for updating
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];
    $description = $_POST['description'];

    // Handle file upload if a new image is provided
    if (isset($_FILES['image']) && $_FILES['image']['error'] == UPLOAD_ERR_OK) {
        $uploadDir = __DIR__ . '/image/';
        $imageName = basename($_FILES['image']['name']);
        $targetFilePath = $targetDirectory . $imageName;

        // Move the uploaded file and check if successful
        if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFilePath)) {
            // Update the image path in the database
            $imagePathForDB = $targetFilePath;
        } else {
            echo '<div class="alert alert-danger" role="alert">Error uploading image!</div>';
            $imagePathForDB = $discounds['image']; // Fallback to existing image path
        }
    } else {
        // No new image uploaded, keep the existing path
        $imagePathForDB = $discounds['image'];
    }

    // Prepare the SQL statement for update
    $sql = "UPDATE discounds SET title = :title, description = :description, image = :image WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':image', $imagePathForDB);
    $stmt->bindParam(':id', $id);

    // Execute the statement and check for success
    if ($stmt->execute()) {
        header("Location: discound_table.php?message=updated"); 
        exit;
    } else {
        echo '<div class="alert alert-danger" role="alert">Error updating data!</div>';
        print_r($stmt->errorInfo());
    }
}
?>

    <?php include("header.php"); ?>
    <?php include("siderbar.php"); ?>
    
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Edit discounds Item</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                    <li class="breadcrumb-item active">Edit discounds Item</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->
        
        <section class="section dashboard">
            <div class="row">
                <div class="col-lg-12">
                    <form action="discound_edit.php?id=<?php echo htmlspecialchars($id); ?>" method="POST" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" name="title" value="<?php echo htmlspecialchars($discounds['title']); ?>" required>
                        </div>
                        <div class="form-group mt-3">
                            <label for="description">description</label>
                            <textarea class="form-control" id="description" name="description" rows="3" required><?php echo htmlspecialchars($discounds['description']); ?></textarea>
                        </div>
                        <div class="form-group mt-3">
                            <label for="image">Image</label>
                            <input type="file" class="form-control" id="image" name="image" accept="image/*">
                            <small class="form-text text-muted">Leave this blank to keep the existing image.</small>
                        </div>
                        <button type="submit" class="btn btn-primary mt-4 float-end">Update</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <?php include("footer.php"); ?>
 
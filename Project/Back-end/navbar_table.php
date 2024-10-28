<?php
include("./forms/contentdbs.php");

$dbs = "SELECT * FROM navbars";
$dbms = $pdo->query($dbs);
$databases = $dbms->fetchAll(PDO::FETCH_ASSOC);


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
  $id = $_POST['delete'];

  // Delete query
  $sql = "DELETE FROM navbars WHERE id = :id";
  $stmt = $pdo->prepare($sql);
  $stmt->bindParam(':id', $id, PDO::PARAM_INT);

  if ($stmt->execute()) {
    header("Location: navbar_table.php?message=deleted"); // Redirect after deletion
    exit; // Make sure to exit after redirecting
  } else {
    echo "Error deleting record: " . $stmt->errorInfo()[2];
  }
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
              <!-- <form action="" method="POST">
              <button type="submit" class="btn btn-success px-3">
                <span>Add</span>
              </button>
            </form> -->
            <?php
            if (isset($_GET['message'])) {
              if ($_GET['message'] === 'updated') {
                  echo '<div class="alert alert-success">Your updated successfully!</div>';
              }
              if ($_GET['message'] === 'deleted') {
                  echo '<div class="alert alert-danger">Your deleted successfully!</div>';
              }
          }
            
            ?>
              <a href="navbar_add.php" class="btn btn-success px-3">
                add
              </a>
              <!-- Default Table -->
              <table class="table mt-2">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                  $index =1;
                  foreach ($databases as $datab) {
                    echo " <tr>";
                      echo "<td>" . htmlspecialchars($index) . "</td>";
                      echo "<td>" . htmlspecialchars($datab['name']) . "</td>";
                      echo "<td>";
                        echo '<form action="navbar_table.php" method="POST" class=" d-flex gap-2">';
                        echo '<a href="navbar_view.php?id=' . htmlspecialchars($datab['id']) . '" class="btn btn-primary"><i class="fa-regular fa-eye fa-sm "></i><span>View</span></a>';
                        echo '<a href="navbar_edit.php?id=' . htmlspecialchars($datab['id']) . '" class="btn btn-warning"><i class="fa-solid fa-pen-to-square fa-sm"></i><span>Edit</span></a>';
                        echo '<form action="navbar_table.php" method="POST" style="display:inline;">';
                          echo '<input type="hidden" name="delete" value="'. htmlspecialchars($datab['id']) . '">';
                          echo '<button type="submit" class="btn btn-danger px-3" onclick="return confirm(\'Are you sure?\');">';
                          echo '<i class="fa-solid fa-trash fa-sm"></i><span>Delete</span>';
                          echo '</button>';
                        echo '</form>';
                      echo "</td>";
                    echo " </tr>";
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
      </div>
    </section>
  </main><!-- End #main -->
  <!-- ======= Footer ======= -->
  <?php
  include("footer.php");
  ?>
  <!-- End Footer -->

  
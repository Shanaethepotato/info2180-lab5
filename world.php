<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';
 
$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
$country = isset($_GET['country']) ? trim($_GET['country']) : '';
 
$stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE :country");
$stmt->execute([':country' => '%' . $country . '%']);
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Continent</th>
            <th>Independence</th>
            <th>Head of State</th>
        </tr>
    </thead>
    <tbody>
    <?php foreach ($result as $row): ?>
        <tr>
            <td><?= htmlspecialchars($row['name']) ?></td>
            <td><?= htmlspecialchars($row['continent']) ?></td>
            <td><?= htmlspecialchars((string)$row['independence_year']) ?></td>
            <td><?= htmlspecialchars((string)$row['head_of_state']) ?></td>
        </tr><?php endforeach; ?>
    </tbody>
</table>

 
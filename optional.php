<?php
$links = [
    "Facebook" => "https://facebook.com",
    "Instagram" => "https://instagram.com",
    "Twitter" => "https://twitter.com",
    "GitHub" => "https://github.com",
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Links</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Waleed's Links</h1>
        <ul class="links">
            <?php foreach ($links as $name => $url): ?>
                <li><a href="<?= $url ?>" target="_blank"><?= $name ?></a></li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>
</html>

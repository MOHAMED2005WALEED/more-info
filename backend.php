<?php
$links = [
    "YouTube" => "https://www.youtube.com",
    "Instagram" => "https://www.instagram.com",
    // Add more links here
];

foreach ($links as $name => $url) {
    echo "<a href='$url' target='_blank' class='link'>$name</a>";
}
?>

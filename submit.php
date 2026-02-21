<?php
// submit.php — recibe POST del formulario y guarda en data/messages.txt
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    header('Location: index.html?error=missing');
    exit;
}

$entry = [
    'timestamp' => date('c'),
    'name' => $name,
    'email' => $email,
    'message' => str_replace(["\r", "\n"], [' ', ' '], $message),
];

$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

$file = $dataDir . '/messages.txt';
$line = json_encode($entry, JSON_UNESCAPED_UNICODE) . PHP_EOL;
file_put_contents($file, $line, FILE_APPEND | LOCK_EX);

// Redirigir de vuelta a la página principal con indicador de éxito
header('Location: index.html?success=1');
exit;

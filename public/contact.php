<?php

declare(strict_types=1);

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.',
    ]);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request payload.',
    ]);
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Name, email, and message are required.',
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid email address.',
    ]);
    exit;
}

$configPath = dirname(__DIR__) . '/private/contact-config.php';

if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Contact configuration file is missing.',
    ]);
    exit;
}

$config = require $configPath;

$smtpHost = (string) ($config['smtp_host'] ?? '');
$smtpPort = (int) ($config['smtp_port'] ?? 0);
$smtpUsername = (string) ($config['smtp_username'] ?? '');
$smtpPassword = (string) ($config['smtp_password'] ?? '');
$smtpEncryption = (string) ($config['smtp_encryption'] ?? 'tls');

$toEmail = (string) ($config['to_email'] ?? '');
$fromEmail = (string) ($config['from_email'] ?? '');
$fromName = (string) ($config['from_name'] ?? 'ARMZ GLOBAL Website');

if (
    $smtpHost === '' ||
    $smtpPort === 0 ||
    $smtpUsername === '' ||
    $smtpPassword === '' ||
    $toEmail === '' ||
    $fromEmail === ''
) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Contact configuration is incomplete.',
    ]);
    exit;
}

$phpmailerBase = __DIR__ . '/phpmailer/src/';

if (
    !file_exists($phpmailerBase . 'Exception.php') ||
    !file_exists($phpmailerBase . 'PHPMailer.php') ||
    !file_exists($phpmailerBase . 'SMTP.php')
) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'PHPMailer is not installed yet. Upload PHPMailer files into public/phpmailer/src/.',
    ]);
    exit;
}

require_once $phpmailerBase . 'Exception.php';
require_once $phpmailerBase . 'PHPMailer.php';
require_once $phpmailerBase . 'SMTP.php';

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->Port = $smtpPort;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;

    if ($smtpEncryption === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($toEmail);
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'New website enquiry from ' . $name;
    $mail->isHTML(false);
    $mail->Body = implode("\n", [
        'New contact form submission',
        '',
        'Name: ' . $name,
        'Email: ' . $email,
        'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
        '',
        'Message:',
        $message,
    ]);

    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully.',
    ]);
} catch (Exception $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send the message. Check your SMTP configuration.',
    ]);
}

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Correo para enviar el formulario
    $to = "tudirecciondecorreo@example.com";
    $subject = "Nuevo mensaje de contacto de $name";
    $body = "Has recibido un nuevo mensaje de contacto:\n\nNombre: $name\nCorreo electrónico: $email\nMensaje: $message";
    $headers = "From: $email";

    // Enviar el correo
    mail($to, $subject, $body, $headers);
    
    // Correo automático al remitente
    $auto_subject = "Gracias por contactarme";
    $auto_body = "Hola $name,\n\nGracias por contactarme. He recibido tu mensaje y me pondré en contacto contigo lo antes posible.\n\nSaludos,\nCristian Ruiz";
    $auto_headers = "From: tudirecciondecorreo@example.com";

    // Enviar el correo automático
    mail($email, $auto_subject, $auto_body, $auto_headers);

    // Redireccionar de vuelta al formulario
    header("Location: index.html");
}
?>

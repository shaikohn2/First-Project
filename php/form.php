<?php
     $name = $lastname = $visitor_email = $cellphone = $message = "";
     $name = $_POST["name"];
     $lastname = $_POST["lastname];
     $visitor_email = $_POST["email"];
     $telefono = $_POST["cellphone"];
     $message = $_POST["message"];
     $email_from = "contacto@shai.com.ar";
     $email_subject = "Nuevo mensaje de un usuario";
     $txt = "$name $lastname, usuario cuyo correo electrónico es $visitor_email y su telefono $cellphone, te escribió el siguiente mensaje:\n\n".$message;
     $to = "contacto@shai.com.ar";
     $headers = "From: $email_from \r\n";
     $headers = "Reply-To: $visitor_email \r\n".
     mail($to,$email_subject,$txt,$headers);
     header("Location: /index.html");
?>
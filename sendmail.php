<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
    
    $mail = new PHPMailer(true);

    //Enable SMTP debugging.
    $mail->SMTPDebug = 0;
    //Set PHPMailer to use SMTP.
    $mail->isSMTP();
    //Set SMTP host name
    $mail->Host = "	mail.adm.tools";
    //Set this to true if SMTP host requires authentication to send email
    $mail->SMTPAuth = true;
    //Provide username and password
    $mail->Username = "host@milkadeluxe.fun";
    $mail->Password = "66162606Alex";
    //If SMTP requires TLS encryption then set it
    $mail->SMTPSecure = "tls";
    //Set TCP port to connect to
    $mail->Port = 2525;


    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('host@milkadeluxe.fun');
    $mail->addAddress($_POST['email']);
    $mail->Subject = 'Привет, это проверочное письмо';

    $body = '<h1>Отправка письма из Лабы №2</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name: </strong> '.$_POST['name'].'</p>';    
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail: </strong> '.$_POST['email'].'</p>';    
    }

    if(trim(!empty($_POST['textarea']))){
        $body.='<p><strong>Message: </strong> '.$_POST['textarea'].'</p>';    
    }

    $mail->Body = $body;

    if(!$mail->send()) {
        $message = 'Ошибка';
    }
     else {
        $message = 'Отправлено!';
    }

    $response = ['message' => $message];
    
    header('Content-type: application/json');
    echo json_encode($response);
?>
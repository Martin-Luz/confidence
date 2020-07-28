<?php
require "phpmailer/PHPMailerAutoload.php";


function isMail($email){
    $er = "/^(([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}){0,1}$/";
    if (preg_match($er, $email)){
	return true;
    } else {
	return false;
    }
}


$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host       = "ssl://smtp.googlemail.com";
$mail->SMTPAuth   = true;
$mail->Username   = "example.sender@martinluz.com.br";//inserir email remetente
$mail->Password   = "1234";//inserir senha email remetente
$mail->SMTPSecure = "tls";
$mail->Port       = 465;
$mail->CharSet    = "UTF-8";
 $mail->AddAddress("example@martinluz.com"); //inserir email destinatário
$mail->FromName = "Formulário do site Blue box!";
$mail->isHTML(true);
$mail->Subject = "Formulário do site Blue box!";
$which_form    = "Formulário do site Blue box!";
//CORPO DO EMAIL
$mail_Body  = 'Contato Blue Box <br>
Nome: '.$_POST['nome'].' <br>
E-mail: '.$_POST['email'].' <br>
Telefone: '.$_POST['tel'].'<br>
Empresa: '.$_POST['empresa'].'<br>
Cargo: '.$_POST['cargo'].' <br>
Quantidade de Funcionarios: '.$_POST['funcionarios'].' <br>
mensagem: '.$_POST['comentario'].' <br>
';
$mail->Body = $mail_Body;
//ENVIANDO O MEIAL
function sendErs($mail)
{
    try {
        $mail->send();
        //MENSAGEM ENVIADA
        $msg = "enviado";
        return $msg;
    }
    catch (Exception $e) {
        //MENSAGEM NAO ENVIADA
        $msg = "erro: ".$e;
        return $msg;
    }
}

if(isMail($_POST['email'])){
    sendErs($mail);
}else{
    header($_SERVER['SERVER_PROTOCOL'] . ' 422 Invalid email');
    echo "Email inválido";
}

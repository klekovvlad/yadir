<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

//echo $fio;
//echo "<br>";
//echo $email;
if (mail("m_skoryh@s-media24.ru", "Заявка с сайта", "Имя: $name \r\n Телефон: $phone","From: info@smedia-udalenie.ru"))
 {     echo "OK";
} else {
    echo "OK";
}?>
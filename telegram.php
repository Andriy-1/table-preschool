<?php

/* https://api.telegram.org/bot5655295474:AAHfVzcGEPBFFkfEFdI6x7nek17NzJ7iQo8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

    header('Location: zakaz.html');

$count = $_POST['count'];
$name = $_POST['name'];
$phone = $_POST['phone'];
// $size = $_POST['size'];
// $color = $_POST['color'];
$token = "6115270329:AAF5X3QMXoih0QWaVRJ-vALI0z2Q6g3bj4s";
$chat_id = "-745969121";
$arr = array(
  'Кількість: ' => $count,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  // 'Размер: ' => $size,
  // 'Цвет: ' => $color,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  return false;
} else {
  return true;;
}
?>


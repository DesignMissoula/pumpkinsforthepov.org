<?php

require __DIR__ . '/inc/config.inc.php';

require __DIR__ . '/vendor/autoload.php';


$transaction = new nmiDirectPost(array('nmi_user'=>NMI_USER,'nmi_password'=>NMI_PASSWORD));

$transaction = new nmiDirectPost;
 
$transaction->setOrderDescription('Some Item');
$transaction->setAmount('100.00');
$transaction->setTax('9.00');
$transaction->setShipping('12.00');
 
$transaction->setCcNumber('4111111111111111');
$transaction->setCcExp('1113');
$transaction->setCvv('999');
 
$transaction->setCompany('Some company');
$transaction->setFirstName('John');
$transaction->setLastName('Smith');
$transaction->setAddress1('888');
$transaction->setCity('Dallas');
$transaction->setState('TX');
$transaction->setZip('77777');
$transaction->setPhone('5555555555');
$transaction->setEmail('test@domain.com');
 
$transaction->sale();
 
$result = $transaction->execute();
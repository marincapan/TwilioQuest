<?php
function isABotCheck($isABot)
{
  if ($isABot == true) {
    return true;
  }else{
    return false;
  }
}

function passwordCheck($providedPassword, $actualPassword)
{
  if (!($providedPassword == $actualPassword)) {
    return false;
  }else{
    return true;
  }
}

function securityAnswerCheck($providedAnswer, $actualAnswer)
{
  if (is_numeric(strpos($actualAnswer, $providedAnswer))) {
    return true;
  }else{
    return false;
  }
}

function passwordTriesHitLimit($tries)
{
  $limit = 5;
  if ($tries < $limit && $tries > 0) {
    return false;
  }else{
    return true;
  }
}
/*$isABot = isABotCheck(true);
$passwordCheck = passwordCheck('provided password', 'actual password');
$securityAnswerCheck = securityAnswerCheck('provided answer', 'actual answer');
$passwordTries = passwordTriesHitLimit(3);
print 'is a bot check: ';
var_dump($isABot);
print 'password check: ';
var_dump($passwordCheck);
print 'security answer: ';
var_dump($securityAnswerCheck);
print 'password tries: ';
var_dump($passwordTries);*/
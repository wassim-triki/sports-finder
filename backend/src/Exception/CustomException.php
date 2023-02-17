<?php

namespace App\Exception;

class CustomException extends \Exception{
    protected $type;
    public function __construct($message,$code,$type)
    {
      parent::__construct($message,$code);
      $this->type=$type;
    }

    public function getType():string{
      return $this->type;
    }
    public function setType(string $type):void{
      $this->type=$type;
    }
}
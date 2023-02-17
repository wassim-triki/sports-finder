<?php

namespace App\Exception;

class ConflictException extends CustomException{
    public function __construct($message='Resource already exists.',$code=409,$type='ConflictException')
    {
      parent::__construct($message,$code,$type);
    }

}
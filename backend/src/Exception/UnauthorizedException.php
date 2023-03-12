<?php

namespace App\Exception;

class UnauthorizedException extends CustomException{
    public function __construct($message='Unauthorized.',$code=401,$type='UnauthorizedException')
    {
      parent::__construct($message,$code,$type);
    }

}
<?php

namespace App\Service;

use App\Entity\Address;
use App\Entity\User;
use App\Exception\ConflictException;
use App\Repository\UserRepository;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserService{
  private $userRepository;

  public function __construct(UserRepository $userRepository){
    $this->userRepository=$userRepository;
  }

  public function getAllUsers(){
    $users=$this->userRepository->findAll();
    return $users;
  }
}

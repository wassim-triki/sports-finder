<?php

namespace App\Service;

use App\Entity\Address;
use App\Entity\User;
use App\Exception\ConflictException;
use App\Exception\UnauthorizedException;
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
  public function updateUser($id,$userData){
    $user=$this->userRepository->findOneBy(['id'=>$id]);
    if(!$user){
      throw new UnauthorizedException();
    }

      if(isset($userData->address)){
      $address=new Address();
      $address->setState($userData->address->state??null);
      $address->setCity($userData->address->city??null);
      $address->setStreet($userData->address->street??null);
      $address->setZipCode($userData->address->zipCode??null);
      $user->setAddress($address);
    }

    $user->setPhone($userData->phone??null);

    

    
    $this->userRepository->update();
    return $user;
  }
}

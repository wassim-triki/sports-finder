<?php

namespace App\Service;

use App\Entity\Address;
use App\Entity\User;
use App\Exception\ConflictException;
use App\Repository\UserRepository;

class AuthService{
  private $userRepository;
  public function __construct(UserRepository $userRepository){
    $this->userRepository=$userRepository;
  }

  public function registerUser($userData):User{
    $userExists=$this->userRepository->findOneBy(['email'=>$userData->email]);
    if($userExists){
      throw new ConflictException('Email already in use.');
    }
    $user=new User();
    $user->setEmail($userData->email);
    $user->setFirstName($userData->firstName);
    $user->setLastName($userData->lastName);
    $user->setRole($userData->role);
    $user->setPassword($userData->password);
    $user->setPhoneNo($userData->phoneNo);

    foreach($userData->addresses as $item){
        $address=new Address();
        $address->setState($item->state);
        $address->setCity($item->city);
        $address->setPostalCode($item->postalCode);
        $user->addAddress($address);
    }

    $this->userRepository->add($user,true);
    
    return $user;
  }
}

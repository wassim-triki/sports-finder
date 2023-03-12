<?php

namespace App\Service;

use App\Entity\Address;
use App\Entity\User;
use App\Exception\ConflictException;
use App\Repository\UserRepository;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AuthService{
  private $userRepository;
  private UserPasswordHasherInterface $hasher;

  public function __construct(UserRepository $userRepository,UserPasswordHasherInterface $hasher){
    $this->userRepository=$userRepository;
    $this->hasher=$hasher;
  }

  public function registerUser($userData){
    $userExists=$this->userRepository->findOneBy(['email'=>$userData->email]);
    if($userExists){
      throw new ConflictException('Email already in use.');
    }
    $user=new User();
    $user->setEmail($userData->email);
    $user->setFirstName($userData->firstName);
    $user->setLastName($userData->lastName);
    $user->setRoles(['ROLE_USER']);
    $hashedPassword=$this->hasher->hashPassword($user,$userData->password);
    $user->setPassword($hashedPassword);

    if(isset($userData->phone)){
      $user->setPhone($userData->phone);
    }
    
    if(isset($userData->address)){
      $address=new Address();
      $address->setState($userData->address->state);
      $address->setCity($userData->address->city);
      $address->setStreet($userData->address->street);
      $address->setZipCode($userData->address->zipCode);
      $user->setAddress($address);
    }


    $this->userRepository->add($user,true);
    
    return $user;
  }
}

<?php

namespace App\DataFixtures;

use App\Entity\Address;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;
    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }
    public function load(ObjectManager $manager): void
    {
        

        // $address=$this->createAddress('Nabeul','Kelibia','Wasel Ben Aata','8090');
        // $user =$this->createUser('testuser@gmail.com','testuser','Test','User',['ROLE_USER'],'24542649',$address);
        
        $user =$this->createUser('wsmtriki@gmail.com','wsmtriki','Wassim','Triki');




        $manager->persist($user);
        $manager->flush();
    }
    public function createUser($email,$password,$firstName,$lastName,array $roles=null,$phone=null,Address $address=null):?User{
        $user = new User();
        $user->setEmail($email);
        $pw=$this->hasher->hashPassword($user,$password);
        $user->setPassword($pw);
        $user->setFirstName($firstName);
        $user->setLastName($lastName);
        if($phone){
            $user->setPhone($phone);
        }
        if($roles){
            $user->setRoles($roles);
        }else{
            $user->setRoles( ['ROLE_USER']);
        }
        if($address){
            $user->setAddress($address);
        }
        return $user;
    }
    public function createAddress($state,$city,$street,$zipCode){
        $address=new Address();
        $address->setState($state);
        $address->setCity($city);
        $address->setStreet($street);
        $address->setZipCode($zipCode);
        return $address;
    }
}

<?php

namespace App\DataFixtures;

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
        $user = new User();
        $user->setEmail('wsmtriki@gmail.com');
        $password=$this->hasher->hashPassword($user,'wsmtriki');
        $user->setPassword($password);
        $user->setFirstName('Wassim');
        $user->setLastName('Triki');
        $user->setRoles(['ROLE_USER']);
        $user->setPhone('24542649');

        $manager->persist($user);
        $manager->flush();
    }
}

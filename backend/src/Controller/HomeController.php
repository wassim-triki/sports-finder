<?php

namespace App\Controller;

use App\Entity\Address;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    public function index(ManagerRegistry $doctrine): JsonResponse
    {
        $address1=new Address();
        $address1->setState('Nabeul');
        $address1->setCity('Kelibia');
        $address1->setPostalCode('8090');
        $doctrine->persist($address1);
        dd('Server running...');
    }
}

<?php

namespace App\Controller;

use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

class UserController extends AbstractController
{

    private $userService;

    public function __construct(UserService $userService){
      $this->userService=$userService;
    }
  

    /**
     * @Route("/api/users", name="app_users")
     */
    public function getAllUsers(SerializerInterface $serializer): Response
    {
        $users=$this->userService->getAllUsers();

        $json=$serializer->serialize(['users'=>$users],'json');

        $response = new Response($json,Response::HTTP_OK,['Content-Type'=>'application/json']);

        return $response;
    }
}

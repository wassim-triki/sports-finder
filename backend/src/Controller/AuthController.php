<?php

namespace App\Controller;

use App\Service\AuthService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class AuthController extends AbstractController
{

    private $authService;
    public function __construct(AuthService $authService ){
        $this->authService=$authService;
    }
    /**
     * @Route("/api/register", name="app_registration",methods={"POST"})
     */
    public function register(Request $request): JsonResponse{



        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $userData=json_decode($request->getContent());
        $user=$this->authService->registerUser($userData);
        $json=$serializer->serialize(['message'=>'Registration Successful.','user'=>$user],'json');
        return $this->json($json);
    }
}

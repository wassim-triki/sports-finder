<?php

namespace App\Controller;

use App\Exception\ConflictException;
use App\Service\AuthService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
     * @Route("/api/auth/register", name="app_registration",methods={"POST"})
     */
    public function register(Request $request,SerializerInterface $serializer): Response{
            $userData=json_decode($request->getContent());
            $user=$this->authService->registerUser($userData);
            $json=$serializer->serialize(['message'=>'Registration Successful.','user'=>$user],'json');
    
            $response = new Response($json,Response::HTTP_CREATED,['Content-Type'=>'application/json']);
    
            return $response;
    }
    /**
     * @Route("/api/auth/me", name="app_auth",methods={"GET"})
     */
    public function getAuth(SerializerInterface $serializer): Response{
        $user = $this->getUser();
        $json=$serializer->serialize(['user'=>$user],'json');
    
        $response = new Response($json,Response::HTTP_OK,['Content-Type'=>'application/json']);
    
        return $response;
    }
}

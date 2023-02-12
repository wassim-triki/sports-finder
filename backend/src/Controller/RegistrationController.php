<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/api/register", name="app_registration",methods={"POST"})
     */
    public function register(Request $request): JsonResponse
    {
        $data=json_decode($request->getContent());
        return $this->json($data);
    }
}

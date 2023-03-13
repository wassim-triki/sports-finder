<?php

namespace App\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class JwtResponseListener implements EventSubscriberInterface
{
    public function onKernelResponse(ResponseEvent $event)
    {
        $response = $event->getResponse();
        
        // Check if the response is a JSON response and has a token key
        if ($response->headers->get('Content-Type') === 'application/json' && $response->getContent() && strpos($response->getContent(), 'token') !== false) {
            // Modify the response content to add a message key
            $data = json_decode($response->getContent(), true);
            $data['message'] = 'Login successful.';
            $response->setContent(json_encode($data));
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            'kernel.response' => 'onKernelResponse',
        ];
    }
}

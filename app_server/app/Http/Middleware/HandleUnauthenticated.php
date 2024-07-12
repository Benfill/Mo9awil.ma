<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Auth\AuthenticationException;

class HandleUnauthenticated
{
    public function handle(Request $request, Closure $next): Response
    {
        try {
            if (auth()->guest()) {
                throw new AuthenticationException('Unauthenticated.');
            }

            return $next($request);
        } catch (AuthenticationException $e) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }
    }
}

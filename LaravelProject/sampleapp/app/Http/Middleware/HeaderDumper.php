<?php
declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;

use Illuminate\Http\Request;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Response;

use function strval;

final class HeaderDumper
{

    private $logger;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }
    
    public function handle($request, Closure $next)
    {
        if ($request instanceof Request)
        {
            $this->logger->info('request', [
                'header' => strval($request->headers)
            ]);
        } 
        
        $response = $next($request);

        if ($response instanceof Response) 
        {
            $this->logger->info('response', [
                'header' => strval($response->headers)
            ]);
        }
        \Log::info('テストやで');
        return $response;
    }
}

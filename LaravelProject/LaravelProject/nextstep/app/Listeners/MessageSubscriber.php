<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Events\PublishProcessor;

class MessageSubscriber
{
    /**
     * Handle the event.
     *
     * @param  PublishProcessor  $event
     * @return void
     */
    public function handle(PublishProcessor $event)
    {
        var_dump($event->getInt());
    }
}

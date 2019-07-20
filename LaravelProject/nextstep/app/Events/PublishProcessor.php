<?php

declare(strict_types=1);

namespace App\Events;


class PublishProcessor
{
    private $int;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(int $int)
    {
        $this->int = $int;
    }

    public function getInt() : int
    {
        return $this->int;
    }

}

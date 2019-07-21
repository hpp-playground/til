<?php

declare(strict_types=1);

namespace App\UseCases;

use Carbon\Carbon;

final class ExportOrdersUseCase
{
    public function run(Carbon $targetDate)
    {
        return $targetDate->format('Y-m-d') . '購入の情報';
    }
}

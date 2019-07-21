<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\UseCases\ExportOrdersUseCase;
use Illuminate\Console\Command;
use Carbon\Carbon;

class ExportOrdersCommand extends Command
{

    private $useCase;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:export-orders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '購入情報を出力する';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(ExportOrdersUseCase $useCase)
    {
        parent::__construct();

        $this->useCase = $useCase;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $tsv = $this->useCase->run(Carbon::today());
        echo $tsv;
    }
}

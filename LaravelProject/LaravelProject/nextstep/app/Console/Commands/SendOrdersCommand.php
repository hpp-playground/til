<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\UseCases\SendOrdersUseCase;
use Illuminate\Console\Command;
use Carbon\Carbon;
use Psr\Log\LoggerInterface;

class SendOrdersCommand extends Command
{
    private $useCase;
    private $logger;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-orders {date}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '購入情報を送信する';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(SendOrdersUseCase $useCase, LoggerInterface $logger)
    {
        parent::__construct();

        $this->useCase = $useCase;
        $this->logger = $logger;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->logger->info(__METHOD__ . ' ' . 'start');

        $date = $this->argument('date');
        $targetDate = Carbon::createFromFormat('Ymd', $date);

        $this->logger->info('TargetDate:' . $date);

        $count = $this->useCase->run($targetDate);

        $this->logger->info(__METHOD__ . ' ' . 'done sent_count:' . $count);
    }
}

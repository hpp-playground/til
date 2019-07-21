<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class NoArgs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'no-args-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command test with no args';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->comment('No argument');
    }
}

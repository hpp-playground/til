<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class WithArgs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'with-args-command {arg} {--switch}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command test with args';

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
        $arg = $this->argument('arg');
        $switch = $this->option('switch');
        $this->comment('With args' . $arg . $switch);
    }
}

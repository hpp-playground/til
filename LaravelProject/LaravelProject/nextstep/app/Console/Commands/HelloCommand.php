<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class HelloCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hello:class {name?} {--switch}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'sample command(class)';

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
        $name = $this->argument('name');
        $switch = $this->option('switch');
        $this->comment('Hello ' . $name . ($switch ? 'ON' : 'OFF'));
    }
}


<?php

declare(strict_types=1);

namespace App\Services;

class CustomerService
{
    public function getCustomers()
    {
        return  \App\Customer::query()->select(['id', 'name'])->get();
    }

    public function addCustomer($name)
    {
        $customer = new \App\Customer();
        $customer->name = $name;
        $customer->save();
    }
}
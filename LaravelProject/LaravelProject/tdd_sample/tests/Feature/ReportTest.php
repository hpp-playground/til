<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReportTest extends TestCase
{
    /**
     * @test
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }

    /**
     * @test
     */
    public function canAccessApiCustomersByGET()
    {
        $response = $this->get('api/customers');
        $response->assertStatus(200);
    }


    /**
     * @test
     */
    public function canAccessApiCustomersByPOST()
    {
        $response = $this->post('api/customers');
        $response->assertStatus(200);
    }

    public function canAccessApiCustomersCustomer_idByGET()
    {
        $response->assertStatus(200);
    }
}
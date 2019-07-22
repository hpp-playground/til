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

    /**
     * @test
     */
    public function canAccessApiCustomersCustomer_idByGET()
    {
        $response = $this->get('api/customers/1');
        $response->assertStatus(200);
    }


    /**
     * @test
     */
    public function canAccessApiCustomersCustomer_idByPUT()
    {
        $response = $this->post('api/customers/1');
        $response->assertStatus(200);
    }

    /**
     * @test
     */
    public function canAccessApiCustomersCustomer_idByDELETE()
    {
        $response = $this->delete('api/customers/1');
        $response->assertStatus(200);
    }

    /**
     * @test
     */
    public function canAccessApiReportsByGET()
    {
        $response = $this->get('api/reports');
        $response->assertStatus(200);
    }

    /**
     * @test
     */
    public function canAccessApiReportsByPOST()
    {
        $response = $this->post('api/reports');
        $response->assertStatus(200);
    }

    /**
     * @test
     */
    public function canAccessApiReportsReport_idByGET()
    {
        $response = $this->get('api/reports/1');
        $response->assertStatus(200);
    }

    /**
     * @test
     */
    public function canAccessApiReportsReport_idByPOST()
    {
        $response = $this->post('api/reports/1');
        $response->assertStatus(200);
    }

    /**
     * @test
     */
    public function canAccessApiReportsReport_idByDELETE()
    {
        $response = $this->delete('api/reports/1');
        $response->assertStatus(200);
    }


}
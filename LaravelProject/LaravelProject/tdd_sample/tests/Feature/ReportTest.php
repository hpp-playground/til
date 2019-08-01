<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Customer;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReportTest extends TestCase
{
    use RefreshDatabase;

    public function setUp()
    {
        parent::setUp();
        $this->artisan('db:seed', ['--class' => 'TestDataSeeder']);
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
    public function canGetJSONFromApiCustomersByGET()
    {
        $response = $this->get('api/customers');
        $this->assertThat($response->content(), $this->isJson());
    }


    /**
     * @test
     */
    public function doJSONFormatFromApiCustomersByGETSatisfyRequirement()
    {
        $response = $this->get('api/customers');
        $customers = $response->json();
        $customer = $customers[0];
        $this->assertSame(['id', 'name'], array_keys($customer));
    }


    /**
     * @test
     */
    public function doJSONCountFromApiCustomersByGETAndTwoEquals()
    {
        $response = $this->get('api/customers');
        $response->assertJsonCount(2);
    }

    /**
     * @test
     */
    public function canAccessApiCustomersByPOST()
    {
        $customer = [
            'name' => 'customer_name',
        ];
        $response = $this->postJson('api/customers', $customer);
        $response->assertStatus(200);
    }


    /**
     * @test
     */
    public function canAddCustomerNameToCustomersTableFromApiCustomersByPOST()
    {
        $params = [
            'name' => '顧客名',
        ];
        $this->postJson('api/customers', $params);
        $this->assertDatabaseHas('customers', $params);
    }

    /**
    * @test
    */
    public function return422ToPostDataWithoutNameFromApiCustomersByPOST()
    {
        $params = [];
        $response = $this->postJson('api/customers', $params);
        $response->assertStatus(\Illuminate\Http\Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
    * @test
    */
    public function return422ToPostDataHaveNameButWithoutValueFromApiCustomersByPOST()
    {
        $params = [
            'name' => '',
        ];
        $response = $this->postJson('api/customers', $params);
        $response->assertStatus(\Illuminate\Http\Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
    * @test
    */
    public function checkErrorResponseFromApiCustomersByPOST()
    {
        $params = ['name' => ''];
        $response = $this->postJson('api/customers', $params);
        $error_response = [
            'message' => "The given data was invalid.",
            'errors' => [
                'name' => [
                    'name は必須項目です'  //errorを日本語で表示する
                ],
            ]
        ];
        $response->assertExactJson($error_response);
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
        $response = $this->put('api/customers/1');
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
    public function canAccessApiReportsReport_idByPUT()
    {
        $response = $this->put('api/reports/1');
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
# TODO
->testFunction() //test_code status

・api/customersにGETメソッドでアクセスできる
->canAccessApiCustomersByGET()  //finished!

    *api/customersにGETメソッドでアクセスするとJSONが返却される
    ->canGetJSONFromApiCustomersByGET() //finished!!

    *api/customersにGETメソッドで取得できる顧客情報のJSON形式は要件通りである
    ->doJSONFormatFromApiCustomersByGETSatisfyRequirement() //finished!!

    *api/customersにGETメソッドで返却される顧客情報は2件である
    ->doJSONCountFromApiCustomersByGETAndTwoEquals() //finished!!


・api/customersにPOSTメソッドでアクセスできる
->canAccessApiCustomersByPOST() //finished!

    *api_customersに顧客名をPOSTするとcustomersテーブルにそのデータが追加される
    ->canAddCustomerNameToCustomersTableFromApiCustomersByPOST() //finished!!

    *api_customersにnameが含まれないデータをPOSTした場合は422UnprocessableEntityが返却される
    ->return422ToPostDataWithoutNameFromApiCustomersByPOST() //finished!!

    *api_customersにnameは含まれるが値が存在しない(空文字列)データをPOSTした場合は422UnprocessableEntityが返却される
    ->return422ToPostDataHaveNameButWithoutValueFromApiCustomersByPOST() //finished!!


・api/customers/{customer_id}にGETメソッドでアクセスできる
->canAccessApiCustomersCustomer_idByGET() //finished!

    *


・api/customers/{customer_id}にPUTメソッドでアクセスできる
->canAccessApiCustomersCustomer_idByPUT() //finished!

・api/customers/{customer_id}にDELETEメソッドでアクセスできる
->canAccessApiCustomersCustomer_idByDELETE() //finished

・api/reportsにGETメソッドでアクセスできる
->canAccessApiReportsByGET() //finished

・api/reportsにPOSTメソッドでアクセスできる
->canAccessApiReportsByPOST() //finished

・api/reports/{report_id}にGETメソッドでアクセスできる
->canAccessApiReportsReport_idByGET() //finished

・api/reports/{report_id}にPUTメソッドでアクセスできる
->canAccessApiReportsReport_idByPOST() //finished

・api/reports/{report_id}にDELETEメソッドでアクセスできる
->canAccessApiReportsReport_idByDELETE() //finished



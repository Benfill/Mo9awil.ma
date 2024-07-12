<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            'companyAddress' => '123 Example Street',
            'capital' => 50000.00,
            'legalStatus' => 'SARL',
            'signing' => 'John Doe',
            'activity_id' => 1,
            'city_id' => 2,
            'user_id' => 1,
            'firstName' => 'Jane',
            'secondName' => 'Doe',
            'thirdName' => 'Smith',
            'managers' => [
                [
                    'name' => 'Michael Johnson',
                    'cardId' => 'ID123456',
                    'address' => '456 Another Street',
                    'birth' => '1985-07-23',
                    'isAssociate' => true,
                    'isManager' => true,
                    'parts' => 30,
                ],
                [
                    'name' => 'Emily Davis',
                    'cardId' => 'ID654321',
                    'address' => '789 Some Avenue',
                    'birth' => '1990-05-14',
                    'isAssociate' => false,
                    'isManager' => true,
                    'parts' => 70,
                ],
            ],
        ];

    }
}

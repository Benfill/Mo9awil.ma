<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = file_get_contents("https://raw.githubusercontent.com/alaouy/sql-moroccan-cities/master/json/ville.json");

        $response = json_decode($response, true);

        foreach ($response as $r) {
            City::create([
                "city_name" => $r['ville']
            ]);
        }
    }
}

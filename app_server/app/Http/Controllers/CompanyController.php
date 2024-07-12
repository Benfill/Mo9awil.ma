<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Associate;
use App\Models\City;
use App\Models\Company;
use App\Models\CompanyActivity;
use App\Models\CompanyAssociate;
use App\Models\CompanyManager;
use App\Models\Manager;
use App\Models\NegativeCertificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    function index(): \Illuminate\Http\JsonResponse
    {
        $companies = Company::with(['activities', 'user', 'city', 'managers', 'associates', 'negativeCertificate'])
            ->get();

        return response()->json([
            'status' => "Success",
            "companies" => $companies,
        ]);
    }

    function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $data = $request->only(
            'companyAddress',
            'capital',
            'legalStatus',
            'signing',
            'activity_id',
            'city_id',
            'user_id',
        );

        $certificate = $request->only(
            'firstName',
            'secondName',
            'thirdName',
        );

        $validator = Validator::make($request->all(), [
            'companyAddress' => 'required|string|max:255',
            'capital' => 'required|numeric',
            'legalStatus' => 'required|string|max:50',
            'signing' => 'required|boolean',
            'city_id' => 'required|numeric|exists:cities,id',
            'user_id' => 'required|numeric|exists:users,id',
            'firstName' => 'required|string|max:50',
            'secondName' => 'required|string|max:50',
            'thirdName' => 'required|string|max:50',
            'activities' => 'required|array',
            'activities.*' => 'required|numeric|exists:activities,id',
            'managers' => 'required|array',
            'managers.*.name' => 'required|string|max:255',
            'managers.*.cardId' => 'required|string|max:50',
            'managers.*.address' => 'required|string|max:255',
            'managers.*.birth' => 'required|date',
            'managers.*.isAssociate' => 'required|boolean',
            'managers.*.isManager' => 'required|boolean',
            'managers.*.parts' => 'required|numeric|min:0|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data['signing'] = $data['signing'] ? 'conjoint' : 'single';

        $company = Company::create($data);
        $c_id = $company->id;
        $this->storeMangers($request, $c_id);

        $activities = $request['activities'];
        $this->storeActivities($activities, $c_id);

        $certificate['company_id'] = $c_id;
        $n_certificate = NegativeCertificate::create($certificate);

        return response()->json([
            'status' => 'success'
        ], 200);
    }

    function storeActivities($activities, $id)
    {
        foreach ($activities as $activity) {
            CompanyActivity::create([
                'activity_id' => $activity,
                'company_id' => $id
            ]);
        }
    }

    function storeMangers($req, $id)
    {
        $managers = $req->managers;

        foreach ($managers as $manager) {
            $isAssociate = $manager['isAssociate'] ? 'yes' : 'no';
            $isManager = $manager['isManager'] ? 'yes' : 'no';
            $data = [
                'name' => $manager['name'],
                'address' => $manager['address'],
                'cardId' => $manager['cardId'],
                'birth' => $manager['birth']
            ];

            if ($isAssociate === 'yes') {

                $a_id = Associate::create(array_merge($data, [
                    'parts' => $manager['parts'],
                    'isManager' => $isManager
                ]));

                CompanyAssociate::create([
                    'company_id' => $id,
                    'associate_id' => $a_id->id
                ]);
            }

            if ($isManager === 'yes') {
                $m_id = Manager::create(array_merge($data, [
                    'isAssociate' => $isAssociate
                ]));
                CompanyManager::create([
                    'company_id' => $id,
                    'manager_id' => $m_id->id
                ]);
            }
            return true;
        }
    }


    function getCitiesNActivities(): \Illuminate\Http\JsonResponse
    {
        $cities = City::all();
        $activities = Activity::all();

        $response = [
            'status' => 'success',
            'cities' => $cities,
            'activities' => $activities
        ];
        return response()->json($response, 200);
    }


    function checkProgress(Request $request)
    {

    }
}

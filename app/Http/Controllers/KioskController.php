<?php

namespace App\Http\Controllers;

use App\Events\QueueCreated;
use App\Models\Queue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KioskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('kiosk');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (!$request->service_id) {
            return Inertia::render('kiosk', [
                'error' => 'Please select a service.'
            ]);
        }

        $serviceMap = [
            1 => ['name' => 'Customer Service', 'code' => 'CS'],
            2 => ['name' => 'Teller', 'code' => 'TL'],
            3 => ['name' => 'Account Opening', 'code' => 'AO'],
            4 => ['name' => 'Loan Services', 'code' => 'LS'],
        ];

        $service = $serviceMap[$request->service_id];

        $generateNumber = Queue::generateNumber($service['code']);

        $queue = Queue::create([
            'number' => $generateNumber,
            'service_name' => $service['name'],
            'service_code' => $service['code'],
        ]);

        QueueCreated::dispatch($queue);

        return response()->json([
            'number' => $generateNumber,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Domains\Campaign\Dto\CreateCampaignDTO;
use App\Domains\Campaign\Services\CreateCampaignService;
use App\Http\Requests\Campaign\CreateRequest;
use App\Models\Campaign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CampaignController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Campaign::class, 'campaign');;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        return view('campaigns', ['campaigns' => $user->campaigns]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function show(Campaign $campaign)
    {
        return view('campaign.index', ['campaign' => $campaign, 'mode' => 'campaign']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('campaign.edit');
    }

    public function store(CreateRequest $request)
    {
        $dto = new CreateCampaignDTO($request->validated());
        $campaign = CreateCampaignService::handle($request->user(), $dto);

        return redirect(url("campaign/{$campaign->id}"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function edit(Campaign $campaign)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Campaign $campaign)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function destroy(Campaign $campaign)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Models\Campaign\Entity;
use App\Models\Campaign\Entity\Block;

class CampaignController extends Controller
{
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

    
       // dd($campaign->entities->groupBy('type'));
         return view('campaign.index', ['campaign' => $campaign]);
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $campaign = Campaign::make($request->only(['name', 'description']));
        $user->campaigns()->save($campaign);

        // Welcome campaign
        $entity = Entity::make(['name'=> 'Welcome to '.$campaign->name, 'category'=>'Introduction']);
        $campaign->entities()->save($entity );
        $block = Block::make(['type'=>'text', 'content'=> 'Welcome to your new campaign! Hit edit to update this content with whatever you like.']);
        $entity->blocks()->save($block);

        return redirect(url('campaign/'.$campaign->id));
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

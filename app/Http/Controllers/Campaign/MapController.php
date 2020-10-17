<?php

namespace App\Http\Controllers\Campaign;

use Storage;
use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Models\Campaign\Map;
use App\Models\Campaign\Image;
use App\Http\Controllers\Controller;
use App\Http\Requests\Campaign\MapRequest;
use App\Http\Resources\Campaign\MapResource;

class MapController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Map::class, 'map');
        ;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Campaign $campaign)
    {
        // Manage maps
        return view('map.index', ['campaign' => $campaign]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Campaign $campaign)
    {
        return view('map.edit', ['campaign' => $campaign]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MapRequest $request, Campaign $campaign)
    {
        // Create image model
        $image = Image::upload($campaign, $request->file('image'));
       
        $campaign->maps()->save(Map::make([
            'name'  => $request->name,
            'image_id' => $image->id
        ]));

        return redirect(url("campaign/{$campaign->id}/map"));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Map  $map
     * @return \Illuminate\Http\Response
     */
    public function show(Campaign $campaign, Map $map)
    {
        return new MapResource($map);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Map  $map
     * @return \Illuminate\Http\Response
     */
    public function edit(Campaign $campaign, Map $map)
    {
        return view('map.edit', ['campaign' => $campaign, 'map' => $map]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Map  $map
     * @return \Illuminate\Http\Response
     */
    public function update(MapRequest $request, Campaign $campaign, Map $map)
    {
        $updates = ['name' => $request->name];
        if ($request->file('image')) {
            $updates['image_id'] = Image::upload($campaign, $request->file('image'))->id;
        }

        $map->update($updates);
        return redirect(url("campaign/{$campaign->id}/map"));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Map  $map
     * @return \Illuminate\Http\Response
     */
    public function destroy(Campaign $campaign, Map $map)
    {
        $map->delete();
        return new MapResource($map);
    }
}

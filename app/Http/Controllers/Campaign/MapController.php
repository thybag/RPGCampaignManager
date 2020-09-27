<?php

namespace App\Http\Controllers\Campaign;

use Image;
use Storage;
use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Models\Campaign\Map;
use App\Http\Controllers\Controller;
use App\Http\Resources\Campaign\MapResource;

class MapController extends Controller
{
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
    public function store(Campaign $campaign, Request $request)
    {
      // dd(  ,);

        $img = $request->file('image');
        $ext = $img->getClientOriginalExtension();
        $hash = md5_file($img->getRealPath());
        $img->storeAs("{$campaign->user_id}/{$campaign->id}", "{$hash}.{$ext}", 'public');

        $preview = Image::make($img)->resize(400, 400, 
        function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        })->encode();

        Storage::disk('public')->put("{$campaign->user_id}/{$campaign->id}/{$hash}_preview.{$ext}", $preview);

        $campaign->maps()->save(Map::make([
            'name'  => $request->name,
            'path' => "{$campaign->user_id}/{$campaign->id}/{$hash}.{$ext}"
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
    public function update(Request $request, Campaign $campaign, Map $map)
    {
        $updates = ['name' => $request->name];
        if ($request->file('image')) {

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
    public function destroy(Map $map)
    {
        //
    }
}

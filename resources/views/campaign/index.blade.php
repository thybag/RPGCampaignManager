@extends('layouts.wrapper')

@section('nav')
        <a href="#" data-tab='content' class="selected">Content</a>
        @foreach ($campaign->maps as $map)
            <a href="#{{$map->id}}" data-tab='{{$map->id}}'>{{$map->name}}</a>
        @endforeach
        <a href="{{ url("campaign/{$campaign->id}/map") }}" class='new'>&#x22ef;</a>
@endsection

@section('content')
<script>
    window._campaign = {
        'id': '{{$campaign->id}}',
        'url': '{{url('')}}',
        'default_entity': '{{$campaign->entities->first()->id}}'
    };
</script>
<div class="wrapper">
    <nav class="content-nav">
            <input type="text" placeholder="Filter..."/>
            @foreach ($campaign->entities->groupBy('category') as $groupName => $group)
            <div>
                <h3>{{ucfirst($groupName)}}</h3>
                @foreach ($group as $entity)
                    <a href="#" data-entity="{{$entity->id}}">{{$entity->name}}</a>
                @endforeach
            
                <a href="#" data-category="{{$groupName}}">Create...</a>
            </div>   
            @endforeach
    </nav>

    <div id="map"></div>
</div>
<div class="panel">
    <h2>content</h2>
    <div class="main">
        
        Group: marker colour
        Type: landmark
        Geo:Data

        --
        Blocks
        - Markdown
        - Stats
        - Notes [tickbox]

        blarp
    </div>
    <button id="json">Save</button> 
</div>
@endsection
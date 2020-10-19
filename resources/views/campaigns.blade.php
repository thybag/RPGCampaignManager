@extends('layouts.app')
@section('nav')
        
@endsection     
@section('content')
    <div class="container">
        <div class="content-list">
            <header> 
                <h1>Campaigns</h1>
            </header>

            @if($campaigns->count() == 0)
                <a href="campaign/create" class="campaign-item">
                    <div>
                        <h2>Welcome to RPG Campaign Manager</h2>
                        <p>Start builing your new World or RPG Campaign today. Click here to begin!</p>
                    </div>
                    <ul>
                        <li><strong>Checklist</strong></li> 
                        <li>- Upload your maps</li> 
                        <li>- Add your content</li> 
                        <li>- Build your world</li> 
                    </ul>
                </a>
            @endif
            @foreach ($campaigns as $campaign)
                <a href="campaign/{{$campaign->id}}" class="campaign-item">
                    <div>
                        <h2>{{$campaign->name}}</h2>
                        <p >{{$campaign->description}}</p>  
                    </div>
                    <ul>
                        <li>Pages: <strong>{{$campaign->entities()->count()}}</strong></li>
                         <li>Maps: <strong>{{$campaign->maps()->count()}}</strong></li>
                         <li>Images: <strong>{{$campaign->images()->count()}}</strong></li>
                         <li>Storage:  <strong>{{$campaign->images()->sum('size_kb')}}kb</strong></li>
                        <li>Created: <strong>{{$campaign->created_at}}</strong></li>
                    </ul>
                </a>
            @endforeach
            {{$campaign = null}}

            <footer class="controls">
                <a class="button" href="{{url("campaign/create")}}">
                    Start building your new Campaign
                </a>
            </footer>
        </div>
    </div>
@endsection


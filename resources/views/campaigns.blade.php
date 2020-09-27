@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Campaigns') }}</div>
                    <ul class="list-group list-group-flush">

                    @foreach ($campaigns as $campaign)
                          <li class="list-group-item ">
                            <a href="campaign/{{$campaign->id}}">
                                <h4>{{$campaign->name}}</h4>
                        
                                <p class>{{$campaign->description}}</p>  

                                <span class="badge badge-primary badge-pill">{{$campaign->maps()->count()}} Maps</span> <span class="badge badge-primary badge-pill">{{$campaign->entities()->count()}} locations</span>
                            </a>
                          </li>
                      @endforeach
                    </ul>
                    <div class="card-body">
                        <a class='btn btn-primary' href='campaign/create'>Create new Campaign</a>
                    </div>
            </div>
        </div>
    </div>
</div>
@endsection

@extends('layouts.app')

@section('content')
<div class="container">
    <form class="form" method="POST" action="{{ route('login') }}">
        <header>
            <h2>Login</h2>
        </header>
        <div>
            @error('email')
                <span class="notice" role="alert">
                    {{ $message }}
                </span>
             @enderror
            <label for="email">Email:</label>
            <input id="email" type="email" class="@error('email') invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
        </div>
        <div>
            <label for="password">Password:</label>
            <input id="password" type="password" class="@error('password') invalid @enderror" name="password" required autocomplete="current-password">
        </div>
        <div>
            <label for="remember"><input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }} </label>
            
        </div>

        @csrf

        <footer>
            <input type="submit" class="full" value="Login" />

            @if (Route::has('password.request'))
                <a class="" href="{{ route('password.request') }}">Forgotten Your Password?</a>
            @endif
        </footer>
    </form>
</div>
@endsection

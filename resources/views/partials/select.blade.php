@php
$value = old($name) ?? (!empty($model) ? $model->$name : '');
@endphp

<label>{{$label}} {{$model->$name}}</label>

<select name="{{$name}}" class="@error($name) invalid @enderror">
	@if(!empty($none))
		<option value="">{{$none}}</option>
	@endif
	@foreach($options as $option)
		<option value="{{$option->id}}" @if($value == $option->id) selected="selected" @endif>{{$option->name}}</option>
	@endforeach
</select>

@error($name) <span class="errors">{{ $message }}</span> @enderror
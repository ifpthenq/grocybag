@extends('layout.default')

@if($mode == 'edit')
@section('title', $__t('Edit Pinboard'))
@else
@section('title', $__t('Create Pinboard'))
@endif

@section('content')
<div class="row">
	<div class="col">
		<h2 class="title">@yield('title')</h2>
	</div>
</div>

<hr class="my-2">

<div class="row">
	<div class="col-lg-6 col-12">
		<script>
			Grocy.EditMode = '{{ $mode }}';
		</script>

		@if($mode == 'edit')
		<script>
			Grocy.EditObjectId = {{ $task->id }};
		</script>
		@endif

		<form id="ideasboard-form"
			novalidate>
            <div class="form-group">
				<label for="uri">{{ $__t('URL') }}</label>
				<input type="text"
					class="form-control"
					required
					id="uri"
					name="uri"
					value="@if($mode == 'edit'){{ $ieasboard->name }}@endif">
				<div class="invalid-feedback">{{ $__t('A URL is required') }}</div>
			</div>
			<div class="form-group">
				<label for="name">{{ $__t('Name') }}</label>
				<input type="text"
					class="form-control"
					required
					id="name"
					name="name"
					value="@if($mode == 'edit'){{ $ideasboard->name }}@endif">
				<div class="invalid-feedback">{{ $__t('A name is required') }}</div>
			</div>

			<div class="form-group">
				<label for="description">{{ $__t('Description') }}</label>
				<textarea class="form-control"
					rows="4"
					id="description"
					name="description">@if($mode == 'edit'){{ $ideasboard->description }}@endif</textarea>
			</div>

			

			

			@include('components.userfieldsform', array(
			'userfields' => $userfields,
			'entity' => 'tasks'
			))

			
			<button class="btn btn-success save-ideasboardform-button">{{ $__t('Save & close') }}</button>
			
		</form>
	</div>
</div>
@stop

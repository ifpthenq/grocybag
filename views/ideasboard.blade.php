@php require_frontend_packages(['datatables', 'animatecss']); @endphp

@extends('layout.default')

@section('title', $__t('IdeasBoard'))

@section('content')
<div class="row">
	<div class="col">
		<div class="title-related-links">
			<h2 class="title">@yield('title')</h2>
			<button class="btn btn-outline-dark d-md-none mt-2 float-right order-1 order-md-3"
				type="button"
				data-toggle="collapse"
				data-target="#related-links">
				<i class="fa-solid fa-ellipsis-v"></i>
			</button>
			<div class="related-links collapse d-md-flex order-2 width-xs-sm-100 m-1 mt-md-0 mb-md-0 float-right"
				id="related-links">
				<a class="btn btn-primary responsive-button show-as-dialog-link"
					href="{{ $U('/ideasboard/new?embedded') }}">
					{{ $__t('Add') }}
				</a>
			</div>
		</div>
		
	</div>
</div>



<div class="row">
	<div class="col">
		<table id="tasks-table"
			class="table table-sm table-striped nowrap w-100">
			<thead>
				<tr>
					<th class="border-right"><a class="text-muted change-table-columns-visibility-button"
							data-toggle="tooltip"
							data-toggle="tooltip"
							title="{{ $__t('Table options') }}"
							data-table-selector="#tasks-table"
							href="#"><i class="fa-solid fa-eye"></i></a>
					</th>
					<th>{{ $__t('Name') }}</th>
					<th>{{ $__t('Description') }}</th>
					<th>{{ $__t('URL') }}</th>

					@include('components.userfields_thead', array(
					'userfields' => $userfields
					))

				</tr>
			</thead>
			<tbody>

				@foreach($ideasboards as $ideasboard)
				
				<tr id="ideasboard-{{ $ideasboard->id }}-row"
					class="table-info">
					
					<td class="fit-content border-right">
					
						<a class="btn btn-success btn-sm select-ideasboard-button"
							href="/ideasboard/{{ $ideasboard->id }}"
							data-toggle="tooltip"
							data-placement="left"
							title="{{ $__t('Display this pinboard') }}"
							data-task-id="{{ $ideasboard->id }}"
							data-task-name="{{ $ideasboard->name }}">
							<i class="fa-solid fa-check"></i>
						</a>
						<a class="btn btn-sm btn-danger delete-ideasboard-button"
							href="/ideasboard/delete/{{ $ideasboard->id }}"
							data-task-id="{{ $ideasboard->id }}"
							data-task-name="{{ $ideasboard->name }}"
							data-toggle="tooltip"
							title="{{ $__t('Delete this pinboard') }}">
							<i class="fa-solid fa-trash"></i>
						</a>
					</td>
					<td id="task-{{ $ideasboard->id }}-name">
						{{ $ideasboard->name }}
					</td>
					<td>
						<span>{{ $ideasboard->description }}</span>
						
					</td>
					
					<td>
						{{ $ideasboard->uri }}
						
					</td>
					
					



				</tr>
				@endforeach
			</tbody>
		</table>
	</div>
</div>
<hr>
<div class="row">
	<div class="col">
		<h2 class="title">{{ $selectedboard->name }} </h2>
	</div>
</div>
<div>
<!-- blade - get window height and width -->
<!-- href="https://www.pinterest.com/anapinskywalker/style/" -->
<a data-pin-do="embedBoard" 
	data-pin-board-width= "1200"
	data-pin-scale-height="600" 
	data-pin-scale-width="80" 
	href="{{ $selectedboard->uri }}">
</a>
</div>
<script type="text/javascript">
  (function (d) {
    var f = d.getElementsByTagName('SCRIPT')[0],
      p = d.createElement('SCRIPT');
    p.type = 'text/javascript';
    p.async = true;
    p.src = '//assets.pinterest.com/js/pinit.js';
    f.parentNode.insertBefore(p, f);
  })(document);
</script>
@stop

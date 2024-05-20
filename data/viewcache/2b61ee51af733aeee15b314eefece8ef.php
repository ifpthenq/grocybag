<?php require_frontend_packages(['datatables', 'animatecss']); ?>



<?php $__env->startSection('title', $__t('IdeasBoard')); ?>

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col">
		<div class="title-related-links">
			<h2 class="title"><?php echo $__env->yieldContent('title'); ?></h2>
			<button class="btn btn-outline-dark d-md-none mt-2 float-right order-1 order-md-3"
				type="button"
				data-toggle="collapse"
				data-target="#related-links">
				<i class="fa-solid fa-ellipsis-v"></i>
			</button>
			<div class="related-links collapse d-md-flex order-2 width-xs-sm-100 m-1 mt-md-0 mb-md-0 float-right"
				id="related-links">
				<a class="btn btn-primary responsive-button show-as-dialog-link"
					href="<?php echo e($U('/ideasboard/new?embedded')); ?>">
					<?php echo e($__t('Add')); ?>

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
							title="<?php echo e($__t('Table options')); ?>"
							data-table-selector="#tasks-table"
							href="#"><i class="fa-solid fa-eye"></i></a>
					</th>
					<th><?php echo e($__t('Name')); ?></th>
					<th><?php echo e($__t('Description')); ?></th>
					<th><?php echo e($__t('URL')); ?></th>

					<?php echo $__env->make('components.userfields_thead', array(
					'userfields' => $userfields
					), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

				</tr>
			</thead>
			<tbody>

				<?php $__currentLoopData = $ideasboards; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ideasboard): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				
				<tr id="ideasboard-<?php echo e($ideasboard->id); ?>-row"
					class="table-info">
					
					<td class="fit-content border-right">
					
						<a class="btn btn-success btn-sm select-ideasboard-button"
							href="/ideasboard/<?php echo e($ideasboard->id); ?>"
							data-toggle="tooltip"
							data-placement="left"
							title="<?php echo e($__t('Display this pinboard')); ?>"
							data-task-id="<?php echo e($ideasboard->id); ?>"
							data-task-name="<?php echo e($ideasboard->name); ?>">
							<i class="fa-solid fa-check"></i>
						</a>
						<a class="btn btn-sm btn-danger delete-ideasboard-button"
							href="/ideasboard/delete/<?php echo e($ideasboard->id); ?>"
							data-task-id="<?php echo e($ideasboard->id); ?>"
							data-task-name="<?php echo e($ideasboard->name); ?>"
							data-toggle="tooltip"
							title="<?php echo e($__t('Delete this pinboard')); ?>">
							<i class="fa-solid fa-trash"></i>
						</a>
					</td>
					<td id="task-<?php echo e($ideasboard->id); ?>-name">
						<?php echo e($ideasboard->name); ?>

					</td>
					<td>
						<span><?php echo e($ideasboard->description); ?></span>
						
					</td>
					
					<td>
						<?php echo e($ideasboard->uri); ?>

						
					</td>
					
					



				</tr>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			</tbody>
		</table>
	</div>
</div>
<hr>
<div class="row">
	<div class="col">
		<h2 class="title"><?php echo e($selectedboard->name); ?> </h2>
	</div>
</div>
<div>
<!-- blade - get window height and width -->
<!-- href="https://www.pinterest.com/anapinskywalker/style/" -->
<a data-pin-do="embedBoard" 
	data-pin-board-width= "1200"
	data-pin-scale-height="600" 
	data-pin-scale-width="80" 
	href="<?php echo e($selectedboard->uri); ?>">
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /app/grocy/views/ideasboard.blade.php ENDPATH**/ ?>
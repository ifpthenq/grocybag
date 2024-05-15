

<?php $__env->startSection('title', $__t('Server error')); ?>

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col">
		<h1 class="alert alert-danger"><?php echo e($__t('A server error occured while processing your request')); ?></h1>
		<div class="alert alert-info">
			<?php echo e($__t('If you think this is a bug, please report it')); ?><br>
			&rarr; <a target="_blank"
				href="https://github.com/grocy/grocy/issues">https://github.com/grocy/grocy/issues</a>
		</div>
	</div>
</div>
<?php echo \Illuminate\View\Factory::parentPlaceholder('content'); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('errors.base', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /app/grocy/views/errors/500.blade.php ENDPATH**/ ?>
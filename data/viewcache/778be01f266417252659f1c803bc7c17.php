<?php if($mode == 'edit'): ?>
<?php $__env->startSection('title', $__t('Edit Pinboard')); ?>
<?php else: ?>
<?php $__env->startSection('title', $__t('Create Pinboard')); ?>
<?php endif; ?>

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col">
		<h2 class="title"><?php echo $__env->yieldContent('title'); ?></h2>
	</div>
</div>

<hr class="my-2">

<div class="row">
	<div class="col-lg-6 col-12">
		<script>
			Grocy.EditMode = '<?php echo e($mode); ?>';
		</script>

		<?php if($mode == 'edit'): ?>
		<script>
			Grocy.EditObjectId = <?php echo e($task->id); ?>;
		</script>
		<?php endif; ?>

		<form id="ideasboard-form"
			novalidate>
            <div class="form-group">
				<label for="uri"><?php echo e($__t('URL')); ?></label>
				<input type="text"
					class="form-control"
					required
					id="uri"
					name="uri"
					value="<?php if($mode == 'edit'): ?><?php echo e($ieasboard->name); ?><?php endif; ?>">
				<div class="invalid-feedback"><?php echo e($__t('A URL is required')); ?></div>
			</div>
			<div class="form-group">
				<label for="name"><?php echo e($__t('Name')); ?></label>
				<input type="text"
					class="form-control"
					required
					id="name"
					name="name"
					value="<?php if($mode == 'edit'): ?><?php echo e($ideasboard->name); ?><?php endif; ?>">
				<div class="invalid-feedback"><?php echo e($__t('A name is required')); ?></div>
			</div>

			<div class="form-group">
				<label for="description"><?php echo e($__t('Description')); ?></label>
				<textarea class="form-control"
					rows="4"
					id="description"
					name="description"><?php if($mode == 'edit'): ?><?php echo e($ideasboard->description); ?><?php endif; ?></textarea>
			</div>

			

			

			<?php echo $__env->make('components.userfieldsform', array(
			'userfields' => $userfields,
			'entity' => 'tasks'
			), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

			
			<button class="btn btn-success save-ideasboardform-button"><?php echo e($__t('Save & close')); ?></button>
			
		</form>
	</div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /app/grocy/views/ideasboardform.blade.php ENDPATH**/ ?>
<?php require_frontend_packages(['bootstrap-combobox']); ?>

<?php if (! $__env->hasRenderedOnce('760001a1-f1f0-4e2f-8d93-635e862fbe08')): $__env->markAsRenderedOnce('760001a1-f1f0-4e2f-8d93-635e862fbe08'); ?>
<?php $__env->startPush('componentScripts'); ?>
<script src="<?php echo e($U('/viewjs/components/userpicker.js', true)); ?>?v=<?php echo e($version); ?>"></script>
<?php $__env->stopPush(); ?>
<?php endif; ?>

<?php if(empty($prefillByUsername)) { $prefillByUsername = ''; } ?>
<?php if(empty($prefillByUserId)) { $prefillByUserId = ''; } ?>
<?php if(!isset($nextInputSelector)) { $nextInputSelector = ''; } ?>

<div class="form-group"
	data-next-input-selector="<?php echo e($nextInputSelector); ?>"
	data-prefill-by-username="<?php echo e($prefillByUsername); ?>"
	data-prefill-by-user-id="<?php echo e($prefillByUserId); ?>">
	<label for="user_id"><?php echo e($__t($label)); ?></label>
	<select class="form-control user-combobox"
		id="user_id"
		name="user_id">
		<option value=""></option>
		<?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
		<option data-additional-searchdata="<?php echo e($user->username); ?>"
			value="<?php echo e($user->id); ?>"><?php echo e(GetUserDisplayName($user)); ?></option>
		<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
	</select>
</div>
<?php /**PATH /app/grocy/views/components/userpicker.blade.php ENDPATH**/ ?>
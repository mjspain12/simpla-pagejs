function updateFeatureSid(ctx, next) {
	var selectedFeature = ctx.params.feature || 0,
	    selectedFeatureBlock = document.querySelector('.feature');

	// Update featured block sid
	selectedFeatureBlock.setAttribute('sid', selectedFeature);
}

page('/:feature?', updateFeatureSid);

page();
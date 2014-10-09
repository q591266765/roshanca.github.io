define(['utils', 'text!templates/cert_popup.mustache', 'mustache'], function (Utils, certPopupTemplate, mustache) {

	function render(params) {
		Utils.bindEvents(params.bindings);
	}

	function renderPopup(params) {
		var template = mustache.render(certPopupTemplate, {model: params.model});
		$$('.popup').html(template);
		Utils.bindEvents(params.bindings);
	}

	function show(sectionId) {
		$$('.section').hide();
		$$('#' + sectionId).show();
		khApp.closeModal();
	}

	function showDownloading() {
		show('download');
		$$('.step').hide();
	}

	function showAuditBefore() {
		show('auditBefore');
		$$('.step').show();
	}

	function showAuditAfter() {
		show('auditAfter');
		$$('.step').show();
	}

	return {
		render: render,
		renderPopup: renderPopup,
		showDownloading: showDownloading,
		showAuditBefore: showAuditBefore,
		showAuditAfter: showAuditAfter
	};
});

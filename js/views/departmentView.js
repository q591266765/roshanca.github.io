define(['utils', 'text!templates/department.mustache', 'mustache'], function (Utils, departmentTemplate, mustache) {

	function render(params) {
		Utils.bindEvents(params.bindings);
		Utils.setButtonPosition('.department-next-button');
	}

	function renderSelect(params) {
		var template = mustache.render(departmentTemplate, {model: params.model});
		$$('#departmentContent').append(template);
		Utils.bindEvents(params.bindings);
		resetSelect();
	}

	function renderName(text) {
		$$('.department-name').find('h2').text(text);
	}

	function renderBadge() {
		$$('.department-badge').html('您选择的是');
	}

	function resetSelect() {
		$$('.smart-select select').each(function () {
			this.selectedIndex = -1;
		});
	}

	return {
		render: render,
		renderName: renderName,
		renderBadge: renderBadge,
		renderSelect: renderSelect
	};
});

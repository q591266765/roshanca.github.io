define(['views/provView', 'models/depsModel'], function (View, Model) {

	var bindings = [{
		element: '#provList .item-link',
		event: 'click',
		handler: selectProv
	}];

	function init() {
		var saved = Model.saved();
		var provData;

		if (saved) {
			khApp.alert('数据已获取！');
			provData = Model.fetchProv();
			View.render({
				model: provData,
				bindings: bindings
			});
		} else {
			khApp.showIndicator();
			$$.ajax({
				url: 'api/department_alls.json',
				type: 'GET',
				success: function (data) {
					data = JSON.parse(data);
					if (data.errorNo === 0) {
						Model.save(data.model);
						khApp.hideIndicator();

						provData = Model.fetchProv();
						View.render({
							model: provData,
							bindings: bindings
						});
					}
				}
			});
		}
	}

	function selectProv() {
		var prov = $$(this).find('.item-title').html();
		mainView.loadPage('select/city.html?prov=' + prov);
	}

	return {
		init: init
	};
});

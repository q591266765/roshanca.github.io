define(['utils'], function (Utils) {

	function init(params) {
		Utils.bindEvents(params.bindings);
	}

	function resetBtn() {
		$$('.login-getcode').html('重新获取验证码');
		$$('.login-getcode').removeClass('disabled');
	}

	function reRenderBtn(leftTime) {
		$$('.login-getcode').html(leftTime + '秒后重新获取');
	}

	function inputBlur() {
		$$('.mobile').blur();
		$$('.password').blur();
	}

	function changeType(title, explain){
		$$('.sliding').html(title);
		$$('.desc').html(explain);
	}

	return {
		init: init,
		resetBtn: resetBtn,
		reRenderBtn: reRenderBtn,
		inputBlur: inputBlur,
		changeType: changeType
	};
});

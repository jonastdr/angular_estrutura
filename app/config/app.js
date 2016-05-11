Number.prototype.toHHMMSS = function (naoMostrarZero) {
	var value = this;

	var sec_num = parseInt(value, 10);
	var hours = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	if(naoMostrarZero === true) {
		return (hours !== "00" ? hours + ':' : '') + (minutes !== "00" ? minutes + ':' : '') + seconds;
	}

	return hours + ':' + minutes + ':' + seconds;
};

String.prototype.ucwords = function () {
	return (this + '')
		.replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
			return $1.toUpperCase();
		});
};

String.prototype.toHHMMSS = function (naoMostrarZero) {
	var value = parseInt(this);

	return value.toHHMMSS(naoMostrarZero);
}

String.prototype.toLimit = function (count) {
	if(this.length > count)
		return this.substring(0, count) + "...";

	return this.toString();
};

String.prototype.timestamp = function () {
	return new Date(this).getTime();
};

String.prototype.toDate = function () {
	return new Date(this);
};

Date.prototype.toDateDB = function () {
	var data = this;

	return data.getFullYear() + "-" + ("0" + (data.getMonth() + 1)).slice(-2) + "-" + ("0" + data.getDate()).slice(-2);
};

Date.prototype.toTime = function () {
	var hora = this;

	var resolveDate = function (data) {
		return ("0" + data).slice(-2);
	}

	return resolveDate(hora.getHours()) + ":" + resolveDate(hora.getMinutes()) + ":" + resolveDate(hora.getSeconds());
};

app.config(function ($controllerProvider, $provide, $mdThemingProvider, cfpLoadingBarProvider, $mdDateLocaleProvider) {
	$mdThemingProvider.theme('Azul')
		.primaryPalette('indigo');

	cfpLoadingBarProvider.includeSpinner = false;

	$mdDateLocaleProvider.months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'novembro', 'dezembro'];
	$mdDateLocaleProvider.shortMonths = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'nov', 'dez'];
	$mdDateLocaleProvider.days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
	$mdDateLocaleProvider.shortDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
});
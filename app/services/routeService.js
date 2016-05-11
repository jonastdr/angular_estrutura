app.provider("routeResolve", function () {
	this.$get = function () {
		return this;
	};

	this.route = function () {
		return {
			resolve: function (controller, view) {
				var obj = {
					controller: controller,
					resolve: {
						//controla se a rota será aberta ou não
						load: function ($q) {
							var defer = $q.defer();

							//Executa
							defer.resolve();
							
							return defer.promise;
						}
					}
				};

				if(view == undefined)
					obj.template = '';
				else
					obj.templateUrl = 'template/' + view + '.html';

				return obj;
			}
		};
	}();
});
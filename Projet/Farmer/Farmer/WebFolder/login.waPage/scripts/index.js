
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	login.click = function login_click (event)// @startlock
	{// @endlock
		var newJoueur = ds.Joueur.newEntity();
		var email = document.getElementById("EMAIL").value;
		var motDePasse = document.getElementById("MOT_DE_PASSE").value;
		var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
		
		if(reg.test(email)){
		newJoueur.email.setValue(email);
		newJoueur.motDePasse.setValue(motDePasse);
		ds.Joueur.find('email = "' + newJoueur.email.getValue() + '" and motDePasse = "' + newJoueur.motDePasse.getValue() + '"', {
			onSuccess:function(event) {
				window.location.href="jeu.waPage/index.html"
			},
			onError:function(event) {alert("mot de passe ou email incorrect");}});
		}
		else{
			alert("Veuillez entrer une adresse valide");
			}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login", "click", login.click, "WAF");
// @endregion
};// @endlock


WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var inscription = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	inscription.click = function inscription_click (event)// @startlock
	{// @endlock
		var newJoueur = ds.Joueur.newEntity();
		var email = document.getElementById("EMAIL").value;
		var motDePasse = document.getElementById("MOT_DE_PASSE").value;
		var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
		
		if(reg.test(email)){
		newJoueur.email.setValue(email);
		newJoueur.motDePasse.setValue(motDePasse);
		ds.Joueur.find('email = "' + newJoueur.email.getValue() + '"', {
			onSuccess:function(event) {
				if(event.entity == null){
					newJoueur.save({
			onSuccess:function(event) {alert("saved");}
			});
		}
		else{
			alert("Cette adresse mail est déjà utilisée");
			}
				}
			});
		}
		else{
			alert("Veuillez entrer une adresse valide");
			}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("inscription", "click", inscription.click, "WAF");
// @endregion
};// @endlock

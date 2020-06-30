let distroresults

analyze(let catecoriesresult){
	for var i in catecories{
		console.log("analizing " + i + " ...");
		for j in distros {
			console.log("calculating " + j + " ...");
			distroresults[j] += distros[j][i] * catecorieresults[i]
			
		}
	}
}

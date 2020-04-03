function displayResults(data) {

		let first = data.first_name;
		let last = data.last_name;
		let height_Feet = data.height_feet;
		let height_inch = data.height_inches;
		let Team = data.full_name;

		$("#resultFirst").html(first);
		$("#resultLast").html(last);
		$("#resultHeight_Feet").html(height_Feet);
		$("resultHeight_Inches").html(height_inch);
		$("resultTeam").html(team);

		
		

}

function submit() {
	$("#output").show();
	/* given Avengers, we want the URL to be: */
	/* https://www.omdbapi.com/?apikey=<YOUR_KEY_HERE>&t=Avengers&y=2012 */
	let first = $("#movieTitle").val();
	let url = "https://www.balldontlie.io/api/v1/players/"
	url = url + first;
	$.get(url, function(data){
	document.getElementById("raw").innerHTML = JSON.stringify(data);
	 displayResults(data);
	});
	}

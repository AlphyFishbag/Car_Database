function displayResults(data) {



	

		let first = data.name;
		let team = data.team_name;
		let games = data.games_played;
		let Average_minutes = data.minutes_per_game; 
		let FT = data.free_throw_percentage + "%";
		let FG = data.field_goal_percentage + "%";
		let TP = data.three_point_percentage + "%";

		$("#resultAVG").html(Average_minutes);
		$("#resultGames").html(games);
		$("#resultFirst").html(first);
		$("#resultFT").html(FT);
		$("#resultFG").html(FG);
		$("#resultTP").html(TP);
		$("#resultTeam").html(team);
		

		
		
		
		
		
		
		

}

function submit() {
	$("#output").show();
	let name = $("#First").val();
	let name2 = $("#Last").val();
	let url = "https://nba-players.herokuapp.com/players-stats/";
	url = url + name2 +"/" + name;
	$.get(url, function(data){
	//document.getElementById("raw").innerHTML = JSON.stringify(data);
	 displayResults(data);
	 
	});
	

	}
	function pictures()	{
			
			
		$("#output").show();
		
		
		let name = $("#First").val();
		let name2 = $("#Last").val();
		
		let url2  = "https://nba-players.herokuapp.com/players/";
		
		url2 = url2 + name2 + "/" + name;

		var IMG = document.getElementById("IMG");

		var url = url2;

		var myIMG = document.createElement('img');

		myIMG.setAttribute('src', url);

		IMG.appendChild(myIMG);

		

		
		
			}


	function reload_button(){


		location.reload();

		return false;



	}




	var textWrapper = document.querySelector('.ml2');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	
	anime.timeline({loop: true})
	  .add({
		targets: '.ml2 .letter',
		scale: [4,1],
		opacity: [0,1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 950,
		delay: (el, i) => 70*i
	  }).add({
		targets: '.ml2',
		opacity: 0,
		duration: 20000,
		easing: "easeOutExpo",
		delay: 20000
	  });





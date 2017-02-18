var SolarSystem = (function(oldSolarSystem){

	var spaceships=[];

	oldSolarSytem.getSpaceships: function(){
	  	return spaceships;
	};
	oldSolarSytem.setSpaceships: function(newSpaceship){
	  	spaceships.push(newSpaceship);
	};
	 oldSolarSytem.wreckSpaceships: function(){
	  	spaceships.pop();
	};

	return oldSolarSystem;
})(SolarSystem || {});
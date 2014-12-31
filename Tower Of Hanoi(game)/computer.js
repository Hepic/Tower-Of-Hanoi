var move = [];
var numDoughnutsInTower = [NUM_DOUGHNUT, 0, 0];
var cnt = 0;

function computerDet(doughnut, below, end)
{
	this.doughnut = doughnut;
	this.below = below;
	this.end = end;
}

function instructions(N, start, aux, end)
{
	if(N>=0)
	{
		instructions(N-1, start, end, aux);
		move[cnt++] = new computerDet(doughnut[N], numDoughnutsInTower[end-1], end);
		--numDoughnutsInTower[start-1];
		++numDoughnutsInTower[end-1];
		instructions(N-1, aux, start, end);
	}
}


$("input").click(function(){
	
	instructions(NUM_DOUGHNUT-1,1,2,3);
	
	for(var i = 0; i < NUM_DOUGHNUT; ++i){
		doughnut[i].tower = 1;
		doughnut[i].below = NUM_DOUGHNUT - i - 1;
	}
	
	var i = 0; 
	(function solution()
	{
		setTimeout(function(){
			if(i<cnt)
			{
				move[i].doughnut.below = move[i].below;
				move[i].doughnut.tower = move[i].end;
				++i;
				
				solution();
			}
		},200);
	})();

});
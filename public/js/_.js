// DEBUG
var trace = function(msg){ console.log(msg); };

// BONUS
class Power
{
	constructor()
	{
		this.found = false;
	}

	build(params)
	{
		this.val0 = params.val0;
		this.val1 = params.val1;
		this.val2 = params.val2;
	}

	bang(val)
	{
		this.found = true;
	
		trace("this.found == " + this.found + " " + val);
	}
}

var go = "big";

var data = {"f": "fixAdvanced", "p": "enemy0"};

var enemyList = {"enemy0": {"charType": "monkey"}, "enemy1": {"charType": "cat"}};

var system;

// FOR JSON TESTS
var scriptN = 2015;
var scriptA = [16, 17, 22, 26, 27, 31, 32, 35];

var activated = false;

// BONUS
var extraList;

function pageLoad_init()
{
	trace("pageLoad_init();");
	
	system = {};
	
	data_init();
}

function data_init()
{
	load_data_json('public/data/data.json', data_loaded);
}

function data_loaded(data)
{
	system.data = JSON.parse(data);
	
	trace(system);
	
	// startTest();

	// BONUS
	bonus_create();
}

function startTest()
{	
	// BASIC
	window["fix"]();
	
	// WITH PARAMETER
	window["fixExtended"](go);
	
	// ADVANCED
	window[data.f](data.p);
	
	jsonTests();

	arrowFunction();

	mapFunction();

	stringTest();

	stringTestSafe();
}

function fix()
{
	alert("catch");
}

function fixExtended(p)
{
	alert(p);
}

function fixAdvanced(obj)
{
	alert(enemyList[obj].charType);
}

function jsonTests()
{
	trace(system.data.arrayList);
	
	for(let i in system.data.arrayList)
	{
		trace(system.data.arrayList[i].x);
	}
	
	window[system.data.set0.f](system.data.set0.p);
	
	window[system.data.set1.f](system.data.set1.p);
	
	window[system.data.set2.f](system.data.set2.p);
}

function dataTest0(json_param)
{
	trace(json_param);
}

function dataTest1(json_param)
{
	trace(json_param);
	trace(json_param.level0);
	trace(json_param.level1);
	trace(json_param.level2);
}

function dataTest2(json_param)
{
	trace(json_param);
	
	trace(json_param.basic);
	
	for(let i in json_param.advanced)
	{
		trace(window[json_param.advanced[i]]);
	}
}

function arrowFunction()
{
	// ARROW FUNCTION (MINI FUNCTIONS)
	let sum = (x, y) => {return x + y};

	// CALL IN THE SAME WAY AS NORMAL FUNCTIONS
	trace(sum(3, 3));
}


function mapFunction()
{
	// EDITS ARRAY TO TAKE EACH ITEM WITH ARROW FUNCTION AND MULTIPLIES IT BY 2
	let edited = scriptA.map(x => x * 2);
	
	trace(edited);
}



function stringTest()
{
	let num = 0;
	let direction = "R";
	let logic_data = system.data.logic.check;
	trace("activated === " + activated);
	eval(logic_data);
	trace("activated === " + activated);
}

function outcomeL(num)
{
	trace("LEFT TRIGGER " + num);
}

function outcomeR(num)
{
	trace("RIGHT TRIGGER " + num);
}

function stringTestSafe()
{
	trace('stringTestSafe()');
	let num = 1;
	let direction = "L";
	let logic_data = system.data.logic.check;
	trace("activated === " + activated);
	var l = new Function(logic_data);
	l();
	trace("activated === " + activated);	
}

// BONUS

function bonus_create()
{
	trace("bonus_create();");

	extraList = {};

	for(var i in system.data.extra)
	{
		bonus_create_build(system.data.extra[i]);
	}

	// trace(extraList);

	for(var j in system.data.extra_custom)
	{
		trace(extraList[system.data.extra_custom[j].instTarget]);

		// FIRE A CLASS FUNCTION FROM JSON DATA

		extraList[system.data.extra_custom[j].instTarget][system.data.extra_custom[j].funct](system.data.extra_custom[j].param);
	}
}

function bonus_create_build(params)
{
	extraList[params.inst] = new Power();
	extraList[params.inst].build(params);
}
// DEBUG
var trace = function(msg){ console.log(msg); };

var go = "big";

var data = {"f": "fixAdvanced", "p": "enemy0"};

var enemyList = {"enemy0": {"charType": "monkey"}, "enemy1": {"charType": "cat"}};

var system;

// FOR JSON TESTS
var scriptN = 2015;
var scriptA = [16, 17, 22, 26, 27, 31, 32, 35];


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
	
	startTest();
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
	
	for(var i in system.data.arrayList)
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
	
	for(var i in json_param.advanced)
	{
		trace(window[json_param.advanced[i]]);
	}
}


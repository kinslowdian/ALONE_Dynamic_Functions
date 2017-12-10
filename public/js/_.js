// DEBUG
var trace = function(msg){ console.log(msg); };

var go = "big";

var data = {"f": "fixAdvanced", "p": "enemy0"};

var enemyList = {"enemy0": {"charType": "monkey"}, "enemy1": {"charType": "cat"}};

function pageLoad_init()
{
	trace("pageLoad_init();");
	
	startTest();
}

function startTest()
{
	// trace(window);
	// trace(window["startTest"]);
	
	// BASIC
	window["fix"]();
	
	// WITH PARAMETER
	window["fixExtended"](go);
	
	// ADVANCED
	window[data.f](data.p);
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
	// trace(obj);
	
	alert(enemyList[obj].charType);

	// alert("fire");
}


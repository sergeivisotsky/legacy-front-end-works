//	HYPE.documents["selector"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "selector.hyperesources";
	var documentName = "selector";
	var documentLoaderFilename = "selector_hype_generated_script.js";
	var mainContainerID = "selector_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"3":{n:"circle.png",p:1},"1":{n:"selector.png",p:1},"2":{n:"cursor.png",p:1},"0":{n:"muravii.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"13":{o:"content-box",h:"3",x:"visible",a:397,q:"100% 100%",b:90,j:"absolute",r:"inline",c:15,k:"div",z:"9",d:15,e:"0.000000"},"6":{o:"content-box",h:"2",x:"visible",a:16,q:"100% 100%",b:128,j:"absolute",r:"inline",c:42,k:"div",z:"10",d:79},"4":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:661,k:"div",z:"2",d:223},"12":{o:"content-box",h:"3",x:"visible",a:397,q:"100% 100%",b:90,j:"absolute",r:"inline",c:15,k:"div",z:"8",d:15,e:"0.000000"},"11":{o:"content-box",h:"3",x:"visible",a:397,q:"100% 100%",b:90,j:"absolute",r:"inline",c:15,k:"div",z:"7",d:15,e:"0.000000"},"5":{o:"content-box",bI:"1.000000",h:"1",a:0,x:"visible",q:"100% 100%",b:0,j:"absolute",r:"inline",c:661,k:"div",z:"3",d:223,bJ:"0.000000",bL:"0.000000",bH:"0deg"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:10.28,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.16,i:"a",e:181,s:16,o:"6"},{f:"2",t:0,d:1.16,i:"b",e:16,s:128,o:"6"},{f:"2",t:1.16,d:1.1,i:"a",e:597,s:181,o:"6"},{f:"2",t:1.16,d:1.1,i:"b",e:122,s:16,o:"6"},{f:"2",t:2.26,d:1.08,i:"a",e:404,s:597,o:"6"},{f:"2",t:2.26,d:1.08,i:"b",e:97,s:122,o:"6"},{f:"2",t:4.04,d:2.24,i:"a",e:404,s:404,o:"6"},{f:"2",t:4.04,d:2.24,i:"b",e:97,s:97,o:"6"},{f:"2",t:4.06,d:0.24,i:"c",e:133,s:15,o:"11"},{f:"2",t:4.06,d:0.24,i:"d",e:133,s:15,o:"11"},{f:"2",t:4.06,d:0.24,i:"b",e:31,s:90,o:"11"},{f:"2",t:4.06,d:0.06,i:"e",e:"1.000000",s:"0.000000",o:"11"},{f:"2",t:4.06,d:0.24,i:"a",e:338,s:397,o:"11"},{f:"2",t:4.1,d:0.24,i:"c",e:133,s:15,o:"12"},{f:"2",t:4.1,d:0.24,i:"b",e:31,s:90,o:"12"},{f:"2",t:4.1,d:0.24,i:"a",e:338,s:397,o:"12"},{f:"2",t:4.1,d:0.24,i:"d",e:133,s:15,o:"12"},{f:"2",t:4.1,d:0.06,i:"e",e:"1.000000",s:"0.000000",o:"12"},{f:"2",t:4.12,d:0.09,i:"e",e:"1.000000",s:"1.000000",o:"11"},{f:"2",t:4.15,d:0.06,i:"e",e:"1.000000",s:"0.000000",o:"13"},{f:"2",t:4.15,d:0.24,i:"d",e:133,s:15,o:"13"},{f:"2",t:4.15,d:0.24,i:"a",e:338,s:397,o:"13"},{f:"2",t:4.15,d:0.24,i:"b",e:31,s:90,o:"13"},{f:"2",t:4.15,d:0.24,i:"c",e:133,s:15,o:"13"},{f:"2",t:4.16,d:0.09,i:"e",e:"1.000000",s:"1.000000",o:"12"},{f:"2",t:4.21,d:0.09,i:"e",e:"1.000000",s:"1.000000",o:"13"},{f:"2",t:4.21,d:0.09,i:"e",e:"0.000000",s:"1.000000",o:"11"},{f:"2",t:4.25,d:0.09,i:"e",e:"0.000000",s:"1.000000",o:"12"},{f:"2",t:5,d:0.09,i:"e",e:"0.000000",s:"1.000000",o:"13"},{f:"2",t:6.28,d:0.21,i:"b",e:8,s:97,o:"6"},{f:"2",t:6.28,d:0.21,i:"a",e:610,s:404,o:"6"},{f:"2",t:7.19,d:1.23,i:"b",e:128,s:8,o:"6"},{f:"2",t:7.19,d:1.23,i:"a",e:16,s:610,o:"6"},{f:"2",t:10.28,p:2,d:0,i:"Actions",s:[{type:3,timelineIdentifier:"kTimelineDefaultIdentifier"}],o:"kTimelineDefaultIdentifier"}],f:30}},o:"1"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());


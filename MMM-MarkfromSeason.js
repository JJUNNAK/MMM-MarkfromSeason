Module.register("MMM-MarkfromSeason", {
    requiresVersion: "2.12.0",
    default: {
        maker : "JJUNNAK",
    },

    getScripts: function () {
		return ["moment.js"];
	},


    start: function() {
        Log.info("Starting module: " + this.name);
        this.season;
        var self = this
        //this.loaded = false;
    },

    // var month = moment().format('MM');

   
    
   


	getDom: function() {
		var wrapper = document.createElement("div");

        var Spring_src = "https://postfiles.pstatic.net/MjAyMjExMTVfMjA2/MDAxNjY4NDQ1NTQ3NTk3.Aqr22-MlQhraZecEwXlI4fN7iJwm7Nn7uRYjeKFXkDog.u17uW2pQAy1smpvBkc7Cj7f-6fTsaEktvbOY5ONsWhIg.PNG.stonechoiqwe/%EB%AA%85%EC%A7%80%EB%A7%88%ED%81%AC(%EB%B4%84).png?type=w773";
        var Summer_src = "https://postfiles.pstatic.net/MjAyMjExMTVfMTAg/MDAxNjY4NDQ1NTQ3NjI5.8sE-zTtoh6dhKTBcyX-KzRZtrc1QchGNKy4dZYgFtQwg.uo2BnURcZqXrhBp2yYkfqDo22rs73V45mzb1H1Z3l-cg.PNG.stonechoiqwe/%EB%AA%85%EC%A7%80%EB%A7%88%ED%81%AC(%EC%97%AC%EB%A6%84).png?type=w773";
        var Fall_src = "https://postfiles.pstatic.net/MjAyMjExMTVfMTA4/MDAxNjY4NDQ1NTQ3NTc3.KY4Erma_uhzwmGKdwqJPjd1sj7ujQtMsruidH1uwWBEg.xIz-cNvjcWD8lwozx_-DjX-FOlJ4pPF9-ezLZyujsb8g.PNG.stonechoiqwe/%EB%AA%85%EC%A7%80%EB%A7%88%ED%81%AC(%EA%B0%80%EC%9D%84).png?type=w773";
        var Winter_src = "https://postfiles.pstatic.net/MjAyMjExMTVfMjYw/MDAxNjY4NDQ1NTQ3NDcy.Z1Fxeoe15Hxhprm8Z3GKf6-TpVBhMaMSV3carMOB1DIg.XLbaTlppNMyfv9QgXhqxKewPaj147kDRPFUdFntZLUwg.PNG.stonechoiqwe/%EB%AA%85%EC%A7%80%EB%A7%88%ED%81%AC(%EA%B2%A8%EC%9A%B8).png?type=w773";
        var style = 'style="width:150px; height:150px;"';

        var month = moment().format('MM');
        const Spring = ['3','4','5'];
        const Summer = ['6','7','8'];
        const Fall = ['9','10','11'];

        if (Spring.includes(month)){
            wrapper.innerHTML = "<img src= " + Spring_src + " " +  style +" >";
        }
        else if(Summer.includes(month)){
            wrapper.innerHTML = "<img src= " + Summer_src + " " +  style +" >";
        }
        else if(Fall.includes(month)){
            wrapper.innerHTML = "<img src= " + Fall_src + " " +  style +" >";
        }
        else{
            wrapper.innerHTML = "<img src= " + Winter_src + " " +  style +" >";
        }
    
        
		return wrapper;
	},    
})

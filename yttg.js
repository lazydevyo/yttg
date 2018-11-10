     var oldurl = "";
      var urlonly = "";
      var urlf = "";
      var customvideoid ="XnOOExbte2c";
      var typeShuffleId = 0;
      var ThumbnailName = "maxresdefault";
	  var QualityNameLabel = ""; 
      if(window.location.href.indexOf("?VideoURL=") > -1){
      }else{
        window.history.pushState("", "", '?VideoURL=');
      }
    
    function LoadFromURL(){
        try{
          urlf = window.location.href;
        if(urlf.includes('.be')){
		

         var video_id= urlf.split('be/')[1];


         }else{

          var video_id = urlf.split('v=')[1];
          var ampersandPosition = video_id.indexOf("&");
          if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
            texta.value = window.location.href;
          }
         }
        }catch(err){
          loadimage();
        }
        if(video_id==null){
          video_id= customvideoid;
        }
        if(video_id.length<11){


      }else if(video_id.length>11|| video_id.length==11){

		video_id = video_id.substring(0,11);
urlonly = "https://img.youtube.com/vi/"+ video_id +"/"+ThumbnailName+".jpg";
        }
          
        
        var bgurl = "url(" +  urlonly + ")";
        document.getElementById('outputarea').style.backgroundImage = bgurl;
        texta.value="https://www.youtube.com/watch?v="+video_id;
        LoadToVideo(video_id);
      }
      function loadimage(){
        try{

   		 
         urlf = document.getElementById('texta').value+'';
		 if(urlf.includes('.be')){
		

         var video_id= urlf.split('be/')[1];


         }else{
    	 var video_id = urlf.split('v=')[1];
		 var ampersandPosition = video_id.indexOf('&');
 
          if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
          }


         }
     
      
        }catch(err){
          video_id = "Nope";
        }
        if(video_id.length<11){

        }else if(video_id.length>11 || video_id.length==11){

		video_id = video_id.substring(0,11);
  urlonly = "https://img.youtube.com/vi/"+ video_id +"/"+ThumbnailName+".jpg";
        }
        
        
        var bgurl = "url(" +  urlonly + ")";
        document.getElementById('outputarea').style.backgroundImage = bgurl;
        LoadToVideo(video_id);
      }
      function readurl(){
        window.history.pushState("", "", '?VideoURL=' + texta.value)
        var a = $("<a>")
        .attr("href", urlonly)
        .attr("download", "thumbnail")
        .appendTo("body");
        a[0].click();
        a.remove();
      }
      function Shuffle(){
        if(typeShuffleId<4){
          typeShuffleId+=1;
        }else{
          typeShuffleId=0;
        }
        if(typeShuffleId==0){
          ThumbnailName="maxresdefault";
		QualityNameLabel="Max";

        }else if(typeShuffleId==1){
          ThumbnailName="hqdefault";
	QualityNameLabel="HQ";
        }else if(typeShuffleId==2){
          ThumbnailName="mqdefault";
	QualityNameLabel="Medium";
        }else if(typeShuffleId==3){
          ThumbnailName="sddefault";
	QualityNameLabel="Standard";
        }else if(typeShuffleId==4){
          ThumbnailName="default";
	QualityNameLabel="Default";
        }
        loadimage();
      }


      function LoadToVideo(url){
        console.log("https://www.youtube.com/embed/"+ url);
        var videourl ="https://www.youtube.com/embed/" +url;
        document.getElementById('VideoBg').src = videourl;
      }




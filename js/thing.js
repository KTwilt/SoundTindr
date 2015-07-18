var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'http://192.168.39.88:8080/img/1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'http://192.168.39.88:8080/img/2.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'http://192.168.39.88:8080/img/3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'http://192.168.39.88:8080/img/4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'http://192.168.39.88:8080/img/5.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'http://192.168.39.88:8080/img/6.jpg';

$("#nextImage").click(function () {
	var img = $('#dynamic')[0];
	for(var i = 0; i < imgArray.length;i++)
    {console.log(img.src);
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById('dynamic').src = imgArray[0].src;
				
                break;
            }
            document.getElementById('dynamic').src = imgArray[i+1].src;
			
            break;
        }
    }
});


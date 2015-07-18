var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '../img/1.jpg';

imgArray[1] = new Image();
imgArray[1].src = '../img/2.jpg';

imgArray[2] = new Image();
imgArray[2].src = '../img/3.jpg';

imgArray[3] = new Image();
imgArray[3].src = '../img/4.jpg';

imgArray[4] = new Image();
imgArray[4].src = '../img/5.jpg';

imgArray[5] = new Image();
imgArray[5].src = '../img/6.jpg';

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


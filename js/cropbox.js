/**
 * Created by ezgoing on 14/9/2014.
 */
'use strict';
var cropbox = function(options){
    var el = document.querySelector(options.imageBox),	
    obj =
    {
        state : {},
        ratio : 1,
        options : options,
        imageBox : el,
        thumbBox : el.querySelector(options.thumbBox),
        spinner : el.querySelector(options.spinner),
        image : new Image(),
		
        getDataURL: function ()
        {
            var width = this.thumbBox.clientWidth,
                height = this.thumbBox.clientHeight,
                canvas = document.createElement("canvas"),
                dim = el.style.backgroundPosition.split(' '),
                size = el.style.backgroundSize.split(' '),
                dx = parseInt(dim[0]) - el.clientWidth/2 + width/2,
                dy = parseInt(dim[1]) - el.clientHeight/2 + height/2,
                dw = parseInt(size[0]),
                dh = parseInt(size[1]),
                sh = parseInt(this.image.height),
                sw = parseInt(this.image.width);

            canvas.width = width;
            canvas.height = height;			
            var context = canvas.getContext("2d");
            context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
            var imageData = canvas.toDataURL('image/png');
            return imageData;            			
        },
        getBlob: function()
        {
            var imageData = this.getDataURL();
            var b64 = imageData.replace('data:image/png;base64,','');
            var binary = atob(b64);
            var array = [];
            for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return  new Blob([new Uint8Array(array)], {type: 'image/png'});
        },
		     

		/* function applyRotate() {
		  canvas.width = image.height;
		  canvas.height = image.width;
		  context.clearRect(0, 0, canvas.width, canvas.height);
		  context.translate(image.height / 2, image.width / 2);
		  context.rotate(Math.PI / 2);
		  context.drawImage(image, -image.width / 2, -image.height / 2);
		  validateImage();
		} */


        /* applyRotate: function () {
		//alert(this.image);
		//var angle = 0;		
        //angle += 90;
        //$(options).rotate(angle);		
	    var w1 =  parseInt(obj.image.width)*obj.ratio;
        var h1 =  parseInt(obj.image.height)*obj.ratio;
		//alert(w1);
		//alert(h1);
		var canvas1 = document.createElement("canvas");
        canvas1.height = canvas1.width = 0;
        var context1 = canvas1.getContext('2d');
		//alert(context1);
		canvas1.width = w1;
        canvas1.height = h1;
		alert(canvas1.width);
		alert(canvas1.height);
		context1.clearRect(0, 0, canvas1.width, canvas1.height);
		context1.translate(w1/2, h1/2);
        context1.rotate(Math.PI/2);
		alert("1");
        context1.drawImage(this.image, -(w1/2), -(h1/2));
		alert("12");
		}, */
		
        zoomIn: function ()
        {			
            this.ratio*=1.1;
            setBackground();
			
        },
        zoomOut: function ()	
        {
            this.ratio*=0.9;
            setBackground();
        }
    },
    attachEvent = function(node, event, cb)
    {
        if (node.attachEvent)
            node.attachEvent('on'+event, cb);
        else if (node.addEventListener)
            node.addEventListener(event, cb);
    },
    detachEvent = function(node, event, cb)
    {
        if(node.detachEvent) {
            node.detachEvent('on'+event, cb);
        }
        else if(node.removeEventListener) {
            node.removeEventListener(event, render);
        }
    },
    stopEvent = function (e) {
        if(window.event) e.cancelBubble = true;
        else e.stopPropagation();
		
    },
    setBackground = function()
    {
        var w =  parseInt(obj.image.width)*obj.ratio;
        var h =  parseInt(obj.image.height)*obj.ratio;

        var pw = (el.clientWidth - w) / 2;
        var ph = (el.clientHeight - h) / 2;
        
        el.setAttribute('style',
                'background-image: url(' + obj.image.src + '); ' +
                'background-size: ' + w +'px ' + h + 'px; ' +
                'background-position: ' + pw + 'px ' + ph + 'px; ' +
                'background-repeat: no-repeat');
    },
    imgMouseDown = function(e)
    {
        stopEvent(e);

        obj.state.dragable = true;
        obj.state.mouseX = e.clientX;
        obj.state.mouseY = e.clientY;
    },
    imgMouseMove = function(e)
    {
        stopEvent(e);

        if (obj.state.dragable)
        {
            var x = e.clientX - obj.state.mouseX;
            var y = e.clientY - obj.state.mouseY;

            var bg = el.style.backgroundPosition.split(' ');

            var bgX = x + parseInt(bg[0]);
            var bgY = y + parseInt(bg[1]);

            el.style.backgroundPosition = bgX +'px ' + bgY + 'px';

            obj.state.mouseX = e.clientX;
            obj.state.mouseY = e.clientY;
        }
    },
    imgMouseUp = function(e)
    {
        stopEvent(e);
        obj.state.dragable = false;
    },
    zoomImage = function(e)
    {
        var evt=window.event || e;
        var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta;
        delta > -120 ? obj.ratio*=1.1 : obj.ratio*=0.9;
        setBackground();
    }

    obj.spinner.style.display = 'block';
    obj.image.onload = function() {
        obj.spinner.style.display = 'none';
        setBackground();

        attachEvent(el, 'mousedown', imgMouseDown);
        attachEvent(el, 'mousemove', imgMouseMove);
        attachEvent(document.body, 'mouseup', imgMouseUp);
        var mousewheel = (/Firefox/i.test(navigator.userAgent))? 'DOMMouseScroll' : 'mousewheel';
        attachEvent(el, mousewheel, zoomImage);
    };
    obj.image.src = options.imgSrc;
    attachEvent(el, 'DOMNodeRemoved', function(){detachEvent(document.body, 'DOMNodeRemoved', imgMouseUp)});

    return obj;	
};



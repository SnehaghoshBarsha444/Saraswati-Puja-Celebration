$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});
	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#maa_coming').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
  
	$('#maa_coming').click(function() {
		// Create an image element and set its attributes
		var img = $('<img>', {
			src: 'maa.png', // Path to the image
			width: '107%', // Set the width
			class: 'maa', // Add a class for styling
			align: 'center',
			
		});
	
		// Append the image to the body or a specific container
		$('body').append(img);
	
		// Fade in the image
		img.fadeIn('slow');
	
		// Fade out the button and show the next button
		$(this).fadeOut('slow').promise().done(function() {
			$('#ghat').fadeIn('slow');
		});
	});

    $('#ghat').click(function() {
        // Create a div element to hold the ghat image
        var ghatContainer = $('<div>', {
            class: 'ghat-container', // Add a class for styling
            style: 'display: flex; justify-content: center; align-items: center; margin-top: 20px;' // Flexbox for alignment
        });

        // Create an image element and set its attributes
        var img = $('<img>', {
            src: 'ghat.png', // Path to the image
            width: '30%', // Set the width
            class: 'ghat', // Add a class for styling
            align: 'center'
        });

        // Append the image to the container
        ghatContainer.append(img);

        // Append the container to the body or a specific container
        $('body').append(ghatContainer);

        // Fade in the image
        ghatContainer.fadeIn('slow');

        // Fade out the button and show the next button
        $(this).fadeOut('slow').promise().done(function() {
            $('#aradhana').fadeIn('slow');
        });
    });

	$('#aradhana').click(function() {
		// Create a div element to hold the diya images
		var diyaContainer = $('<div>', {
			class: 'diya-container', // Add a class for styling
			style: 'display: flex; justify-content: center; align-items: center;' // Flexbox for alignment
		});

		// Create the first image element for diya1
		var img1 = $('<img>', {
			src: 'diya1.png', // Path to the first image
			width: '30%', // Set the width
			class: 'diya', // Add a class for styling
			align: 'center'
		});

		// Create the second image element for diya2
		var img2 = $('<img>', {
			src: 'diya2.png', // Path to the second image
			width: '30%', // Set the width
			class: 'diya', // Add a class for styling
			align: 'center'
		});

		// Append both images to the container
		diyaContainer.append(img1).append(img2);

		// Append the container to the body or a specific container
		$('body').append(diyaContainer);

		// Fade in the images
		diyaContainer.fadeIn('slow');

		// Fade out the button and show the next button
		$(this).fadeOut('slow').promise().done(function() {
			$('#story').fadeIn('slow');
		});
	});


	$('#story').click(function() {
		// Create a div element to hold the poem
		var poemDiv = $('<div>', {
			class: 'poem',// Add a class for styling
			align: 'center', // Add a class for styling
			html: `
				<h2>Saraswati Maa: The Goddess of Wisdom</h2>
				<p>O Mother Saraswati, divine and bright,<br>
				Goddess of wisdom, knowledge, and light.<br>
				With veena in hand and a serene grace,<br>
				You bless us all with learning's embrace.</p>
				<p>Draped in white, so pure and grand,<br>
				Holding the scriptures in your hand.<br>
				Your voice flows like a river so deep,<br>
				Awakening minds from ignorance's sleep.</p>
				<p>Oh, Devi, on your lotus throne,<br>
				Your blessings make true wisdom known.<br>
				You guide each soul, each heart, each mind,<br>
				Igniting the flames of thoughts refined.</p>
				<p>Be it music, art, or science's lore,<br>
				Your presence inspires us evermore.<br>
				Remove the darkness, let knowledge shine,<br>
				Bless us, Maa, with wisdom divine.</p>
				<p>With folded hands, we humbly pray,<br>
				Lead us on the righteous way.<br>
				O Saraswati, forever be near,<br>
				Our guiding light, so pure, so clear.</p>
				<p>- By Sneha Ghosh (Barsha)</p>
			`,
			style: 'display: none;' // Initially hide the poem
		});
	
		// Append the poem div to the body or a specific container
		$('body').append(poemDiv);
	
		// Fade in the poem
		poemDiv.fadeIn('slow');
	
		// Fade out the button
		$(this).fadeOut('slow').promise().done(function() {
			$('#light_candle').fadeIn('slow'); // Show the next button if needed
		});
	});
});

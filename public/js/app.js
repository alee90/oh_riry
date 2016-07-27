$(document).ready(function() {

	console.log('hello')
	var $header = $('#header')
	var $head1 = $('<h1>Hi, Lily</h1>')
	$header.append($head1)

	var $container = $('#main-container');

	// Auth related jQuery objects
	var $loginForm = $('#login-form');
	var $logoutLink = $('#logout-link');
	var $signupLink = $('#signup-link');
	var $signupForm = $('#signup-form');

	//check if the user's logged in
	// in reality check if token is still valid
	if(Cookies.get('jwt_token')){
		console.log('logged in');
		renderLily();
	  $loginForm.hide();
	  $signupLink.hide();
	  $signupForm.hide();
	  $logoutLink.show();
	} else {
		console.log('not logged in');
		$loginForm.show();
		$signupLink.show();
		$signupForm.hide();
		$logoutLink.hide();
	}

var grabId;

	// Event listener and handler to login
	$loginForm.submit(function(e){
	  e.preventDefault();
	  $.ajax({
	  	url: '/auth',
	    method: 'POST',
	    data: {
	    	username: $loginForm.find('[name=username]').val(),
	    	password: $loginForm.find('[name=password]').val()
	    }
	  }).success(function(data){
	  	console.log(data.grabId);
	  	var grabId = data.grabId;
	  	renderLily();
	    // console.log(data);
	    if(data.token){
	      Cookies.set('jwt_token', data.token);

	     		$signupForm.hide();
					$signupLink.hide();
					$loginForm.hide();
					$logoutLink.show();
	    } else {
	      console.log('ERROR LOG IN');
	    }
	  });
	  return grabId;
	});

	// Event listener and handler to signup

	//logout
	$logoutLink.click(function(e){
    Cookies.remove('jwt_token');
    location.reload();
	});

	// Rendering functions
	var signedUp = function(){
		$signupForm.hide();
		$signupLink.hide();
		$loginForm.show();
	}

	var redirectLogin = function(){
		$signupForm.hide();
		$signupLink.hide();
		$loginForm.show();
		$logoutLink.show();
	}

	// Event listener and handler to signup
	$signupLink.click(function(e){
		e.preventDefault();
		$loginForm.hide();
		$logoutLink.hide();
		$signupLink.hide();
		$signupForm.show();
	});
});

// ===================================================== \\

	var renderLily = function(){
		console.log('hi');
		var $container = $('#main-container');
		var $preface = $("<p>Hi.  <br/><br /> I just wanted to write this app so I could really show how much I like you.<br/> I know it hasn't been the easiest time for you and I am sorry for that,<br/> but I don't regret telling you how I feel.</p>")
		$container.append($preface);

		var $next = $('<p id="next-link">Next</p>')
		$next.click(function(e){
			e.preventDefault();
			renderTwo();
		})
		$container.append($next)
	}

	var renderTwo = function(){
		console.log('two');
		var $container = $('#main-container');
		$container.empty();
		var $para1 = $("<p>Remember, our slack conversations?</p>")
		var $img1 = $('<img id="convo" src="./convo1.jpg">')
		var $img2 = $('<img id="convo" src="./convo2.jpg"><br>')
		var $img3 = $('<img id="convo" src="./convo3.jpg"><br>')
		var $img4 = $('<img id="convo" src="./dadjokes.jpg"><br>')


		var $para2 = $("<br/><p>This is the moment I fell for you.</p>")

		$container.append($para1);
		$container.append($img1);
		$container.append($img2);
		$container.append('<h4>The Beginning of Dad Jokes</h4>')
		$container.append($img4);
		$container.append($para2);
		$container.append($img3);

		var $next = $('<p id="next-link">Next</p>')
		$next.click(function(e){
			e.preventDefault();
			renderThree();
		})
		$container.append($next)
	}

	var renderThree = function(){
		console.log('three')
		var $container = $('#main-container');
		$container.empty();
		var $para3 = $("<br/><p>Here is some BØRNS and a dog</p>")
		var $iframe = $("<iframe id='iframe' src='https://embed.spotify.com/?uri=spotify%3Aalbum%3A17l7MIu0Jh0tdgK7or9ovw' width='300' height='380' frameborder='0' allowtransparency='true'></iframe><br>");
		$container.append($para3);
		$container.append($iframe);
		$.ajax({
			method: 'GET',
			url: '/giphy'
		}).done(function(x){
			console.log(x.data.image_url)
			var $dog = $('<img src="'+x.data.image_url+'"/><br>')
			$container.append($dog)
			var $next = $('<p id="next-link">Next</p>')
				$next.click(function(e){
				e.preventDefault();
				renderFour();
			})
		$container.append($next)
		})

	}

	var renderFour = function(){
		console.log('four');
		var $container = $('#main-container');
		$container.empty();
		var $para3 = $("<br/><h2>Here are some of the reasons I think you're amazing</h2>")
		var $ul = $('<ul id="like-list"></ul>')
		var $item1 = $('<li>You are so incredibly caring towards everybody</li>')
		var $item2 = $('<li>You think about others before yourself</li>')
		var $item3 = $('<li>You really try to improve yourself, and you tackle problems relentlessly</li>')
		var $item4 = $('<li>You are so easy to talk to, and we have amazing conversations!</li>')
		var $item5 = $("<li><h3>I always feel really good and happy whenever I'm around you</h3></li>")
		$ul.append($item1);
		$ul.append($item2);
		$ul.append($item3);
		$ul.append($item4);
		$ul.append($item5);
		$container.append($para3);
		$container.append($ul);

		var $next = $('<p id="next-link">Next</p>')
		$next.click(function(e){
			e.preventDefault();
			renderFive();
		})
		$container.append($next)
	}

	var renderFive = function(){
		console.log('5')
		var $container = $('#main-container');
		$container.empty();
		var $para4 = $("<br/><h2>These are some of the pictures I love</h2>")

		var $img1 = $('<img id="riry" src="./riry1.jpg">')
		var $img2 = $('<img id="riry" src="./riry2.jpg"><br>')
		var $img3 = $('<img id="riry2" src="./riry3.jpg"><br>')
		var $img4 = $('<img id="riry" src="./riry4.jpg"><br>')
		var $img5 = $('<img id="riry3" src="./riry5.jpg"><br>')
		var $img6 = $('<img id="riry" src="./lilyhu.jpg"><br>')


		$container.append($para4)
		$container.append($img1)
		$container.append($img2)
		$container.append($img3)
		$container.append($img4)
		$container.append($img5)
		$container.append($img6)

		var $next = $('<p id="next-link">Next</p>')
		$next.click(function(e){
			e.preventDefault();
			renderSix();
		})
		$container.append($next)
	}

	var renderSix = function(){
		console.log('six')
		var $container = $('#main-container');
		$container.empty();
		var $para3 = $("<br/><h2>This is why I think we would be good for each other</h2>")
		var $ul = $('<ul id="like-list"></ul>')
		var $item1 = $('<li>We would push each other to become better PROGRAMMERS!<br /> I firmly believe we could both be successful if we give it our all!</li>')
		var $item2 = $('<li>We have undeniable chemistry!<br/> We have already laughed, cried, and been there for one another.</li>')
		var $item3 = $('<li>Uhh... FOOD!!!!  </li>')
		var $item4 = $('<li>I want to be there for you for any struggles you would face in life</li>')
		var $item5 = $("<li>We would share incredible life experiences with one another</li>")
		var $item6 = $("<li>We will definitely try to have a healthy, honest, two-way-street relationship.<br/>  I don't want any more cloak-and-dagger. <br/> We can be who we are, all the time, no judgements.  </li>")
		var $item7 = $("<li>I'm not an everlasting twatwaffle :D</li>")

		$ul.append($item1);
		$ul.append($item2);
		$ul.append($item3);
		$ul.append($item4);
		$ul.append($item5);
		$ul.append($item6);
		$ul.append($item7);

		$container.append($para3);
		$container.append($ul);

		var $next = $('<p id="next-link">Next</p>')
		$next.click(function(e){
			e.preventDefault();
			renderSeven();
		})
		$container.append($next)
	}

	var renderSeven = function(){
		console.log('seven')
		var $container = $('#main-container');
		$container.empty();		
		var iframe1 = $('<iframe id="iframe2" src="https://lilywho.github.io/blackjack/"></iframe>')
		var iframe2 = $('<iframe id="iframe2" src="https://what-is-the-weather.herokuapp.com/weather"></iframe>')
		var iframe3 = $('<iframe id="iframe2" src="https://my-foodie-app.herokuapp.com/"></iframe>')
		var iframe4 = $('<iframe id="iframe2" src="https://still-waters-28982.herokuapp.com/"></iframe>')
		$container.append("<h2>Look at some of the amazing things you've done!</h2>")
		$container.append("<h3>I hope you realize how talented you are at this.  Please don't give it up.</h3>")
		$container.append(iframe1);
		$container.append(iframe2);
		$container.append(iframe3);
		$container.append(iframe4);

	}

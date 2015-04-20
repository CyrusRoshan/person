/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */
$(window).load(function() {
	particlesJS('particles-js', {
	  particles: {
		color: '#fff',
		color_random: false,
		shape: 'circle', // "circle", "edge" or "triangle"
		opacity: {
		  opacity: 1,
		  anim: {
			enable: false,
			speed: 1.5,
			opacity_min: 0,
			sync: false
		  }
		},
		size: 2.5,
		size_random: true,
		nb: 90,
		line_linked: {
		  enable_auto: true,
		  distance: 85,
		  color: '#fff',
		  opacity: 1,
		  width: 1,
		  condensed_mode: {
			enable: false,
			rotateX: 600,
			rotateY: 600
		  }
		},
		anim: {
		  enable: true,
		  speed: 1
		}
	  },
	  interactivity: {
		enable: true,
		mouse: {
		  distance: 150
		},
		detect_on: 'canvas', // "canvas" or "window"
		mode: 'grab', // "grab" of false
		line_linked: {
		  opacity: .5
		},
		events: {
		  onclick: {
			enable: false,
			mode: 'push', // "push" or "remove"
			nb: 4
		  },
		  onresize: {
			enable: true,
			mode: 'out', // "out" or "bounce"
			density_auto: false,
			density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
		  }
		}
	  },
	  /* Retina Display Support */
	  retina_detect: true
	});
});
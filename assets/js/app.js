const list_rutes = document.querySelectorAll('body section')
const list = document.querySelectorAll('#bar li')
    .forEach((elem, index) => {
        elem.addEventListener('click', () => {
            list_rutes[index].scrollIntoView({ behavior: "smooth" })
        })
    })





document.addEventListener('DOMContentLoaded', function() {
	var splide = new Splide( '#main-slider', {
	  pagination: false,
	  arrows: false
	} );

	var thumbnails = document.getElementsByClassName( 'thumbnail' );
	var current;

	for ( var i = 0; i < thumbnails.length; i++ ) {
	  initThumbnail( thumbnails[ i ], i );
	}

	function initThumbnail( thumbnail, index ) {
	  thumbnail.addEventListener( 'click', function () {
	    splide.go( index );
	  } );
	}

	splide.on( 'mounted move', function () {
	  var thumbnail = thumbnails[ splide.index ];

	  if ( thumbnail ) {
	    if ( current ) {
	      current.classList.remove( 'is-active' );
	    }

	    thumbnail.classList.add( 'is-active' );
	    current = thumbnail;
	  }
	} );

	new Splide( '#image-slider' ).mount();
	splide.mount();
});
/**
 * External Dependencies
 */
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'jquery';
import screenfull from 'screenfull';

$( () => {
  // Fullscreen
  const element = $( '#display' )[0]; // Get DOM element from jQuery collection

  $( '#fullscreen' ).on( 'click', () => {
    if ( screenfull.isEnabled ) {
      screenfull.request( element );
    }
  } );

  // Mouse Move
  $( function() {
    // When page loads, wait 3 seconds and hide all elements with body class:
    setTimeout( remove, 3000 );
  } );

  var timer = null;

  // General function for adding/removing the "hide" class.
  // This is used when the page first loads and each time
  // the mouse moves on the page. We're not calling toggle()
  // here because a flicker effect can happen which would leave
  // the elements showing instead of being hidden.
  function toggle() {
    $( 'body' ).toggleClass( 'mousemove' );
  }

  function remove() {
    $( 'body' ).removeClass( 'mousemove' );
  }

  $( window ).on( 'mousemove', function() {
    // When anywhere on page is moused over bring back body
    // elements for 3 seconds. Removing "hide" simply restores
    // the original CSS & layout
    $( 'body' ).addClass( 'mousemove' );

    // Kill any previous timers
    clearTimeout( timer );

    // Wait 3 seconds and hide again
    timer = setTimeout( remove, 3000 );
  } );

} );

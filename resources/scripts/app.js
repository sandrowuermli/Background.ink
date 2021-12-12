/**
 * External Dependencies
 */
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'jquery';
import screenfull from 'screenfull';

$( () => {
  const element = $( '#fullscreen' )[0]; // Get DOM element from jQuery collection

  $( '#button' ).on( 'click', () => {
    if ( screenfull.isEnabled ) {
      screenfull.request( element );
    }
  } );

} );

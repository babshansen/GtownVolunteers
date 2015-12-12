// debugger

var openmodal1 = function() {
  var modal = document.getElementById('modal1');

  modal.classList.toggle('shown');
};

var openmodal2 = function() {
  var modal = document.getElementById('modal2');

  modal.classList.toggle('shown');
};

var openmodal3 = function() {
  var modal = document.getElementById('modal3');

  modal.classList.toggle('shown');
};

var openmodal4 = function() {
  var modal = document.getElementById('modal4');

  modal.classList.toggle('shown');
};

var openmodal5 = function() {
  var modal = document.getElementById('modal5');

  modal.classList.toggle('shown');
};



// $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
//   var $this = $(this),
//       label = $this.prev('label');

// 	  if (e.type === 'keyup') {
// 			if ($this.val() === '') {
//           label.removeClass('active highlight');
//         } else {
//           label.addClass('active highlight');
//         }
//     } else if (e.type === 'blur') {
//     	if( $this.val() === '' ) {
//     		label.removeClass('active highlight'); 
// 			} else {
// 		    label.removeClass('highlight');   
// 			}   
//     } else if (e.type === 'focus') {
      
//       if( $this.val() === '' ) {
//     		label.removeClass('highlight'); 
// 			} 
//       else if( $this.val() !== '' ) {
// 		    label.addClass('highlight');
// 			}
//     }

// });

// $('.tab a').on('click', function (e) {
  
//   e.preventDefault();
  
//   $(this).parent().addClass('active');
//   $(this).parent().siblings().removeClass('active');
  
//   target = $(this).attr('href');

//   $('.tab-content > div').not(target).hide();
  
//   $(target).fadeIn(600);
  
// });


// var hidemodal1 = function() {
//   var modal = document.getElementById('modal1');

//   modal.classList.remove('shown');
// };
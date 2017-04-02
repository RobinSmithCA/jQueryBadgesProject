$(function() {

  // your code will go here

   $.ajax({
      url : 'https://www.codeschool.com/users/RobinSmith.json',
      dataType: 'jsonp',
      success: function( response ) {
            $.each( response.courses.completed, function( index, course ) {
               let entry = $( '<div class="course"></div>' );

               $( '<h3>' + course.title + '</h3>' ).appendTo( entry );
               $( '<img src="' + course.badge + '"/>' ).appendTo( entry );
               $( '<a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a>' ).appendTo( entry );

               $( entry ).appendTo( $('#badges') );
            } );
         }
   });
});

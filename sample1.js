 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAJ3gogNGj6ZAtfpbi1ud7m4ZBqGwqMFROV1V3nVNEMZApihSzErp5eery5vtFtZAtZA7kFdTczPYTSOVotcf1qhjC4zdeEnQD7G6Q5RRrnTFQAZCBZBF1Lgy7660IehXEl1Fy2RyE71IZBpjw8KaYju5MJqYpRo9WZAalTGKK1gHooZA2k7J0diVNHGZCKqZCvLVZBgZDZD';
   //function to get facebook info
    function getFacebookInfo(){
        //make request to facebook graph
        $.ajax('https://graph.facebook.com/me?fields=picture.width(250).height(250),id,name,first_name,last_name,birthday,about,hometown,languages,gender,education,work,relationship_status,quotes,family,website,email,cover.width(815).height(320)&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                   $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myBirthday").text(response.birthday);
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myGender").text(response.gender);
                    $("#myQuotes").text(response.quotes);
                    $("#myDp").attr({"src":response.picture.data.url,width:300,height:300});
                },
            error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    $('.container').html(`<div class="alert alert-info alert-dismissible" role="alert">
                        Something Went Wrong! <input type="button" class="btn btn-primary"value="Try Again" onclick="location.reload();"/>
                        <button type="button" class="close" data-dismiss="alert">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                        </button>
                        </div>`);
                },
                complete :function(){
                    $("#thumbnail-avatar").addClass('zoomIn');
                }


             }//end argument list 



        );// end ajax call 


    }// end get facebook info

   

getFacebookInfo();
     //function to get post info
       function getFacebookPost(){

        $.ajax('https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},picture.width(250).height(250),cover,likes&)&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    //
                    $("#story0").text(response.posts.data[0].story);
                    $("#message0").text(response.posts.data[0].message);
                    $("#photo0").attr({"src":response.posts.data[0].full_picture,width:150,height:150});
                    

                    $("#story1").text(response.posts.data[1].story);
                    $("#message1").text(response.posts.data[1].message);
                    $("#photo1").attr({"src":response.posts.data[1].full_picture,width:150,height:150});
                 

          

                    $("#story2").text(response.posts.data[2].story);
                    $("#message2").text(response.posts.data[2].message);
                    $("#photo2").attr({"src":response.posts.data[2].full_picture,width:150,height:150});
                    
                    $("#story3").text(response.posts.data[3].story);
                    $("#message3").text(response.posts.data[3].message);
                    $("#photo3").attr({"src":response.posts.data[3].full_picture,width:150,height:150});
                    
                },
            error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    $('.container').html(`<div class="alert alert-info alert-dismissible" role="alert">
                        Something Went Wrong! <input type="button" class="btn btn-primary"value="Try Again" onclick="location.reload();"/>
                        <button type="button" class="close" data-dismiss="alert">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                        </button>
                        </div>`);
                },
                complete :function(){
                    $("#thumbnail-avatar").addClass('zoomIn');
                }






            }//end argument list 



        );// end ajax call 


    }// end get facebook post

    getFacebookPost();

  });
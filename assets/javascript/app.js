$(document).ready(function(){
    var topics = ["cats", "dogs", "bears", "lions", "whales", "squids", "birds", "kangaroos", "opossums", "capybaras", "ibex", "cassowary", "toucan", "sloth"];
    function generateButton() {       //Button generation upon topic submission
        for(var i = 0; i < topics.length; i++){
            var buttonName = ;
            buttonName.attr('topicData', topics[i]);
            buttonName.text(topics[i]);
            console.log(buttonName);
        }
    }
    generateButton();
    $('#newButton').on('click', function(){    //Button data push (upon keyboard input)
        var topicTitle = ;
        topics.push(topicTitle);
        generateButton();
        return false;
        console.log(topicTitle);
    });
    $(document).on('click', showGifs);
    function showGifs() {
        var topicShown = $(this).attr('topicData');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicShown + "&api_key=dc6zaTOxFJmzC";   //API call
        $.ajax({url:queryURL, method:'GET'})
            .done(function(response){
                var dataRetrieved = response.data;
                for(var i = 0; i < dataRetrieved.length; i++){    //Loop that retrieves API data
                    var gifsDiv = ;
                    console.log(gifsDiv);
                }
            });
    }
    function AnimateGifs(){       //function for making gifs play and stop on click
        
            }
    }
});
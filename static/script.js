var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

$(document).ready(function(){
    $("#display_date").html(display_date)
    $('#save_button').prop('disabled', true);

    console.log('Ready')

    //  Fetch the current date and update it in the DOM




    //  write an event, when Submit button is clicked
    $('/predic-emotion').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request

        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                
                // Display Result Using JavaScript----->HTML
                $("#prediction").html(predicted_emotion)
                $('#prediction').css("display", "block");

                $("#emo_code_url").attr('src', emo_url);
                $('#emo_code_url').css("display", "block");
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
        
        //  clearing the textbox after every button push
        $('#text').val("")
    });
})


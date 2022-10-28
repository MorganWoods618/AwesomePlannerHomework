var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//local storage hour buttons
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))

//local storageon click event
$(".saveBtn").on("click", function () {
    var textvalue = $(this).siblings(".description").val()
    var hour = $(this).parent().attr("id")

    localStorage.setItem(hour, textvalue)
})

//Clear Local Storage
$("#clear-search").on("click", function () {
    localStorage.clear();
    location.reload();
}
)

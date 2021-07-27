
var number = $(location).attr("search")
number = number.substring(3)
console.log(number)
if (isNaN(number) || number == ""){
    number = 0;
}
console.log("Searching for post: " + number)

$.getJSON('../data/data.json', function(data) {
    if (data[number] == null){
        document.getElementById('title').innerHTML = '404';
        document.getElementById('description').innerHTML = marked("whoops page can't be found")    
        return;
    }

    document.getElementById('title').innerHTML = data[number].title;
    document.getElementById('description').innerHTML = data[number].description;
    $.get(data[number].contentPath, function(content){
        document.getElementById('content').innerHTML = marked(content)
    })
});
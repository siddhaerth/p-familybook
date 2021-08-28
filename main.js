var images = ["Family.png", "Dad.jpg", "Mom.png", "Me.jpg"];

var names = ["Family book", "Dad", "Mom", "Me"];

var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 3
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_image").src = updatedImage;
    document.getElementById("family_name").innerHTML = updatedName;
}
function replaceImage(){
    var newImageUrl = "http://images.onset.freedom.com/ocregister/nt108a-b88484917z.120150813075518000gu3bd42l.10.jpg";
    var oldImageUrl = "disneyCharacters.jpg";

    var img = document.getElementById("disneyCharacters");

    if(img.src === newImageUrl)
        img.src = oldImageUrl;
    else
        img.src = newImageUrl;
}
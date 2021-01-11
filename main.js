var images =[ "WhatsApp Image 2021-01-10 at 17.15.13.jpeg",
              "WhatsApp Image 2021-01-10 at 17.17.17. jpeg",
              "WhatsApp Image 2021-01-10 at 17.19.49. jpeg",
              "WhatsApp Image 2021-01-10 at 17.21.44. jpeg"
            ];
  var i = 0;
  function nextslide() {
         
  if(i == 9)
    {
      i=0;
    }
  document.getElementById("album").src = images[i];
  i++;
  }
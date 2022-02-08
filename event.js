function makeRed() {
    document.body.style.backgroundColor = "red";
}



// call function
const bluebutton = document.getElementById("make-blue-button");
      //   just set the neme of function (not ())
      bluebutton.onclick = makeBlue;

      function makeBlue() {
        document.body.style.backgroundColor = "blue";
      }



    //   anonymous using

    
      const greenbutton = document.getElementById("make-green-buton");
      //   Anonymous Function
      greenbutton.onclick = function () {
        document.body.style.backgroundColor = "green";
      }



    //   add even listner
    const goldenButton = document.getElementById("make-goldenrod");
      goldenButton.addEventListener("click", makeGoldenRod);

      function makeGoldenRod() {
        document.body.style.backgroundColor = "goldenrod";
      }

    //   add even
    const hotpinkButton = document.getElementById("make-hotpink");
      hotpinkButton.addEventListener("click", function makePink() {
        document.body.style.backgroundColor = "hotpink";
      });

    //   direct shortcut

    document
        .getElementById("make-lightblue")
        .addEventListener("click", function () {
          document.body.style.backgroundColor = "lightblue";
        });
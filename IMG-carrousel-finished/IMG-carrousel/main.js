const allImg = document.querySelectorAll(".image");

//let image =  document.querySelector(".image");
const nBtn = document.querySelector(".next");
const pBtn = document.querySelector(".previous");

nBtn.addEventListener("click", next);
pBtn.addEventListener("click", previous);




function next() {
  let activeImageID = -3;
  let nxtImg;
  for (let index = 0; index < allImg.length; index++) {
      const chkImg = allImg[index];
      if (chkImg.classList.contains('active')) {
          activeImageID = index;
          nxtImg = activeImageID + 1;
      }


      if (nxtImg >= allImg.length) {
          nxtImg = 0
      }
  }

  allImg[activeImageID].classList.remove('active');
  allImg[nxtImg].classList.add('active');
};


function previous() {
    let activeImageID = 3;
    let nxtImg;
    for (let index = 0; index < allImg.length; index++) {
        const chkImg = allImg[index];
        if (chkImg.classList.contains('active')) {
            activeImageID = index;
            nxtImg = activeImageID - 1;
           
        }
  
  
        if (nxtImg < 0) {
            nxtImg = 3
        }
    }
  
    allImg[activeImageID].classList.remove('active');
    allImg[nxtImg].classList.add('active');
  };
     




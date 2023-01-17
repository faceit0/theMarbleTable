var fileName = window.location.href.split('/').slice(-1);
const body = document.body;
const html = document.documentElement;
const innerHeight = window.innerHeight;
const spaceForScr = innerHeight * 0.6;
const scrTop = window.scrollY + spaceForScr;




/* mobile menu */
const btnMenuMobile = document.querySelector('.btn_mobile');

btnMenuMobile.addEventListener('click', function(){
  const mobileMenu = document.querySelector('.menu_mobile');
  mobileMenu.classList.toggle('active');
});

/* menu desktop */
const menu_desktop = document.querySelector('.menu_bar');
const bgOfmenu = document.querySelector('.menu_list_wrap');
function mouseOver(){
  bgOfmenu.classList.remove('mouse_out');
  bgOfmenu.classList.add('mouse_over');
}
function mouseOut(){
  bgOfmenu.classList.add('mouse_out');
  bgOfmenu.classList.remove('mouse_over');
}
menu_desktop.addEventListener('mouseover', mouseOver);
menu_desktop.addEventListener('mouseout', mouseOut);

/* scroll Event */
/* SCROLL ANIMTION */

let wholeclassToAnimate = [];
let classInSectionToAnimate = [];

function getClassExisted(selector, array){
  var classLists = ['to-slide-top','to-slide-bottom','to-slide-left','to-slide-right', 'bg-fill', 'scale', 'fade-in'];
    for(i=0; i< classLists.length; i++) {
      var hasElmAtLastOne = selector.querySelector('.'+classLists[i]+'');
      if(hasElmAtLastOne){
        var getElms = selector.querySelectorAll('.'+classLists[i]+'');
        array.push(...getElms);
      }
  }
}
getClassExisted(document, wholeclassToAnimate);
//console.log(wholeclassToAnimate);


var hasStage = [];
var stageArr = [];
function getClassesForSection(){
  const triggerSection = document.querySelectorAll('.stage');
  var classLists = ['to-slide-top','to-slide-bottom','to-slide-left','to-slide-right', 'bg-fill', 'scale', 'fade-in'];
  //console.log(triggerSection);
  //get classLists In stage section
  for(i=0; i<triggerSection.length; i++){
    //console.log(triggerSection);
    stageArr[i] = []; // array=>[ stageElm, [elm to Animate in stage] ];
    stageArr[i][0] = triggerSection[i];
    stageArr[i][1] = [];
      // elm to REMOVE
      var test = [];
      for(a=0; a<classLists.length; a++){
        const hasClass = triggerSection[i].querySelectorAll('.'+classLists[a]+'');

        if(hasClass.length > 0){
          //console.log(hasClass);
          hasStage.push(...hasClass);
          //console.log(test);
          stageArr[i][1].push(...hasClass);
      }
    }
  }
}
 getClassesForSection();
 console.log(stageArr);
 //console.log(wholeclassToAnimate);

 //console.log(wholeclassToAnimate);
 var newArr = wholeclassToAnimate.filter(item => hasStage.indexOf(item)<0);
 console.log(newArr);

var elmToSlideTop = [];
 function allSlideToTop(){
   var wrapSection = document.querySelectorAll('.all-slide-to-top');
   wrapSection.forEach(elm=>{
     var children = elm.children;
     var childrenToArr = Array.from(children);
     elmToSlideTop.push(...childrenToArr);
   })
   //console.log(getChild);
   //elmToSlideTop.push(...getChild);
 }
 allSlideToTop();

function scrollEvent(array){
  //setArrayToAnimate();
  //console.log(arrOfTriggerSection);
  function animate(){
    var innerHeight = window.innerHeight;
    var spaceForScr = innerHeight * 0.65;
    var scrTop = window.scrollY + spaceForScr;

    // var scrHeight = document.querySelector('body').scrollHeight;
    // function footer(){
    //   if(scrTop < scrHeight - spaceScr){
    //
    //   }
    // }
    // console.log(scrTop);

    function aniDelay(elm){
      if(elm.dataset.delay){
        elm.style.animationDelay = elm.dataset.delay;
      }
    }
    array.forEach(elm=>{
      //has Stage //if elm[1] instanceof Array
      if(array == stageArr){
      const offsetTop = elm[0].getBoundingClientRect().top + window.scrollY;
      if(offsetTop < scrTop){
        elm[1].forEach(elm=>{
          elm.classList.add('active');
          aniDelay(elm);
        })
      }
    } else if(array == newArr) { //no stage
      const offsetTop = elm.getBoundingClientRect().top + window.scrollY;
      if(offsetTop < scrTop){
        elm.classList.add('active');
        aniDelay(elm);
      }
    } else if(array == elmToSlideTop){
      const offsetTop = elm.getBoundingClientRect().top + window.scrollY;
      if(offsetTop < scrTop){
        elm.classList.add('to-slide-top','active');
        aniDelay(elm);
      }
    }
    })
  }

  document.addEventListener('scroll', animate);
}

scrollEvent(newArr);
scrollEvent(stageArr);
scrollEvent(elmToSlideTop);


/* footer*/
  const footer = document.querySelector('footer');
  const ofsTopFooter = footer.offsetTop;
  const logoFooter = document.querySelectorAll('.footer-logo');
  const infoOfCompany= document.querySelectorAll('.company-information p');
  const sns = document.querySelectorAll('.sns');
  const cs = document.querySelectorAll('.cs-center');
  const menuFooter = document.querySelectorAll('.footer-menu');
  const copyright = document.querySelectorAll('.copyright');

  var arrFooter = [];
  arrFooter.push(...logoFooter, ...infoOfCompany, ...sns, ...cs, ...menuFooter, ...copyright);

  for(const elm of arrFooter) {
    elm.style.visibility = "hidden";
  }


document.addEventListener('scroll', function(){
  const heightOfdoc = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  const scrTop = window.scrollY + spaceForScr;
  const footer = document.querySelector('footer');
  const ofsFooter = footer.offsetTop;
  const triggerPoint = heightOfdoc - innerHeight;

  // console.log('scr:'+scrTop, 'footerTop:'+ofsFooter ,'docuHeight:'+ triggerPoint);
  if(scrTop > triggerPoint){
    for(i=0; i< arrFooter.length; i++){
      setTimeout(anifooter, 500*i, i);
    }
    function anifooter(i){
      arrFooter[i].classList.add('slide-to-top');
    }
  }
});
// END footer


/* index.html */
if(fileName == 'index.html'){

} // END'index.html'

/* breadcrumbs of SUB PAGES */
const breadcrumbs = document.querySelector('.breadcrumbs-wrap');
// no included in Index.html
if(document.querySelector('.breadcrumbs-wrap')){
  const ElmOfbreadcrumb = document.querySelector('.breadcrumbs');
  const compStyle = window.getComputedStyle(ElmOfbreadcrumb);
  const valueOfBgUrl = compStyle.getPropertyValue('background-image');
  const string = valueOfBgUrl.slice(32, -2);
  //32 firebase folder src

  const titleOfBc = document.querySelector('.breadcrumbs h3');
  const titleOfBcEn = document.querySelector('.breadcrumbs h5');
  /* get Images before displaying */
  var image = new Image();
  image.src = string;
  var div = ElmOfbreadcrumb;
  image.myDiv = div;

  /* to prevent to texts showing first */
  image.onload = function(){
    this.style["background-image"] = this.src;
    ElmOfbreadcrumb.classList.add('scale');
    titleOfBc.style.animationDelay = 1;
    titleOfBc.classList.add('top-to-animate');
    titleOfBc.style.animationDelay = 1;
    titleOfBcEn.classList.add('top-to-animate');
  }
}

/* beverage.html & dessert.html */
if(fileName == 'beverage.html' || fileName == 'dessert.html'){
  const scrollWrap = document.querySelector('.product-list');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  // scroll evnet
  // document.addEventListener('scroll', function(e){
  //   const scrTop = window.scrollY + spaceForScr;
  //   const bgOfSection = document.querySelector('.beverage_center');
  //   const sectionText = document.querySelectorAll('.section-beverage #beverage > h5');
  //   const sectionTextEn = document.querySelectorAll('.section-beverage #beverage > h3');
  //   const liCheckbox = document.querySelectorAll('.section-beverage .check-box li');
  //   const cateName = document.querySelectorAll('.section-beverage .beverage-item-cate-name');
  //   const imgOfProduct = document.querySelectorAll('.section-beverage .beverage-items-cate ul li');
  //   const decoLine = document.querySelectorAll('.check-box-deco-line');
  //   var arr = [];
  //   arr.push(...sectionText, ...sectionTextEn, ...liCheckbox, ...cateName, ...cateName, ...imgOfProduct);
  //   if(bgOfSection.offsetTop < scrTop) {
  //     bgOfSection.classList.add('bg-fill');
  //   }
  //   for(const elm of decoLine) {
  //     if(elm.offsetTop < scrTop) {
  //       elm.classList.add('scale');
  //     }
  //   }
  //   arr.forEach(elm => {
  //     elm.style.visibility = 'hidden';
  //     const offsetTop = elm.offsetTop;
  //     //console.log(offsetTop);
  //      if(scrTop > offsetTop){
  //       elm.classList.add('slide-to-top');
  //     }
  //   })
  // });

  // CHECK BOX & PRODUCT LIST & LIGHT BOX
  function scrollTopToLightBox(){
    scrollWrap.scrollTo({top:0});
  }

  function btnDisable(btn){
    btn.style.display = 'none';
  }
  function btnEnable(btn){
    btn.style.display = 'block';
  }


  function aniOfLightBox(){
    imgSetInterval = setInterval(function(){div.classList.add('ani')},0);
    clearInterval(imgSetInterval);

    const liOfShowing = document.querySelector('.flex-showing');
    const divOfImg = liOfShowing.children[0];
    const img = divOfImg.children[0];
    let div = document.createElement('div');
    div.className = 'animation';

    const name = liOfShowing.querySelectorAll('.product-name');
    const nameInEn = liOfShowing.querySelectorAll('.product-name-english');
    const details = liOfShowing.querySelectorAll('.product-title p');
    const table = liOfShowing.querySelectorAll('.nutrition-facts table');
    const allergy = liOfShowing.querySelectorAll('.allergy-info');
    var arr = [];
    arr.push(...name, ...nameInEn, ...details, ...table, ...allergy);
    const toArray = Array.from(arr);
    //console.log(arr);

    function aniOfText() {
      for(i = 0; i < toArray.length; i++){
        if(toArray[i].classList.contains('slide-to-top')){
          toArray[i].classList.remove('slide-to-top');
        }
        const timer = setInterval(function(i){
          clearTimeout(timer);
          toArray[i].classList.add('slide-to-top');
        }, (i+1.2)*550, i);
      }

      const divOfDetails = document.querySelectorAll('.product-detail');
      divOfDetails.forEach(elm=>{
        elm.addEventListener('click',function(){
          //clearTimeout(timer);
          for(const elm of toArray){
            elm.classList.add('slide-to-top');
          }
        });
      });

    }
    aniOfText();

    if(!divOfImg.children[1]){
      divOfImg.appendChild(div);
      imgSetInterval = setInterval(function(){div.classList.add('ani')},0);
    } else {
      imgSetInterval = setInterval(function(){div.classList.add('ani')},0);
    }
  }


  function LightBoxShowing(e){
    //get li index and category index
    const getLi = e.target.parentElement;
    const getUl = getLi.parentElement;
    const wholeLi = getUl.children;
    const getThumbOfCate = getUl.parentElement;
    const setArray = Array.from(wholeLi);
    const IndexOfLi = setArray.indexOf(getLi);
    const getCategory = getUl.parentElement;
    const wholeCategory = document.querySelector('.beverage_category').children;
    const ArrayOfCate = Array.from(wholeCategory);
    const getThisCate = ArrayOfCate.indexOf(getThumbOfCate);

    //working on LightBox
    const LightBox = document.getElementById('light-box');
    LightBox.classList.add('showing');
    scrollTopToLightBox();

    const categoryOfLB = document.getElementsByClassName('product-category');
    const getSameCate = categoryOfLB[getThisCate];
    const getImg = (getSameCate.children)[0].children;
    const getProductImg = Array.from(getImg)[IndexOfLi];
    const wholeProducts = document.getElementsByClassName('product-thumbnail');

    const lastCate = Array.from(categoryOfLB).at(-1);
    const childrenOfLastCate = Array.from((lastCate.children[0]).children);
    const lastElm = childrenOfLastCate.at(-1);

    const firstCate = Array.from(categoryOfLB).at(0);
    const childrenOfFirstCate = Array.from((firstCate.children[0]).children);
    const firstElm = childrenOfFirstCate.at(0);
    console.log(firstCate);

    for (whole of wholeProducts){
      if(whole.classList.contains('flex-showing')){
        whole.classList.remove('flex-showing');
      }
    }
    getProductImg.classList.add('flex-showing');
    aniOfLightBox();
    // hide arrow when it's a last image
    if(getProductImg == lastElm){
      btnDisable(nextBtn);
    }
    if(getProductImg == firstElm){
      btnDisable(prevBtn);
    }
  }

  // prev & next btn
  function btns(e){
    const currentProduct = document.querySelector('.flex-showing');
    //console.log(currentProduct);
    const nextProduct = currentProduct.nextElementSibling;
    const prevProduct = currentProduct.previousElementSibling;

    const ElmOfThisCate = (currentProduct.parentElement).parentElement;
    const getUL = ElmOfThisCate.parentElement;
    const getWholeCate = getUL.children;
    const IndexOfThisCate = Array.from(getWholeCate).indexOf(ElmOfThisCate);
    const ElmNoHiding = document.querySelectorAll('li:not(.hiding-cate).product-category');
    const NewArray = Array.from(ElmNoHiding);
    const NewIndexInNewArray = NewArray.indexOf(ElmOfThisCate); // 끝에 한정 정하기

    // a last image in last category
    const cateOfLast = NewArray.at(-1);
    const childeren = (cateOfLast.children[0]).children;
    const lastElm = Array.from(childeren).at(-1);
    const secondOfLast = Array.from(childeren).at(-2);

    // a first image in first category
    const cateOfFirst = NewArray.at(0);
    const arrOfFirstCate = Array.from(cateOfFirst.children[0].children);
    const firstElm = arrOfFirstCate.at(0);
    const secondElm = arrOfFirstCate.at(1);

    scrollTopToLightBox();

    //next btn
    if(e.target.classList.contains("next-btn")) {
      console.log(NewIndexInNewArray);
        if(nextProduct){
          //console.log(nextProduct);
          currentProduct.classList.remove('flex-showing');
          nextProduct.classList.add('flex-showing');
          aniOfLightBox();
            // btnDisable();
            // console.log('last');
        } else {
          console.log('New Cate Index:', NewIndexInNewArray);
          //마지막 카테고리 아닐 때
          if(NewIndexInNewArray !== NewArray.length-1 ){
            const nextItem = NewArray[NewIndexInNewArray + 1];
            //console.log(nextItem);
            const ElmOfFirstImage = (nextItem.children)[0].children[0];
            currentProduct.classList.remove('flex-showing');
            ElmOfFirstImage.classList.add('flex-showing');
            aniOfLightBox();
          }
        }
        if(currentProduct == secondOfLast){
          btnDisable(nextBtn);
        }
        if(currentProduct == firstElm){
          btnEnable(prevBtn);
        }
    }

    //prev btn
    if(e.target.classList.contains("prev-btn")) {
      if(prevProduct){
          currentProduct.classList.remove('flex-showing');
          prevProduct.classList.add('flex-showing');
          aniOfLightBox();
      } else {
        //첫 카테고리 아닐때
        if(NewIndexInNewArray !== 0) {
          const prevItem = NewArray[NewIndexInNewArray - 1];
          console.log(prevItem);
          const ElmOfLastCateImages = (prevItem.children)[0].children;
          const getLastIndex = ElmOfLastCateImages.length -1;
          const ElmOfLastImage = ElmOfLastCateImages[getLastIndex];
          console.log(ElmOfLastCateImages);
          currentProduct.classList.remove('flex-showing');
          ElmOfLastImage.classList.add('flex-showing');
          aniOfLightBox();
        }
      }
      if(currentProduct == lastElm){
        btnEnable(nextBtn);
      }
      if(currentProduct == secondElm){
        btnDisable(prevBtn);
      }
    }
  }

  // Close btn of LIGHTBOX
  function xBtn(e){
    if(e.target.classList.contains('x-btn')){
      const lightBox = document.querySelector('.light_box');
      lightBox.classList.remove('showing');
      if(nextBtn.style.display == 'none'){
        btnEnable(nextBtn);
      }
      if(prevBtn.style.display == 'none'){
        btnEnable(prevBtn);
      }
    }
  }

  function checkbox(e){
    /* category check event */

    // variables for check box
    const checkInput = document.getElementsByClassName("checkbox");
    const arrOfInputs = Array.from(checkInput);
    const thisIndexOfInput = arrOfInputs.indexOf(e.target);

    //variables for thumbnails
    const wholeCatesOfThumbs = document.getElementsByClassName("beverage-items-cate");
    const arrOfwholeCatesOfThumbs = Array.from(document.getElementsByClassName("beverage-items-cate"));
    const arrOfThumbCateSameAsCheckedInput = Array.from(document.getElementsByClassName("beverage-items-cate"))[thisIndexOfInput - 1];
    const checkALLCategory = document.getElementById("all-check");
    var isCheckedAll = checkALLCategory.checked;
    const wholeCatesOfLB = document.querySelectorAll('.product-category');
    const arrOfCateInLB = Array.from(wholeCatesOfLB);
    const cateSameAsInputIndex = arrOfCateInLB[thisIndexOfInput - 1];

    if(e.target.classList.contains("checkbox")){
      //console.log("Do something to %o", e.target);
      //console.log("index of Clicked element: %d", thisIndexOfInput);

      // 카테고리 중 "전체" checking & unchecking
      if(thisIndexOfInput == 0){
        if(e.target.checked){//"전체" 체크할 때
          console.log('checked ALL');
          for(var i = 1; i < arrOfInputs.length; i++) {
            //모든 체크박스 해제
            arrOfInputs[i].checked = false;
            //모든 이미지 보이기
            arrOfwholeCatesOfThumbs[i-1].classList.remove('hiding-cate');
            // 전체 카테고리로 인풋 인덱스 +1돼서 빼줌
            wholeCatesOfLB[i-1].classList.remove('hiding-cate');
          }
        } else {//"전체" 체크 해제할 때
          console.log('unchecked ALL');
          //모든 이미지 숨기기
          for(i = 0; i < wholeCatesOfThumbs.length; i++) {
              wholeCatesOfThumbs[i].classList.add('hiding-cate');
              wholeCatesOfLB[i].classList.add('hiding-cate');
          }
        }
      }

      else { // 카테고리 "전체" 제외 나머지 checking & unchecking
        if(e.target.checked){// 체크할 때
          if(isCheckedAll){//"전체" 체크돼있을 때
            //"전체" 체크박스 해제
            document.getElementById("all-check").checked = false;
            //모든이미지 숨기기
            for(i = 0; i < wholeCatesOfThumbs.length; i++) {
                wholeCatesOfThumbs[i].classList.add('hiding-cate');
                wholeCatesOfLB[i].classList.add('hiding-cate');
            }

          }
          //체크 선택된 이미지 보이기
          arrOfThumbCateSameAsCheckedInput.classList.remove('hiding-cate');
          cateSameAsInputIndex.classList.remove('hiding-cate');
        }
        else {//체크 해제할 때
          //체크 해제한  이미지 숨기기
          arrOfThumbCateSameAsCheckedInput.classList.add('hiding-cate');
          cateSameAsInputIndex.classList.add('hiding-cate');
        }
      }
    }
  }

  document.addEventListener("click", function(e){
    checkbox(e);
    if(e.target.classList.contains('beverage-thumbnail')){
      e.preventDefault();
      LightBoxShowing(e);
    }
    if(e.target.classList.contains('next-btn') || e.target.classList.contains('prev-btn')) {
      btns(e);
    }
  xBtn(e);
  });//END  beverage.html & dessert.html
}


/* event.html */
// if(fileName == 'event.html'){
//   const section = document.querySelector('.event_section .container');
//   const targetElms = section.children;
//   const arr = Array.from(targetElms);
//   const imgEvent = document.querySelector('.event-text');
//   const textEvent = imgEvent.children;
//   arr.push(...textEvent);
//   console.log(arr);
//   const offset = section.offsetTop;
//
//   document.addEventListener('scroll', function(){
//     const scrTop = window.scrollY + spaceForScr;
//     if(scrTop > offset){
//       section.classList.add('fill-bg');
//     }
//
//     arr.forEach( e => {
//       e.style.visibility = "hidden";
//       const ofsTop = e.offsetTop;
//       const index = Array.from(arr).indexOf(e);
//
//       if(scrTop > ofsTop){
//         e.style.animationDelay = index*500 + 'ms';
//         e.classList.add('slide-to-top');
//       }
//     });
//   });
// }
//
// if(fileName == 'location.html'){
//   const container = document.querySelector('.location');
//   const ofsTop = container.offsetTop;
//   const text = container.children;
//   const map = document.querySelector('.map');
//   const arr = Array.from(text);
//   arr.unshift(map);
//   console.log(arr);
//
//   document.addEventListener('scroll', function(){
//     const scrTop = window.scrollY + spaceForScr;
//     if(scrTop > ofsTop){
//       container.classList.add('fill-bg');
//     }
//     arr.forEach(e=>{
//       e.style.visibility = "hidden";
//       const ofsTop = e.offsetTop;
//       const index = arr.indexOf(e);
//       if(scrTop > ofsTop){
//         e.style.animationDelay = 500*index + 'ms';
//         e.classList.add('slide-to-top');
//       }
//     })
//   })
// }

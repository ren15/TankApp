// получаем координаты элемента в контексте документа
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  let xPrevCoord;    //Координата X предыдущего расположения элемента
  let yPrevCoord;    //Координата Y предыдущего расположения элемента

  document.addEventListener('scroll', function() {
      const whytankContent = document.querySelectorAll('.whytank__content')
      const whytankMacbook = document.querySelector('.whytank__macbook')
      const coordYContent = whytankContent[0].getBoundingClientRect().top
      const header = document.querySelector('header')
      const coordYHeaderDoc = getCoords(header).top
  
      if (coordYContent < document.documentElement.clientHeight) {
          whytankMacbook.style.right = '0'
          let queue = 0
          whytankContent.forEach(el => {
              setTimeout(()=>{
                  el.style.left = '0'
              }, queue)
              queue += 200
          })
      }
  
      if (xPrevCoord < coordYHeaderDoc) {
        header.style.opacity = '0'
      } else if (xPrevCoord >= coordYHeaderDoc) {
        header.style.opacity = '1'
      }
      xPrevCoord = coordYHeaderDoc
  });

  document.addEventListener("DOMContentLoaded", function(event) {

    const whytankMacbook = document.querySelector('.banner__content')
    const whytankIphone = document.querySelector('.banner__iphone')
    if (document.documentElement.clientWidth > 700) whytankMacbook.style.left = '50px'
    else whytankMacbook.style.left = '0px'
    whytankIphone.style.right = '0px'
  });

  let xPrev;    //Координата X предыдущего расположения курсора
  let yPrev;    //Координата Y предыдущего расположения курсора

  document.addEventListener('mousemove', e => {
    const cloud = document.querySelectorAll('.banner__cloud')
      const xNext = e.pageX;
      const yNext = e.pageY;
      if(xNext < xPrev) {
        cloud.forEach(el => {
          const leftStyle = parseInt(getComputedStyle(el)['left'].replace('px', ''), 10)
          el.style.left = `${leftStyle + 1}px`
        })
      }
      if(xNext > xPrev) {
        cloud.forEach(el => {
          const leftStyle = parseInt(getComputedStyle(el)['left'].replace('px', ''), 10)
          el.style.left = `${leftStyle - 1}px`
        })
      }
      if(yNext > yPrev) {
        cloud.forEach(el => {
          const topStyle = parseInt(getComputedStyle(el)['top'].replace('px', ''), 10)
          el.style.top = `${topStyle - 1}px`
        })
      }
      if(yNext < yPrev) {
        cloud.forEach(el => {
          const topStyle = parseInt(getComputedStyle(el)['top'].replace('px', ''), 10)
          el.style.top = `${topStyle + 1}px`
        })
      }
      xPrev = xNext
      yPrev = yNext
  });
window.addEventListener('load', (ev) => {
  const loader = document.querySelector('.loader-wrapper')
  loader.classList.add('animate__animated', 'animate__fadeOut');
  setTimeout(() => {
    loader.classList.add('d-none');
  }, 1000);

  //change navbar background on scroll
  const mobileTitleBar = document.querySelector('#productView');
  const titleBarHeight = 200;
  if (mobileTitleBar) {
    const a = mobileTitleBar.querySelectorAll("a");
    console.log(a);
    window.addEventListener('scroll', (e) => {
      const scroll = window.scrollY;
      if (scroll > titleBarHeight) {
        mobileTitleBar.style.background = "#f4f4f4"
        a.forEach(el => {
          el.classList.remove("text-white");
          el.classList.add("text-font-color");
        })
      } else {
        mobileTitleBar.style.background = "none"
        a.forEach(el => {
          el.classList.add("text-white");
          el.classList.remove("text-font-color");
        })
      }
    })
  }

})

// const exampleModal = document.getElementById('exampleModal')
// const myInput = document.getElementById('myInput')

// exampleModal.addEventListener('show.bs.modal', () => {
//   myInput.focus();
//   console.log('sdfsf')
// })

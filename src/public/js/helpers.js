window.addEventListener('load', (ev) => {
  const loader = document.querySelector('.loader-wrapper')
  loader.classList.add('animate__animated', 'animate__fadeOut');
  setTimeout(() => {
    loader.classList.add('d-none');
  }, 1000);

})

// const exampleModal = document.getElementById('exampleModal')
// const myInput = document.getElementById('myInput')

// exampleModal.addEventListener('show.bs.modal', () => {
//   myInput.focus();
//   console.log('sdfsf')
// })

let d = document
let btnForm = d.querySelector('#btnForm')
let modal = d.querySelector('.modal')
let close = d.querySelector('#close')
let burgerModal = d.querySelector('#burgerModal')
let burger = d.querySelector('#myBurger')
let burgerClose = d.querySelector('#burgerClose')

function oupen(btn, myClass, block) {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        block.classList.add(myClass)
        d.body.style.overflow = 'hidden'

    })

}

oupen(btnForm, 'modalActive', modal)
oupen(burger, 'burgerModalActive', burgerModal)
function closeBloc(btn, myClass, block) {
    btn.onclick = (event) => {
        event.preventDefault()
        block.classList.remove(myClass)
        d.body.style.overflow = 'auto'

    }
}
closeBloc(close, 'modalActive', modal)
closeBloc(burgerClose, 'burgerModalActive', burgerModal)

let urls = d.querySelectorAll('#urls')
let btnForms = d.querySelector('#btnForms')


btnForms.onclick = (event) => {
    event.preventDefault()
    modal.classList.add('modalActive')
    d.body.style.overflow = 'hidden'
    burgerModal.classList.remove('burgerModalActive')

}

urls.forEach(i => {
    i.onclick = () => {
        burgerModal.classList.remove('burgerModalActive')

    }
});

let userName = document.querySelector('#name')
let userPhone = document.querySelector('#phone')
let userEventType = document.querySelector('#eventType')
let userDateEvent = document.querySelector('#dateEvent')
let userNumberGuests = document.querySelector('#numberGuests')
let userComment = document.querySelector('#comment')
let btnSubmit = document.querySelector('#btnSubmit')
let obj = {
    userName: '',
    userPhone: '',
    userEventType: '',
    userDateEvent: '',
    userNumberGuests: '',
    userComment: ''

}
let url_post = 'https://restaurantbotdatabays-default-rtdb.firebaseio.com/restaurantArr.json'
btnSubmit.onclick = (event) => {
    event.preventDefault()
    if (userName.value != '' && userComment.value != '' && userPhone.value != '' && userEventType.value != '' && userDateEvent.value != '' && userNumberGuests.value != '') {
        obj.userName = userName.value
        obj.userPhone = userPhone.value
        obj.userEventType = userEventType.value
        obj.userDateEvent = userDateEvent.value
        obj.userNumberGuests = userNumberGuests.value
        obj.userComment = userComment.value

        axios.post(url_post, obj)
            .then(res => console.log(res))

        userName.value = ''
        userPhone.value = ''
        userEventType.value = ''
        userDateEvent.value = ''
        userNumberGuests.value = ''
        userComment.value = ''
        modal.classList.remove("modalActive")
        d.body.style.overflow = 'auto'
    }






}

let preloader = document.querySelector('.preloader')
// document.body.onload=()=>{
//     // preloader.classList.add('preloaderOf')
// }

let imges = document.querySelectorAll('img')
let imges_totle_count = imges.length
let imges_load_count = 0
let prevText = document.querySelector('#idLoad')
let loadBlock = document.querySelector('#loadBlock')
for(let i = 0; i < imges_totle_count;i++){
    
    i.onload = img_load()
    

}

function img_load() {
    imges_load_count+=1
    console.log( (((100 / imges_totle_count)*imges_load_count ) << 0) + '%');
    prevText.innerHTML = (((100 / imges_totle_count)*imges_load_count ) << 0) + '%'
    loadBlock.style.width = (((100 / imges_totle_count)*imges_load_count ) << 0) + '%'
    if (imges_load_count >= imges_totle_count) {
        setTimeout(() => {
            preloader.classList.add('preloaderOf')
        }, 500);
    }
}
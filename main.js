const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
const ulEl = document.querySelector('ul')
const buttonEl = document.querySelector('button')
//console.log(divEl);
/* ulEl.classList.add('list-group') */

function restartRandomEmail() {
    for (let i = 0; i < 10; i++) {
        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            emailRandom = data.response
            liEl = document.createElement('li')
            liEl.innerText = 'Email: '
            liEl.append(emailRandom)
            ulEl.appendChild(liEl)
            liEl.classList.add('list-group-item', 'list-group-item-primary', 'm-2', 'w-25', 'mx-auto')
        }
    )
}
}

restartRandomEmail()

buttonEl.addEventListener('click', function(){
    ulEl.innerHTML = ''
    restartRandomEmail()
})


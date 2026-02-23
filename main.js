const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
const ulEl = document.querySelector('ul')
const buttonEl = document.querySelector('button')
//console.log(divEl);



function restartRandomEmail() {
    for (let i = 0; i < 10; i++) {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                emailRandom = data.response
                liEl = document.createElement('li')
                liEl.append(emailRandom)
                ulEl.appendChild(liEl)
            }
            )
    }
}

restartRandomEmail()

buttonEl.addEventListener('click', function(){
    ulEl.innerHTML = ''
    restartRandomEmail()
})
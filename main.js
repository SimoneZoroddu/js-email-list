const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
const ulEl = document.querySelector('ul')
//console.log(divEl);

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

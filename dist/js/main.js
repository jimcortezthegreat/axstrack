const setting = document.querySelector('.modal-container')
const settingModal = document.querySelector('.setting-modal')

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const energy = document.querySelector('.energy')
const round = document.querySelector('.round')
const next = document.querySelector('.btn-nxt')
const notif = document.querySelector('.notif-modal')
const modal = document.querySelector('.modal')
const ronin = document.querySelector('.ronin')
const gcash = document.querySelector('.gcash')
let rnd = 1

modal.addEventListener('click', e => {
    e.preventDefault()
    if(e.target.id === 'ronin') {
        ronin.select()
        ronin.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(ronin.value)
        notif.classList.toggle('success')
        notif.classList.toggle('animate__tada')
        setTimeout(() => {
            hideNotif()
        }, 1500)
    }
    if(e.target.id === 'gcash') {
        gcash.select()
        gcash.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(gcash.value)
        notif.classList.toggle('success')
        notif.classList.toggle('animate__tada')
        setTimeout(() => {
            hideNotif()
        }, 1500)
    }
})

const hideNotif = () => {
    // notif.classList.toggle('success')
    notif.classList.toggle('animate__tada')
    notif.classList.toggle('animate__backOutUp')
    setTimeout(() => {
        notif.classList.toggle('success')
        notif.classList.toggle('animate__backOutUp')
    }, 1000)
}

const showModal = () => {
    setting.classList.toggle('show')
    settingModal.classList.toggle('down')
}

plus.addEventListener('click', e => {
    const prevEnergy = energy.innerText
    if(prevEnergy < 10) {
        energy.innerText = parseInt(prevEnergy) + 1
    }
})

minus.addEventListener('click', e => {
    const prevEnergy = energy.innerText
    if(prevEnergy != 0) {
        energy.innerText = parseInt(prevEnergy) - 1
    }
})

next.addEventListener('click', e => {
    const prevEnergy = energy.innerText
    const newEnergy = parseInt(prevEnergy) + 2
    if(newEnergy >= 10) {
        energy.innerText = 10
        rnd+=1
        round.innerText = 'Round ' + rnd
    }
    if(newEnergy < 10) {
        energy.innerText = newEnergy
        rnd+=1
        round.innerText = 'Round ' + rnd
    }
    console.log(rnd)
})


document.addEventListener('DOMContentLoaded', () => {
    round.innerText = 'Round ' + rnd
    energy.innerText = 3
})
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('btn')

    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})
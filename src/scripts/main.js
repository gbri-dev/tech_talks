AOS.init()

const dataDoEvento = new Date("Dec 12, 2024 19:00:00")

const timeStampDoEvento = dataDoEvento.getTime()

const calculaTempo = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual

    //formulas para milessegundos
    const diasEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    //quantidade de dias que falta para chegar ao evento
    const diasRestantes = Math.floor(distanciaAteEvento / diasEmMs)
    // a porcentagem é para pegar o valor apos a virgula de algum numero quebrado
    const horasRestantes = Math.floor((distanciaAteEvento % diasEmMs) / horasEmMs)
    const minutosRestantes = Math.floor((distanciaAteEvento % horasEmMs) / minutosEmMs)
    const segundosRestantes = Math.floor((distanciaAteEvento % minutosEmMs) / 1000)

    console.log(diasRestantes)
    console.log(horasRestantes)
    console.log(minutosRestantes)
    console.log(segundosRestantes)
    document.getElementById('contador').innerHTML = `${diasRestantes}d ${horasRestantes}hr ${minutosRestantes}m ${segundosRestantes}s`

    if(distanciaAteEvento < 0 ) {
        clearInterval(calculaTempo)
        document.getElementById('contador').innerHTML = 'Evento Expirado.'
    }
}, 1000)
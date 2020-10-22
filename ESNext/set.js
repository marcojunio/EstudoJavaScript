//não aceita repetição // não é indexada

const times = new Set()
times.add('Flamengo')
times.add('Vasco')
times.add('Sao paulo').add('Palmeiras').add('Corinthians')
times.add('Vasco')

console.log(times)
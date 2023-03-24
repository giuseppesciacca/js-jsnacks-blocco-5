/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.Calcola quanto pesano tutte le zucchine.  */

const zucchine = [
    {
        varietà: 'Zucchino nero di Milano',
        peso: 250,
        lunghezza: 12
    },
    {
        varietà: 'Zucchino romanesco',
        peso: 230,
        lunghezza: 15
    },
    {
        varietà: 'Zucchino ortolano di Faenza',
        peso: 180,
        lunghezza: 13
    },
    {
        varietà: 'Zucchina lunga fiorentina',
        peso: 140,
        lunghezza: 25
    },
    {
        varietà: 'Zucchino siciliano',
        peso: 400,
        lunghezza: 40
    },
    {
        varietà: 'Zucchina striata di Napoli',
        peso: 90,
        lunghezza: 16
    },
    {
        varietà: 'Zucchina bianca triestina',
        peso: 140,
        lunghezza: 10
    },
    {
        varietà: 'Zucchina rigata pugliese',
        peso: 260,
        lunghezza: 19
    },
    {
        varietà: 'Zucchino tondo di Piacenza',
        peso: 350,
        lunghezza: 15
    },
    {
        varietà: 'Zucchino tondo di Nizza',
        peso: 100,
        lunghezza: 8
    },
];

let sum = 0;
zucchine.forEach(element => {
    const peso = element.peso;
    sum += peso;
});
console.log(sum + ' grammi, cioè ' + (sum / 1000) + ' kg');
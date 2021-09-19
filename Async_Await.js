const datos = [{
    id: 1,
    tittle: 'Iron Man',
    year: 2008
},
{
    id: 2,
    tittle: 'Spiderman: Homecoming',
    year: 2017
},
{
    id: 3,
    tittle: 'Avengers: Endgame',
    year: 2019
}];

// const datos = [];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if(datos.length === 0) {
            reject(new Error('No existen datos'));
        }

        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}

async function fetchingData () {
    try {
        const dataFetched = await getDatos();
        console.log(dataFetched);
    } catch (error) {
        console.log(error.message);
    }
}

fetchingData();
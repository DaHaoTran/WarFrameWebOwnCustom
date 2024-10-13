const url : string = 'http://localhost:3000/';
//Abilities
interface ability {
    imgPath: string;
    name: string;
    des: string;
    id: string;
}

async function getAbilities(){
    var str = ``;

    var abilities: ability[] = await fetch(url + 'abilities')
        .then(function(response) {
            if(response.ok == false) throw Error (response.statusText);
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            return data;
        });

    abilities.forEach((e: any) => {
        str += 
        `
            <div class="ability m-3">
                <div class="header">
                <img src="${e.imgPath}" alt="ability">
                <h3>${e.name}</h3>
                </div>
                <p>${e.des}</p>
            </div>
        `;
    })
    return str;
}

//Warframes
interface warframe {
    imgPath: string;
    name: string;
    des: string;
    video: string;
    id: string;
}

async function getWarframes() {
    var str = ``;

    var warframes: warframe[] = await fetch(url + 'warframes')
        .then(function(response) {
            if(response.ok == false) throw Error (response.statusText);
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            return data;
        });

    warframes.forEach(e => {
        str += `
        <div class="col-md-6 col-lg-2">
            <div class="card warframe" data-bs-toggle="modal" data-bs-target="#videoModal" onclick="GetVideo('${e.video}')">
            <div class="card-body text-center">
                <img src="/assets/imgs/warframes/${e.imgPath}" alt="warframe">
                <h5>${e.name}</h5>
                <p>${e.des}</p>
            </div>
            </div>
        </div>
        `
    })
    return str;
}
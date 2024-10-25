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
var warframes: warframe[] = [];
var skip: number = 0;
const take: number = 18;

async function getWarframes() {
    warframes = await fetch(url + 'warframes')
        .then(function(response) {
            if(response.ok == false) throw Error (response.statusText);
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            return data;
        });
    return LoadWarframes();
}

function LoadWarframes() {
    var str = ``;
    warframes.slice(skip, skip + take).forEach(e => {
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

function Next(classname: string, numberPage: number) {
    var value = 18 * numberPage;
    console.log("value: " + value);
    skip = value;
    document.getElementsByClassName(classname)[0].innerHTML = LoadWarframes();
}

function Prev(classname: string, numberPage: number) {
    var value = numberPage * 18;
    console.log("value: " + value);
    skip = value;
    document.getElementsByClassName(classname)[0].innerHTML = LoadWarframes();
}

function Change(event: any, classname: string) {
    if(event == 0) {
        var pagination = document.querySelector('.pagination')?.querySelectorAll('.page-item') as any;
        if(pagination != null || pagination != '' || pagination != undefined) {
            for(var i = 0; i < pagination.length; i++) {
                if(pagination[i].classList.contains('active')) {
                    if(i >= 2) {
                        pos = i;
                        pagination[i].classList.remove('active');
                        pagination[i-1].classList.add('active');
                        Prev(classname, i-2);
                        break;
                    }
                }
            }
        }
    }
    else if(event == null) {
        var pagination = document.querySelector('.pagination')?.querySelectorAll('.page-item') as any;
        if(pagination != null || pagination != '' || pagination != undefined) {
            for(var i = 0; i < pagination.length; i++) {
                if(pagination[i].classList.contains('active')) {
                    if(i + 2 < pagination.length) {
                        pos = i;
                        pagination[i].classList.remove('active');
                        pagination[i+1].classList.add('active');
                        Next(classname, i);
                        break;
                    }
                }
            }
        }
    }
    else {
        var value = parseInt(event.target.innerHTML);
        var pos: number = 0;
        if(skip / value - 1 != 18) {
            var pagination = document.querySelector('.pagination')?.querySelectorAll('.page-item') as any;
            if(pagination != null || pagination != '' || pagination != undefined) {
                for(var i = 0; i < pagination.length; i++) {
                    if(pagination[i].classList.contains('active')) {
                        pos = i;
                        pagination[i].classList.remove('active');
                        break;
                    }
                }
            }
            pagination[value].classList.add('active');  
            if(pos < value) {
                Next(classname, value - 1);
            }
            else if(pos > value) {
                Prev(classname, value - 1);
            }
        }
    }
}

function GetPaginaButton() {
    var str = ``;
    str += `<li class="page-item">
              <a class="page-link" aria-label="Previous" onclick="Change(0, 'list-warframe')">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>`;
    var pagiNum = warframes.length / 18;
    if(warframes.length % 18 != 0) {
        pagiNum += 1;
    }
    for(var i = 1; i <= pagiNum; i++) {
        if(i == 1) {
            str += `<li class="page-item active"><a class="page-link" onclick="Change(event, 'list-warframe')">${i}</a></li>`;
        }
        else{
            str += `<li class="page-item"><a class="page-link" onclick="Change(event, 'list-warframe')">${i}</a></li>`;
        }
    }
    str += `<li class="page-item">
              <a class="page-link" aria-label="Next" onclick="Change(null, 'list-warframe')">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>`;
    return str;
}
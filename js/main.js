// let vse_tovary = {
//     all_acc : {
//         dog : {
//
//         },
//         cat : {
//
//         },
//         bird : {
//
//         }
//     },
//     all_clothes : {
//         dog : {
//
//         },
//         cat : {
//
//         },
//         bird : {
//
//         }
//     }
// }
// let v_korzine = [];
let al = 0
let tovar = document.getElementsByClassName('tovar');
for(let i = 0; i < tovar.length; i++) {
    tovar[i].addEventListener('click', function(){
        tovar[i].classList.toggle('animate');
        localStorage.setItem(`${al}`, tovar[i].src);
        let img = document.createElement("img");
        img.src = localStorage.getItem(`${al}`);
        al+=1;
        console.log(test);
        document.createElement('h1').appendChild('asd')
        //test[0].appendChild(img);
        // v_korzine += tovar[i];
        // console.log(+1);
       // var my_div = newDiv = null;

        // var newDiv = document.createElement("div");
        //newDiv.innerHTML = "<h1>привет</h1>";
        // test[0].innerText = 'привет';
        // console.log(test)
        // my_div = document.getElementById("mainkorz");
        // document.body.insertBefore(newDiv, my_div);
    })
}


// for(let i = 0; i < v_korzine.length; i++) {
//     let test = document.getElementsByClassName('mainkorz');
//     let img = document.createElement('img');
//     img.src = v_korzine[i].src;
//     test[0].appendChild(img); }


// $('.tovar')[].addEventListener('click', function(evt) {
//     evt.target.classList.toggle('animate');
// });

function clear() {
    localStorage.clear();
    console.log('cleared!')
}


const text = document.querySelector('.text')
const btn = document.querySelector('.btn')
console.log(text);
console.log(btn);

btn.addEventListener('click',general)

general()

function general(){
    getInfo({
        methods:'get',
        url:''
    })
}

function getInfo(options){
    const xhr = null;
    const xhr = new XMLHttpRequest();
    xhr.open(options.methods,options.url);
    
}


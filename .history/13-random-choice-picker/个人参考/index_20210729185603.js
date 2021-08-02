const tags = document.getElementById('tags')
const text = document.getElementById('textarea')

//给text文本输入框绑定监听事件
text.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    // 创建tags标签
    createTags(e.target.value)
    if(e.key === 'Enter'){
       e.target.value = '';

       randomSelect()
    }
})


// 创建tags标签
function createTags(input){
    const tagsEl = input.split(',').filter(item =>item.trim() !== '').map(item => item.trim())
    // console.log(tags);
    tags.innerHTML = ''
    tagsEl.forEach(element => {
        // 1.创建元素
        const tagEl = document.createElement('span')
        // 2.添加样式
        tagEl.classList.add("tag")
        // 3.添加文本内容
        tagEl.innerText = element 
        // 4.挂载元素
        tags.appendChild(tagEl)
    });
   
}

// span标签动画效果
function randomSelect(){
    const tags = document.querySelectorAll('.tag')
    const tagsEl =  getRandomEl(tags,tags.length)
    // 给产生的随机元素进行添加和解除样式
    heightlightTag(tagsEl)
    setInterval((tagsEl)=>{
       
    },100)
    
}
function getRandomEl(tags,inNum){
    // console.log(Math.random() *inNum );
    const randomNum = Math.floor(Math.random() * inNum)
    // console.log(randomNum); 
    return tags[randomNum]
}

function heightlightTag(){
    
}
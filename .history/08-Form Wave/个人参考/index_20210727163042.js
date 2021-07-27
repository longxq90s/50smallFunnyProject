// const labels= document.querySelectorAll('.form-control label')

// labels.forEach(label =>{
//     label.innerHTML = label.innerText
//     .split('')
//     .map(
//         (letter,index) =>`<span style='transform-delay:${index * 20}ms'>${letter}</span>`
//         )
//     .join('');
//     console.log(label.innerHTML);
// })
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 20}ms">${letter}</span>`)
    .join('')

})


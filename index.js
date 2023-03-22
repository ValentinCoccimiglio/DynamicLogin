const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function() {
    alert('Sabia que ibas a decir que si je')
});

const noBTn = document.querySelector('#noBtn');
noBTn.addEventListener('mouserover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBTn.style.setProperty('top',randomY+'%');
    noBTn.style.setProperty('left',randomX+'%');
    noBTn.style.setProperty('transform',`translate(-${randomX}%,-${randomy}%)`)
})
function showMoreNews(){
    const hiddenNews = document.querySelectorAll('.news_section .news:nth-child(.visible)')
    
    for (let i = 0; i<3 && i < hiddenNews.length; i++){
        hiddenNews[i].classList.add('visible');
    }

    if(document.querySelectorAll('.news_section .news:not(.visible)').lenth ===0){
        document.querySelector('#more-button').style.display = 'none';
    }
}
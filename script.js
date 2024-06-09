function spotifySize(){
    var screenWidth = window.innerWidth;
    var spotify = document.querySelector('.spotify-img');
    var socialcont = document.querySelectorAll('.social-cont');
    var social = document.querySelectorAll('.social');
    var footer = document.querySelector('footer');

    if (screenWidth < 750){
        spotify.style.width = '';
        socialcont.forEach(function(item){
            item.style.width = '35px';
            item.style.height = '35px';
            item.style.margin = '0px';
        });
        social.forEach(function(item){
            item.style.maxWidth = '35px';
            item.style.maxHeight = '35px';
        });
        footer.style.flexDirection = 'column';
        footer.style.width ='50px';
    }else{
        spotify.style.width = '160px';
        socialcont.forEach(function(item){
            item.style.width = '';
            item.style.height = '';
            item.style.margin = '';
        });
        social.forEach(function(item){
            item.style.maxWidth = '';
            item.style.maxHeight = '';
        });
        footer.style.flexDirection = 'row';
        footer.style.width ='';
    }
}

window.addEventListener('resize', spotifySize);
window.addEventListener('load', spotifySize);
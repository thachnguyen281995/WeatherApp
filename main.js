const $ =document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const search = $('.search');
const city = $('.city');
const country = $('.country');
const value =$('.value');
const shortDesc =$('.short-desc');
const visibility =$('.visibility');
const wind =$('.wind');
const sun = $('.sun');
const time =$('.time')
const body = $('body')

 async function changeWeatherUI(capitalValue){
    let apiURL=`  https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=265d4f5a54af0b478b5bec20a2431f10
    `


    let data = await fetch(apiURL).then(res=>res.json())
    
    if(data.cod == 200){
        // content.classList.add('hide')

        city.innerText = data.name;
        country.innerText= data.sys.country
        visibility.innerText = data.visibility +'m'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.floor((data.main.temp-273.15))
        value.innerText = temp
        shortDesc.innerText = data.weather[0].main ? data.weather[0].main :''
        time.innerText = new Date().toLocaleString('vi')
        if(temp>=23){
        body.setAttribute('class','hot')
            
        }
        else{
            body.setAttribute('class','cold')
        }
       
    }
 
    
}
search.addEventListener('keypress',function(e){
    if(e.code === "Enter"|| "KeyEvent.KEYCODE_ENTER"){
    let capitalValue = search.value.trim()

        changeWeatherUI(capitalValue)
        
    }
}) 
changeWeatherUI('ho chi minh')
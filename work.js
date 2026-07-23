let valuesearch=document.getElementById('valuesearch');
let city=document.getElementById('city');
let temperature=document.getElementById('temperature');
let description=document.getElementById('description');
let clouds=document.getElementById('clouds');
let humidity=document.getElementById('humidity');
let pressure=document.getElementById('pressure');
let form=document.querySelector('form');
let main=document.querySelector('main');
form.addEventListener('submit',(Event)=>{
   Event.preventDefault();
   if(valuesearch.value!=''){
       searchweather();
   }
})
let id='1ca034e1a7810281225bec19973820dd';
let url='https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchweather=() =>{
   fetch(url + '&q=' + valuesearch.value)
   .then(responsive=>responsive.json())
   .then(data=>{
       console.log(data);
       if(data.cod == 200){
           city.querySelector('h1').innerText = data.name;
           city.querySelector('img').src='https://flagsapi.com/'+data.sys.country+'/shiny/32.png';
           temperature.querySelector('img').src='http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
           temperature.querySelector('figcaption span').innerHTML = data.main.temp;
           description.innerText=data.weather[0].description;
           clouds.innerText=data.clouds.all;
           humidity.innerText=data.main.humidity;
           pressure.innerText=data.main.pressure;
       }
       else{
           //false
           main.classList.add('error');
           setTimeout(() => {
               main.classList.remove('error');

           },1000);
       }
       valuesearch.value= '';
   })
}
const initapp=() =>{
   valuesearch.value='Hyderabad';
   searchweather();
}
initapp();
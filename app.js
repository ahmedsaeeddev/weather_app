'Weather Application by using API'

'API Integration'

"Method: Get & Post Put & Delete "

let container_fluid = document.querySelector('.container-fluid');
let form = document.querySelector('form');
let city = document.getElementById('city');
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=2f2bbcd60f7bcf93630356ceaba92cb6`)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      event.preventDefault();
      console.log(json)
      try {
        if (container_fluid.innerHTML !== '' && city.onclick) {
          event.preventDefault();

        }
        container_fluid.innerHTML = `
        <div class="main">
      <div class="main_area">
        <h2 class="city">${json.name}</h2>
        <h3 class="city">${json.sys.country}</h3>
        <p class="Date">${new Date().getDate()} - ${new Date().getMonth() + 1} - ${new Date().getFullYear()}</p>

        <div class="weather">
        <img src="https://weather-app-786.netlify.app/assets/img/haze.png" alt="">
        <div class="climate">
        <h1 class="temp">${Math.round(json.main.temp)}°C</h1>
        <p class="cond">${json.weather[0].main}</p>
          </div>
        </div>
        <div class="area">
        
          <div class="climatic_condition">
          <div class="card">
          <div class="div1"><img src="assets/img/humidity.png" alt="">
              <p>Humitdity</p>
              </div>
              <div class="div2">
              <p>70%</p>
              </div>
              </div>
            <div class="card">
            <div class="div1 myDiv1"><img src="assets/img/wind.png" alt="">
              <p>Wind</p>
              </div>
              <div class="div2 myDiv2">
              <p>70%</p>
              </div>
              </div>
              <div class="card">
              <div class="div1">
              <img src="assets/img/feels_like.png" />
              <p>Feels Like</p>
              </div>
          <div class="div2">
              ${Math.round(json.main.feels_like)}<sup>o</sup>C
              </div>
               </div>
                </div>
                `


      } catch {
        console.log(json.message)
        let timerInterval;
        Swal.fire({

          title: json.message.toUpperCase(),
          icon: 'error',
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `},

          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        })
      }

      if (json.weather[0].id == 701 || json.weather[0].id == 741) {
        document.querySelector('.weather img').src = "assets/img/mist.png";
      }
      else if (json.weather[0].id == 711) {
        document.querySelector('.weather img').src = "assets/img/smoke.png";
      }
      else if (json.weather[0].id == 721) {
        document.querySelector('.weather img').src = "assets/img/haze.png";
      }
      else if (json.weather[0].id == 731) {
        document.querySelector('.weather img').src = "assets/img/dust.png";
      }
      else if (json.weather[0].id == 751 || json.weather[0].id == 761 || json.weather[0].id == 762 || json.weather[0].id == 771 || json.weather[0].id == 781) {
        document.querySelector('.weather img').src = "assets/img/sand.png";
      }
      else if (json.weather[0].id == 531 || json.weather[0].id == 522 || json.weather[0].id == 521 || json.weather[0].id == 520 || json.weather[0].id == 511 || json.weather[0].id == 504 || json.weather[0].id == 503 || json.weather[0].id == 502 || json.weather[0].id == 501 || json.weather[0].id == 500) {
        document.querySelector('.weather img').src = "assets/img/rain.png";
      }
      else if (json.weather[0].id == 801 || json.weather[0].id == 802 || json.weather[0].id == 803 || json.weather[0].id == 804) {
        document.querySelector('.weather img').src = "assets/img/clouds.png";
      }
      else if (json.weather[0].id == 600 || json.weather[0].id == 601 || json.weather[0].id == 602 || json.weather[0].id == 611 || json.weather[0].id == 612 || json.weather[0].id == 613 || json.weather[0].id == 615 || json.weather[0].id == 616 || json.weather[0].id == 620 || json.weather[0].id == 621 || json.weather[0].id == 622) {
        document.querySelector('.weather img').src = "assets/img/snow.png";
      }
      else if (json.weather[0].id == 300 || json.weather[0].id == 301 || json.weather[0].id == 302 || json.weather[0].id == 310 || json.weather[0].id == 311 || json.weather[0].id == 312 || json.weather[0].id == 313 || json.weather[0].id == 314 || json.weather[0].id == 321) {
        document.querySelector('.weather img').src = "assets/img/snow.png";
      }
      else if (json.weather[0].id == 200 || json.weather[0].id == 201 || json.weather[0].id == 202 || json.weather[0].id == 210 || json.weather[0].id == 211 || json.weather[0].id == 212 || json.weather[0].id == 213 || json.weather[0].id == 214 || json.weather[0].id == 221 || json.weather[0].id == 230 || json.weather[0].id == 231 || json.weather[0].id == 232) {
        document.querySelector('.weather img').src = "assets/img/scattered-thunderstorms.png";
      }
      else if (json.weather[0].id == 800) {
        document.querySelector('.weather img').src = "assets/img/cloudy.png";

      }

    })

})

if (document.querySelector('input').value.trim() === '') {
  Swal.fire({

    title: 'Please Enter a City Name',
    icon: 'error',
    showClass: {
      popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `
    },
    hideClass: {
      popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `},

    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  })
}
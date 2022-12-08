const wsUri = 'wss://echo-ws-service.herokuapp.com';

const input = document.querySelector('.text-input');
const chatWindow = document.querySelector('.chat-window');
const btnSend = document.querySelector('.send-btn');
const btnGeo = document.querySelector('.geo-btn');

let websocket;

function writeToWindow(message, clientOrServer) {
  let div = document.createElement('div');

  if(clientOrServer === 'client') {
    div.classList.add('message', 'client-message');
  }
  else if(clientOrServer === 'server' || clientOrServer === 'geo') {
    div.classList.add('message', 'server-message');
  }

  div.innerHTML = message;
  chatWindow.appendChild(div);
}

const error = () => {
  writeToWindow('Невозможно получить ваше местоположение', 'server');
}

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  // writeToWindow(`Широта: ${latitude} °, Долгота: ${longitude} °`, 'server');
  writeToWindow(`<a href = 'https://www.openstreetmap.org/#map=18/${latitude}/${longitude}' target="_blank">Ваша геолокация</a>`, 'server')
}

document.addEventListener('DOMContentLoaded', () => {
  let message = input.value;
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {
    // writeToWindow(message, 'client');
  }
  websocket.onclose = function(evt) {
    writeToWindow('DISCONNECTED', 'client');
  }
  websocket.onmessage = function(evt) {
    writeToWindow(`<span>${evt.data} </span>`, 'server');
  }
  websocket.onerror = function(evt) {
    writeToWindow(`<span style="color: red;">ERROR</span>`, 'server')
  }
})

btnSend.addEventListener('click', () => {
  let message = input.value;
  writeToWindow(`${message}`, 'client');
  websocket.send(message);
})

btnGeo.addEventListener('click', () => {
  let message = 'Геолокация';
  writeToWindow(message, 'client');
  navigator.geolocation.getCurrentPosition(success, error);
})
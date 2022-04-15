const openChat = document.querySelector('.chat-widget__side')
const chatWindow = document.querySelector('.chat-widget');
const input = chatWindow.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const closeButton = document.getElementById('chat-close-button');
let timer

const messagesList = [
  'Да, мы Вас услышали!',
  'Работаем над Вашей проблемой!',
  'Вы в этом не одиноки!',
  'Лучшие специалисты уже занимаются Вами!',
  'Делаем все, что в наших силах!',
  'Да-да еще больше шаблонных ответов!',
]

function setMyTimer() {
  const chatWindow = document.querySelector('.chat-widget');
  if (chatWindow.classList.contains('chat-widget_active')) {
    return setInterval(() => {
      chatBotAnswer('Dont sleep!');
      scrollLastElement();
      console.log(new Date().toISOString().slice())
    }, 30000)
  }
}

function getRandomMessage() {
  const index = Math.floor(Math.random() * messagesList.length)

  return messagesList[index];
}

function chatBotAnswer(message) {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${new Date().toLocaleTimeString().slice(0, -3)}</div>
    <div class="message__text">
      ${message}
    </div>
  </div>
`;
}

function scrollLastElement() {
  const messages = Array.from(document.querySelectorAll('.message'));
  const lastMessage = messages[messages.length - 1];
  lastMessage.scrollIntoView();
}

openChat.addEventListener('click', () => {
    chatWindow.classList.add('chat-widget_active');
    timer = setMyTimer();
})

input.addEventListener('change', (e) => {
  clearInterval(timer);
  messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${new Date().toLocaleTimeString().slice(0, -3)}</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>
`;
  input.value = '';
  chatBotAnswer(getRandomMessage());
  scrollLastElement();
  timer = setMyTimer();
})

closeButton.addEventListener('click', () => {
  chatWindow.classList.remove('chat-widget_active');
  clearInterval(timer);
})
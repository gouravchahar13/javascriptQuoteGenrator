const quote=document.querySelector('#quote');
const btn=document.querySelector('#btn');
const writer=document.querySelector('#writer');
const quotes=[{quote:"You are the shuckiest shuck faced shuck in the world!",
writer:"James Dashner"},
{quote:"I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do",
writer:"C. JoyBell C."},
{quote:"life isn't about black and white,look around and you will see that the world is much more colorful than you thought",
writer:"Tal bekerman"}];

btn.addEventListener('click',function(){
    const random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    writer.innerText=quotes[random].writer;
})
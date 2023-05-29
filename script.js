const program = [
    {
        icon:'images/icon1.png',
        title:'Lecture',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },{
        icon:'images/icon2.png',
        title:'Exhibition',
        content:`
        Appreciate various creations applying
         ther knowlege in real world.
         `,
    },{
        icon:'images/icon3.png',
        title:'Forum',
        content:`
        Have the time to share your 
        thoughts and opinions 
        with experts for each topic.
         `,
    },{
        icon:'images/program_icon_04.png',
        title:'Workshop',
        content:`  
            Try creating your own work using open 
            source licence rather than watching at it.
        `,
    },{
        icon:'images/program_icon_05.png',
        title:'Network',
        content:`
        Get opportunities to 
        network with students 
        and developers around the world.
        `,
    },
];

const features = [
    {
        icon:'images/now.jpg',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },
    {
        icon:'images/now.jpg',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },{
        icon:'images/now.jpg',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },{
        icon:'images/now.jpg',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },{
        icon:'images/now.jpg',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },{
        icon:'images/now.jpg',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },
];

const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.nav-item');
const backMenu = document.querySelectorAll('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
  console.log('Thank')
});

backMenu.forEach((element) => element.addEventListener('click', () => {
  hamburger.classList.remove('active');
  Menu.classList.remove('active');
  console.log('Bye!')
}));

document.addEventListener('DOMContentLoaded', () => {
const programs = document.querySelector('.event');
const feature = document.querySelector('.recent');

let cardTemplate = '';
let featureTemplate = '';
program.forEach((card) => {
    const tag = `
            
                <div class="programs">
                    <img src="${card.icon}" alt="">
                    <h2>${card.title}</h2>
                    <p>
                    ${card.content}
                    </p>
                </div>
    `;
    cardTemplate += tag;
});
programs.innerHTML = cardTemplate;

features.forEach((card) => {
    const tag = `
         <div class="featured-card">
                        <div class="img-bg">
                            <img  class="featured-img" src="${card.icon}" alt="">
                        </div>
                        <div class="card">
                            <h2>${card.name}</h2>
                            <span>${card.rank}</span>
                            <i>${card.star}</i>
                            <p>
                            ${card.content}
                            </p>
                        </div>
                    </div>
    `;
    featureTemplate += tag;
});
feature.innerHTML = featureTemplate;
});
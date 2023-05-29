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
        icon:'images/icon1.png',
        title:'Workshop',
        content:`  
            Try creating your own work using open 
            source licence rather than watching at it.
        `,
    },{
        icon:'images/icon1.png',
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
        icon:'images/icon1.png',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },
    {
        icon:'images/icon1.png',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },{
        icon:'images/icon1.png',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },{
        icon:'images/icon1.png',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },{
        icon:'images/icon1.png',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },{
        icon:'images/icon1.png',
        name:'Caleb',
        rank: 'Student',
        star: '⭐️⭐️⭐️⭐️⭐️',
        content:`   
            Listen to the past students with a job,
             sharing their stories and advices.
             `,
    },
];


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
})
programs.innerHTML = cardTemplate;

features.forEach((card) => {
    const tag = `
         <div class="featured-card">
                        <div class="img-bg">
                            <img  class="featured-img" src="images/student1.jpg" alt="">
                        </div>
                        <div class="card">
                            <h2>Johnson kofi</h2>
                            <span>Harvard Law School Professor</span>
                            <p>
                                Benkler studies commons-based peer production, 
                                and published his seminal book,
                                 The Wealth of Networks in 2006.
                            </p>
                        </div>
                    </div>
    `;
    featureTemplate += tag;
})
feature.innerHTML = featureTemplate;
})
// --------------- Arrays Start ----------------
const program = [
  {
    icon: 'images/icon1.png',
    title: 'Networking',
    content: `   
        Connect with industry experts, 
        fellow data scientists, 
        and AI enthusiasts..
             `,
  }, {
    icon: 'images/icon2.png',
    title: 'Insights',
    content: `
        Gain valuable insights 
        from keynote speakers 
        and panel discussions..
         `,
  }, {
    icon: 'images/icon3.png',
    title: 'Workshops',
    content: `
        Participate in hands-on workshops to 
        sharpen your data science and AI skills.
         `,
  }, {
    icon: 'images/program_icon_04.png',
    title: 'Workshop',
    content: `  
            Try creating your own work using open 
            source licence rather than watching at it.
        `,
  }, {
    icon: 'images/program_icon_05.png',
    title: 'Network',
    content: `
        Get opportunities to 
        network with students 
        and developers around the world.
        `,
  },
];

const features = [
  {
    icon: 'images/now.jpg',
    name: 'Jane Smith',
    rank: 'Data Scientist',
    star: 'DataCamp',
    content: `   
        With 10 years of experience in the 
        field, Jane has worked with leading
         tech companies and has been instrumental
         in developing advanced AI solutions.
             `,
    status: '',
  },
  {
    icon: 'images/student1.jpg',
    name: 'John Davis',
    rank: 'AI researcher',
    star: 'ALX',
    content: `   
        John has dedicated his career 
        to pushing the
         boundaries of AI and machine learning.
             `,
    status: '',
  }, {
    icon: 'images/edition1.jpg',
    name: 'Maria Garcia',
    rank: 'Data Science Consultant',
    star: 'NomPass',
    content: `   
        With a background in statistics and 
        data analysis, Maria has helped 
        organizations across diverse sectors
         leverage their
         data for strategic decision-making.
             `,
    status: 'hidden',
  }, {
    icon: 'images/edition2.jpg',
    name: 'David Johnson',
    rank: 'Entrepreneur',
    star: 'ExpressWord',
    content: `   
        David Johnson is a seasoned entrepreneur and AI strategist.
        With a successful track record of launching AI-driven startups.
             `,
    status: 'hidden',
  }, {
    icon: 'images/images (1).jpg',
    name: 'Blessman Newton',
    rank: 'Full Stack Developer',
    star: 'Microverse',
    content: `   
        Blessman is passionate about bridging the gap between
         technical expertise and business outcomes, and her
          presentations focus on practical
         applications of data science in real-world scenarios.
             `,
    status: 'hidden',
  }, {
    icon: 'images/images.png',
    name: 'Caleb Anaane',
    rank: 'Student',
    star: 'DataCamp',
    content: `   
        David is a dynamic speaker who combines 
        his business acumen with technical knowledge
         to inspire and educate
         audiences on the potential of AI
          for innovation and disruption..
             `,
    status: 'hidden',
  },
];
// --------------- Arrays END ----------------

// --------------- Main program section ----------------

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

  // --------------- Main program section ----------------

  // --------------- Featured speakers section ----------------
  features.forEach((card) => {
    const tag = `
         <div class="featured-card featured-mob">
                        <div class="img-bg">
                            <img  class="featured-img" src="${card.icon}" alt="">
                        </div>
                        <div class="card">
                            <h2>${card.name}</h2>
                            <i>${card.rank}</i>
                            <span>${card.star}</span>
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
// --------------- Featured speakers section ----------------

// --------------- Hamburger ----------------
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-item');
const backMenu = document.querySelectorAll('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

backMenu.forEach((element) => element.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));
// --------------- Hamburger ----------------

const loadMore = document.querySelector('.see-more');
let currentItem = 3;
const itemsPerPage = 3; // Number of items to display per "Show More" click

loadMore.addEventListener('click', () => {
  const boxes = [...document.querySelectorAll('.featured-speaker .recent .featured-mob')];

  if (loadMore.textContent === 'Show more') {
    // Show more items
    for (let i = currentItem; i < currentItem + itemsPerPage; i += 1) {
      if (boxes[i]) {
        boxes[i].style.display = 'flex';
      }
    }
    currentItem += itemsPerPage;
  } else {
    // Show less items
    for (let i = currentItem - itemsPerPage; i < currentItem; i += 1) {
      if (boxes[i]) {
        boxes[i].style.display = 'none';
      }
    }
    currentItem -= itemsPerPage;
  }

  // Check if there are more items to show or hide
  if (currentItem >= boxes.length) {
    loadMore.textContent = 'Show less'; // Change button text to "Show Less"
  } else {
    loadMore.textContent = 'Show more'; // Change button text back to "Show More"
  }
});

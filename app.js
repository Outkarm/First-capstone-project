const menuButton = document.querySelector('#mobile-menu');
const menu = document.querySelector('.pop-up-menu');
const menuColor = document.querySelector('.nav-bar');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('is-active');
  menuColor.classList.toggle('active');
  menu.classList.toggle('active');
});

// load featured speakers dynamicly

const featuredSpeakers = [
  {
    speakerName: 'Billy M Beavers',
    speakerAttributes: 'Patient Representative',
    info: 'Freelance creator. Passionate coffee geek. Unable to type with boxing gloves on. Typical analyst. Thinker.',
    speakerImage: './Images/featured-speakers/speaker_01.png',
  },
  {
    speakerName: 'Michael K Moses',
    speakerAttributes: 'Postal Service Clerk',
    info: "My mom was always saying: 'Be whatever you want to be",
    speakerImage: './Images/featured-speakers/speaker_02.png',
  },
  {
    speakerName: 'Frances C Rodriguez',
    speakerAttributes: 'Nonfarm Animal Caretaker',
    info: 'Beauty is only temporary, but your mind lasts you a lifetime.',
    speakerImage: './Images/featured-speakers/speaker_03.png',
  },
  {
    speakerName: 'Armand M McGinnis',
    speakerAttributes: 'Geothermal Technician',
    info: "I think they'd rather us follow our hearts and I hope that's what some people will understand.;Fred Durst;hope",
    speakerImage: './Images/featured-speakers/speaker_04.png',
  },
  {
    speakerName: 'Donna L Pough',
    speakerAttributes: 'Chemical Engineer',
    info: "If you don't like how things are, change it! You're not a tree.",
    speakerImage: './Images/featured-speakers/speaker_05.png',
  },
  {
    speakerName: 'Dana R Lane',
    speakerAttributes: 'Marine Architect',
    info: 'There are almost no sports within which mortal accidents are not a reality.;Dietrich Mateschitz;sports',
    speakerImage: './Images/featured-speakers/speaker_06.png',
  },
];

// create title of featured Speakers page
const footer = document.querySelector('#footer');
const footerTitle = document.createElement('h2');
footerTitle.innerText = 'Featured Speakers';
footerTitle.classList.add('footer-title');
footer.append(footerTitle);

// create horizontal line
const underlineMPH = document.createElement('hr');
underlineMPH.classList.add('underline-mph');
footer.append(underlineMPH);

// create cards container
const allSpeakers = document.createElement('div');
allSpeakers.classList.add('all-speakers');
footer.append(allSpeakers);

function numberOfCards(ramp, params) {
  for (let x = ramp; x < params; x += 1) {
    const speakersCards = document.createElement('div');
    speakersCards.classList.add('speakers-cards');
    allSpeakers.append(speakersCards);

    const speakersImage = document.createElement('div');
    speakersImage.classList.add('speakers-image');
    speakersCards.append(speakersImage);

    const sImage = document.createElement('img');
    sImage.classList.add('featured-speakers');
    sImage.src = featuredSpeakers[x].speakerImage;
    speakersImage.append(sImage);

    const speakerInfo = document.createElement('div');
    speakerInfo.classList.add('speaker-info');
    speakersCards.append(speakerInfo);

    const speakersName = document.createElement('h3');
    speakersName.classList.add('speaker-name');
    speakersName.innerText = featuredSpeakers[x].speakerName;
    speakerInfo.append(speakersName);

    const speakerAttribute = document.createElement('em');
    speakerAttribute.classList.add('speaker-position-attributes');
    speakerAttribute.innerText = featuredSpeakers[x].speakerAttributes;
    speakerInfo.append(speakerAttribute);

    const innerTextLine = document.createElement('hr');
    innerTextLine.classList.add('inner-text-line');
    speakerInfo.append(innerTextLine);

    const shortSpekerInfo = document.createElement('p');
    shortSpekerInfo.classList.add('short-speaker-info');
    shortSpekerInfo.innerText = featuredSpeakers[x].info;
    speakerInfo.append(shortSpekerInfo);
  }
}

const desktopQuery = window.matchMedia('(min-width: 768px)');
if (desktopQuery.matches) {
  for (let x = 0; x < featuredSpeakers.length; x += 1) {
    const speakersCards = document.createElement('div');
    speakersCards.classList.add('speakers-cards');
    allSpeakers.append(speakersCards);

    const speakersImage = document.createElement('div');
    speakersImage.classList.add('speakers-image');
    speakersCards.append(speakersImage);

    const sImage = document.createElement('img');
    sImage.classList.add('featured-speakers');
    sImage.src = featuredSpeakers[x].speakerImage;
    speakersImage.append(sImage);

    const speakerInfo = document.createElement('div');
    speakerInfo.classList.add('speaker-info');
    speakersCards.append(speakerInfo);

    const speakersName = document.createElement('h3');
    speakersName.classList.add('speaker-name');
    speakersName.innerText = featuredSpeakers[x].speakerName;
    speakerInfo.append(speakersName);

    const speakerAttribute = document.createElement('em');
    speakerAttribute.classList.add('speaker-position-attributes');
    speakerAttribute.innerText = featuredSpeakers[x].speakerAttributes;
    speakerInfo.append(speakerAttribute);

    const innerTextLine = document.createElement('hr');
    innerTextLine.classList.add('inner-text-line');
    speakerInfo.append(innerTextLine);

    const shortSpekerInfo = document.createElement('p');
    shortSpekerInfo.classList.add('short-speaker-info');
    shortSpekerInfo.innerText = featuredSpeakers[x].info;
    speakerInfo.append(shortSpekerInfo);
  }
} else {
  numberOfCards(0, 2);

  const seeMore = document.createElement('button');
  seeMore.innerText = 'MORE  ';
  seeMore.classList.add('see-more');
  footer.append(seeMore);

  const seeMoreImg = document.createElement('img');
  seeMoreImg.src = './Images/drop-down-img/down-chevro.png';
  seeMoreImg.classList.add('more-img');
  seeMore.append(seeMoreImg);

  seeMore.addEventListener('click', () => {
    numberOfCards(2, 6);
    seeMore.classList.add('mobile-vanish');
  });
}

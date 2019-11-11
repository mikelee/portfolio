import mindRightImage from '../../assets/mindright-image.png';
import crownClothingImage from '../../assets/crown-image.png';
import portfolioImage from '../../assets/portfolio-image.png';

const projects = [
    {
        id: 1,
        name: 'Mind Right',
        img: mindRightImage,
        description: 'Web app designed to bring users back to a positive mindset. Users sign in and add various quotes/thoughts to their profile. When they need a reminder to stay motivated, Mind Right will generate one of their quotes at random. We often get locked into a mindset. Mind Right penetrates into user\'s minds and brings awareness to other aspects of reality.',
        tech: ['Javascript, Node.js, EJS, Express, Mongoose, MongoDB, Passport.js']
    },
    {
        id: 2,
        name: 'Crown Clothing',
        img: crownClothingImage,
        description: 'E-commerce clothing store that allows users to sign in using Firebase, and add/remove items from their cart. State is maintain by using React and Redux. Cart items are memoized using the reselect library.',
        tech: ['React', 'JSX', 'Redux', 'Firebase']
    },
    {
        id: 3,
        name: 'mikelee.dev',
        img: portfolioImage,
        description: 'This is the website that you\'re on right now! Instead of using a pre-made template, I wanted to make my website from the ground up. This gives me more control over my website and more practice. This static site is built on React and is hosted by GitHub Pages. It also uses Basin to allow form submissions while keeping the site static.',
        tech: ['React', 'JSX', 'SCSS', 'Basin']
    }
];

export default projects;
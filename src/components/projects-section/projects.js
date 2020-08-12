import dailyAchievementsImage from '../../assets/daily-achievements-image.png';
import mindRightImage from '../../assets/mindright-image.png';
import crownClothingImage from '../../assets/crown-image.png';

const projects = [
    {
        id: 1,
        name: 'Daily Achievements',
        img: dailyAchievementsImage,
        description: 'A to do list app with a twist. To dos are linked to rewards. When all the required to dos are completed, the reward is unlocked.',
        tech: 'Javascript, React, Redux, Node.js, Express, MySQL, Passport.js',
        url: 'https://dailyachievements.herokuapp.com'
    },
    {
        id: 2,
        name: 'Mind Right',
        img: mindRightImage,
        description: 'Keep a postive mindset and stay focused on what matters with MindRight. Add quotes with a background image. Simply click shuffle when you need a reminder and one of your quotes will appear.',
        tech: 'Javascript, EJS, Node.js, Express, MongoDB, Mongoose, Passport.js',
        url: 'https://mind-right.herokuapp.com'
    },
    {
        id: 3,
        name: 'Crown Clothing',
        img: crownClothingImage,
        description: 'Browse through clothing collections, add items to your cart, and checkout on this e-commerce clothing website.',
        tech: 'Javascript, React, Redux, Firebase, Stripe',
        url: 'http://crown-clothing-ml.herokuapp.com'
    }
];

export default projects;
import dailyAchievementsImage from '../../assets/daily-achievements-image.png';
import mindRightImage from '../../assets/mindright-image.png';
import crownClothingImage from '../../assets/crown-image.png';

const projects = [
    {
        id: 1,
        name: 'Daily Achievements',
        img: dailyAchievementsImage,
        description: 'A to do list app with a twist. To dos are linked to rewards. When all the required to dos are completed, the reward is unlocked.',
        tech: ['Javascript, React, Redux, Node.js, Express, MySQL, Passport.js']
    },
    {
        id: 2,
        name: 'Mind Right',
        img: mindRightImage,
        description: 'Web app designed to bring users back to a positive mindset. Users sign in and add various quotes/thoughts to their profile. When they need a reminder to stay motivated, Mind Right will generate one of their quotes at random. We often get locked into a mindset. Mind Right penetrates into user\'s minds and brings awareness to other aspects of reality.',
        tech: ['Javascript, Node.js, EJS, Express, Mongoose, MongoDB, Passport.js']
    },
    {
        id: 3,
        name: 'Crown Clothing',
        img: crownClothingImage,
        description: 'E-commerce clothing store that allows users to sign in using Firebase, and add/remove items from their cart. State is maintain by using React and Redux. Cart items are memoized using the reselect library.',
        tech: ['React', 'JSX', 'Redux', 'Firebase']
    }
];

export default projects;
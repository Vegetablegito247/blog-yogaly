import morning from '../images/morning.jpg';
import stress from '../images/stress.jpg';
import pranayama from '../images/pranayama.jpg';
import nutrition from '../images/nutrient.jpg';
import class1 from '../images/class1.jpg';
import class2 from '../images/class2.jpg';
import class3 from '../images/class3.jpg';
import class4 from '../images/class4.jpg';

export const blogs = [
    {
        _id: 1,
        title: 'The Benefits of Morning Yoga',
        author: 'Jane Doe',
        date: 'July 15, 2024',
        image: morning,
        summary: 'Discover how practicing yoga in the morning can set a positive tone for your day, improve your flexibility, and boost your mental clarity.',
        content: 'Morning yoga has numerous benefits, including increased energy levels, improved mental focus, and a positive start to your day. In this blog, we explore various morning yoga routines and tips to make the most out of your practice...'
    },
    {
        _id: 2,
        title: 'Yoga for Stress Relief',
        author: 'John Smith',
        date: 'July 18, 2024',
        image: stress,
        summary: 'Learn how yoga can help you manage stress effectively by incorporating breathing exercises, meditation, and relaxing poses into your routine.',
        content: 'Stress is a common issue that many people face. Yoga offers a holistic approach to managing stress by promoting relaxation and mindfulness. This blog delves into specific yoga poses and techniques that can help alleviate stress and improve overall well-being...'
    },
    {
        _id: 3,
        title: 'The Power of Breath: Pranayama Techniques',
        author: 'Emily Turner',
        date: 'July 20, 2024',
        image: pranayama,
        summary: 'Explore the ancient practice of pranayama and its powerful effects on your physical and mental health through controlled breathing techniques.',
        content: 'Pranayama, or breath control, is a vital aspect of yoga that can greatly enhance your practice. In this blog, we discuss different pranayama techniques, their benefits, and how to incorporate them into your daily routine for better health and vitality...'
    },
    {
        _id: 4,
        title: 'Yoga and Nutrition: A Holistic Approach',
        author: 'Sarah Lee',
        date: 'July 22, 2024',
        image: nutrition,
        summary: 'Understand the connection between yoga and nutrition, and how a balanced diet can complement your yoga practice to achieve optimal health.',
        content: 'Yoga and nutrition go hand in hand when it comes to achieving overall wellness. This blog explores the synergy between a balanced diet and a consistent yoga practice, offering tips on healthy eating habits that can enhance your yoga experience and promote a healthier lifestyle...'
    }
];

export const classes = [
    {
        _id: 1,
        title: 'Beginner Yoga',
        instructor: 'Jane Doe',
        date: 'Every Monday, 7:00 AM',
        image: class3,
        summary: 'Perfect for those new to yoga, this class covers the basics and helps you build a strong foundation in yoga practice.',
        description: 'Our Beginner Yoga class is designed to introduce newcomers to the fundamental poses, breathing techniques, and principles of yoga. With a focus on proper alignment and mindful movement, this class provides a supportive environment for you to start your yoga journey...'
    },
    {
        _id: 2,
        title: 'Vinyasa Flow',
        instructor: 'John Smith',
        date: 'Every Wednesday, 6:00 PM',
        image: class2,
        summary: 'A dynamic and energetic class that connects breath with movement to create a flowing sequence of poses.',
        description: 'Vinyasa Flow is a dynamic style of yoga that links breath with movement in a continuous flow of poses. This class will challenge your strength, flexibility, and endurance, while promoting mental focus and relaxation. Suitable for all levels, our Vinyasa Flow class encourages you to find your own rhythm and flow...'
    },
    {
        _id: 3,
        title: 'Restorative Yoga',
        instructor: 'Emily Turner',
        date: 'Every Friday, 8:00 PM',
        image: class1,
        summary: 'A gentle and relaxing class focused on restorative poses that help you unwind and de-stress.',
        description: 'Restorative Yoga is a gentle practice that uses props to support the body in restful poses. This class is perfect for relieving stress, enhancing flexibility, and promoting deep relaxation. Each pose is held for an extended period, allowing you to fully relax and rejuvenate your mind and body...'
    },
    {
        _id: 4,
        title: 'Power Yoga',
        instructor: 'Sarah Lee',
        date: 'Every Saturday, 10:00 AM',
        image: class4,
        summary: 'An intense and invigorating class designed to build strength, flexibility, and stamina through challenging poses.',
        description: 'Power Yoga is a vigorous and fitness-based approach to vinyasa-style yoga. This class is designed to build strength, flexibility, and endurance through a series of challenging poses and sequences. It’s ideal for those looking for a high-energy workout that combines the physical benefits of yoga with the intensity of a fitness routine...'
    }
];

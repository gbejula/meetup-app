import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Thomas_Wolfe%27s_Home.jpg',
    address: 'Some add 4, 12345 some city',
    description: 'This is the first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Thomas_Wolfe%27s_Home.jpg',
    address: 'Some add 8, 1234 some city',
    description: 'This is the Second meetup',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;

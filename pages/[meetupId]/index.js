import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/7/7e/Thomas_Wolfe%27s_Home.jpg'
      title='First Meetup'
      address='New street, new city'
      description='New meetup'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupsData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/7/7e/Thomas_Wolfe%27s_Home.jpg',
        id: 'meetupId',
        title: 'First Meetup',
        address: 'New stree, new city',
        description: 'New meetup',
      },
    },
  };
}

export default MeetupDetails;

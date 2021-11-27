import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://images.news18.com/ibnlive/uploads/2020/02/Donald-Trump-at-Taj-Mahal.jpg?impolicy=website&width=0&height=0',
        address: 'Taj Mahal, Agra, India',
        decription: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://images.news18.com/ibnlive/uploads/2020/02/Donald-Trump-at-Taj-Mahal.jpg?impolicy=website&width=0&height=0',
        address: 'Taj Mahal, Agra, India',
        decription: 'This is a second meetup'
    }
]

const HomePage = props => {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    }
}

export default HomePage
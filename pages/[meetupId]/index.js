import MeetupDetail from '../../components/meetups/MeetupDetails'

const MeetupDetails = props => {
    return (
        <>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false, // all meetupId values 
        
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId

    // async function

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://images.news18.com/ibnlive/uploads/2020/02/Donald-Trump-at-Taj-Mahal.jpg?impolicy=website&width=0&height=0',
                title: 'A Meetup',
                address: 'Taj Mahal, Agra, India',
                description: 'The meetup description'
            }
        }
    }
}

export default MeetupDetails

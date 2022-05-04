import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head'
import { Fragment } from 'react';

function NewMeetupPage() {
    const router = useRouter()

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data)

        router.push('/')

    }

    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name='description' content="react meetups" />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />

        </Fragment>
    )
}

export default NewMeetupPage;
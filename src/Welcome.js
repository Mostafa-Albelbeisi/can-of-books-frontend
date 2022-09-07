import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Welcome extends React.Component {
    render() {
        return (
            <div id="welcome">
                <h1 className='wel'>Welcome to the Book website</h1>
                <h2 className='wel'>Sign in to view a books</h2>
            </div>
        )
    }
}

export default withAuth0(Welcome);
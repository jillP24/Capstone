import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-full-screen w-full">
            <div className="flex-column justify-center items-center max-w-320">
                <img
                    className="mb-8 w-full"
                    src="/assets/images/illustrations/404.svg"
                    alt=""
                />
                {/* want to redirect back to whichever route holds our homepage */}
                <Link to="/">
                    <Button
                        className="capitalize"
                        variant="contained"
                        color="primary"
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound

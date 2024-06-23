import React from 'react'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>Error occurred</h1>
                <p>Can't find this page.</p>
            </main>
        </>
    )
}

export default ErrorPage
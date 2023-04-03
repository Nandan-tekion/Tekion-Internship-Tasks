import React from 'react'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occurred';
    let message = 'Something went wrong';

    if(error.status === 500) {
        message = error.data.message;
    }
    if(error.status === 404){
        title = 'Not Found !';
        message = 'Could not find Page !';
    }
  return (
    <>
    <MainNavigation />
    <PageContent title={title}>{message}</PageContent>
    </>
  )
}

export default ErrorPage

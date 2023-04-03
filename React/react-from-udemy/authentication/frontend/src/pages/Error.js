import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = error.data.message;

  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;

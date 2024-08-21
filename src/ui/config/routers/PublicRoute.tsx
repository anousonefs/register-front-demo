import { Suspense } from 'react';
import PageLoading from 'ui/components/PageLoading';
import Login from 'ui/pages/Login';

function PublicRoute() {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <Login />
      </Suspense>
    </>
  );
}

export default PublicRoute;

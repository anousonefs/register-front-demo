import { Suspense } from 'react';
import PageLoading from 'ui/components/PageLoading';
import CRUD from 'src/ui/pages/CRUD';

function PrivateRoute() {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <CRUD />
      </Suspense>
    </>
  );
}

export default PrivateRoute;

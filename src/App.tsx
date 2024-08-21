import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from 'ui/config/react-query/client';
import routers from 'ui/config/routers';
import { DialogProvider } from 'ui/hooks/dialog/useDialog';
import './App.css';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DialogProvider>
          <RouterProvider router={routers} />
        </DialogProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => delayForDemo(import('./pages/home')));
const CompoundPage = lazy(() => delayForDemo(import('./pages/compound')));
const ContainerPresentationPage = lazy(() => delayForDemo(import('./pages/container-presentation')));
const HOCPage = lazy(() => delayForDemo(import('./pages/hoc')));
const HookPage = lazy(() => delayForDemo(import('./pages/hook')));
const ProviderPage = lazy(() => delayForDemo(import('./pages/provider')));
const RenderPropsPage = lazy(() => delayForDemo(import('./pages/render-props')));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<h2>Loading Home Page...</h2>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/compound',
        element: (
          <Suspense fallback={<h2>Loading Compound Page...</h2>}>
            <CompoundPage />
          </Suspense>
        ),
      },
      {
        path: '/container-presentation',
        element: (
          <Suspense fallback={<h2>Loading Container Presentation Page...</h2>}>
            <ContainerPresentationPage />
          </Suspense>
        ),
      },
      {
        path: '/hoc',
        element: (
          <Suspense fallback={<h2>Loading HOC Page...</h2>}>
            <HOCPage />
          </Suspense>
        ),
      },
      {
        path: '/hook',
        element: (
          <Suspense fallback={<h2>Loading Hook Page...</h2>}>
            <HookPage />
          </Suspense>
        ),
      },
      {
        path: '/provider',
        element: (
          <Suspense fallback={<h2>Loading Provider Page...</h2>}>
            <ProviderPage />
          </Suspense>
        ),
      },
      {
        path: '/render-props',
        element: (
          <Suspense fallback={<h2>Loading Render Props Page...</h2>}>
            <RenderPropsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

// Add a fixed delay so you can see the loading state
function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

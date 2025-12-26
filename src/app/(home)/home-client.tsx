'use client';

import { useEffect } from 'react';

import { useAppDispatch } from 'src/lib/hooks';
import { fetchLandingMetals } from 'src/lib/features/landing';

import { HomeView } from 'src/sections/home/view';

export default function HomeClient() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLandingMetals());

    // Set an interval to fetch every 5 seconds
    const intervalId = setInterval(() => {
      dispatch(fetchLandingMetals());
    }, 60000);

    // Return a function to clear the interval
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return <HomeView />;
}

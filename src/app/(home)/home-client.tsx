'use client';

import { useEffect } from 'react';
import { fetchLandingMetals } from 'src/lib/features/landing';
import { useAppDispatch } from 'src/lib/hooks';

import { HomeView } from 'src/sections/home/view';

export default function HomeClient() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLandingMetals());
  }, [dispatch]);

  return <HomeView />;
}

'use client';

import { useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks';
import { fetchLandingMetals } from 'src/lib/features/landing';

import { PriceView } from 'src/sections/price/view';

export default function GiaVangBacClient() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLandingMetals());
  }, [dispatch]);

  return <PriceView />;
}

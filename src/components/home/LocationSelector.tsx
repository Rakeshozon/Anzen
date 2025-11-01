'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { getStates } from '@/lib/data';
import type { State } from '@/lib/types';
import { Search } from 'lucide-react';

export function LocationSelector() {
  const router = useRouter();
  const allStates: State[] = getStates();

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [citiesInState, setCitiesInState] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleStateChange = (stateName: string) => {
    setSelectedState(stateName);
    const stateData = allStates.find((s) => s.name === stateName);
    setCitiesInState(stateData ? stateData.cities : []);
    setSelectedCity('');
    setIsDisabled(true);
  };

  const handleCityChange = (cityName: string) => {
    setSelectedCity(cityName);
    setIsDisabled(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCity) {
      router.push(`/city/${selectedCity.toLowerCase()}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 w-full max-w-2xl p-4 bg-white/20 backdrop-blur-md rounded-lg shadow-lg"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
        <Select value="India" disabled>
          <SelectTrigger className="w-full text-black">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="India">India</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={handleStateChange} value={selectedState}>
          <SelectTrigger className="w-full text-black">
            <SelectValue placeholder="Select a State" />
          </SelectTrigger>
          <SelectContent>
            {allStates.map((state) => (
              <SelectItem key={state.name} value={state.name}>
                {state.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={handleCityChange}
          value={selectedCity}
          disabled={!selectedState}
        >
          <SelectTrigger className="w-full text-black">
            <SelectValue placeholder="Select a City" />
          </SelectTrigger>
          <SelectContent>
            {citiesInState.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button type="submit" disabled={isDisabled} variant="secondary" className="w-full sm:col-span-2 md:col-span-1">
          <Search className="mr-2 h-4 w-4" />
          Explore
        </Button>
      </div>
    </form>
  );
}

// CryptoHalving.ts
import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/bitcoin';
const HALVING_EVENT_NAME = 'bitcoin-halving';

export async function fetchNextHalvingDate(): Promise<Date> {
  try {
    const response = await axios.get(`${COINGECKO_API_URL}/events`);
    const halvingEvent = response.data.events.find((event: any) => event.type === HALVING_EVENT_NAME);
    const halvingDate = new Date(halvingEvent.date);
    return halvingDate;
  } catch (error) {
    console.error('Error fetching next halving date:', error);
    throw error;
  }
}

export function getTimeUntilHalving(halvingDate: Date): number {
  const currentTime = new Date();
  const timeUntilHalving = halvingDate.getTime() - currentTime.getTime();
  return Math.max(0, timeUntilHalving); // Garantiza que el resultado no sea negativo
}




// CryptoPrice.ts
import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';
const CRYPTO_ID = 'bitcoin';

export async function fetchBitcoinPrice(): Promise<number> {
  try {
    const response = await axios.get(`${COINGECKO_API_URL}?ids=${CRYPTO_ID}&vs_currencies=usd`);
    return response.data[CRYPTO_ID].usd;
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    throw error;
  }
}


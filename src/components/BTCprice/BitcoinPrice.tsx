// components/BitcoinPrice.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface BitcoinPriceProps {
  // Add any props if needed
}

const BitcoinPrice: React.FC<BitcoinPriceProps> = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        setBitcoinPrice(response.data.bitcoin.usd);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    // Fetch Bitcoin price initially
    fetchBitcoinPrice();

    // Set up an interval to fetch the price every 60 seconds
    const intervalId = setInterval(fetchBitcoinPrice, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="px-6 py-3 my-2 transition-all border-2 w-fit rounded-xl">
      Bitcoin price: {bitcoinPrice ? `$${bitcoinPrice.toFixed(2)}` : 'Loading...'}
    </p>
  );
};

export default BitcoinPrice;

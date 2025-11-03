import { useState, useEffect } from 'react';
import navbar from "<div styleName={} />components/navbar";
import footer from "<div styleName={} />components/footer";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from an API or perform any asynchronous operation
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <navbar />
            <main>
                {data ? (
                    <card data={data} />
                ) : (
                    <p>Loading...</p>
                )}
            </main>
            <footer />
        </div>
    );
}
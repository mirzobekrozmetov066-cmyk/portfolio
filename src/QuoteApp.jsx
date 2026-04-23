import { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';

function QuoteApp() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Xatolikni ko'rish uchun

  const getNewQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      // Keling, eng ishonchli ochiq manzilni sinaymiz
      const res = await fetch('https://dummyjson.com/quotes/random');
      const data = await res.json();
      
      // Ma'lumot tuzilishi APIga qarab har xil bo'ladi
      // DummyJSON da: data.quote va data.author 
      setQuote({
        content: data.quote,
        author: data.author
      });
    } catch (err) {
      setError("Ma'lumotni yuklashda xatolik yuz berdi!");
      console.error("Xato tafsiloti:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  useEffect(() => {
//   if (quote) {
//     const ranglar = ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c'];
//     const tasodifiyRang = ranglar[Math.floor(Math.random() * ranglar.length)];
//     document.body.style.backgroundColor = tasodifiyRang;
  
//     document.body.style.transition = '0.5s'; // Rang silliq o'zgarishi uchun
//   }
}, [quote]); // Faqat hikmat o'zgarganda ishlaydi

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Kun Hikmati</h1>

      {loading && <p>Yuklanmoqda...</p>}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && quote && (
        <QuoteCard matn={quote.content} muallif={quote.author} />
      )}

      <button onClick={getNewQuote} style={{ marginTop: '20px', padding: '10px' }}>
        Yangi hikmat
      </button>

    </div>
  );
}
export default QuoteApp;
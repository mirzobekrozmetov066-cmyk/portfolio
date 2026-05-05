import { useEffect, useState } from "react";
import axios from'axios';


function CurrencyConventor(){
    const [rates,setRates]=useState([]);
    const [amout,SetAmout]=useState(1);
    const [fromCurrency,setFromCurrency]=useState('USD');
    const [toCurrency,setToCurrency]=useState('UZS');
    const [results,setResult]=useState(0);

    useEffect(()=>{
        const fetchRates = async () =>{
            try{
                const response = await axios.get('https://cbu.uz/uz/arkhiv-kursov-valyut/json/');
                const uzs = {Ccy:'UZS',Rate:'1',CcyNm_UZ:"O'zbek somi"};
                setRates([uzs,...response.data]);
            }catch(error){
                console.error("Xatolik",error)
            }
        };
        fetchRates();
    },[]);

    useEffect(() =>{
     if(rates.length >0){
        const fromRate = rates.find(r=> r.Ccy === fromCurrency)?.Rate;
        const toRate = rates.find(r=>r.Ccy === toCurrency)?.Rate;

        const calc = (amout*fromRate)/toRate;
        setResult(calc.toFixed(2));
     }
    },[amout, fromCurrency,toCurrency,rates]);

    return(
        <div style={{padding:'30px',maxWidth:'500px',margin:'0 auto',background:'#1f84b6',borderRadius:'15px',boxShadow:'0 4px 8px rgba(0,0,0,0.1'}}>
            <h2 style={{textAlign:'center'}}>Valyuta Konverteri</h2>

            <div style={{marginBlock:'20px'}}>
                <label>Miqdorini kiriting:</label>
                <input type="number"
                value={amout}
                onChange={(e)=>SetAmout(e.target.value)}
                style={{width:'100%',padding:'10px',marginTop:'5px',borderRadius:'5px',border:'1px solid #ccc'}}
                 />
            </div>
            <div style={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                <div style={{flex:'1'}}>
                    <label>Dan:</label>
                    <select value={fromCurrency}onChange={(e)=>setFromCurrency(e.target.value)}
                        style={{width:'100%',padding:'10px',borderRadius:'5px'}}>
                            {rates.map(r=> <option key={r.Ccy}value={r.Ccy}>{r.Ccy}-{r.CcyNm_uz}</option>)}
                        </select>
                </div>
            <div style={{flex:'1'}}>
                    <label>Ga:</label>
                    <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}
                        style={{width:'100%',padding:'10px',borderRadius:'5px'}}>
                            {rates.map(r=> <option key={r.Ccy}value={r.Ccy}>{r.Ccy}-{r.CcyNm_uz}</option>)}
                        </select>
                </div>
              
            </div>
            <div style={{marginTop:'30px',textAlign:'center',padding:'20px',background:'#fff',borderRadius:'10px'}}>
                <h3 style={{margin:'0'}}>Natija:</h3>
                <p style={{font:'24px,bold',color:'#2ecc71'}}>
                    {amout}{fromCurrency}={results}{toCurrency}
                </p>
            </div>
        </div>
    );

}
export default CurrencyConventor;
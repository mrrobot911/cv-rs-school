import { useState } from "react";
import useMyContext from "../hooks/useMyContext";
import { locale } from "../utils/Context";

const Hero = () => {
  const text1 = 'kelwin2705@gmail.com';
  const text2 = '@kelwin27';
  const text3 = 'github.com/mrrobot911';
  const text4 = 'kelwin911';
  const { context } = useMyContext();
  const [ show, setShow ] = useState(false);

  const textToRender = `
  document.querySelector('#loan-form').addEventListener('submit', function(e){
      document.querySelector('#results').style.display = 'none';
      document.querySelector('#loading').style.display = 'block';
  
      setTimeout(calculateResults, 2000);
  
      e.preventDefault();
  });
  
  // Calculate the results
  function calculateResults(){

      const amount = document.getElementById('amount');
      const interest = document.getElementById('interest');
      const years = document.getElementById('years');
      const monthlyPayment = document.getElementById('monthly-payment');
      const totalPayment = document.getElementById('total-payment');
      const totalInterest = document.getElementById('total-interest');
  
      const principle = parseFloat(amount.value);
      const calculatedInterest = parseFloat(interest.value) / 100 / 12;
      const calculatedPayments = parseFloat(years.value) * 12;
      
      const x = Math.pow(1 + calculatedInterest, calculatedPayments);
      const monthly = (principle * x * calculatedInterest) / (x - 1);
  
      if(isFinite(monthly)){
          monthlyPayment.value = monthly.toFixed(2);
          totalPayment.value = (monthly * calculatedPayments).toFixed(2);
          totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);
  
          document.querySelector('#results').style.display = 'block';
          document.querySelector('#loading').style.display = 'none';
      } else {
          showError('Please check your inputs');
      }
  }
  
  function showError(error){
      document.querySelector('#results').style.display = 'none';
      document.querySelector('#loading').style.display = 'none';
  
      const errorDiv = document.createElement('div');
  
      const card = document.querySelector('.card');
      const heading = document.querySelector('.heading');
  
      errorDiv.className = 'alert alert-danger';
      
      errorDiv.appendChild(document.createTextNode(error));
  
      card.insertBefore(errorDiv, heading);
  
      setTimeout(clearError, 4000);
  }
  
  function clearError(){
      document.querySelector('.alert').remove();
  }`
  const copyLink =(e) =>{
    navigator.clipboard.writeText(e.target.value);
    setShow(true);
    setTimeout(() => {
      setShow(false);
       }, 1000);
  }
  return (
    <section className="hero__section">
      <div className="hero__container">
        <div className="wrap">
          <img className="circle"/>
        </div>
        <h1 className="lineUp">{locale[context.local]["h1"]}</h1>
        <div>
          <h2 className="contacts__head">{locale[context.local]["contact"]}</h2>
          <ul className="hero__contacts">
            <li><p>E-mail:</p><button value={text1} onClick={(e)=>copyLink(e)}>{text1}</button></li>
            <li><p>Telegram:</p><button value={text2} onClick={(e)=>copyLink(e)}>{text2}</button></li>
            <li><p>Github:</p><button value={text3} onClick={(e)=>copyLink(e)}>{text3}</button></li>
            <li><p>Discord:</p><button value={text4} onClick={(e)=>copyLink(e)}>{text4}</button></li>
            {show && <p className="alert__copy">{locale[context.local]["alert"]}</p>}
          </ul>
        </div>
      </div>
      <div className="hero__container hero__code">
        <p>{textToRender}</p>
      </div>
    </section>
  )
}

export default Hero
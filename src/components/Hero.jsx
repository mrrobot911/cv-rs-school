
const Hero = () => {
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
  return (
    <section className="hero__section">
        <div className="hero__container">
          <div className="wrap">
            <img className="circle"/>
          </div>
          <h1 className="lineUp">Hi, my name KelWin!</h1>
          <div>
            <h2>Contact information:</h2>
            <div className="hero__contacts">
              {/* <img className="contactImg" src="/src/assets/phone.png"/>
              <img className="contactImg" src="/src/assets/telegram.png"/> */}
              
            </div>
          </div>
        </div>
        <div className="hero__container hero__code">
          <p>{textToRender}</p>
        </div>
    </section>
  )
}

export default Hero
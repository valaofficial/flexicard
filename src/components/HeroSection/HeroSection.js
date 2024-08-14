import './style.css'

export default function HeroSection() {
  return (
    <section className='hero-section' style={{'backgroundImage': 'url(/images/background_1.jpg)'}}>
        <div className='hero-section-overlay'>
            <div className='hero-section-content'>
                <div className='hero-section-info'>
                    <div className='hero-section-header'>The premium <br/> card for you</div>
                    <div className='hero-section-body'>Choosing the Flexicard means pushing back the limits and payment constraints, even abroad</div>
                    <div></div>
                </div>

                <div className='hero-section-img'>
                    <img src='/images/hero-section.png' alt='Hero Section Cards'/>
                </div>
            </div>
        </div>
    </section>
  );
}


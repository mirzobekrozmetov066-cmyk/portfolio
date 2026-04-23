import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-left">
                <img style={{width:'400px',height:'400px'}}
                    src="https://rustudy.uz/wp-content/uploads/2025/02/dall%C2%B7e-2025-02-19-15.12.32-a-professional-software-developer-working-in-a-high-tech-office-surrounded-by-multiple-screens-displaying-code-and-digital-schematics.-the-developer-.webp"
                    alt="profile"
                    className="about-img"
                />
            </div>

            <div className="about-right">
                <h1>
                    Hi, I'm <span>Mirzobek</span>
                </h1>
                <h2>I'm a Full Stack Developer.</h2>

                <ul>
                    <li>☕ coffee lover</li>
                    <li>🌍 Uzbekistan</li>
                    <li>💻 React Developer</li>
                    <li>📧 mirzobek@gmail.com</li>
                </ul>


    <a className='a' href="https://instagram.com/rozmetovv.10" target="_blank">
        <i className="fab fa-instagram"></i>
    </a>


    <a className='a' href="https://github.com/mirzobekrozmetov066-cmyk" target="_blank">
        <i className="fab fa-github"></i>
    </a>


    <a className='a' href="https://t.me/rzmtv_m" target="_blank">
        <i className="fab fa-telegram"></i>
    </a>


    <a className='a' href="https://linkedin.com/in/your_username" target="_blank">
        <i className="fab fa-linkedin"></i>
    </a>
            </div>
        </div>
    )
}

export default About
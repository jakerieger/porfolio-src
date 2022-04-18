import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav>
            <div style={{
                width: 48,
                height: 48,
            }}>
                <Logo />
            </div>
            <div style={{ flex: 1 }} />
            <div className="navlinks-container">
                <a href="#about" className="link"><span>01</span>About Me</a>
                <a href="/" className="link"><span>02</span>Experience</a>
                <a href="/" className="link"><span>03</span>Portfolio</a>
                <a href="/" className="link"><span>04</span>Contact</a>
                <a className="button" href="/files/resume.pdf">Resume</a>
            </div>
        </nav>
    )
}
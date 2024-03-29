import { AiFillGithub,
AiFillLinkedin } from "react-icons/ai"

export default function Footer() {
    return (
        <footer>
        <p>© 2024 Max Martinez</p>
        <p>
          <a href="https://github.com/maxmruiz" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>
            <AiFillGithub />
          </a>
          {' | '}
          <a href="https://www.linkedin.com/in/max-martinez1010" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>
            <AiFillLinkedin />
        </a>
        </p>
      </footer>
    )
}
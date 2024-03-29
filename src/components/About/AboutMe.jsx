import SkillSet from "./SkillSet"
import Tools from "./Tools"
import Particle from "../Particle"

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <Particle />
            <h1 id="firstH">Get to know <span style={{color:'#7393B3'}}> me</span></h1>
            <div className="aboutBody">
                <div className="details">
                    <p>
                        Hi everyone! My name is Max and as previously mentioned, I am an aspiring software engineer.
                        <br />
                        Throughout my life I have enjoyed computers, I always found it fascinating how computers are able to do such complex things seems like magic.
                        <br />
                        However, as most of us in the field know and how my instructor always says, it is far from magic.
                        <br />
                        Actually, it is even more fascinating understanding how they work and why they work. I find great joy in creating something from scratch and watch it come to life in real time. Which is exactly why I do what I do.
                        <br />
                        I am currently attending a fullstack coding bootcamp at the University of Miami and currently work there as a desktop support technician.
                    </p>
                </div>
                <div className="extra">
                    <p>Aside from programming I love...</p>
                    <ul>
                        <li>Animals</li>
                        <li>Video Games</li>
                        <li>Astronomy</li>
                        <li>Literature</li>
                        <li>The arts</li>
                        <li>Skateboarding</li>
                    </ul>
                </div>
                <div className="skillSet">
                    <h1><span style={{color:'#7393B3'}}> Languages </span> I Use</h1>
                    <SkillSet />
                </div>
                <div className="toolSet">
                    <h1><span style={{color:'#7393B3'}}>Tools</span> I Use</h1>
                    <Tools />
                </div>
            </div>
        </div>
    )
}
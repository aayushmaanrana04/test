import ButtonPrimary from "../components/ButtonPrimary";
import ServiceHero from "../components/serviceHero";
import styles from "../styles/services.module.css";
//icons
import { BsHddNetworkFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { GoRadioTower } from "react-icons/go";
import { MdSettingsApplications } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { BiRadar } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";


//vectors
import Image from "next/image";
import team from "../assets/svgs/network-security.svg";
import application from '../assets/svgs/application.svg'
import other from '../assets/svgs/other.svg'
import workshop from '../assets/svgs/workshop.svg'
import cyber from '../assets/svgs/cyberforensic.svg'
import iot from '../assets/svgs/iot.svg'
import network from '../assets/svgs/network.svg'

function Services() {
  return (
    <div className={styles.services}>
      <ServiceHero />
      {/* even  */}
      <section className={`${styles.service} ${styles.even}`}>
        <div className={styles.left}>
          {/* <div className={styles.mock1}> */}
          <div className={styles.content}>
            <div className={styles.row}>
              <BsHddNetworkFill size={50}/>
              <p className={styles.name}>Network Security Assessment</p>
            </div>
            <h1 className={styles.heading}>
              Protect your network, so you can expand it with ease
            </h1>
            <div className={styles.p}>
              Our network security assessment helps you identify potential entry
              portals used by cybercriminals to launch an attack. This includes:
              <ul>
                <li>
                  External and internal network penetration testing to help you
                  identify vulnerabilities in external and internal networks
                  that cybercriminals can exploit.
                </li>
                <li>
                  Wireless penetration testing to reckon the risks and chances
                  of leakages, bugs or viruses through wireless installation.
                </li>
                <li>
                  SCADA (Supervisory Control and Data Acquisition) penetration
                  testing is used for monitoring and controlling industrial
                  systems, infrastructure and control systems.
                </li>
              </ul>
            </div>
            <ButtonPrimary link={"contact"} text={"GET A DEMO"} />
          </div>
        </div>
        <div className={`${styles.imageholder}`}>
        <Image
          className={styles.image}
          src={network}
          fill
          // sizes="(min-width: 767px) 200px,500px"
        />
        </div>
      </section>

      {/* odd  */}
      <section className={`${styles.service} ${styles.odd}`}>
        <div className={styles.left}>
          <div className={styles.content}>
            <div className={styles.row}>
              <RiTeamFill size={50} />
              <p className={styles.name}>Blue, Red and Purple</p>
            </div>
            <h1 className={styles.heading}>
              Use-case scenarios of blue, red, and purple assessments
            </h1>
            <div className={styles.p}>
              The Adversary Simulation services help you understand your network
              strength and how it fares against multiple security measures like:
              <ul>
                <li>
                  Red team assessment helps you generate an efficient solution
                  by assessing your network response to data breaches,
                  cyber-attacks, etc.
                </li>
                <li>
                  Purple team assessment is simultaneously testing red and blue
                  team measures to provide complete assurance of your security
                  system.
                </li>
                <li>
                  Blue team assessment analyzes the existing security measures
                  to provide solutions that identify, block and fight security
                  risks.
                </li>
              </ul>
            </div>
            <ButtonPrimary link={"contact"} text={"GET A DEMO"} />
          </div>
        </div>
        <div className={`${styles.imageholder}`}>
        <Image
          className={styles.image}
          src={team}
          fill
          // sizes="(min-width: 767px) 200px,500px"
        />
        </div>
      </section>
      {/* even  */}
      <section className={`${styles.service} ${styles.even}`}>
        <div className={styles.left}>
          <div className={styles.content}>
            <div className={styles.row}>
              <GoRadioTower size={50} />
              <p className={styles.name}>IoT Assessment</p>
            </div>
            <h1 className={styles.heading}>
              Get an accurate IoT risk assessment
            </h1>
            <div className={styles.p}>
              Identifying potential risks in IoTs that may be problematic in the
              future helps us mitigate risks and provide effective security
              solutions to your business. Here’s what’s inclusive in our
              service:
              <ul>
                <li>
                  Smart device/IoT device penetration testing to assess and
                  audit hardware, implanted software, servers and APIs.
                </li>
                <li>
                  Medical device penetration testing to scale vulnerabilities in
                  hardware, management systems, etc.
                </li>
                <li>
                  ATM penetration testing to reckon the efficiency of the ATM
                  system to improve security measures.
                </li>
                <li>
                  Drone penetration testing to analyze the drone’s security
                  system and mitigate potential gaps that could result in cyber
                  attacks
                </li>
              </ul>
            </div>
            <ButtonPrimary link={"contact"} text={"GET A DEMO"} />
          </div>
        </div>
        <div className={`${styles.imageholder}`}>
        <Image
          className={styles.image}
          src={iot}
          fill
          // sizes="(min-width: 767px) 200px,500px"
        />
        </div>
      </section>
      {/* odd  */}
      <section className={`${styles.service} ${styles.odd}`}>
        <div className={styles.left}>
          <div className={styles.content}>
            <div className={styles.row}>
              <MdSettingsApplications size={50} />
              <p className={styles.name}>Application Security Assessment</p>
            </div>
            <h1 className={styles.heading}>Secure applications, happy users</h1>
            <div className={styles.p}>
              Our Application Security Assessment will help you safeguard your
              application from threats, security gaps, and possible
              vulnerabilities through a simple assessment. This includes:
              <ul>
                <li>
                  Web Application penetration testing identifies risks and
                  security hurdles, data leaks and unauthorized usage of web
                  applications.
                </li>
                <li>
                  API Security testing checks gaps and vulnerabilities that
                  could result in data loss.
                </li>
                <li>
                  Mobile application penetration testing analyses mobile
                  applications to mitigate potential cyber threats and risks.
                </li>
                <li>
                  A source code review of a website or application analyzes the
                  strengths and weaknesses of a source code that cybercriminals
                  can exploit.
                </li>
              </ul>
            </div>
            <ButtonPrimary link={"contact"} text={"GET A DEMO"} />
          </div>
        </div>
        <div className={`${styles.imageholder}`}>
        <Image
          className={styles.image}
          src={application}
          fill
          // sizes="(min-width: 767px) 200px,500px"
        />
        </div>
        {/* <div className={styles.mock}></div> */}
      </section>
      {/* even  */}
      <section className={`${styles.service} ${styles.even}`}>
        <div className={styles.left}>
          {/* <div className={styles.mock1}></div> */}
          <div className={styles.content}>
            <div className={styles.row}>
              <GrWorkshop size={50} />
              <p className={styles.name}>Workshops and Training Programs</p>
            </div>
            <h1 className={styles.heading}>
              Train your employees to be cyber safe
            </h1>
            <div className={styles.p}>
              Cybersecurity is a multifaceted issue and requires many aids. Even
              the best solutions cant help if your employees are careless with
              devices. So we provide a wide range of training services and
              activities like:
              <ul>
                <li>Corporate security training program</li>
                <li> Cybersecurity workshops</li>
                <li>Digital safety and awareness programs </li>
                <li>
                  Security simulation lab practices Ethical hacking competitions
                </li>
              </ul>
            </div>
            <ButtonPrimary link={"contact"} text={"GET A DEMO"} />
          </div>
        </div>
        <div className={`${styles.imageholder}`}>
        <Image
          className={styles.image}
          src={workshop}
          fill
          // sizes="(min-width: 767px) 200px,500px"
        />
        </div>
      </section>
      {/* odd  */}
      <section className={`${styles.service} ${styles.odd}`}>
        <div className={styles.left}>
          <div className={styles.content}>
            <div className={styles.row}>
              <BiRadar size={50} />
              <p className={styles.name}>CyberForensics</p>
            </div>
            <h1 className={styles.heading}>
              CyberForensic services that help you stay ahead
            </h1>
            <div className={styles.p}>
              Cyberforensics help you analyze, investigate and trace data
              sources across the internet. With simple solutions like:
              <ul>
                <li>Cyberforensics</li>
                <li>Dark web investigation</li>
                <li>Dark web investigation Data recovery</li>
              </ul>
              We can easily treat the root cause of your security issues and
              collect solid evidence to help you fight cybercriminals and
              recover lost, corrupted or stolen data.
            </div>
            <ButtonPrimary link={"contact"} text={"GET A DEMO"} />
          </div>
        </div>
        <div className={`${styles.imageholder}`}>
        <Image
          className={styles.image}
          src={cyber}
          fill
          // sizes="(min-width: 767px) 200px,500px"
        />
        </div>
      </section>
      {/* even  */}
      <section className={`${styles.service} ${styles.even}`}>
        <div className={styles.left}>
          <div className={styles.content}>
            <div className={styles.row}>
              <MdSecurity size={50} />
              <p className={styles.name}>Other Services</p>
            </div>
            <h1 className={styles.heading}>And many more services like:</h1>
            <div className={styles.p}>
              Well, if you are looking for more - we are bound to provide more.
              We also offer services like:
              <ul>
                <li>
                  <b>Malware Analysis </b>
                    to avoid malware attacks through emails or
                  other mediums.{" "}
                </li>
                <li>
                  <b>Phishing protection</b> helps you stay safe and identify corrupt
                  emails and avoid phishing attacks.
                </li>
                <li>
                  Protect your website from Spam &<b> Distributed Denial of
                  Services (DDOS)</b> to ensure smooth and safe website surfing.
                </li>
                <li>
                  <b>Email security </b>
                   services to help you identify potential cyber
                  attackers and avoid malware, and emails from hackers and
                  safeguard your mail.
                </li>
              </ul>
            </div>
            <ButtonPrimary link={"contact"} text={"GET A DEMO"} />
          </div>
        </div>
        <div className={`${styles.imageholder}`}>
        <Image
          className={styles.image}
          src={other}
          fill
          // sizes="(min-width: 767px) 200px,500px"
        />
        </div>
      </section>
    </div>
  );
}

export default Services;

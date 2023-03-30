import IndustryHero from "@/components/industryHero";
import styles from "../styles/industry.module.css";
import React from "react";
import Image from "next/image";
//images
import other from "../assets/svgs/other.svg";
import ButtonPrimary from "@/components/ButtonPrimary";

//icons
import { BiBookReader } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";

function Industry() {
  return (
    <div>
      <IndustryHero />
      {/* one  */}
      <div className={styles.section} id={"education"}>
        <div className={styles.left}>
          <div className={styles.iconcontainer}>
            <BiBookReader size={50} color={"#164995"} />
            <h1 className={styles.heading}>Education</h1>
          </div>
          <div className={styles.p}>
            The education sector holds a large amount of sensitive data. From
            AADHAR numbers of students to bank details of employees, a simple
            vulnerability could expose this data to cybercriminals that misuse
            information. With rising cases of data theft, are you taking all the
            measures to stay safe?
            <br />
            <br />
            Vital cybersecurity questions that need to be addressed in the
            education sector:
            <ul>
              <b>
                <li>How are employee and student databases processed?</li>
                <li>
                  How often are ERP software, school lab software and admin
                  software tested for vulnerabilities?
                </li>
                <li>Are any measures being taken to prevent cyber threats?</li>
                <li>
                  Are fee-payment and salary-processing portals safe and secure?
                </li>
                <li>
                  Is the school/university website safeguarded against threats?
                </li>
              </b>
            </ul>
            Not paying attention to cybersecurity can expose educational
            institutions to threats like:
            <ul>
              <b>
                <li>Ransomware</li>
                <li>Phishing Attacks</li>
                <li>DataBreaches</li>
                <li>Distributed Denial of Service Attacks</li>
              </b>
            </ul>
          </div>
        </div>
        <div className={styles.imageholder}>
          <div>
            <Image
              className={styles.image}
              src={other}
              fill
              // sizes="(min-width: 767px) 200px,500px"
            />
          </div>
          <div className={styles.whyus}>
            <h1 className={styles.heading2}>Why us?</h1>
            <p className={styles.p2}>
              Our core values revolve around customer satisfaction and providing
              the best strategic solutions to our clients. Our 24x7 security
              services and diverse service plans are features that distinguish
              us from the crowd and have helped us provide satisfactory results
              to many of our clients.
            </p>
            <ButtonPrimary text={"Explore Services"} link={"services"} />
          </div>
        </div>
      </div>

      {/* two  */}
      <div className={styles.section} id={"education"}>
        <div className={styles.left}>
          <div className={styles.iconcontainer}>
            <MdHealthAndSafety size={50} color={"#164995"} />
            <h1 className={styles.heading}>Healthcare</h1>
          </div>
          <div className={styles.p}>
            Healthcare service providers have instant access to sensitive
            information about patients and their nominees, and healthcare
            workers. This information can be easily misused against certain
            patients or the institution at large. ERPs and hospital management
            systems can be penetrated and misused if proper security measures
            are not taken.
            <br />
            To avoid exposing patients and workers to cyber threats, are you
            taking all the required measures?
            <br />
            <br />
            Here’s what healthcare sectors need to focus on:
            <ul>
              <b>
                <li>
                  Are systems backed up and protected to prevent data loss in
                  case of ransomware attacks?
                </li>
                <li>
                  Are ERPs and management systems regularly tested for
                  vulnerabilities?
                </li>
                <li>
                  How is sensitive patient data processed in your institution?
                </li>
                <li>
                  What is your incident response strategy in case of a cyber
                  attack?
                </li>
              </b>
            </ul>
            What can you do to stay safe?
            <br />
            Reach out to us! Get a one-stop solution for all your security
            problems and keep your data safe and secure from cybercriminals.
          </div>
        </div>
        <div className={styles.imageholder}>
          <div>
            <Image
              className={styles.image}
              src={other}
              fill
              // sizes="(min-width: 767px) 200px,500px"
            />
          </div>
          <div className={styles.whyus}>
            <h1 className={styles.heading2}>Why us?</h1>
            <p className={styles.p2}>
              Our core values revolve around customer satisfaction and providing
              the best strategic solutions to our clients. Our 24x7 security
              services and diverse service plans are features that distinguish
              us from the crowd and have helped us provide satisfactory results
              to many of our clients.
            </p>
            <ButtonPrimary text={"Explore Services"} link={"services"} />
          </div>
        </div>
      </div>

      {/* three  */}
      <div className={styles.section} id={"education"}>
        <div className={styles.left}>
          <div className={styles.iconcontainer}>
            <BsBank size={50} color={"#164995"} />
            <h1 className={styles.heading}>Banking & Finance</h1>
          </div>
          <div className={styles.p}>
            Banking & Financial service providers are the number 1 targets of
            cybercriminals. The finance sector is most prone to cybersecurity
            risks as many transactional processes can be hacked and misused, and
            sensitive information related to banking can be stolen and misused.
            <br />
            Being part of the most targeted sector in terms of data security,
            are your security measures enough to safeguard consumer data?
            <br />
            <br />
            Key problem statements in the security of the finance sector:
            <ul>
              <b>
                <li>
                  Do you possess an integrated and smooth cybersecurity strategy
                  in place?
                </li>
                <li>
                  Are transactional processes and data processing secured?
                </li>
                <li>
                  Are payment portals and new systems tested for vulnerabilities
                  and risks?
                </li>
                <li>
                  How are sensitive information and transaction data processed?
                </li>
                <li>
                  Is cybersecurity efficient enough to maintain system
                  accessibility?
                </li>
              </b>
            </ul>
            <br />
            <b>What can you do to stay safe?</b>
            <br />
            <br />
            Reach out to us! Get a one-stop solution for all your security
            problems and keep your data safe and secure from cybercriminals.
          </div>
        </div>
        <div className={styles.imageholder}>
          <div>
            <Image
              className={styles.image}
              src={other}
              fill
              // sizes="(min-width: 767px) 200px,500px"
            />
          </div>
          <div className={styles.whyus}>
            <h1 className={styles.heading2}>Why us?</h1>
            <p className={styles.p2}>
              Our core values revolve around customer satisfaction and providing
              the best strategic solutions to our clients. Our 24x7 security
              services and diverse service plans are features that distinguish
              us from the crowd and have helped us provide satisfactory results
              to many of our clients.
            </p>
            <ButtonPrimary text={"Explore Services"} link={"services"} />
          </div>
        </div>
      </div>

      {/* four  */}
      <div className={styles.section} id={"education"}>
        <div className={styles.left}>
          <div className={styles.iconcontainer}>
            <RiMovie2Fill size={50} color={"#164995"} />
            <h1 className={styles.heading}>OTT Media</h1>
          </div>
          <div className={styles.p}>
            Media platforms like Netflix, Hulu, etc are ruling the world. With
            more than a billion users at large, OTT media platforms face a huge
            risk of cybersecurity attacks as many of these platforms can be
            penetrated and exploited by attackers to steal data, and many other
            illegal acts.
            <br />
            Are you taking the right measures to safeguard the data of millions
            of carefree consumers visiting your media platform?
            <br />
            <br />
            Here are the key cybersecurity questions every OTT media platform
            should be addressing:
            <ul>
              <b>
                <li>Is your data protected against unauthorized processing?</li>
                <li>
                  Are you taking ample security measures to prevent
                  cyber-attacks?
                </li>
                <li>
                  Are your web/mobile platforms and network systems tested
                  regularly for cyber risks and vulnerabilities?
                </li>
                <li>
                  Is your content management system safeguarded efficiently?
                </li>
              </b>
            </ul>
            What risks are OTT platforms exposed to if ample security measures
            are not in place?
            <ul>
              <b>
                <li>Piracy</li>
                <li>Reverse engineering attacks</li>
                <li>Data theft</li>
                <li>API security issues</li>
              </b>
            </ul>
            <br />
            What can you do to stay safe?
            <br />
            <br /> Reach out to us! Get a one-stop solution for all your
            security problems and keep your data safe and secure from
            cybercriminals.
          </div>
        </div>
        <div className={styles.imageholder}>
          <div>
            <Image
              className={styles.image}
              src={other}
              fill
              // sizes="(min-width: 767px) 200px,500px"
            />
          </div>
          <div className={styles.whyus}>
            <h1 className={styles.heading2}>Why us?</h1>
            <p className={styles.p2}>
              Our core values revolve around customer satisfaction and providing
              the best strategic solutions to our clients. Our 24x7 security
              services and diverse service plans are features that distinguish
              us from the crowd and have helped us provide satisfactory results
              to many of our clients.
            </p>
            <ButtonPrimary text={"Explore Services"} link={"services"} />
          </div>
        </div>
      </div>

      {/* five  */}
      <div className={styles.section} id={"education"}>
        <div className={styles.left}>
          <div className={styles.iconcontainer}>
            <GiGearStickPattern size={50} color={"#164995"} />
            <h1 className={styles.heading}>Technology</h1>
          </div>
          <div className={styles.p}>
            Technology has become quintessential for all industries. Software
            development, web development, management systems, etc. all are used
            by industries across the world. This makes the technology sector a
            goldmine for cybercriminals, making it the second most targeted
            industry. From data breaches through web development, or new systems
            to malware-infested software, the tech industry needs to pay extra
            heed to cybersecurity.
            <br />
            <br />
            In a dire situation like this, are you confident of the security
            strategies you have in place?
            <br />
            <br />
            Here are the vital points to address about cybersecurity when it
            comes to the technological sector:
            <ul>
              <b>
                <li>
                  How efficient is your incident response strategy against
                  cyberattacks?
                </li>
                <li>
                  Are you taking measures to educate employees about security
                  protocols to avoid attacks?
                </li>
                <li>
                  Are new products, software and website/web applications tested
                  frequently for risks and vulnerabilities?
                </li>
                <li>Are your patent data and IPR data protected and secure?</li>
                <li>How is consumer data processed and secured?</li>
              </b>
            </ul>
            What kind of risks can you be exposed to due to a lack of
            cybersecurity frameworks?
            <ul>
              <b>
                <li>Ransomware</li>
                <li>Malware</li>
                <li>Source-code vulnerabilities</li>
                <li>Social engineering attacks</li>
                <li>Data thefts</li>
                <li>Denial-of-service attacks</li>
                <li>API Security risks</li>
              </b>
            </ul>
            <br />
            What can you do to stay safe? <br />
            Reach out to us! Get a one-stop solution for all your security
            problems and keep your data safe and secure from cybercriminals.
          </div>
        </div>
        <div className={styles.imageholder}>
          <div>
            <Image
              className={styles.image}
              src={other}
              fill
              // sizes="(min-width: 767px) 200px,500px"
            />
          </div>
          <div className={styles.whyus}>
            <h1 className={styles.heading2}>Why us?</h1>
            <p className={styles.p2}>
              Our core values revolve around customer satisfaction and providing
              the best strategic solutions to our clients. Our 24x7 security
              services and diverse service plans are features that distinguish
              us from the crowd and have helped us provide satisfactory results
              to many of our clients.
            </p>
            <ButtonPrimary text={"Explore Services"} link={"services"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industry;

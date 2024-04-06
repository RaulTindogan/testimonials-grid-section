import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section>
        <div className='card card__purple'>
          <div className='card__profile'>
            <img src="./src/assets/images/image-daniel.jpg" alt="Daniel Clifford" className='card__image'/>
            <div>
              <p className='card__name'>Daniel Clifford</p>
              <p className='card__graduate'>Verified Graduate</p>    
            </div>
          </div>
          <div>
            <p className='card__heading'>
              I received a job offer mid-course, and the subjects I learned were current, if not more so, 
              in the company I joined. I honestly feel I got every penny's worth.
            </p>
            <p className='card__story'>
              "I was an EMT for many years before I joined the bootcamp. I've been looking to make a 
              transition and have heard some people who had an amazing experience here. I signed up 
              for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
              The next 12 weeks was the best - and most grueling - time of my life. Since completing 
              the course, Iâ€™ve successfully switched careers, working as a Software Engineer at a VR startup."
            </p>
          </div>      
        </div>
        <div className='card card__grayish-blue'>
          <div className='card__profile'>
            <img src="./src/assets/images/image-jonathan.jpg" alt="" className='card__image'/>
            <div>
              <p className='card__name'>Jonathan Walters</p>
              <p className='card__graduate'>Verified Graduate</p>    
            </div>
          </div>
          <div>
            <p className='card__heading'>The team was very supportive and kept me motivated</p>
            <p className='card__story'>
              "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
              for a big company. This was one of the best investments Iâ€™ve made in myself."
            </p>
          </div>     
        </div>
        <div className='card card__white'>
          <div className='card__profile'>
            <img src="./src/assets/images/image-jeanette.jpg" alt="" className='card__image'/>
            <div>
              <p className='card__name'>Jeanette Harmon</p>
              <p className='card__graduate'>Verified Graduate</p>    
            </div>
          </div>
          <div>
            <p className='card__heading'>An overall wonderful and rewarding experience</p>
            <p className='card__story'>
              "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
              while doing something I love."
            </p>
          </div>       
        </div>
        <div className='card card__blackish-blue'>
          <div className='card__profile'>
            <img src="./src/assets/images/image-patrick.jpg" alt="" className='card__image'/>
            <div>
              <p className='card__name'>Patrick Abrams</p>
              <p className='card__graduate'>Verified Graduate</p>    
            </div>
          </div>
          <div>
            <p className='card__heading'>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>
            <p className='card__story'>
              "The staff seem genuinely concerned about my progress which I find really refreshing. The program 
              gave me the confidence necessary to be able to go out in the world and present myself as a capable 
              junior developer. The standard is above the rest. You will get the personal attention you need from 
              an incredible community of smart and amazing people."
            </p>
          </div> 
        </div>
      </section>
      <section className='card card__white'>
          <div className='card__profile'>
            <img src="./src/assets/images/image-kira.jpg" alt="" className='card__image'/>
            <div>
              <p className='card__name'>Kira Whittle</p>
              <p className='card__graduate'>Verified Graduate</p>    
          </div>
          </div>
          <div>
            <p className='card__heading'>Such a life-changing experience. Highly recommended!</p>
            <p className='card__story'>
              "Before joining the bootcamp, Iâ€™ve never written a line of code. I needed some structure from 
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
              did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
              could ever have. In fact, Iâ€™ve often referred to it during interviews as an example of my developent 
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
              100% recommend!"
            </p>
          </div> 
      </section>
    </main>
  )
}

export default App

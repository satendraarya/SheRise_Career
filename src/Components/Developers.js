import React from 'react'
import './Developers.css';
import Navbar from './Navbar';


const Developers = () => {
  return (
    <>
      <div className="developers-container">
        <header>
          <Navbar></Navbar>
        </header>
        <div class='developers-heading'>
          <p>Meet Our Team</p>
          <p>Developers</p>
        </div>
        <section className='developers-profile'>
          <div class='dev-outer-cards'>
            <div class='dev-card'>
              <div class='avatar satendra-avatar'></div>
              <div class='dev-card-details'>
                <div class='profile-name'>
                  <p>Satendra Arya</p>
                  <p>NodeJS Backend Developer</p>
                </div>
                <div class='dev-card-buttons'>
                  <a href="https://twitter.com/SATENDRAARYA12" rel='noreferrer noopener' target="_blank"><p>Twitter</p></a>
                  <a href="https://www.linkedin.com/in/satendra-arya-b2b346221/" target="_blank" rel='noreferrer noopener'><p>Linkedin</p></a>
                </div>
              </div>
            </div>
          </div>
          

          <div class='dev-outer-cards'>
            <div class='dev-card'>
              <div class='avatar tarun-avatar'></div>
              <div class='dev-card-details'>
                <div class='profile-name'>
                  <p>Tarun Sharma</p>
                  <p>Python Backend Developer</p>
                </div>
                <div class='dev-card-buttons'>
                  <a href="https://twitter.com/SATENDRAARYA12" rel='noreferrer noopener' target="_blank"><p>Twitter</p></a>
                  <a href="https://www.linkedin.com/in/tarun-kumar-b85b75263/" target="_blank" rel='noreferrer noopener'><p>Linkedin</p></a>
                </div>
              </div>
            </div>
          </div>


          <div class='dev-outer-cards'>
            <div class='dev-card'>
              <div class='avatar mrityunjay-avatar'></div>
              <div class='dev-card-details'>
                <div class='profile-name'>
                  <p>Mrityunjay Kumar</p>
                  <p>MERN Stack Developer</p>
                </div>
                <div class='dev-card-buttons'>
                  <a href="https://twitter.com/SATENDRAARYA12" rel='noreferrer noopener' target="_blank"><p>Twitter</p></a>
                  <a href="https://www.linkedin.com/in/mrityunjay-kumar-/" target="_blank" rel='noreferrer noopener'><p>Linkedin</p></a>
                </div>
              </div>
            </div>
          </div>


          <div class='dev-outer-cards'>
            <div class='dev-card'>
              <div class='avatar ashuthosh-avatar'></div>
              <div class='dev-card-details'>
                <div class='profile-name'>
                  <p>Ashuthosh</p>
                  <p>Java fullstack</p>
                </div>
                <div class='dev-card-buttons'>
                  <a href="https://twitter.com/SATENDRAARYA12" rel='noreferrer noopener' target="_blank"><p>Twitter</p></a>
                  <a href="https://www.linkedin.com/in/ashutosh-kumar-6350981b5" target="_blank" rel='noreferrer noopener'><p>Linkedin</p></a>
                </div>
              </div>
            </div>
          </div>

          <div class='dev-outer-cards'>
            <div class='dev-card'>
              <div class='avatar aniket-avatar'></div>
              <div class='dev-card-details'>
                <div class='profile-name'>
                  <p>Aniket Sharma</p>
                  <p>MERN Stack</p>
                </div>
                <div class='dev-card-buttons'>
                  <a href="https://twitter.com/SATENDRAARYA12" rel='noreferrer noopener' target="_blank"><p>Twitter</p></a>
                  <a href="https://www.linkedin.com/in/aniket-sharma-248315261" target="_blank" rel='noreferrer noopener'><p>Linkedin</p></a>
                </div>
              </div>
            </div>
          </div>

          <div class='dev-outer-cards'>
            <div class='dev-card'>
              <div class='avatar shakti-avatar'></div>
              <div class='dev-card-details'>
                <div class='profile-name'>
                  <p>Shakti</p>
                  <p>Java Fullstack</p>
                </div>
                <div class='dev-card-buttons'>
                  <a href="https://twitter.com/SATENDRAARYA12" rel='noreferrer noopener' target="_blank"><p>Twitter</p></a>
                  <a href="https://www.linkedin.com/in/tarun-kumar-b85b75263/" target="_blank" rel='noreferrer noopener'><p>Linkedin</p></a>
                </div>
              </div>
            </div>
          </div>
          
        </section>
       
        {/* ............................ Footer Section .........................*/}


        <div className='footer-main-outer'>
          <div className='footer'>
            <div className='lower-footer'>
              <div className='copyright'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"></path>
                </svg>
                <p>2023<span> SheRise</span> - All Rights Reserved</p>
              </div>
              <div className='designation'>
               <p>Developed by <span>Satendra Arya</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Developers;





// import React from 'react'
// import './Developers.css'
// import Navbar from './Navbar';



// const Developers = () => {
//   const users=[
//     {name: 'Jai Mahakal',
//     profilePicture: 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Bholenath-Sawan-Somwar-hd-Photos.jpg',
//     bio: 'कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदा बसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि।। ',
// },
// {
//     name: 'Jai Siya Ram',
//     profilePicture: 'https://qph.cf2.quoracdn.net/main-qimg-5d120716cc1594114e438882b0bf940b-lq',
//     bio: 'नाम राम को अंक है सब साधन हैं सून। अंक गए कछु हाथ नहिं अंक रहे दस गून।।',
// },
// ];
// return (
//   <>
//   <header>
//     <Navbar></Navbar>
//   </header>
//     <div>
//       <h1 style={{ textAlign: 'center'}}>User Profiles</h1>
//       <UserProfile users={users} />
//     </div>
//     </>
//   );
// };
// const UserProfile = ({ users }) => {
// return (
//   <>
  
// <div className="user-profile-list">
//   {users.map(user => (
//     <div key={user.id} className="user-profile-card">
//       <img src={user.profilePicture} alt={user.name} className="profile-picture" />
//       <h2 className="name">{user.name}</h2>
//       <p className="bio">{user.bio}</p>
//     </div>
//   ))}
// </div>
// </>
// );
// };

// export default Developers


    

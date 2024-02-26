import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Header from "../../components/Header";
import Head from "next/head";
import LargeButton from "../../components/button";
import Footer from "../../components/Footer";
import styles from '../styles/landpage.module.css';



export default function Home() {
  return (
    <>
  <Header/>

    <main className={styles.main} style={{display: 'flex', flexDirection: 'column'}}>
  

      <div style={{marginLeft: '1%'}}>
      <h1 className={styles.header} style={{fontFamily: 'outfit', fontSize: '48px', fontWeight: '800', width: '800px', marginTop: '2%' }}>Rescue Radar Connects You With Your Bestfriend!</h1>
      <h2 className={styles.header} style={{width: '600px', fontSize: '20px', fontWeight: '500'}}>RescueRadar aims to link you with adoptable rescue dogs nearby. Recognizing the difficulty of finding the perfect dog to match your lifestyle, we provide a brief survey to tailor our suggestions to your preferences. Our platform not only presents the most suitable breed based on your responses but also enables you to explore all available adoptable dogs and additional matches.</h2>
      </div>
     
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%'}}>
      <div style={{
              backgroundColor:'#C41C4C',
              height: '505px',
              width: '50%',
              borderTopRightRadius: '200px', 
              borderBottomRightRadius: '200px', 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
          }}>
            <Image style={{marginTop: '12%'}}
            src="/marketing-icons/dog.png"
            height={350}
            width={283}
            alt="dog"

            />
            <div style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
            <h2 style={{fontSize: '24px', fontFamily: 'outfit', fontWeight: '400', color: 'white'}}>Sign up for our <strong>newsletter</strong></h2>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <label style={{color: 'white', fontFamily: 'outfit'}}>Name:</label>
            <input style={{borderRadius: '10px', padding: '2px'}} type="text" placeholder="Enter your Name"></input>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <label style={{color: 'white', fontFamily: 'outfit'}}>Email:</label>
            <input style={{borderRadius: '10px', padding: '2px'}} type="text" placeholder="Enter your Email"></input>
            </div>
            <div style={{marginLeft: '25%'}}>
            <LargeButton
                text='Sign Up'
                link = '/'
                />
            </div>
         
            </div>
        

      </div>


   <div style={{
    backgroundImage: "url('/marketing-icons/blackdog.png')",
    height: '600px',
    width: '400px',
    }}> 

<Spline scene="https://prod.spline.design/0tHhLwJ56HlwU47D/scene.splinecode" />

</div>


   
     
      </div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginTop: '5%'}}>
        <div style={{height: '527px', width: '420px', border: '1px solid lightgray' ,boxShadow: '8px 8px 12px rgba(0, 0, 0, 0.1)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', padding: '3%'}}>
        <Spline style={{height: '300px', width: '600px'}}  scene="https://prod.spline.design/lmHCyI27FKY4ArrT/scene.splinecode" />
          <h2 style={{fontFamily: 'outfit', fontSize: '24px', fontWeight: '600'}}>Puppy Pal</h2>
          <h2>$10/Month</h2>
          <p style={{marginTop: '40px'}}>Help Feed a Dog Shelter and get a monthly newsletter with dog updates and a social media shoutout for your contribution!</p>

        </div>
        <div style={{height: '527px', width: '420px', border: '1px solid lightgray' ,boxShadow: '8px 8px 12px rgba(0, 0, 0, 0.1)', borderRadius: '20px',  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', padding: '3%'}}>
        <Spline style={{height: '300px', width: '600px'}}   scene="https://prod.spline.design/EEn0wFWCSM5u0anw/scene.splinecode" />
      
        <h2 style={{fontFamily: 'outfit', fontSize: '24px', fontWeight: '600'}}>Canine Companion</h2>
        <h2>$25/Month</h2>
        <p style={{marginTop: '40px'}}>Sponsor a shelter dogs medical expenses and receive picture and video updates!</p>
        </div>
        <div style={{height: '527px', width: '420px', border: '1px solid lightgray' ,boxShadow: '8px 8px 12px rgba(0, 0, 0, 0.1)', borderRadius: '20px',  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', padding: '3%'}}>
        <Spline style={{height: '300px', width: '600px'}}  scene="https://prod.spline.design/TS8jhUWTkaFc9cw8/scene.splinecode" />
       
       <h2 style={{fontFamily: 'outfit', fontSize: '24px', fontWeight: '600'}}>Top Dog Patron</h2>
  
       <h2>$50/Month</h2>
       <p style={{marginTop: '40px'}}>Provide shelter, care and toys for a homeless dog and receive your name on a plaque in the adoption shelter!</p>
      </div>

      </div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '728px', width: '100%', border: '1px solid #1FCBFF', marginTop: '5%'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{ width:'400px',fontSize: '28px', fontWeight: '800'}}>Rescue Radar is Available for mobile and web! Look no further for your furever friend!</h1>
        <Spline style={{height: '300px'}} scene="https://prod.spline.design/SqLlHFLgWWocsQ1N/scene.splinecode" />
       
        </div>
      
      <Spline style={{width: '500px'}} scene="https://prod.spline.design/vmT9ZQMG3MqnUxRN/scene.splinecode" />
  

      </div>

    
    </main>
    <Footer/>
    </>
  );
}

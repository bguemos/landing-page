import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Header from "../../components/Header";
import Head from "next/head";
import LargeButton from "../../components/button";
import Footer from "../../components/Footer";



export default function Home() {
  return (
    <>
  <Header/>

    <main style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{marginLeft: '1%'}}>
      <h1 style={{fontFamily: 'outfit', fontSize: '48px', fontWeight: '800', width: '800px'}}>Rescue Radar Connects You With Your Bestfriend!</h1>
      </div>
     
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '5%'}}>
      <div style={{
              backgroundColor:'#C41C4C',
              height: '505px',
              width: '1020px',
              marginRight: '50%', 
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

      </div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-evenly', marginTop: '5%'}}>
        <div style={{height: '527px', width: '420px', border: '1px solid lightgray' ,boxShadow: '8px 8px 12px rgba(0, 0, 0, 0.1)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', padding: '3%'}}>
          <h2 style={{fontFamily: 'outfit', fontSize: '24px', fontWeight: '600'}}>Sign up and we donate 5$ to an animal rescue shelter!</h2>

        </div>
        <div style={{height: '527px', width: '420px', border: '1px solid lightgray' ,boxShadow: '8px 8px 12px rgba(0, 0, 0, 0.1)', borderRadius: '20px',  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', padding: '3%'}}>
        <h2 style={{fontFamily: 'outfit', fontSize: '24px', fontWeight: '600'}}>Sponser a dog for as little as one dollar per month!</h2>
        </div>
        <div style={{height: '527px', width: '420px', border: '1px solid lightgray' ,boxShadow: '8px 8px 12px rgba(0, 0, 0, 0.1)', borderRadius: '20px',  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', padding: '3%'}}>
       <h2 style={{fontFamily: 'outfit', fontSize: '24px', fontWeight: '600'}}>Join our Networking group to connect with other dog adopters!</h2>
      </div>

      </div>

    
    </main>
    <Footer/>
    </>
  );
}

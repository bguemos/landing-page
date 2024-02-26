import Image from "next/image"
import LargeButton from "../button"
import styles from './header.module.css'


export default function Header() {



    return (

    
      <>
            <header className={styles.headercontainer} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: '90px', borderBottom: '1px solid #C41C4C'}}>
                <div className={`flex items-center`}>
                <Image
                    src='/marketing-icons/logo.png'
                    height={600}
                    width={200}
                    alt="logo"
                />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' , marginLeft: '50%', gap: '50px', alignItems: 'center'}}>
                <h2 style={{fontFamily: 'outfit', fontSize: '32', fontWeight: '800'}}>Contact Us</h2>
                <LargeButton
                text='Sign Up'
                link = '/'
                />
                
                </div>
            </header>
</>
    )
}
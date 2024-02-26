import Image from "next/image"
import Link from "next/link"
import styles from './footer.module.css'

export default function Footer() {



    return (
        <>

        
        <footer style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: '90px', backgroundColor:'#C41C4C'}}>
                <div className={`flex items-center`}>
                <Image
                    src='/marketing-icons/whitelogo.png'
                    height={600}
                    width={200}
                    alt="logo"
                />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' , marginLeft: '50%', gap: '50px', alignItems: 'center'}}>
                <Link href="https://github.com/Mariessa-Pinto/rescue-radar.git" passHref>
                        <Image
                        src='/marketing-icons/github.png'
                        height={50}
                        width={50}
                        alt="github"
                        />
                 </Link>
                 <Image
                  src='/marketing-icons/trademark.png'
                  height={55}
                  width={55}
                  alt="trademark"
                 
                 />
                 <h2 style={{fontFamily: 'outfit', fontSize: '24px', fontWeight: '400', color: 'white'}}>Bri-lynn Guemos</h2>

               
                
                </div>
            </footer>

 
        </>
    )
}
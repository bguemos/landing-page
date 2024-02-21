
import Link from "next/link";

const LargeButton = ({ text, link }: ILargeButton) => {
    return (
        <Link href={link}>
            <button data-testid="large-button" style={{borderRadius: '20px', border: '1px solid #1FCBFF', width: '120px', height: '40px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: 'white'}}>
              <h3 style={{fontFamily: 'outfit', fontSize: '16px', fontWeight: '800'}}> {text}</h3> 
            </button>
        </Link>
    );
}

export default LargeButton;
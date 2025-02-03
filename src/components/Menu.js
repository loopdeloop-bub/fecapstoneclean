import {Container} from 'react-bootstrap';
import { TbError404 } from "react-icons/tb";
import { IconContext } from "react-icons";

export default function Menu() {
    return (
        <>
            <div id='Menu'>
                <Container className='mx-auto my-auto p-2'>
                    <IconContext.Provider value={{color: 'gray', size: 30+'em'}}>
                        <TbError404 /> Oops ... check back later!
                    </IconContext.Provider>
                </Container>
            </div>
        </>
    );
}

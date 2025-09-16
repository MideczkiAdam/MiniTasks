import { useState } from "react"

type ContactType = {
    icon: string,
    name: string,
    email: string
}

function ContactCard(props: ContactType) {

    const [IsOpen, setIsOpen] = useState(false)

    return(
        <div onClick={()=> setIsOpen(prev => !prev)}>
            {props.icon}
            {IsOpen && <>
                <h1>{props.name}</h1>
                <h2>{props.email}</h2>
            </>}
        </div>
    )
}

export default ContactCard
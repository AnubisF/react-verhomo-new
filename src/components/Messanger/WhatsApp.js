import React from 'react'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const WhatsApp = () => {
    return <WhatsAppWidget phoneNumber='+358443371413'
                           message='Hello! 👋🏼 \n\nWhat can we do for you?'
                           companyName='Support'
                           sendButton='Send'/>
}

export default WhatsApp
import {
  ContactUsWrapper, ContactUsTitle,
  ContactUsContent, Address, PhoneNumber, Email
} from './contactUs.styles';

const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <ContactUsContent>
        <Address>
          BioSurge Asia Sdn Bhd
          T1-11-05, Tower One, 8trium Towers Bandar Sri Damansara 52200 Kuala Lumpur Malaysia
        </Address>
        <PhoneNumber>+60 (3) 62638088</PhoneNumber>
        <Email>info@biosurgeasia.com</Email>

      </ContactUsContent>
    </ContactUsWrapper>
  )
}

export default ContactUs;

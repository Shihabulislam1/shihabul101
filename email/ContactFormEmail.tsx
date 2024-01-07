import React from "react";
import {
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Section,
  Preview,
  Text,
} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind"

function ContactFormEmail({ message,senderEmail }: ContactFormEmailProps) {
  return <Html>
    <Head/>
    <Preview>New Message From the portfolio site</Preview>
    <Tailwind>
        <Body className="bg-gray-100 text-black">
            <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                <Heading className="leading-tight text-green">Recieved message from the Contact Form</Heading>
                <Hr/>
                <Text>{message}</Text>
                <Hr/>
                <Text>The sender's email is : {senderEmail}</Text>
            </Section>
            </Container>
        </Body>
    </Tailwind>
  </Html>;
}

type ContactFormEmailProps = {
  message: string,
  senderEmail: string
};

export default ContactFormEmail;

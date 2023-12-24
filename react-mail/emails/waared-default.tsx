import {
	Body,
	Container,
	Head,
	Html,
	Img,
	Link,
	Section,
	Text,
} from '@react-email/components';
import * as React from 'react';

export const PlaidVerifyIdentityEmail = () => (
	<Html>
		<Head />
		<Body style={main}>
			<Container style={containerStyle}>
				<Img
					src={`https://testapi.waared.sa/media/email/new-template-logo.png`}
					alt="Waared"
					style={logo}
				/>
				<Container style={container}>

					<Section style={firstSection}>
						<Text style={title}>Title</Text>
						<Img style={floatingMailImage} src="https://testapi.waared.sa/media/email/new-template-img.png" alt="" />
					</Section>

					<Section style={{ marginTop: "20px" }}>
						<Text style={greeting}>Hello Ahmad</Text>
					</Section>

					<Section style={paragraph}>
						<Text style={paragraphText}>
							Your shipment submitted successfully. You remaning credit is 3530.23 SAR

							If you have any questions, just reply to this email, we’re always happy to help out.

						</Text>
					</Section>
					<Section style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
						<Link style={link}>
							Verify Email
						</Link>
					</Section>
				</Container>
			</Container>
		</Body>
	</Html>
);

export default PlaidVerifyIdentityEmail;

const link = {
	backgroundColor: "#EE4036",
	border: "none",
	borderRadius: "50px",
	color: "white",
	width: "200px",
	height: "35px",
	fontWeight: "bold",
	fontSize: "16px",
	cursor: "pointer",
	padding: "10px 40px",
	textDecoration: "none",
	// algin center
}

const main = {
	backgroundColor: '#D9D9D9',
	margin: '20px 0',
	fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const containerStyle = {
	width: '100%',
	padding: "10px 0"
}

const container = {
	backgroundColor: '#ffffff',
	border: 'none',
	borderRadius: '15px',
	boxShadow: '0 5px 10px rgba(20,50,70,.2)',
	margin: '0 auto',
	padding: '0 0 50px 0',
};

// const maxWidthContainer = {
// width: '720px',
// }

const firstSection = {
	backgroundColor: '#282560',
	width: "100%",
	borderTopLeftRadius: '15px',
	borderTopRightRadius: '15px',
}

const title = {
	color: '#fff',
	fontSize: '18px',
	margin: "auto",
	textAlign: "center" as const,
	marginTop: "30px"
}

const logo = {
	display: 'block',
	width: "fit-content",
	marginRight: 'auto',
	marginBottom: '10px'
};

const floatingMailImage = {
	// width: "250px",
	height: "250px",
	margin: "auto",
	padding: "20px 0"
	// transform: "translateY(50%)",
}

const greeting = {
	fontSize: "32px",
	padding: "0 20px"
}

const paragraph = {
	color: '#444',
	fontSize: '15px',
	fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
	letterSpacing: '0',
	lineHeight: '23px',
	padding: '0 20px',
	margin: '0',
};

const paragraphText = {}

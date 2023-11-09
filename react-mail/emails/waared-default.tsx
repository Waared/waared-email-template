import {
	Body,
	Container,
	Head,
	Html,
	Img,
	Link,
	Row,
	Section,
	Text,
} from '@react-email/components';
import * as React from 'react';

interface PlaidVerifyIdentityEmailProps {
	validationCode?: string;
}

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: '';

export const PlaidVerifyIdentityEmail = ({
	validationCode = '144833',
}: PlaidVerifyIdentityEmailProps) => (
	<Html>
		<Head />
		<Body style={main}>
			<Container style={maxWidthContainer}>
				<Img
					src={`${baseUrl}/static/logo.png`}
					alt="Waared"
					style={logo}
				/>
				<Container style={container}>

					<Section style={firstSection}>
						<Section style={sectionLayer}>
						</Section>
						<Row><Text style={title}>TITS</Text></Row>
						<Img style={floatingMailImage} src="/static/img2.png" alt="" />
					</Section>

					<Section style={{ marginTop: "40px" }}>
						<Text style={greeting}>Hello Ahmad</Text>
					</Section>

					<Section style={paragraph}>
						<Text style={paragraphText}>
							Your shipment submitted successfully. You remaning credit is 3530.23 SAR

							If you have any questions, just reply to this email, we’re always happy to help out.

						</Text>
					</Section>
					<Section style={{ width: "100%", textAlign: "center", marginBottom: "auto" }}>
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
	fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const container = {
	backgroundColor: '#ffffff',
	border: '1px solid #eee',
	borderRadius: '5px',
	boxShadow: '0 5px 10px rgba(20,50,70,.2)',
	width: '720px',
	margin: '0 auto',
	padding: '0 0 50px',
};

const maxWidthContainer = {
	width: '720px',
}

const firstSection = {
	marginBottom: '20px',
	backgroundImage: 'url(/static/img1.png)',
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center top',
	height: "320px",
	width: "100%",
	borderRadius: '5px',
	padding: '0',
	position: 'relative' as const
}

const sectionLayer = {
	height: "100%",
	width: "100%",
	backgroundColor: "rgba(255,255,255,0.3)",
}

const title = {
	color: '#fff',
	fontSize: '18px',
	margin: "auto",
	position: "absolute" as const,
	top: "10px",
	left: "50%",
	transform: "translateX(-50%)",
}

const logo = {
	display: 'block',
	width: "fit-content",
	marginRight: 'auto',
	marginBottom: '10px'
};

const floatingMailImage = {
	position: "absolute" as const,
	bottom: "0",
	left: "50%",
	transform: "translate(-50%, calc(50% - 20px))",
	width: "100px",
	backgroundColor: "rgba(255,255,255,0.3)",
	padding: '20px',
	borderRadius: "50%"
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

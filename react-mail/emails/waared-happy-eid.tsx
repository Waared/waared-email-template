import {
	Body,
	Button,
	Container,
	Column,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
	Tailwind,
} from "@react-email/components";
import * as React from "react";

interface WaaredInviteUserEmailProps {
	username?: string;
}

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";

export const WaaredHappyEidEmail = ({
	username,
}: WaaredInviteUserEmailProps) => {

	return (
		<Html>
			<Head />
			<Preview>Happy Eid!</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto max-w-[600px]">
						<Section className="mb-[25px]">
							<Img
								src={`${baseUrl}/static/adha_email.png`}
								width="600"
								height="478"
								alt="Happy Eid"
								className="my-0 mx-auto"
							/>
						</Section>
						<Section className="px-[62px]">
							<Heading className="text-[16px] font-bold text-center text-[#EE4036]">
								Dear {username ?? "Waared Customer"}
							</Heading>
							<Text className="text-justify text-[#262261] m-0 mb-4">
								From all of us at Waared, we wish you and your loved ones had a joyous <span className="inline-block mx-auto w-full text-center">blessed Eid.</span>
							</Text>

							<Text className="text-[#262261] m-0">
								Shukran,
							</Text>
							<Text className="text-[#262261] m-0">
								Waared Team
							</Text>

							<Container className="text-center">
								<Button
									className="bg-[#ee4036] rounded-[23px] text-white no-underline text-center px-5 py-3 cursor-pointer w-[154px]"
									href="ship.waared.sa"
								>
									Visit Waared
								</Button>
							</Container>
						</Section>

						<Section className="bg-[#262261] h-[212px] text-white px-[62px] mt-[34px]">
							<Row>
								<Column align="left">
									<Img height="24.5" width="70.5"
										src={`${baseUrl}/static/logo-white.png`}
									/>
									<Text className="text-white m-0 mt-1 text-[11px]">
										Riyadh, Saudi Arabia
									</Text>
								</Column>

								<Column className="w-[101px]">
									<Row className="m-0">
										<Column align="center">
											<Link className="cursor-pointer" href="https://www.instagram.com/waared.sa/?hl=en">
												<Img height="22" width="22"
													src={`${baseUrl}/static/instagram.svg`}
												/>
											</Link>
										</Column>
										<Column align="center">
											<Img height="22" width="22"
												src={`${baseUrl}/static/x-twitter.svg`}
											/>
										</Column>
										<Column align="center">
											<Link className="cursor-pointer" href="https://www.linkedin.com/company/waared-sa/">
												<Img height="22" width="22"
													src={`${baseUrl}/static/linkedin-in.svg`}
												/>
											</Link>
										</Column>
									</Row>
									<Link href="https://ship.waared.sa" >
										<Text className="text-white m-0 mt-1 text-[11px] underline cursor-pointer text-center">
											visit waared.sa
										</Text>
									</Link>
								</Column>
							</Row>

							<Hr className="border-[1px] border-white my-[16px] w-full" />

							<Text className="text-white text-center text-[14px] m-0">
								© 2024 Waared. All Rights Reserved.
							</Text>
							<Text className="text-white text-center text-[14px] m-0">
								Waared Company. Rabwah, Nahda St. Mena Businesss Center 3rd floor
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html >
	);
};

WaaredHappyEidEmail.PreviewProps = {
	username: "alanturing",
	userImage: `${baseUrl}/static/vercel-user.png`,
	invitedByUsername: "Alan",
	invitedByEmail: "alan.turing@example.com",
	teamName: "Enigma",
	teamImage: `${baseUrl}/static/vercel-team.png`,
	inviteLink: "https://vercel.com/teams/invite/foo",
	inviteFromIp: "204.13.186.218",
	inviteFromLocation: "São Paulo, Brazil",
} as WaaredInviteUserEmailProps;

export default WaaredHappyEidEmail;

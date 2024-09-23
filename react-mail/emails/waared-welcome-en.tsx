import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Section,
	Text,
	Tailwind,
	Button,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";

const logo = {
	display: 'block',
	marginRight: 'auto',
	marginLeft: 'auto',
	// marginTop: "30px"
}

const Font = ({
	webFont,
	fontStyle = 'normal',
	fontFamily,
	fontWeight = 400,
	fallbackFontFamily,
}) => {
	const src = webFont ? `src: url(${webFont.url}) format(${webFont.format});` : "";

	return (
		<style>
			{
				`
            @font-face {
                font-style: ${fontStyle};
                font-family: ${fontFamily};
                font-weight: ${fontWeight};
                mso-font-alt: ${Array.isArray(fallbackFontFamily) ? fallbackFontFamily[0] : fallbackFontFamily};
                ${src}
            }

            * {
                font-family: ${fontFamily}, ${Array.isArray(fallbackFontFamily) ? fallbackFontFamily.join(", ") : fallbackFontFamily};
            }
            `
			}
		</style>
	)
}

export const WaaredHappyEidEmailAr = () => {

	return (
		<Html dir="ltr">
			<Head />
			<Font
				fontFamily="Tajawal"
				fallbackFontFamily="Verdana"
				webFont={{
					url: "https://fonts.gstatic.com/s/tajawal/v9/Iura6YBj_oCad4k1nzSBC45I.woff2",
					format: "woff2",
				}}
				fontWeight={400}
				fontStyle="normal"
			/>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container style={{ paddingTop: "30px", paddingBottom: "30px" }} className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto max-w-[600px]">
						<Section className="">
							<Img
								src={`https://testapi.waared.sa/media/email/new-template-logo.png`}
								alt="Waared"
								width="120"
								height="40"
								style={logo}
							/>
							<Hr style={{ width: "80%", marginTop: "23px" }} />
						</Section>
						<Section style={{ paddingLeft: 62, paddingRight: 62 }} >
							<Text style={{ color: "#262261" }}>
								حياك الله <b>نورة</b>  👋،
							</Text>

							<Text style={{ color: "#262261" }}>
								تم تفعيل حسابك بنجاح ويمكنك البدء بشحن منتجاتك مع وارد
								يمكنك الآن إدارة جميع عمليات وإجراءات الشحن بأقصى دقة وسرعة، مع ضمان خدمة عملاء متميزة على مدار الساعة. وتجربة سهلة وسريعة
							</Text>

							<Text style={{ color: "#262261" }}>
								٤ خطوات بسيطة تفصلك عن شحن طلبك الأول
							</Text>

							<Section style={{ marginRight: 12 }}>
								<Section style={{ marginBottom: 12 }}>
									<Text style={{ width: 26, height: 26, margin: 0, marginLeft: 4, background: "#EF4037", borderRadius: "9999px", color: "white", textAlign: "center", fontWeight: "600", display: "inline-block" }}>
										1
									</Text>
									<Text style={{ display: "inline-block", margin: 0, color: "#262261" }}>
										Enter your shipment details
									</Text>
								</Section>

								<Section style={{ marginBottom: 12 }}>
									<Text style={{ width: 26, height: 26, margin: 0, marginLeft: 4, background: "#EF4037", borderRadius: "9999px", color: "white", textAlign: "center", fontWeight: "600", display: "inline-block" }}>
										2
									</Text>
									<Text style={{ display: "inline-block", margin: 0, color: "#262261" }}>
										Choose one of our shipping providers
									</Text>
								</Section>

								<Section style={{ marginBottom: 12 }}>
									<Text style={{ width: 26, margin: 0, marginLeft: 4, height: 26, background: "#EF4037", borderRadius: "9999px", color: "white", textAlign: "center", fontWeight: "600", display: "inline-block" }}>
										3
									</Text>
									<Text style={{ display: "inline-block", margin: 0, color: "#262261" }}>
										Ship and prin the waybill
									</Text>
								</Section>

								<Section style={{ marginBottom: 12 }}>
									<Text style={{ width: 26, margin: 0, marginLeft: 4, height: 26, background: "#EF4037", borderRadius: "9999px", color: "white", textAlign: "center", fontWeight: "600", display: "inline-block" }}>
										4
									</Text>
									<Text style={{ display: "inline-block", margin: 0, color: "#262261" }}>
										Track and manage your shipments
									</Text>
								</Section>

							</Section>

							<Text className="text-[#262261] m-0">
								شكراً
							</Text>
							<Text style={{ color: "#262261", margin: 0, fontWeight: "bold" }}>
								فريق وارد
							</Text>

						</Section>

						<Container className="text-center my-12">
							<Button
								style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
								className="bg-[#ee4036] rounded-md text-white no-underline text-center px-5 py-2 cursor-pointer w-[144px] font-semibold"
								href="ship.waared.sa"
							>
								ابدأ الآن
							</Button>
						</Container>
						<Hr style={{ width: "80%", marginTop: "23px", marginBottom: 2 }} />
						<Container>
							<Text style={{ color: "#262261", margin: 0, textAlign: "center" }}>
								<Link style={{ color: "#262261" }} href="https://waared.sa">visit waared.sa</Link>
							</Text>
							<Container style={{
								marginBottom: 12, textAlign: "center"
							}} >
								<Link style={{ marginLeft: 27, marginRight: 27, display: "inline-block" }} className="cursor-pointer" href="https://www.instagram.com/waared.sa/?hl=en">
									<Img height="28" width="28"
										src={`${baseUrl}/static/instagram.png`}
									/>
								</Link>
								<Img height="28" width="28" style={{ display: "inline-block", marginLeft: 27, marginRight: 27 }}
									src={`${baseUrl}/static/x-twitter.png`}
								/>
								<Link style={{ display: "inline-block", marginLeft: 27, marginRight: 27 }} className="cursor-pointer" href="https://www.linkedin.com/company/waared-sa/">
									<Img height="28" width="28"
										src={`${baseUrl}/static/linkedin-in.png`}
									/>
								</Link>
							</Container>

							<Text style={{ color: "#262261", margin: 0, textAlign: "center" }}>
								© 2024 Waared. All Rights Reserved
							</Text>
							<Text style={{ color: "#262261", margin: 0, textAlign: "center" }}>
								Waared Company. Rabwah, Nahda St. Mena Businesss Center 3rd floor
							</Text>


						</Container>

					</Container>
				</Body>
			</Tailwind>
		</Html >
	);
};

export default WaaredHappyEidEmailAr;

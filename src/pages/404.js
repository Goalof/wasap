import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script place={"endOfBody"} rawKey={"6009da73af03b56eef1f96d0"}>
				{"<script>\nSmoothScroll({\n    // Время скролла 400 = 0.4 секунды\n    animationTime    : 800,\n    // Размер шага в пикселях \n    stepSize         : 75,\n\n    // Дополнительные настройки:\n    \n    // Ускорение \n    accelerationDelta : 30,  \n    // Максимальное ускорение\n    accelerationMax   : 2,   \n\n    // Поддержка клавиатуры\n    keyboardSupport   : true,  \n    // Шаг скролла стрелками на клавиатуре в пикселях\n    arrowScroll       : 50,\n\n    // Pulse (less tweakable)\n    // ratio of \"tail\" to \"acceleration\"\n    pulseAlgorithm   : true,\n    pulseScale       : 4,\n    pulseNormalize   : 1,\n\n    // Поддержка тачпада\n    touchpadSupport   : true,\n})\n</script>\n\n"}
			</script>
			<script place={"endOfHead"} rawKey={"6009de00d53b0e744cc0abc0"}>
				{"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js\" integrity=\"sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=\" crossorigin=\"anonymous\">\n</script>\n"}
			</script>
		</RawHtml>
	</Theme>;
});
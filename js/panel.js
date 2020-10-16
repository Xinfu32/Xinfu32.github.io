const ANIMATION_DURATION = 500;

var panelOpen = "";

var panelContentHidden = {
	about: `
			<div class="text">
				<p>Hi! I'm Frederick Qiu, a sophomore studying computer science in the college of arts and sciences at Princeton University. I currently have plans to go to graduate school, but I'm unsure yet if I want to continue in academia or work as a software engineer, so I'm keeping my options open and trying to get a taste for a a wide range of different career paths.</p>
				<p>I am very experienced with Java, and also have a considerable amount of experience in C, Python, web development (HTML/CSS/JS, PHP, MySQL), and R. The only languages I've learned "formally" are Java and C, with the rest learned through judicious use of Google and StackOverflow, so I think I could pick up any language in a pinch.</p>
				<p>As for my extracurricular activities, I'm love teaching - I do paid tutoring, volunteer test prep, and am also a TA for the introductory CS courses. In my free time, I like to run, and I also do a lot of plugin coding for Minecraft, as well as making electronic music (in a sense). More details in the "projects" section of this webpage.</p>
				
			</div>
			<div class="entry">
				<div class="item link" onclick="openInNewTab('links/Transcript.pdf')">
					<h4>Course Work</h4>
				</div>
				<div class="description">
					<p>I'm taking a wide variety of courses, with both practical programming courses as well as theory heavy ones like the graduate algorithms courses I'm taking this semester. Additionally, I have a strong mathematical background, having taken a proofs based linear algebra class and classical mechanics (which uses multi-variable calculus and other mathematical formulations like Lagrangians). Linked is my unofficial transcript.</p>
				</div>
			</div>
			<div class="entry">
				<div class="item link" onclick="openInNewTab('links/QiuFrederick.pdf')">
					<h4>Resume</h4>
				</div>
				<div class="description">
					<p>Linked is my resume, which has a condensed overview of the information listed on this webpage.</p>
				</div>
			</div>
	`,
	projects: `
			<div class="entry">
				<div class="item link" onclick="openInNewTab('https://github.com/TeamMonumenta/monumenta-plugins-public')">
					<h4>Monumenta Plugins</h4>
				</div>
				<div class="description">
					<p>I'm a lead developer for a Minecraft server called Monumenta, where I work with the Java plugins that add a variety of custom features to the server. Linked is our GitHub repository, to which I have contributed over 20,000 lines of code, doing everything from in game aesthetics to using niche data structures like Tries to efficiently parse item statistics.</p>
				</div>
			</div>
			<div class="entry">
				<div class="item link" onclick="openInNewTab('https://nmrqualytics.com')">
					<h4>NMR Qualytics</h4>
				</div>
				<div class="description">
					<p>I develop and maintain a dynamic website built with PHP, MySQL, and HTML/CSS/JS that is used by the company NMR Qualytics to provide clients with an automated system to submit and process requests for NMR lab tests on samples. Linked is the website. I also aid in the analysis of NMR test results.</p>
				</div>
			</div>
			<div class="entry">
				<div class="item link" onclick="openInNewTab('https://www.youtube.com/channel/UCvDFylkxaFLe9jozpwW_kwg')">
					<h4>Noteblock Music</h4>
				</div>
				<div class="description">
					<p>Linked is my YouTube channel, where I recreate songs using "noteblocks" in Minecraft. The process requires transcribing different instrumental parts from a song by ear and then trying to emulate the original song using a limited range of sounds. It's very difficult, but I find it really fun because it's almost like a puzzle trying to figure out how to use the limited tools in-game to make good sounding music.</p>
				</div>
			</div>
	`,
	experience: `
			<div class="entry">
				<div class="item">
					<h4>IQVIA Internship</h4>
				</div>
				<div class="description">
					<p>In the summer of 2019, I interned at IQVIA as a software engineer. My biggest project was pioneering the use of an open source software in clinical trials, which would save an estimated $1,500,000 (otherwise spent on software from external providers). This past summer, the project was presented as a case study to the Systems Development group globally. I also worked with processing data using MS SQL and SSIS.</p>
				</div>
			</div>
			<div class="entry">
				<div class="item link" onclick="openInNewTab('links/NMRAnalysisTetrahedronLetters.pdf')">
					<h4>NMR Analysis Publication</h4>
				</div>
				<div class="description">
					<p>At NMR Qualytics, I interpret NMR test results, determining the chemical structure of samples sent by clients. Recently, one of our clients published a research paper in Tetrahedron Letters that used these analyses. Linked is a PDF of the publication, of which I am listed as third author.</p>
				</div>
			</div>
			<div class="entry">
				<div class="item link" onclick="openInNewTab('links/StatisticalAnalysisMDPISustainability.pdf')">
					<h4>Statistical Analysis Publication</h4>
				</div>
				<div class="description">
					<p>In the summer of 2017, I conducted statistical research under a professor at Villanova, using R to analyze results of an opinion survey on economic growth and environmental pollution in China. Our results were published in MDPI Sustainability and presented at the American Institute of Chemical Engineers Annual Meeting (2018). Linked is a PDF of the publication, of which I am listed as first author.</p>
				</div>
			</div>
	`
};

function openPanel() {
	if (panelOpen != "") {
		return;
	}
	
	panelOpen = $(this).attr("id");
	
	$("#header").animate({
		flexBasis: "6em",
		paddingBottom: "1em"
	}, ANIMATION_DURATION);
	
	$(".divider").animate({
		flexBasis: "0em"
	}, ANIMATION_DURATION);
	
	$("#content").animate({
		flexGrow: "1",
		flexBasis: "35em"
	}, ANIMATION_DURATION);
	
	$(".border").animate({
		width: "0%"
	}, ANIMATION_DURATION);
	
	$(".spacer").animate({
		width: "0%"
	}, ANIMATION_DURATION);
	
	$(".panel").each(function() {
		if ($(this).attr("id") == panelOpen) {
			$(this).removeClass("panel-hover");
			$(this).animate({
				height: "100%",
				width: "100%",
				backgroundColor: "#EEEEEE"
			}, ANIMATION_DURATION);
		} else {
			let vanisher = $(this);
			setTimeout(function() {
				vanisher.css("display", "none");
			}, ANIMATION_DURATION * 0.8);
			$(this).animate({
				width: "0%",
				opacity: "0"
			}, ANIMATION_DURATION);
		}
	});
	
	populatePanel(panelOpen);
	
	setTimeout(function() {
		$("#box").css("display", "block");
		$("#x").animate({
			opacity: "0.5"
		}, ANIMATION_DURATION / 2);
	}, ANIMATION_DURATION / 2);
	
	setTimeout(function() {
		$("p").animate({
			opacity: "1",
		}, ANIMATION_DURATION / 5);
	}, ANIMATION_DURATION * 0.8);
}

function closePanel() {
	if (panelOpen == "") {
		return;
	}
	
	$("#header").animate({
		flexBasis: "9em",
		paddingBottom: "6em"
	}, ANIMATION_DURATION);
	
	$(".divider").animate({
		flexBasis: "5em"
	}, ANIMATION_DURATION);
	
	$("#content").animate({
		flexGrow: "0",
		flexBasis: "25em"
	}, ANIMATION_DURATION);
	
	$(".border").animate({
		width: "6%"
	}, ANIMATION_DURATION);
	
	$(".spacer").animate({
		width: "2%"
	}, ANIMATION_DURATION);
	
	setTimeout(function() {
		$(".panel").addClass("panel-hover");
	}, ANIMATION_DURATION * 0.8);
	$(".panel").css("display", "flex");
	$(".panel").animate({
		width: "28%",
		height: "20em",
		opacity: "1",
		backgroundColor: "#D0D0D0"
	}, ANIMATION_DURATION);
	
	$("#box").css("display", "none");
	$("#x").css("opacity", "0");
	$("p").css("opacity", "0");
	
	populatePanel(panelOpen);
	panelOpen = "";
}

function populatePanel(id) {
	let panelContent = $("#" + id).find("> div.panel-content");
	let newContent = panelContentHidden[id];
	panelContentHidden[id] = panelContent.html();
	panelContent.fadeOut({
		duration: ANIMATION_DURATION / 2,
		queue: false,
		complete: function() {
			panelContent.html(newContent).fadeIn(ANIMATION_DURATION / 2);
		}
	});
}

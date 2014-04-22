
var schedule = {
	breakfast:    "08:00 - 09:00",
	registration: "08:00 - 08:50",
	welcome:      "08:50 - 09:00",
	sponsorpitch: "09:00 - 09:40",
	keynote:      "09:40 - 10:30",
	break1:       "10:30 - 11:00",
	talk1:        "11:00 - 11:40",
	talk2:        "11:45 - 12:25",
	lunch:        "12:25 - 13:50",
	talk3:        "13:50 - 14:30",
	talk4:        "14:35 - 15:15",
	talk5:        "15:20 - 16:00",
	break2:       "16:00 - 16:30",
	talk6:        "16:30 - 17:10",
	talk7:        "17:15 - 17:55",
	talk8:        "17:55 - 18:40",
	dinner:       "18:40 - 24:00",
	break_title:        "Break",
	break_raffle_title: "Break and Raffle",
	lunch_title:        "Lunch",
	dinner_title:       "Dinner & EPAM Party, <br/> <b>Performer:</b> <b>" +
		"<a target=\"_blank\" href=\"http://www.littlegweevil.net/\">Little G Weevil</a></b>," +
		"<br/> <b>Concert:</b> 20:30 - 22:00, <b>DJ:</b> until 24:00",
	welcome_title:      "Welcome",
	breakfast_title:    "Breakfast",
	leanpoker_title:    "Lean Poker - A fun way to learn continuous deployment",
	sponsorpitch_title: "Sponsor pitch",
	registration_title: "Registration & Breakfast"
}

var schedule2 = {
	breakfast:    "08:00 - 08:50",
	leanpoker:    "08:50 - 09:00",
	keynote:      "09:00 - 09:50",
	talk1:        "09:55 - 10:35",
	break1:       "10:35 - 11:05",
	talk2:        "11:05 - 11:45",
	talk3:        "11:50 - 12:30",
	lunch:        "12:00 - 13:55",
	talk4:        "13:55 - 14:35",
	talk5:        "14:40 - 15:20",
	talk6:        "15:25 - 16:05",
	break2:       "16:05 - 16:45",
	talk7:        "16:45 - 17:25",
	talk8:        "17:30 - 18:10",
}

module.exports = {

	prompts: false,
	outPath: "www/",

	// These are variables will be accessible via our templates
	templateData: {

		// Conference info
		conf: {
			name: "Craft Conference",
			tagline: "Craftsmanship conference",
			description: "CRAFT is about craftsmanship in software companies, which tools, methods, practices should be part of the toolbox of a modern developer and company. You can learn the most important topics from the best speakers and practitioners in our community.",
			date: "April 23-25, 2014",
			price: "",
			venue: "",
			address: "",
			city: "Budapest",
			state: "Hungary",
			twitter: "https://twitter.com/CraftConf",
			twitter_account: "@CraftConf",
			facebook: "",
			lanyrd: "http://lanyrd.com/2014/craftconf/"
		},

		// Site info
		site: {
			theme: "craftconf",
			url: "http://craft-conf.com/2014/",
			googleanalytics: ""
		},

		// Active sections on the website
		// to deactivate comment out with '//'
		// you can also change order here and it will reflect on page
		sections: [
			'about',
			'workshops',
			'speakers',
			'tickets',
			'schedule',
			'location',
			'sponsors',
			'organizers',
			'meetups',
			'contact'
		],

		// Labels which you can translate to other languages
		labels: {
			about: "About",
			location: "Location",
			speakers: "Speakers",
			workshops: "Workshops",
			schedule: "Schedule",
			tickets: "Tickets",
			sponsors: "Sponsors",
			organizers: "Organizers",
			meetups: "Meetups",
			contact: "Contact"
		},

		schedule: [
			{
				header: "Day 2",
				name: 'Thursday',
				stages: [
					{
						name: 'Main room',
						slots: [
							{ time: schedule.registration, title: schedule.registration_title },
							{ time: schedule.welcome,      title: schedule.welcome_title },
							{ time: schedule.sponsorpitch, title: schedule.sponsorpitch_title },
							{ time: schedule.keynote,      speaker: 'BodilStokke', keynote: true },
							{ time: schedule.break1,       title: schedule.break_title},
							{ time: schedule.talk1,        speaker: 'GojkoAdzic' },
							{ time: schedule.talk2,        speaker: 'JonasBoner' },
							{ time: schedule.lunch,        title: schedule.lunch_title },
							{ time: schedule.talk3,        speaker: 'MateNadasdi' },
							{ time: schedule.talk4,        speaker: 'EricEvans' },
							{ time: schedule.talk5,        speaker: 'AlissaPajer' },
							{ time: schedule.break2,       title: schedule.break_title},
							{ time: schedule.talk6,        speaker: 'DanNorth' },
							{ time: schedule.talk7,        speaker: 'BruceEckel' },
							{ time: schedule.talk8,        speaker: 'AmberCase' },
							{ time: schedule.dinner,       title: schedule.dinner_title },
						]
					},
					{
						name: 'Room 1',
						slots: [
							{ time: schedule.registration, title: schedule.registration_title },
							{ time: schedule.welcome,      title: schedule.welcome_title },
							{ time: schedule.sponsorpitch, title: schedule.sponsorpitch_title },
							{ time: schedule.keynote,      title: 'Keynote in the Main room', keynote: true },
							{ time: schedule.break1,       title: schedule.break_title},
							{ time: schedule.talk1,        speaker: 'BenMathews' },
							{ time: schedule.talk2,        speaker: 'JohnWillis' },
							{ time: schedule.lunch,        title: schedule.lunch_title },
							{ time: schedule.talk3,        speaker: 'MitchellHashimoto' },
							{ time: schedule.talk4,        speaker: 'AsheDryden' },
							{ time: schedule.talk5,        speaker: 'SzabolcsSzabolcsiToth' },
							{ time: schedule.break2,       title: schedule.break_title},
							{ time: schedule.talk6,        speaker: 'AlvaroVidela' },
							{ time: schedule.talk7,        speaker: 'JohnHughes' },
							{ time: schedule.talk8,        speaker: 'DouglasCrockford' },
							{ time: schedule.dinner,       title: schedule.dinner_title },
						]
					},
					{
						name: 'Room 2',
						slots: [
							{ time: schedule.registration, title: schedule.registration_title },
							{ time: schedule.welcome,      title: schedule.welcome_title },
							{ time: schedule.sponsorpitch, title: schedule.sponsorpitch_title },
							{ time: schedule.keynote,      title: 'Keynote in the Main room', keynote: true },
							{ time: schedule.break1,       title: schedule.break_title},
							{ time: schedule.talk1,        speaker: 'RachelLaycock' },
							{ time: schedule.talk2,        speaker: 'AnnaObukhova' },
							{ time: schedule.lunch,        title: schedule.lunch_title },
							{ time: schedule.talk3,        speaker: 'AndrewGodwin' },
							{ time: schedule.talk4,        speaker: 'DanielPosch' },
							{ time: schedule.talk5,        speaker: 'SimonBrown' },
							{ time: schedule.break2,       title: schedule.break_title},
							{ time: schedule.talk6,        speaker: 'TimFelgentreff' },
							{ time: schedule.talk7,        speaker: 'AndyPiper' },
							{ time: schedule.talk8,        speaker: 'MichaelFeathers' },
							{ time: schedule.dinner,       title: schedule.dinner_title },
						]
					}
				]
			},
			{
				header: "Day 3",
				name: 'Friday',
				stages: [
					{
						name: 'Main room',
						slots: [
							{ time: schedule2.breakfast,   title: schedule.breakfast_title },
							{ time: schedule2.leanpoker,   title: schedule.leanpoker_title },
							{ time: schedule2.keynote,     speaker: 'ChadFowler', keynote: true },
							{ time: schedule2.talk1,       speaker: 'TheoSchlossnagle' },
							{ time: schedule2.break1,      title: schedule.break_title},
							{ time: schedule2.talk2,       speaker: 'GerardMeszaros' },
							{ time: schedule2.talk3,       speaker: 'JuttaEckstein' },
							{ time: schedule2.lunch,       title: schedule.lunch_title },
							{ time: schedule2.talk4,       speaker: 'JevgeniKabanov' },
							{ time: schedule2.talk5,       speaker: 'StefanTilkov' },
							{ time: schedule2.talk6,       speaker: 'GarethRushgrove' },
							{ time: schedule2.break2,      title: schedule.break_raffle_title},
							{ time: schedule2.talk7,       speaker: 'EvanCzaplicki' },
							{ time: schedule2.talk8,       speaker: 'BjornFreemanBenson' }
						]
					},
					{
						name: 'Room 1',
						slots: [
							{ time: schedule2.breakfast,   title: schedule.breakfast_title },
							{ time: schedule2.leanpoker,   title: schedule.leanpoker_title },
							{ time: schedule2.keynote,     title: 'Keynote in the Main room', keynote: true },
							{ time: schedule2.talk1,       speaker: 'MarkusVolter' },
							{ time: schedule2.break1,      title: schedule.break_title},
							{ time: schedule2.talk2,       speaker: 'TomomiImura' },
							{ time: schedule2.talk3,       speaker: 'IanRobinson' },
							{ time: schedule2.lunch,       title: schedule.lunch_title },
							{ time: schedule2.talk4,       speaker: 'ChrisAtherton' },
							{ time: schedule2.talk5,       speaker: 'DominicTarr' },
							{ time: schedule2.talk6,       speaker: 'FerossAboukhadijeh' },
							{ time: schedule2.break2,      title: schedule.break_raffle_title},
							{ time: schedule2.talk7,       speaker: 'WimGodden' },
							{ time: schedule2.talk8,       speaker: 'JeffHodges' }
						]
					},
					{
						name: 'Room 2',
						slots: [
							{ time: schedule2.breakfast,   title: schedule.breakfast_title },
							{ time: schedule2.leanpoker,   title: schedule.leanpoker_title },
							{ time: schedule2.keynote,     title: 'Keynote in the Main room', keynote: true },
							{ time: schedule2.talk1,       speaker: 'TorbenHoffmann' },
							{ time: schedule2.break1,      title: schedule.break_title},
							{ time: schedule2.talk2,       speaker: 'StasZvinyatskovsky' },
							{ time: schedule2.talk3,       speaker: 'NatPryceSteveFreeman' },
							{ time: schedule2.lunch,       title: schedule.lunch_title },
							{ time: schedule2.talk4,       speaker: 'SimonHildrew' },
							{ time: schedule2.talk5,       speaker: 'StefanEdlich' },
							{ time: schedule2.talk6,       speaker: 'EndreVarga' },
							{ time: schedule2.break2,      title: schedule.break_raffle_title},
							{ time: schedule2.talk7,       speaker: 'DiegoOngaro' },
							{ time: schedule2.talk8,       speaker: 'GregYoung' }
						]
					}
				]
			}
		],

		// Speakers and talks
		speakers: [
			{
				anchor: "AlissaPajer",
				name: "Alissa Pajer",
				photo: "themes/craftconf/img/speakers/AlissaPajer.png",
				bio: "<p>Alissa Pajer began her functional programming career as a Scala engineer at Precog. She worked there for two years, until Precog was acquired by RichRelevance, her current employer. Before her coding days, she studied pure mathematics, earning a Bachelors from Carleton College and a Masters from the University of Colorado. She currently lives in Munich, Germany, where she spends her non-computer time hiking, running, swimming, and cycling.</p>",
				company: "RichRelevance",
				link: {
					href: "http://twitter.com/alissapajer",
					text: "@alissapajer"
				},
				presentation: {
					title: "Functional Examples from Category Theory",
					description: "Many concepts from Category Theory appear in functional programming languages, for example the functor, monoid, monad, and natural transformation. Although each of these concepts carries with it a distinct structure, each provides us with a way to unite the similarities in a piece of code, or even across and entire project, while still maintaining the crucial differences. Category Theory gives us the means to abstract over concepts such as types, type constructors, and operations, to name a few. In other words, Category Theory is the programmer's library of abstractions.<br><br>Functional languages, by their very nature, often direct the programmer to think abstractly in terms of categories. From a meta perspective, learning Category Theory helps us to become aware of the types of thoughts we have when we program in a functional language, versus say an imperative one. Programming in a different language inherently changes how we approach a problem, given the tools available in that language. By becoming aware of those differences in approach, we can make more informed choices in our programs.<br><br>In this talk we will discuss via example how we can understand various functional programs using a categorical approach. Additionally, we will discuss how we can use Category Theory to write cleaner and more maintainable code.",
				}
			},
			{
				anchor: "AlvaroVidela",
				name: "Alvaro Videla",
				photo: "themes/craftconf/img/speakers/AlvaroVidela.png",
				bio: "<p>Alvaro Videla works as Developer Advocate for RabbitMQ/Pivotal. Before moving to Europe he used to work in Shanghai where he helped building one of Germany's biggest dating websites. He co-authored the book \"RabbitMQ in Action\" for Manning Publishing. Some of his open source projects can be found here: <a href=\"http://github.com/videlalvaro\">http://github.com/videlalvaro.</a> Apart from code related stuff he likes traveling with his wife, listening/playing music and reading books. You can find him on Twitter as @old_sound.</p>",
				company: "Pivotal",
				link: {
					href: "http://twitter.com/old_sound",
					text: "@old_sound"
				},
				presentation: {
					title: "Building a Distributed Data Ingestion System with RabbitMQ",
					description: "Your company has servers distributed around the world and you need to process data in a centralised location. The data is produced by applications using different technology stacks and comes from various sources, from web servers to sensors. How could you solve this problem? Enter RabbitMQ.<br/><br/>In this talk we are going to show how to build a system that can ingest data produced at separate geo located areas (think AWS and it's many regions) and replicate it to a central cluster where it can be further processed and analysed.<br/><br/>We will present an example of how to build a system like this one by using RabbitMQ Federation to replicate data across AWS Regions and RabbitMQ support for many protocols to produce/consume data.<br/><br/>To help with scalability we are going to show an interesting way to implement sharded queues with RabbitMQ by using the Consistent Hash Exchange.<br/><br/>If you want to learn what else has RabbitMQ to offer beyond simple messaging and queueing, then this is the talk for you. <h4>Talk objective:</h4> Our goal is to show that over the years RabbitMQ has gone way beyond a \"simple\" AMQP server to be able to have federated brokers, HA queues and support for many protocols and languages. <h4>Target Audience:</h4><ul><li>Developers interested in building a data ingestion platform that span many locations across the world.</li><li>Developers that have built these kind of solutions already but are interested in learning about alternatives.</li><li>Developers interested in RabbitMQ and Messaging in general.</li></ul>",
				}
			},
			{
				anchor: "AmberCase",
				name: "Amber Case",
				photo: "themes/craftconf/img/speakers/AmberCase.png",
				bio: "<p>Amber Case is a researcher exploring the field of cyborg anthropology. Amber is also the director of the <a href=\"http://www.esri.com\">Esri</a> R&D Center in lovely Portland, Oregon. Her work there started when Esri acquired <a href=\"https://geoloqi.com/\">Geoloqi</a>, her startup that provided location functionality for mobile apps. Amber is a captivating presence when she’s geeking out about the interaction between humans and technology, hence her barnstorming appearances at TED and South by Southwest. Right now, her work involves non-visual augmented reality, the future of location, and reducing the amount of time and space it takes for people to connect. Her home on the web is <a href=\"http://caseorganic.com/\">caseorganic.com</a>.</p>",
				company: "Esri",
				link: {
					href: "http://twitter.com/caseorganic",
					text: "@caseorganic"
				},
				presentation: {
					title: "Getting Things Done at Scale",
					description: "Getting things done is different at scale. After Case's company Geoloqi joined Esri in 2012, she grew her division from 6-20 people, and successfully launched two major products in the course of a year. She also managed the transition of the company to Github from Enterprise and spearheaded an effort for more open source projects. This speech will cover what Case learned from managing a team of 6 to managing a team of 20 in an international company of 3,000. It will detail hiring, morale, culture, and translating what you need to do into a language the larger team can understand, and what changes from 2 people to 6, to 20 and more.",
				}
			},
		    {
			    anchor: "AndrewGodwin",
			    name: "Andrew Godwin",
			    photo: "themes/craftconf/img/speakers/AndrewGodwin.png",
			    bio: "<p>Andrew is a Senior Software Engineer on Eventbrite's Architecture team, and a Core Developer of the Django web framework, specialising in Django's ORM and schema migrations framework. He has spent the last eight years developing schema migration solutions against four major relational databases, and when he's not working on software architecture or data storage problems he enjoys archery and being a private pilot.</p>",
			    company: "Eventbrite",
			    link: {
				    href: "http://twitter.com/andrewgodwin",
				    text: "@andrewgodwin"
			    },
			    presentation: {
				    title: "Databases & Schemas in an Agile World",
				    description: "Strict database schemas are a wonderful thing for data integrity, but they can get in the way of new features and fast, iterative development. Learn how you can change your database schema in a fast and downtime-free way, how PostgreSQL is enabling more and more lock-free schema changes, how the Django web framework and its community are adapting to support better schema workflows, and how, sometimes, you can use schemaless data in a relational database and get the best of both worlds - flexible storage, and fast query times.",
			    }
		    },
			{
				anchor: "AndyPiper",
				name: "Andy Piper",
				photo: "themes/craftconf/img/speakers/AndyPiper.png",
				bio: "<p>Andy Piper is widely known as a Social Bridgebuilder and speaker, and works as Developer Advocate for Cloud Foundry, the Open Source Platform-as-a-Service. His passions span a wide variety of areas: cloud, devops, mobile devices, the Internet of Things, Arduino and similar technologies, social computing, and photography. He is project lead and developer on the Eclipse Paho lightweight messaging project. He works for Pivotal. Andy was previously with IBM Software Group for more than 10 years, as a consultant, strategist, and WebSphere Messaging Community Lead. He holds a Master of Arts (Oxf) in Modern History from Brasenose College, Oxford University.</p>",
				company: "Pivotal",
				link: {
					href: "http://twitter.com/andypiper",
					text: "@andypiper"
				},
				presentation: {
					title: "Next-Generation Development Platforms: why data, code and mobile converge in the open cloud",
					// description: "Getting things done is different at scale. After Case's company Geoloqi joined Esri in 2012, she grew her division from 6-20 people, and successfully launched two major products in the course of a year. She also managed the transition of the company to Github from Enterprise and spearheaded an effort for more open source projects. This speech will cover what Case learned from managing a team of 6 to managing a team of 20 in an international company of 3,000. It will detail hiring, morale, culture, and translating what you need to do into a language the larger team can understand, and what changes from 2 people to 6, to 20 and more.",
				}
			},
			{
				anchor: "AnnaObukhova",
				name: "Anna Obukhova",
				photo: "themes/craftconf/img/speakers/AnnaObukhova.png",
				bio: "<p>Hello, I’m Anna, I’m  Agile Coach currently working in Agile Practice department in Luxoft, large Eastern European software outsourcer. I work with Agile methodologies stack from 2004, being Scrum Master, Project and Program Manager, mainly interested in distributed and dispersed projects and effectiveness of team communication in such conditions.<br><br>My passion is to collect and share best industry and company practices in Agile management.  I’m helping Agile teams and programs to improve the process and implement the transition from Waterfall to Agile in corporate environment (our clients are major banks and very large companies from other industires). I use my first education in Biology to connect the working tips and recommendations with the natural processes that happen in our bodies (especially in the brain). It can explain a lot and I'm very excited how naturally Agile works.</p>",
				company: "Luxoft",
				link: {
					href: "",
					text: ""
				},
				presentation: {
					title: "The SCRUM and the willpower: how to boost your productivity",
					description: "Willpower is the force that is between the brain activity (I want to do this or I need to do this) and the action itself (start coding). If there is not enough willpower, people find it difficult to start any activity (especially that involves concentration an decision making). The willpower is not endless (so-called muscle theory of willpower), it can be saved, it can be trained, there are approaches how to keep the willpower level high. To keep the willpower (and thus, productivity) on the high level, people should know and use different approaches that lay in the field on the social and cognitive science. There are a lot of evidences that SCRUM improves the developer’s productivity in terms of speed of development, code quality, and accuracy of design. Unfortunately mainly all recommendations from SCRUM coaches look like “believe me, if you do this, you will have better velocity”. Yes, it works. But why does it work? Sometimes SCRUM does not give such great results even when main elements are in place. The question “Why” and “What makes the difference” is here again. I will describe the model of relationship between the willpower related brain metabolism on very low level (specific amino acid cycle) and the SCRUM practices. I can prove that SCRUM addresses the productivity of the people’s brain using 3 different flows simultaneously. There are several tips that make these productivity flows working or not. You can make Agile productive, you can have non-productive Agile. I will show you where the difference is. Overall there are 10 productivity tips that can be put into 3 flows. As the outcome of this session, Agile coaches, and all people who can change the process (in fact that is any team member) will review their SCRUM: does the way they have it improve the productivity or they are losing all the power? The changes are cheap, the outcome can be huge.",
				}
			},
			{
				anchor: "AsheDryden",
				name: "Ashe Dryden",
				photo: "themes/craftconf/img/speakers/AsheDryden.png",
				bio: "<p>Ashe Dryden is an indie ruby developer living in Madison, WI. She's been involved with the web in some form or another over the course of the past 13 years. Ashe is an outspoken educator for diversity, inclusiveness, and empathy. She's currently writing a book on increasing diversity within companies, as well as working on a video series and site to serve as a resource to people who want to get involved. When she isn't discussing technology or it’s intersection with culture, she's cycling, tweeting, playing board games, debating the social implications of Star Trek episodes, being that awkward girl at the party, and waiting for her next burrito fix.</p>",
				company: "Web Developer, Community Organizer",
				link: {
					href: "http://twitter.com/ashedryden",
					text: "@ashedryden"
				},
				presentation: {
					title: "Open source isn't for everyone, but it could be",
					description: "The state of diversity in open source contributions is abysmal. With the number of female OSS contributors at a shockingly low 1.5% and other groups not even documented, we need to ask what we can be doing better as a community. We’ll discuss the barriers that people face contributing to our open source projects and what we can do to increase participation.",
				}
			},
			{
				anchor: "BenMathews",
				name: "Ben Mathews",
				photo: "themes/craftconf/img/speakers/BenMathews.png",
				bio: "<p>Ben Mathews is an engineer in Facebook's London office. His main focus at Facebook is security in the PHP codebase — he builds tools to detect security problems, and tries to make Facebook's codebase safe by default. He also developed the framework that Facebook uses to reliably delete user accounts and all of their data.</p>",
				company: "Facebook",
				link: {
					href: "https://www.facebook.com/benmathews",
					text: "FB/benmathews"
				},
				presentation: {
					title: "Lessons from Facebook's PHP Codebase",
					description: "Facebook has a massive PHP codebase, with more than a thousand developers committing changes every week, and new changes rolled out to users twice a day. In this talk, I'll discuss some of the challenges that we face operating at this scale and how we handle them. I'll touch on security, testability, data fetching and other related topics.",
				}
			},
			{
				anchor: "BjornFreemanBenson",
				name: "Bjorn Freeman-Benson",
				photo: "themes/craftconf/img/speakers/BjornFreemanBenson.png",
				bio: "<p>Bjorn is Software Psychologist and VP of Engineering at New Relic. He previously worked at Amazon, the Eclipse Foundation, the world-famous-to-the-right-people OTI, and a couple of failed start-ups. He hasn’t written any books, but he is a voracious reader and has thousands of pounds of them including an extensive collection of history books on the US space program history books and another of space opera science fiction. Bjorn holds a PhD in Computer Science from the University of Washington and a pilot's license and is always wondering which one has been more useful.</p>",
				company: "New Relic",
				link: {
					href: "http://twitter.com/bjorn_fb",
					text: "@bjorn_fb"
				},
				presentation: {
					title: "Software Psychology: The Art of Listening to Code",
					description: "Writing code is fun, it's necessary, it's hard, and it's incredibly satisfying both as a hobby and a profession. But once your project gets too large to hold entirely in your head, its elegance and simplicity starts to deteriorate - and that's where software psychology comes in. When we listen to the code, and the design, and the devops, we can hear the code calling for help and it can lead us to the right place to refactor, to redesign, and to robust-ize. A simple case of listening is mapping defect rates to modules and then refactor the modules with the worst rates. A more challenging case of listening is when a complex multi-service architecture'd app suffers a performance brown-out: what do you listen for and how do you counsel the code through it's difficulties?<br><br>I'll present a number of situations where listening to the code (or the design or the devops) is a good idea and various strategies (and tools) you can use to do so. I've got a wealth of examples from my years as a practicing software psychologist, so sit back and prepare to learn the art of listening.",
				}
			},
			{
				anchor: "BodilStokke",
				name: "Bodil Stokke",
				photo: "themes/craftconf/img/speakers/BodilStokke.png",
				bio: "<p>Bodil is a compulsive conference speaker in the fields of functional programming and internets technologies, and is a co-organiser of multiple developer conferences in Scandinavia and the UK, mostly because she’s still learning how to stop. She is a prolific contributor to the Free Software community, and has recently taken up designing new programming languages as a hobby. In her spare time, she works as a developer for Future Ad Labs, a London based startup that wants to make advertising a productive member of society. Her favourite pony is Pinkie Pie.</p>",
				company: "Future Ad Labs",
				link: {
					href: "http://twitter.com/bodil",
					text: "@bodil"
				},
				presentation: {
					title: "Programming, Only Better",
					description: "The programming paradigms that served us so well through the 80s and 90s are failing us. Building systems the way we're used to building them always seems to end in the inevitable death march towards exponential complexity. But once you stop to ask the right question- \"what's really causing all this complexity?\" - you realise the answers have really been staring you in the face all along. Debugging is only hard when you can't reason about your code. Concurrency is only hard when you can't predict the state of your code. Reusability is only hard when your components aren't naturally composable.<br><br>Fortunately, languages addressing these issues specifically are popping up all over the place. In many cases, it turns out we've had the solutions to our problems for a long time, we've just forgotten about them, or never really bothered to look. Let's take a moment to explore some of these languages, not as exercises in syntactic details, but looking at the inherent properties in their design that enable us to defy decades of OO tradition and write honest-to-Dijkstra bug free, fault tolerant software without even trying. After half a century in the wilderness, functional programming seems to finally be gaining some ground on the barbarians. Let's examine why.",
				}
			},
			{
				anchor: "BruceEckel",
				name: "Bruce Eckel",
				photo: "themes/craftconf/img/speakers/BruceEckel.png",
				bio: "<p>Bruce Eckel (<a href=\"http://www.bruceeckel.com\">www.BruceEckel.com</a>) is the author (with Dianne Marsh) of <a href=\"http://www.atomicscala.com/\">Atomic Scala</a>, Thinking in Java (Prentice-Hall, 1998, 2nd Edition, 2000, 3rd Edition, 2003, 4th Edition, 2006), the Hands-On Java eSeminar (available on the Web site), Thinking in C++ (PH 1995; 2nd edition 2000, Volume 2 with Chuck Allison, 2003), C++ Inside & Out (Osborne/McGraw-Hill 1993), and First Steps in Flex (with James Ward, 2008) among others. He's given hundreds of presentations throughout the world, published over 150 articles in numerous magazines, was a founding member of the ANSI/ISO C++ committee and speaks regularly at conferences. He was for many years the chair of both the C++ and Java tracks at the Software Development conference, is cofounder of the JavaPosse Roundup Conference and creator of the Scala Summit Conference. He provides public and private training and consulting in programming languages and software system design.</p>",
				company: "MindView",
				link: {
					href: "http://twitter.com/BruceEckel",
					text: "@BruceEckel"
				},
				presentation: {
					title: "What Makes a Good Development Process?",
					description: "This is a review and high-level observation of ideas and practices the development community has evolved over the last 20 years or so. My goal is not just to help fill gaps in your knowledge, but perhaps also to reveal patterns of the problems we’ve been solving, which might lead us to additional insights. In particular, how are we creating better communication paths with our stakeholders? And how does our new understanding of development influence our organizational structures (à la <a href=\"http://www.Reinventing-Business.com\">www.Reinventing-Business.com</a>)?",
				}
			},
			{
				anchor: "ChadFowler",
				name: "Chad Fowler",
				photo: "themes/craftconf/img/speakers/ChadFowler.png",
				bio: "<p>Chad Fowler is an internationally known software developer, trainer, manager, speaker, and musician. Over the past decade he has worked with some of the world’s largest companies and most admired software developers. Chad is CTO of 6Wunderkinder. He is the author or co-author of a number of popular software books, including Rails Recipes and The Passionate Programmer: Creating a Remarkable Career in Software Development.</p>",
				company: "6Wunderkinder",
				link: {
					href: "http://twitter.com/chadfowler",
					text: "@chadfowler"
				},
				presentation: {
					title: "McDonalds, Six Sigma, and Offshore Outsourcing: Unexpected Sources of Insight",
					// description: "In the past year, Facebook for Android has moved from a primarily webview based app to an almost entirely native experience. It has transitioned from being built by a small team to a distributed development model where product teams are responsible for their features. And it has grown to be used by well over a hundred million users a day, distributed across devices with orders of magnitude differences in capabilities.<br><br>This talk describes the technical and cultural challenges associated with making these transitions while continuing to ship a fast and lightweight app. We will describe changes we made to each step of the process of committing code, building, testing and releasing our apps to make sure we avoided regressions and measured improvements. We will describe an analytics framework that lets us measure and optimize various performance metrics, and make the costs of features visible to product teams. And we will talk about how we applied these lessons to write a set of core libraries and abstractions that make it easier to distribute development without hurting overall performance of the app. The talk will draw on real examples from a broad set of performance metrics such as startup time, data usage, disk usage, app size, battery consumption etc.",
				}
			},
			{
				anchor: "ChrisAtherton",
				name: "Chris Atherton",
				photo: "themes/craftconf/img/speakers/ChrisAtherton.png",
				bio: "<p>Chris Atherton is a senior user experience specialist at Equal Experts, where she currently works in an agile team on a <a href=\"https://www.gov.uk/\">gov.uk</a> project. Chris’s portfolio includes stints at Skype and the BBC, as well as agency work in retail, healthcare and not-for-profit sectors. Her three favourite projects to date are: (1) redesigning the visas and immigration experience for <a href=\"https://www.gov.uk/\">gov.uk</a>; (2) researching and creating a digital strategy to help young people talk about mental health; (3) storyboarding and scripting a children’s animation about thyroid disorders entirely in rhyme. Before running off to join the software circus, Chris researched and taught psychology; she has a PhD in cognitive neuroscience, and spends a lot of time thinking about people’s attention — namely how to get it, and how to keep it. Chris tweets at @finiteattention.</p>",
				company: "Equal Experts",
				link: {
					href: "http://twitter.com/finiteattention",
					text: "@finiteattention"
				},
				presentation: {
					title: "Uncomfortable UX: making life difficult and improving your product",
					description: "No wireframe survives contact with the user. This is great for UX people, because it means our lives are never dull — but it also makes things complicated for developers who just want to get on and build something. While it can be uncomfortable to challenge a team’s assumptions about what you are building and who it’s for, it is absolutely worthwhile.<br><br>In this session I will talk about:<ul><li>getting over the fear of putting something half-finished in front of users<li>how to get fast feedback from your users<li>different ways to involve your team in research<li>quick methods for communicating research findings<li>some surprising ways that continuous feedback from users benefits everyone</ul>",
				}
			},
			{
				anchor: "DanNorth",
				name: "Dan North",
				photo: "themes/craftconf/img/speakers/DanNorth.png",
				bio: "<p>Programmer and organizational change specialist Dan North applies principles from lean operations and agile software development to help organizations align their technology capabilities with their business objectives. With over twenty years of experience in IT, Dan is a frequent speaker at technology conferences worldwide, has published feature articles in numerous software and business publications, and contributed to The RSpec Book: Behaviour Driven Development with RSpec, Cucumber, and Friends and 97 Things Every Programmer Should Know: Collective Wisdom from the Experts. The originator of Behaviour-Driven Development (BDD) and Deliberate Discovery, Dan is currently working on his book, Accelerated Agile – from months to minutes, and helping organizations radically improve their delivery. He blogs at <a href=\"http://dannorth.net/blog\">http://dannorth.net/blog</a>.</p>",
				company: "Dan North & Associates",
				link: {
					href: "http://twitter.com/tastapod",
					text: "@tastapod"
				},
				presentation: {
					title: "Jackstones: the journey to mastery",
					description: "It takes time to become really good at something. Time, commitment and a genuine passion. If you're not having fun the learning is a chore, if you are then it hardly feels like learning at all, at least not like the thing they made you do in school. Craftsmanship is about making that commitment and then figuring out how to see it through.<br><br>Using examples of mastery from various fields and a thirty year paper-folding habit, Dan describes some of the many facets of craftsmanship and tries to figure out exactly what the craft is that we programmers do.",
				}
			},
			{
				anchor: "DanielPosch",
				name: "Daniel Posch",
				photo: "themes/craftconf/img/speakers/DanielPosch.png",
				bio: "<p>Daniel Posch is a programmer from California, originally from Vienna, Austria. While studying computer science at Stanford, he joined Addepar, a financial technology startup. Now graduated, he is still helping build the Addepar platform, and started Scramble.io, an open-source project to make encrypted email easy for everyone.</p>",
				company: "Addepar",
				link: {
					href: "http://twitter.com/dcposch",
					text: "@dcposch"
				},
				presentation: {
					title: "Browser Cryptography: Pros, Cons, and a way forward",
					// description: "",
				}
			},
			{
				anchor: "DiegoOngaro",
				name: "Diego Ongaro",
				photo: "themes/craftconf/img/speakers/DiegoOngaro.png",
				bio: "<p>Diego is a PhD student in Computer Science at Stanford University, where he researches distributed systems with Professor John Ousterhout. His research projects include RAMCloud, a scalable high-performance storage system; Raft, a new consensus algorithm designed for understandability; and LogCabin, a new coordination service built on Raft. His thesis topic involves bridging the theory and practice of consensus algorithm.</p>",
				company: "Stanford University",
				link: {
					href: "http://twitter.com/ongardie",
					text: "@ongardie"
				},
				presentation: {
					title: "Using Raft for Small-Scale Coordination and Large-Scale Replication",
					// description: "",
				}
			},
			{
				anchor: "DominicTarr",
				name: "Dominic Tarr",
				photo: "themes/craftconf/img/speakers/DominicTarr.png",
				bio: "<p>After a couple of years exploring dynamic forrest, Dominic has been been scaling the mountains of systems programming, and has recently begun spelunking the crypto-caves. Available for interesting side quests. Chaotic Good.</p>",
				company: "Independent Computer Software Professional",
				link: {
					href: "http://twitter.com/dominictarr",
					text: "@dominictarr"
				},
				presentation: {
					title: "There is no such thing as a general purpose database",
					description: "Lets compare databases with datastructures. Databases are built by companies and have marketing FUD and competing benchmarks. Compare this with data structures! There arn't any linked list salesmen spreading rumors about hash-tables.<br><br>Everyone understands that you must pick the right data structure and the right algorithm, or your program will be slow. We need to apply this style of thinking to systems and databases. We must understand the \"physics\" of our data. our \"data-physics\". If we hope to build programs that scale (along any dimension).",
				}
			},
			{
				anchor: "DouglasCrockford",
				name: "Douglas Crockford",
				photo: "themes/craftconf/img/speakers/DouglasCrockford.png",
				bio: "<p>Douglas Crockford was born in Frostbyte Falls, Minnesota, but left when he was only six months old because it was just too damn cold. He turned his back on a promising career in television when he discovered computers. He has worked in learning systems, small business systems, office automation, games, interactive music, multimedia, location-based entertainment, social systems, and programming languages. He is the inventor of Tilton, the ugliest programming language that was not specifically designed to be an ugly programming language. He is best known for having discovered that there are good parts in JavaScript. This was an important and unexpected discovery. He also discovered the JSON Data Interchange Format, the world's most loved data format. And he works at PayPal!</p>",
				company: "PayPal",
				link: {
					href: "http://www.crockford.com/",
					text: "crockford.com"
				},
				presentation: {
					title: "The Better Parts",
					description: "This talk is about using programming languages more effectively, and using the experience to create and select better programming languages. There are bad practices in software development that are so old and well established that it is difficult to recognize the problems they cause. There will be a review of the new good parts in ES6. JSON will also be mentioned.",
				}
			},
			{
				anchor: "EricEvans",
				name: "Eric Evans",
				photo: "themes/craftconf/img/speakers/EricEvans.png",
				bio: "<p>Eric Evans is a specialist in domain modeling and design in large business systems. Since the early 1990s, he has worked on many projects developing large business systems with objects and has been deeply involved in applying Agile processes on real projects.<br><br>Out of this range of experiences emerged the synthesis of principles and techniques shared in the book <a href=\"http://www.domainlanguage.com/ddd/\">Domain-Driven Design\"</a> Addison-Wesley 2003.<br><br>Eric now leads Domain Language, Inc., a consulting group which coaches and trains teams to make their development more productive and relevant through effective application of domain modeling and design.<br><br>Website: <a href=\"http://www.domainlanguage.com/\">http://www.domainlanguage.com/</a><br><br>Books: <a href=\"http://www.domainlanguage.com/ddd/\">Domain-Driven Design: Tackling Complexity in the Heart of Software</a></p>",
				company: "Domain Language Inc.",
				link: {
					href: "https://twitter.com/ericevans0",
					text: "@ericevans0"
				},
				presentation: {
					title: "Acknowledging CAP at the Root - in the Domain Model",
					description: "The techniques used to distribute software, scale it through concurrency or make it tolerant of latency are hobbled when, deep inside, the business logic is based on inappropriate assumptions of consistency. Yet it is common to do domain modeling and design business features heedless of these issues, and then patch things up after the fact with technical tricks. In DDD, we consider the the CAP tradeoffs to be central concerns of the design, and we incorporate into our domain models explicit assertions about the boundaries of consistency. When deployment reveals that additional or different CAP tradeoffs must be made, we go back to the root of the problem and modify the  domain model to reflect those tradeoffs explicitly. In this talk, I’ll discuss three DDD patterns that help us address CAP tradeoffs: Aggregates, Domain Events and Bounded Contexts.",
				}
			},
			{
				anchor: "EndreVarga",
				name: "Endre Sándor Varga",
				photo: "themes/craftconf/img/speakers/EndreVarga.png",
				bio: "<p>Endre is a developer at Typesafe, working on the open source Akka project and bringing the world of actors to the JVM. Coming from an academic background and working with distributed, concurrent systems on a daily basis he continuously investigates the tools to make distributed systems safer and understandable for the rest of the world...</p>",
				company: "Typesafe",
				link: {
					href: "https://twitter.com/drewhk",
					text: "@drewhk"
				},
				presentation: {
					title: "Without Present or Past: How to Think Distributed - The Hard Way",
					description: "With the rise of distributed databases, cluster management tools, consensus servers in our daily use developers needs to face an alien world radically different from previous experiences. While there is a wide collection of solutions to hide the complexity of dealing with the distributed nature of these systems, at the end there is no magic. Under the veil of abstractions exists a world of puzzles and fundamental limitations.<br><br>In this presentation I will try to lift the veil to offer a peek at the underlying concepts and demonstrate them through classical examples - while trying to keep the sanity of the audience.",
				}
			},
			{
				anchor: "EvanCzaplicki",
				name: "Evan Czaplicki",
				photo: "themes/craftconf/img/speakers/EvanCzaplicki.png",
				bio: "<p>I am a functional programmer at heart, and my broad goal is to provide the tools and learning resources to make functional languages common in industry. At Prezi, my focus is developing <a href=\"http://elm-lang.org/\">Elm</a>’s compiler, tools, and community to make it a great for web programming, both within Prezi and in industry in general.</p>",
				company: "Prezi",
				link: {
					href: "https://twitter.com/czaplic",
					text: "@czaplic"
				},
				presentation: {
					title: "Functional Reactive Programming in Elm and JS.",
					// description: "Turn based servers are now joining turn based browsers in providing race-free and deadlock-free interactivity. The event-driven model has long been popular in UI systems, but the nature of work in servers presents some new challenges. Functional programming provides solutions, including monads, arrows, promises, and various flavors of FRP. This is another such solution, intended to enhance ease of use with constructs that support parallel and sequential operations.",
				}
			},
			{
				anchor: "FerossAboukhadijeh",
				name: "Feross Aboukhadijeh",
				photo: "themes/craftconf/img/speakers/FerossAboukhadijeh.png",
				bio: "<p><a href=\"http://feross.org\">Feross Aboukhadijeh</a> is a programmer, designer, teacher, and mad scientist. He is currently building <a href=\"http://webtorrent.io\">WebTorrent</a>, a streaming BitTorrent client for the browser, powered by WebRTC. Before that, he built <a href=\"http://peercdn.com\">PeerCDN</a>, a peer-to-peer content delivery network that dramatically reduces bandwidth costs. Feross is a graduate of Stanford University and has worked at Quora, Facebook, and Intel. In the past, he did research in the Stanford human-computer interaction and computer security labs. Feross enjoys working on \"mad science\" – projects that make people say, \"Whoa! I didn't know that was possible!\". Feross frequently wins hackathons by crafting code that gives the kids with spectacles spectacular fits, like his recent virtual reality piloting hack that lets you control a quadcopter with an Oculus Rift.</p>",
				company: "PeerCDN",
				link: {
					href: "http://twitter.com/feross",
					text: "@feross"
				},
				presentation: {
					title: "WebTorrent: Using WebRTC and Mad Science to Bring BitTorrent to the Web",
					description: "WebRTC changes everything! For the first time, we can do peer-to-peer, or client-to-client, communication in the browser without plugins, extensions, or a software installation. This enables an entirely new class of applications to be built for the web! This talk will look at WebTorrent, a BitTorrent client for the browser that fully-interoperates with the regular BitTorrent network. WebTorrent uses WebRTC Data Channels and special \"hybrid clients\" to connect to the wider BitTorrent network. By making BitTorrent easier, we're making it accessible to new swathes of users who were previously intimidated, confused, or unwilling to install a program on their computer to participate.",
				}
			},
			{
				anchor: "GarethRushgrove",
				name: "Gareth Rushgrove",
				photo: "themes/craftconf/img/speakers/GarethRushgrove.png",
				bio: "<p>Gareth Rushgrove is a technical architect at the Government Digital Service, part of the UK Government. He is mainly interested in configuration management, infrastructure automation, web application security and the whole devops community. He thinks when used well together these allow you to move really fast, even in tightly controlled environments like Government. When not working, Gareth can be found blogging over on morethanseven.net or uploading code to GitHub. He also curates the Devops Weekly newsletter and occasionally organises community events.</p>",
				company: "Government Digital Service",
				link: {
					href: "http://twitter.com/garethr",
					text: "@garethr"
				},
				presentation: {
					title: "Continuous integration for Infrastructure",
					description: "Continuous integration is the practice of merging code from individual working copies with a shared mainline on every commit. It's main aim is to prevent integration problems from many people working on the same codebase and it is now common practices amongst high performing software teams.<br><br>Continuous integration maps well to infrastructure practices too, where you generally have only one production infrastructure but many people working on it. But what does unit testing or integration testing mean in the context of infrastructure as code? And do other common software checks like linting, code coverage or static analysis have equivalents for infrastructure pipelines?<br><br>This talk will explore what is possible when you treat your infrastructure as code, looking across Infrastructure as a Service, Platform as a Service and container based deployments to identify useful patterns and practices.",
				}
			},
			{
				anchor: "GerardMeszaros",
				name: "Gerard Meszaros",
				photo: "themes/craftconf/img/speakers/GerardMeszaros.png",
				bio: "<p>Gerard Meszaros is an independent software development consultant and trainer with 30+ years experience in software and over a decade of experience in agile methods. He started doing eXtreme Programming in 2000 and quickly discovered that close attention to test craftsmanship was essential to keep the cost of change low. He described his key learnings in his book xUnit Test Patterns – Refactoring Test Code which was published in May 2007 by Addison Wesley in the Martin Fowler Signature Series and it won a Jolt Productivity Award in the Best Technical Book category. Since then he has turned his attention to applying the same concepts to organizing the automated acceptance tests as executable examples. He is based near Calgary Canada and has coached teams and taught courses as far afield as China, India and Europe.</p>",
				company: "Agile Software Development Guru & CSP",
				link: {
					href: "http://twitter.com/gerardmes",
					text: "@gerardmes"
				},
				presentation: {
					title: "Find the Right Abstraction Level for Your Tests",
					description: "For automated tests to provide true return on investment, they must do more than verify that the desired behavior has been achieved; they must also provide a clear and concise human-readable description of that behaviour. Furthermore, they must be reliable and robust in the face of constantly evolving system functionality. Achieving all of these goals requires close attention to the craftsmanship of our test code as well as finding the right vocabulary (and therefore abstraction level) for describing the functionality. Gerard will demonstrate how to apply these ideas to both unit tests and component or even system-level tests using a variety of test automation tools.",
				}
			},
			{
				anchor: "GojkoAdzic",
				name: "Gojko Adzic",
				photo: "themes/craftconf/img/speakers/GojkoAdzic.png",
				bio: "<p>Gojko Adzic is a strategic software delivery consultant who works with ambitious teams to improve the quality of their software products and processes. He specialises in agile and lean quality improvement, in particular agile testing, specification by example and behaviour driven development. Gojko is the author of the <a href=\"http://impactmapping.org/book\">Impact Mapping</a> book. His previous book, <a href=\"http://specificationbyexample.com/\">Specification by Example</a>, was awarded the <a href=\"http://www.noop.nl/2012/08/top-100-agile-books-edition-2012.html\">#2 spot on the top 100 agile books for 2012</a> and won the <a href=\"http://www.drdobbs.com/joltawards/jolt-awards-the-best-books/240007480?pgno=7\">Jolt Award</a> for the best book of 2012. In 2011, he was voted by peers as the <a href=\"http://www.agiletestingdays.com/award.php\">most influential agile testing professional</a>, and his blog won the <a href=\"http://connectionsagileservices.co.uk/stylesheet.asp?file=617_winners_2010_uk_agile_awards\">UK agile award for the best online publication</a> in 2010.</p>",
				company: "Neuri Consulting LLP",
				link: {
					href: "http://twitter.com/gojkoadzic",
					text: "@gojkoadzic"
				},
				presentation: {
					title: "How I Learned to Stop Worrying and Love Flexible Scope",
					description: "Not fixing scope too far in the future is one of the cornerstones of agile delivery, but it is at the same time the thing that enterprise stakeholders fear the most. Ironically, being able to change decisions after delivery starts is one of the biggest benefits that companies can get from agile delivery, so it's necessary to stop worrying and embrace flexible scope to get the full benefits of an iterative process. In this talk, Gojko Adzic will show you how to convince people to embrace flexible scope, not only for startup environments but for big enterprise projects as well."
				}
			},
			{
				anchor: "GregYoung",
				name: "Greg Young",
				photo: "themes/craftconf/img/speakers/GregYoung.png",
				bio: "<p>Greg Young is an independent consultant and entrepreneur. He is always involved with many concurrent projects, currently these include building out a distributed event store and mighty moose (a continuous test runner). For periods of years Greg has been known to stop living anywhere and just travel.</p>",
				company: "Independent Consultant and Entrepreneur",
				link: {
					href: "http://twitter.com/gregyoung",
					text: "@gregyoung"
				},
				presentation: {
					title: "Polyglot Data",
					description: "Never heard of it? I am not very surprised. We have many problems that we are forced to solve. Many concepts work in our current models, many do not. Picking the wrong model can lead to massive amounts of accidental complexity. This talk will look at how to reach the point where you stop thinking about how to force your problem into your predefined thinking and how to reach a place where you focus on how to choose the right model for the problem!"
				}
			},
			{
				anchor: "IanRobinson",
				name: "Ian Robinson",
				photo: "themes/craftconf/img/speakers/IanRobinson.png",
				bio: "<p>Ian works on research and development for future versions of the Neo4j graph database. Harbouring a long-held interest in connected data, he was for many years one of the foremost proponents of REST architectures, before turning his focus from the Web's global graph to the realm of graph databases. As Neo Technology\’s Director of Customer Success, he has worked extensively with customers to design and develop graph database solutions. He is a coauthor of 'Graph Databases' and 'REST in Practice' (O'Reilly), and a contributor to 'REST: From Research to Practice' (Springer) and 'Service Design Patterns' (Addison-Wesley). He blogs at <a href=\"http://iansrobinson.com\">http://iansrobinson.com</a>, and tweets at @iansrobinson.</p>",
				company: "Neo Technology",
				link: {
					href: "http://twitter.com/iansrobinson",
					text: "@iansrobinson"
				},
				presentation: {
					title: "Graph Search: The Power of Connected Data",
					description: "Today's complex data is big, variably-structured and densely connected. In this talk I'll look at how size, structure and connectedness have converged to change the way we work with data. I'll then look at some of the new opportunities for creating end-user value that have emerged in a world of connected data, illustrated with graph search examples implemented using the Neo4j graph database.",
				}
			},
			{
				anchor: "JeffHodges",
				name: "Jeff Hodges",
				photo: "themes/craftconf/img/speakers/JeffHodges.png",
				bio: "<p>Jeff Hodges is a distributed systems engineer at Twitter, Inc. Currently writing code for the web server fronting all of Twitter's web traffic, Jeff has previously fought spam (and other darker aspects of social media), worked on basic storage and infrastructure, and sometimes enjoys being on-call. He recently wrote <a href=\"http://www.somethingsimilar.com/2013/01/14/notes-on-distributed-systems-for-young-bloods/\">Notes on Distributed Systems for Young Bloods</a> to give friends and coworkers a leg-up on stuff he wished he had known years ago.</p>",
				company: "Twitter",
				link: {
					href: "http://twitter.com/jmhodges",
					text: "@jmhodges"
				},
				presentation: {
					title: "Distributed Systems in Production",
					description: "In the field, distributed systems are the new norm. This talk discusses tactics and strategy for productionizing distributed systems with a little bit about what the future will hold.",
				}
			},
			{
				anchor: "JevgeniKabanov",
				name: "Jevgeni Kabanov",
				photo: "themes/craftconf/img/speakers/JevgeniKabanov.png",
				bio: "<p>Dr Jevgeni Kabanov is the founder and CEO of ZeroTurnaround, a development tools company that focuses on productivity. He wrote the first version of the <a href=\"http://www.zeroturnaround.com/\">ZeroTurnaround</a> flagship product, JRebel, a class-reloading JVM plugin. Jevgeni has been speaking at international conferences since 2005, including Devoxx, JavaZone, JAOO, QCon, TSSJS, JFokus and JavaOne, where he was named Rock Star in 2011 and 2012. Jevgeni also started the first Java conference in Estonia, Geekout. He has done research in programming languages, types and virtual machines, publishing several papers on topics ranging from category theoretical notions to typesafe Java DSLs. </p>",
				company: "ZeroTurnaround",
				link: {
					href: "http://twitter.com/ekabanov",
					text: "@ekabanov"
				},
				presentation: {
					title: "Data-Driven Software Engineering",
					description: "Did you know that only about 60% of releases are delivered on time and only half of those are without critical bugs? Delivering quality software on time is an enormous challenge due to all the inherent complexities. There are multiple practices, tools and methodologies that promise improvement, but do they deliver?<br>It is time to stop basing our decisions on anecdotes. We need a simple and solid model of software delivery and a measurement system that allows to test their validity. We started such a model and surveyed a 1000 organisations against it. We will show you quantified results on the improvements you can expect with particular tools and practices as well as discuss the model itself and how it can be applied in your environment.<br><br>You will walk out with a quantified data on how to answer questions like \"Should we use pair programming?\", \"How much automated tests is enough?\" and \"What can we do to improve?\"",
				}
			},
			{
				anchor: "JohnHughes",
				name: "John Hughes",
				photo: "themes/craftconf/img/speakers/JohnHughes.png",
				bio: "<p>John Hughes is co-founder and CEO of Quviq AB, and the originator of Quviq QuickCheck. From 2002-2005 he led a major research project in software verification, funded by the Swedish Strategic Research Foundation. This led to the development of Quviq QuickCheck in Erlang. Before John's involvement with Erlang, he was deeply involved with the design of Haskell from the start, and co-chaired the committee that defined the current language standard.</p>",
				company: "Quviq AB",
				link: {
					href: "http://twitter.com/rjmh",
					text: "@rjmh"
				},
				presentation: {
					title: "Testing the Hard Stuff and Staying Sane",
					description: "Even the best test suites can't entirely prevent nasty surprises: race conditions, unexpected interactions, faults in distributed protocols and so on, still slip past them into production. Yet writing even more tests of the same kind quickly runs into diminishing returns. I'll talk about new automated techniques that can dramatically improve your testing, letting you focus on what your code should do, rather than which cases should be tested--with plenty of war stories from the likes of Ericsson, Klarna and Volvo Cars, to show how these new techniques really enable us to nail the hard stuff.",
				}
			},
			{
				anchor: "JohnWillis",
				name: "John Willis",
				photo: "themes/craftconf/img/speakers/JohnWillis.png",
				bio: "<p>John Willis has worked in the IT management industry for more than 30 years, and he is currently the VP of Customer Enablement for Stateless Networks. Prior to joining Enstratius, Willis was the VP of Solutions for DTO Solutions where he led the transition to a new suite of automated infrastructure and DevOps solutions. Prior to DTO Solutions. Willis was the VP of Training & Services at Opscode where he formalized the training, evangelism, and professional services functions at the firm. Willis also founded Gulf Breeze Software, an award winning IBM business partner, which specializes in deploying Tivoli technology for the enterprise. Willis has authored six IBM Redbooks for IBM on enterprise systems management and was the founder and chief architect at Chain Bridge Systems.</p>",
				company: "Stateless Networks",
				link: {
					href: "http://twitter.com/botchagalupe",
					text: "@botchagalupe"
				},
				presentation: {
					title: "Alice In Wonderland - Is the Network the Next Frontier for Devops? Devops and Networking",
					description: "Around 6 years ago I started working with some tools that focused on software engineering collaboration and automation for operations. At the time products like CFEngine and Puppet were the two main tools promoting this new way of doing operations and sharing within operations and software development. A year later Chef was born and I was fortunate enough to join Opscode as the 9th employee as an evangelist preaching this disruptive form of collaboration and automation. At the time a majority of IT infrastructure was managed by what I called the \"Bob’s\" of the world. Bob’s scripts, Bob’s directories and Bob to death do us part. Trying to explain to Bob the benefits of collaboration and software engineering principles was a hard fought battle over the years. One of the compelling events that helped propel these ideas (what we now call Devops) was cloud computing. Fast forward to 2013 and these infrastructure automation and collaboration battles still exist but the battles are far less bloody. Now a new war is emerging in the Network operations and engineering space. The same argument for network operations adopting these principles has always been the same as system ops; however, now the new compelling event is the virtualization of the network. Software Defined Networks is a lot of buzz, but the reality is that many network operations and engineering groups are dealing with an influx of highly virtualized tooling like OpenVswitch, Openflow, OpenDaylight and NSX. Configuration tools are starting to get more sophisticated on these virtualized systems doing things like automated VLAN to Port mapping and basic system hardening. Chef and Puppet both have introduced primitives supporting platforms like Arista, Juniper and Cumulus Networks. Help me start the discussion of what Devops and the Network really mean.",
				}
			},
			{
				anchor: "JonasBoner",
				name: "Jonas Bonér",
				photo: "themes/craftconf/img/speakers/JonasBoner.png",
				bio: "<p>Jonas Bonér is a programmer, speaker, writer, Java Champion and entrepreneur. He is the co-founder and CTO  of Typesafe and is an active contributor to the open source community; most notably started the Akka project and the AspectWerkz AOP runtime (now AspectJ). Learn more at: <a href=\"http://jonasboner.com\">http://jonasboner.com</a></p>",
				company: "Typesafe",
				link: {
					href: "http://twitter.com/jboner",
					text: "@jboner"
				},
				presentation: {
					title: "Going Reactive: Event-Driven, Scalable, Resilient & Responsive Systems",
					description: "The demands and expectations for applications have changed dramatically in recent years. Applications today are deployed on a wide range of infrastructure; from mobile devices up to thousands of nodes running in the cloud—all powered by multi-core processors. They need to be rich and collaborative, have a real-time feel with millisecond response time and should never stop running. Additionally, modern applications are a mashup of external services that need﻿ to be consumed and composed to provide the features at hand.<br><br>We are seeing a new type of applications emerging to address these new challenges—these are being called Reactive Applications. In this talk we will discuss four key traits of Reactive; Event-Driven, Scalable, Resilient and Responsive—how they impact application design, how they interact, their supporting technologies and techniques, how to think when designing and building them—all to make it easier for you and your team to Go Reactive.",
				}
			},
			{
				anchor: "JuttaEckstein",
				name: "Jutta Eckstein",
				photo: "themes/craftconf/img/speakers/JuttaEckstein.png",
				bio: "<p>Jutta Eckstein is an independent coach, consultant and trainer from Braunschweig, Germany. Her know-how in agile processes is based on over fifteen years experience in project and product development. She has helped many teams and organizations all over the world to make the transition to an agile approach. She has a unique experience in applying agile processes within medium-sized to large distributed mission-critical projects. This is also the topic of her books 'Agile Software Development in the Large' and 'Agile Software Development with Distributed Teams'. She is a member of the AgileAlliance and a member of the program committee of many different European and American conferences in the area of agile development, object-orientation and patterns.</p>",
				company: "Independent Coach, Consultant and Trainer",
				link: {
					href: "http://www.jeckstein.com/",
					text: "jeckstein.com"
				},
				presentation: {
					title: "Complex Projects aren't planable but controllable",
					description: "Science has finally approved it: Forecasting complex projects is a deception. Moreover, forecasts hinder innovations. Daniel Kahneman, Nobel Prize Winner in Economic Sciences and psychologist verified in many cases, that forecasting of complex projects is impossible. Yet still, we keep losing time trying to do exactly that. Beyond Budgeting came empirically to the same findings and offers a concept for controlling corporations without budgets. Additionally Beyond Budgeting provides advice for controlling even long-term complex projects. Agile methodologies generally recommend developing a long-term plan on a coarse-grained level only and coming up with detailed short-term plans iteratively. In this talk I want to provide insights in the latest scientific research and show as well how Beyonddeudgeting and Agile principles can be combined so that even complex projects remain controllable.<h4>Learning objectives:</h4><ul><li>Understand why forecasting complex projects is impossible</li><li>Become acquainted with the core ideas of Beyond Budgeting</li><li>Understand how Beyond Budgeting can be applied on Agile projects</li></ul>",
				}
			},
			{
				anchor: "MarkusVolter",
				name: "Markus Völter",
				photo: "themes/craftconf/img/speakers/MarkusVolter.png",
				bio: "<p>Markus Völter works as an independent researcher, consultant and coach for itemis AG in Stuttgart, Germany. His focus is on software architecture, model-driven software development and domain specific languages as well as on product line engineering. Markus also regularly writes (articles, patterns, books) and speaks (trainings, conferences) on those subjects. Contact him via <a href=\"http://voelter.de/\">voelter.de</a></p>",
				company: "Independent Researcher, Consultant and Coach",
				link: {
					href: "http://twitter.com/markusvoelter",
					text: "@markusvoelter"
				},
				presentation: {
					title: "The art of building tools - A language engineering perspective",
					description: "Developing software often requires using a number of tools and languages. In embedded software, for example, it is common to use C and its IDE, Matlab/Simulink, a number of custom XML files, a requirements management tool such as DOORS and possibly a UML tool and a variant management tool. The integration of such a zoo of tools is often a major source of (accidental) complexity in development projects.<br><br>Contrast that with the \"good old days\" when everything was text files and command line executables running on the unix shell. This approach had two important properties: the infrastructure was extremely generic (unix shell, pipes, text editors) and the actual contents were easily extensible and composable (new text file formats/languages and new command line tools); a productive environment for a given project or domain could easily be built from the generic infrastructure plus a few custom extensions.<br><br>In this talk I want to propose that creating (domain-specific) development environments based on language workbenches results in many of the same advantages that we all valued in the unix shell-world. A language workbench is an extremely generic infrastructure that is easily extensible with new languages. It is easy to create domain-specific development tools that can address different aspects of the system with suitable abstractions, but are nonetheless very well integrated in terms of syntax, semantics and tooling.<br><br>In the talk, I illustrate the approach with examples from two domains. One is mbeddr, an open source environment optimized for embedded software development. A second example is taken from the business/insurance domain.",
				}
			},
			{
				anchor: "MateNadasdi",
				name: "Máté Nádasdi",
				photo: "themes/craftconf/img/speakers/MateNadasdi.png",
				bio: "<p>Mate is a Front-end Developer at Ustream in the Site Core team who lives in Budapest. Before joining the real fight of the web, he studied Computer Science at the Eötvös Lóránd University, and worked some years as a full stack developer coding in ObjC, PHP and JavaScript. In the past years he has focused his attention mainly on large scale client side architecture and front-end performance. He is a passionate lover of JavaScript and a maniac of the innovative web.</p>",
				company: "Ustream",
				link: {
					href: "http://twitter.com/matenadasdi",
					text: "@matenadasdi"
				},
				presentation: {
					title: "It's never too late to fight your legacy!",
					description: "Every frontend developer reaches the point where continuous feature development and rapid changes makes it hard to maintain a codebase in large scale, and the complexity starts to climb up to the sky. Instability and slower development is not an option for us, so we had to experiment with new methods and technologies. Unit testing was not a common technique on client-side in recent years, but over a certain amount of complexity it's essential. <br /><br />At Ustream we feel the need of full coverage including unit testing and end-to-end testing and bringing our structured framework into play with continuous integration on the frontend side. My presentation provides insight into our first problems, tells where we are on this bumpy road, and what is our plan to maintain this state in the future.",
				}
			},
			{
				anchor: "MichaelFeathers",
				name: "Michael Feathers",
				photo: "themes/craftconf/img/speakers/MichaelFeathers.png",
				bio: "<p>Michael Feathers is the founder and Director of R7K Research & Conveyance, a company specializing in software and organization design. Prior to forming R7K, Michael was the Chief Scientist of Obtiva and a consultant with Object Mentor International. Over the years, Michael has spent a great deal of time helping teams after design over time in code bases. Michael is also the author of the book Working Effectively with Legacy Code (Prentice Hall, 2004).</p>",
				company: "R7K LLC",
				link: {
					href: "http://twitter.com/mfeathers",
					text: "@mfeathers"
				},
				presentation: {
					title: "Conway's Law and You: How to Organize your Organization for Optimal Development",
				}
			},
			{
				anchor: "SimonHildrew",
				name: "Simon Hildrew",
				photo: "themes/craftconf/img/speakers/SimonHildrew.png",
				bio: "<p>Simon Hildrew started out as a Java developer but was sucked into operations at a startup. Later on, after heading up the operations team at the Guardian for a couple of years, he hired someone else to do that and set about solving some of the challenges of an organisation with an ever increasing desire to adopt a devops culture. To that end he has spent the last two years working with both developers and operations in areas of monitoring, deployment and provisioning and created a handful of tools along the way.</p>",
				company: "Guardian",
				link: {
					href: "http://twitter.com/sihil",
					text: "@sihil"
				},
				presentation: {
					title: "Delivering Continuous Delivery Continuously",
					description: "Over the last few years the Guardian has built up a set of tools (commercial and in house) that allows developers to build fully integrated continuous delivery pipelines in minutes rather than hours or even days. This reflects a change on the ground where developers have geared up to take on far more operational responsibility whilst operations have taken on a consultancy role to the developers.<br><br>At the heart of this has been the creation of an in house deployment tool that streamlines what was previously a set of manual steps (with too many opportunities for humans to type “yes↵”) into a self service web application with an API and easy integration with the build system.<br><br>This talk will go through the tools and processes that have been created to make continuous delivery easy and show that:<ul><li>By providing tools that let developers deploy whilst keeping operations in the loop we reduce time to deploy, can deploy more frequently and allow operations to spend their time more usefully<li>By providing tools that are easy to chain together in different ways, users are able to experiment and try new things</ul>",
				}
			},
			{
				anchor: "MitchellHashimoto",
				name: "Mitchell Hashimoto",
				photo: "themes/craftconf/img/speakers/MitchellHashimoto.png",
				bio: "<p>Mitchell is best known as the creator of Vagrant, Packer, and Consul. Mitchell is the founder of HashiCorp, a company that builds powerful and elegant DevOps tools. He is also an O’Reilly author and professional speaker. He is one of the top GitHub users by followers, activity, and contributions. “Automation obsessed,” Mitchell solves problems with as much computer automation as possible.</p>",
				company: "HashiCorp",
				link: {
					href: "http://twitter.com/mitchellh",
					text: "@mitchellh"
				},
				presentation: {
					title: "Vagrant, Packer, Consul: Maximum Potency DevOps",
					description: "In 2013, we saw the introduction of many new DevOps tools and existing tools such as Vagrant saw some huge improvements and features added. With all this change, its hard to keep up with not only what has changed, but how to use these changes and what benefits they have.<br><br>This talk begins by briefly introducing a handful of my own tools: Vagrant, Packer, and Consul. I talk about what their purpose is, some of their latest features, and who is using these tools. I then continue to show how these tools can be used along with other software such as Docker to create some truly amazing development and production stacks. For production stacks, I discuss the benefits of using some of these tools over existing options, and for development stacks, I show how Vagrant improves process and workflow to help streamline the entire process from development through to production.",
				}
			},
			{
				anchor: "NatPryceSteveFreeman",
				coSpeakers: [
					{
						name: "Nat Pryce",
						company: "Independent Consultant",
						link: {
							href: "http://twitter.com/natpryce",
							text: "@natpryce"
						},
						bio: "<p>Nat Pryce is a co-author of Growing Object­-Oriented Software Guided by Tests. An early adopter of XP, he has written or contributed to several open source libraries and tools that support TDD and was one of the founding organizers of the London XP Day conference. He has worked as a programmer, architect, trainer, and consultant in a variety of industries, including sports reportage, marketing communications, retail, media, telecoms and finance, and has delivered business-critical systems that range from embedded devices to large compute farms supporting global business.</p>"
					},
					{
						name: "Steve Freeman",
						company: "Springer Scientific, Zuhlke Engineering Ltd.",
						link: {
							href: "http://twitter.com/sf105",
							text: "@sf105"
						},
						bio: "<p>Steve Freeman, author of Growing Object Oriented Software, Guided by Tests (Addison-Wesley), was a pioneer of Agile software development in the UK. He has developed software for a range of institutions, from small vendors to multinational investment banks. Steve trains and consults for software teams around the world. Previously, he has worked in research labs and software houses, earned a PhD (Cambridge), written shrink-wrap applications for IBM, and taught at University College London. Steve is a presenter and organiser at international industry conferences, and was chair of the first London XpDay.</p>"
					}
				],
				photo: "themes/craftconf/img/speakers/SteveFreeman.png",
				presentation: {
					title: "Building on SOLID Foundations",
					description: "Why can’t we just add a feature to our system without tearing the code apart or, worse, patching around it? It ought to take just a few lines. We know the code is supposed to be modular and coherent, but too often it just doesn’t turn out that way.<br><br>We don’t believe it should be this hard to change object-oriented systems. We’ve seen examples where it really is that easy to add a new feature. The difference seems to be in the intermediate level structure. The design principles that most programmers rely on don’t address the middle ground where the complexity lies. We know about principles and patterns at the small scale, such as SOLID, and the large scale, such as REST. We’re less familiar with the structures in the middle.<br><br>This talk is about design principles that we’ve learned help us develop mid-scale code structures that are easy to read and easy to change. At the lowest level, this means well-known patterns such as avoiding globals and following SOLID guidelines. At larger scales, this means assembling those SOLID objects to avoid hidden coupling so that the system as a whole is amenable to change. We focus on how objects fit together and communicate, and on being clear about how capabilities and information flow between objects in the running system.",
				}
			},
			{
				anchor: "RachelLaycock",
				name: "Rachel Laycock",
				photo: "themes/craftconf/img/speakers/RachelLaycock.png",
				bio: "<p>Rachel Laycock works for ThoughtWorks as a Lead Consultant with 10 years of experience in systems development. She has worked on a wide range of technologies and the integration of many disparate systems. Since working at ThoughtWorks, Rachel has coached teams on Agile and Continuous Delivery technical practices and has played the role of coach, trainer, technical lead, architect, and developer. She is now a member of the Technical Advisory Board to the CTO, which regularly produces the ThoughtWorks Technology Radar. Rachel is fascinated by problem solving and has discovered that people problems are often more difficult to solve than software ones.</p>",
				company: "ThoughtWorks",
				link: {
					href: "http://twitter.com/rachellaycock",
					text: "@rachellaycock"
				},
				presentation: {
					title: "Implementing Continuous Delivery: Adjusting your Architecture",
					description: "There are several factors to implementing Continuous Delivery: organisational, process and architectural. Each one could require significant changes in your organisation.<br><br>This talk will focus on the architecture of your application. How do you design a system you intend to rapidly deploy? How do you avoid common pitfalls or anti-patterns, which will hinder your ability to deliver? How do you refactor your existing code base to suit rapid delivery? I will address patterns such as micro-services and evolutionary architecture, which can speed up your delivery.<br><br>I will also look at how to tackle the dreaded ball-of-mud, that may be currently holding you back, without re-writing your entire architecture.",
				}
			},
			{
				anchor: "SimonBrown",
				name: "Simon Brown",
				photo: "themes/craftconf/img/speakers/SimonBrown.png",
				bio: "<p>Simon lives in Jersey (the largest of the Channel Islands) and works as an independent consultant, helping teams to build better software. His client list spans over 20 countries and includes organisations ranging from small technology startups through to global household names. Simon is an <a href=\"http://www.codingthearchitecture.com/2013/05/17/saturn_2013.html\">award-winning speaker</a> and the author of <a href=\"http://leanpub.com/software-architecture-for-developers\">Software Architecture for Developers</a> - a developer-friendly guide to software architecture, technical leadership and the balance with agility. He still codes too.</p>",
				company: "Independent Consultant",
				link: {
					href: "http://twitter.com/simonbrown",
					text: "@simonbrown"
				},
				presentation: {
					title: "Agility and the essence of software architecture",
					description: "On one hand the software development industry is pushing forward, reinventing the way that we build software, striving for agility and craftsmanship at every turn. On the other though, we're continually forgetting the good of the past and software teams are still failing on an alarmingly regular basis. Software architecture plays a pivotal role in the delivery of successful software yet it’s often neglected. Whether performed by one person or shared amongst the team, the software architecture role exists on even the most agile of teams yet the balance of up front and evolutionary thinking often reflects aspiration rather than reality. By steering away from big up front design and ivory tower architects, many teams now struggle to create a consistent, shared technical vision to work from. This can result in chaos, big balls of mud or software that still fails to meet its goals, despite continuous user involvement.<br><br>This talk will explore the importance of software architecture and the consequences of not thinking about it, before introducing some lightweight techniques to bring the essence of software architecture back into an agile environment. We'll look at creating a shared vision within the development team, effectively communicating that vision and managing technical risk. I'll also share the strategies that I've used to introduce these techniques into agile teams, even those that didn't think that they needed them. Expect collaboration, sketching and plenty of gamestorming.",
				}
			},
			{
				anchor: "StasZvinyatskovsky",
				name: "Stas Zvinyatskovsky",
				photo: "themes/craftconf/img/speakers/StasZvinyatskovsky.png",
				bio: "<p>Stas is senior principal architect at Yahoo. He works on system architecture, technical excellence, and continuous delivery for Yahoo advertising and data platforms.</p>",
				company: "Yahoo!",
				link: {
					href: "http://twitter.com/staszv",
					text: "@staszv"
				},
				presentation: {
					title: "Continuous Delivery Cookbook: practical recipes from Yahoo",
					description: "In today’s world commit to production latency is measured in minutes. Companies have to implement Continuous Delivery to stay competitive. As we implemented Continuous Delivery at Yahoo, we have tried many approaches. In this talk I will share some of the best practices covering such topics as:<ul><li>CD Pipeline design and implementation<li>UI testing<li>Certifying distributed systems<li>Production roll outs<li>Massively multi-programmer software systems</ul>",
				}
			},
			{
				anchor: "StefanEdlich",
				name: "Stefan Edlich",
				photo: "themes/craftconf/img/speakers/StefanEdlich.png",
				bio: "<p>Stefan Edlich holds two diplomas (Computer Science and Economics) and received his Dr. in 1995. Since 2004 he is Prof. Dr. / Senior Lecturer at Beuth University of Applied Sciences. He is the author of 12 books including the worlds first NoSQL books. Stefan is a frequent speaker at various IT coferences (JAX, OOP, NoSQL Roadshow, Frankfurter Datenbanktage, etc.) and helps organizing many conferences mostly around databases and programming languages as ICOODB, NoSQL Matters, GOTO, Euroclojure, etc. Furthermore he runs the #1 <a href=\"http://nosql-database.org/\">NoSQL Archive</a> and runs the second biggest <a href=\"http://www.meetup.com/Big-Data-Beers/\">Big Data Group</a> worldwide.</p>",
				company: "Beuth University",
				link: {
					href: "http://twitter.com/edlich",
					text: "@edlich"
				},
				presentation: {
					title: "Persistence: A view from Stratosphere",
					description: "This talk is on one hand a presentation of the latest big data systems and approaches as Google Spanner, Presto, etc. and on the other hand a venture prediction of the future of persistence and data analytics. It covers data formats - the next wave after JSON? -, and  general directions of the NoSQL / NewSQL space. It briefly includes the earlier diverge and todays convergence of the database world. This leads to public guidelines how to avoid drowning in tons of persistence solutions all promising adventures in Alice wonderland. But you should take a step back and have a look at architectures that are able to handle big data, fast data streaming, analytics, semistructured / unstructured data and many more requirements. Decent out of the box solutions are still missing. And finally it's no secret that big data analytic questions are often severe in terms of scaling. But the shapes of the next generation systems in this space are visible and will be illustrated.",
				}
			},
			{
				anchor: "StefanTilkov",
				name: "Stefan Tilkov",
				photo: "themes/craftconf/img/speakers/StefanTilkov.png",
				bio: "<p>Stefan Tilkov is a co-founder and principal consultant at innoQ, a technology consulting company with offices in Germany and Switzerland. He has been involved in the design of large-scale, distributed systems for almost two decades, using a variety of technologies and tools ranging from C++ and CORBA over J2EE/Java EE and Web Services to REST and Ruby on Rails. He has authored numerous articles and a book (\"<a href=\"http://rest-http.info/\">REST und HTTP</a>\", German), and is a frequent speaker at conferences around the world.</p>",
				company: "innoQ Deutschland GmbH",
				link: {
					href: "http://twitter.com/stilkov",
					text: "@stilkov"
				},
				presentation: {
					title: "Architecture War Stories",
					description: "In this session, I will talk about entertaining examples of architectural disasters in software projects. We will see how excellent ideas can turn into nightmares, how one can slowly but thoroughly introduce incredible complexity, and how a merge between organizational and technical failures can grind productivity to a halt. Names and irrelevant details have been changed to protect the somewhat innocent, but everything is based on actual things I had to experience – and sometimes helped create – in the real world.",
				}
			},
			{
				anchor: "SzabolcsSzabolcsiToth",
				name: "Szabolcs Szabolcsi-Tóth",
				photo: "themes/craftconf/img/speakers/SzabolcsSzabolcsiToth.png",
				bio: "<p>Szabolcs is a Senior Front-end Developer at Ustream in Budapest. Before joining Ustream, he got his degree in Engineering Information Technology at PTE PMMK, then worked for five years at one of the largest online media agencies in Hungary. At Ustream he works on core functionalities, frameworks, embedded viewers on desktop and mobile, and lately, converting the framework to an asynchronous operation, shifting user experience towards a single-page application.</p>",
				company: "Ustream",
				link: {
					href: "http://twitter.com/_nec",
					text: "@_nec"
				},
				presentation: {
					title: "JavaScript Module Server",
					// description: "",
				}
			},
			{
				anchor: "TheoSchlossnagle",
				name: "Theo Schlossnagle",
				photo: "themes/craftconf/img/speakers/TheoSchlossnagle.png",
				bio: "<p>Theo Schlossnagle is a Founder and Principal at OmniTI where he designs and implements scalable solutions for highly trafficked sites and other clients in need of sound, scalable architectural engineering. He is the architect of the highly scalable Ecelerity mail transport agent. Theo is a participant in various open source communities including OpenSolaris, Linux, Apache, PostgreSQL, perl, and many others. He is a published author in the area of scalability and distributed systems as well as a veteran speaker in the open source conference circuit. Theo founded several successful startups as engineering focused organizations including: OmniTI, Circonus, Message Systems and Fontdeck.</p>",
				company: "Circonus",
				link: {
					href: "http://twitter.com/postwait",
					text: "@postwait"
				},
				presentation: {
					title: "Responsibly maximizing craftsmanship in software engineering",
					description: "Craftsmanship in software tends to erode as team sizes increase.  This can be due to a large variety of reasons, but is often dependent on code base size, team size, and autonomy.  In this session I'll talk about some of the challenges companies face as these things change and how to manipulate teams, architectures and how people work to maintain software craftsmanship will still delivering product.",
				}
			},
			{
				anchor: "TimFelgentreff",
				name: "Tim Felgentreff",
				photo: "themes/craftconf/img/speakers/TimFelgentreff.jpg",
				bio: "<p>Tim Felgentreff is a PhD student at the Hasso-Plattner-Institute, University of Potsdam. His research interests are in programming language, composition of programming paradigms, and virtual machine design. Contributor to JRuby, MagLev, and Topaz, Tim likes working on Ruby implementations in his spare time.</p>",
				company: "Hasso-Plattner-Institute",
				link: {
					href: "http://twitter.com/timfelgentreff",
					text: "@timfelgentreff"
				},
				presentation: {
					title: "Babelsberg - Modularizing Constraint Satisfaction in Imperative Programs",
					description: "Constraints are relations between objects that we want to hold. This could be that all parts in an electrical circuit simulation obey the laws of physics, that the rows in a Sudoku add up to 9, or that a streamed video play smoothly in the presence of changing CPU or network load.<br><br>Babelsberg presents an integration of constraint satisfaction with objects and their methods in Ruby and JavaScript, building on earlier work on constraint-imperative programming. In Babelsberg, constraints are assertions that the system tries to satisfy automatically. In my talk, I will discuss the motivations for creating a new language in general and for Babelsberg in particular, and present examples of how we applied Babelsberg to existing problems.",
				}
			},
			{
				anchor: "TomomiImura",
				name: "Tomomi Imura",
				photo: "themes/craftconf/img/speakers/TomomiImura.png",
				bio: "<p>Tomomi (@girlie_mac) is a San Francisco-based open web advocate and front-end engineer with mobile focus who has been in active in the mobile-space since before it was cool. She has been developing mobile web, platform UI/UX, and frameworks for various projects and companies including, Yahoo! Mobile and webOS at Palm before joining Nokia, to work with the W3C and evangelize HTML5.</p>",
				company: "",
				link: {
					href: "http://twitter.com/girlie_mac",
					text: "@girlie_mac"
				},
				presentation: {
					title: "The State of Mobile HTML5",
					description: "\"Mobile web is dead\" - We have seen this sensational title on tech articles and blogs numerous times. And we, web developers have been trying to defend the web for past years without much success.<br><br>In the beginning of last year, I showcased the capabilities of the Web platform and the real-life use cases of HTML5 in mobile by writing a camera application using W3C HTML5 standards and JavaScript. Although some of the obscure APIs may have surprised web developers how much HTML5 can do, the web app was still nowhere close to be perfect, or cross-browser compatible. Now, one year has passed since, and how have browsers been improved? New proposals? What are still missing, and what do we need to do to stop the obnoxious tech writes from writing the obituaries of HTML5?",
				}
			},
			{
				anchor: "TorbenHoffmann",
				name: "Torben Hoffmann",
				photo: "themes/craftconf/img/speakers/TorbenHoffmann.png",
				bio: "<p>Torben has been working with Erlang in Motorola and Issuu as technical architect and developer since 2006. He has talked about his Motorola achievements at Erlang eXchange 2008 and EUC 2010. Before becoming an Erlanger he worked with software quality assurance, process improvement and people management.</p>",
				company: "Erlang Solutions",
				link: {
					href: "http://twitter.com/LeHoff",
					text: "@LeHoff"
				},
				presentation: {
					title: "Erlang Patterns Matching Business Needs",
					description: "In this talk we will present a number of common patterns from Erlang systems and how these patterns relates to business needs.<br><br>Most of the patterns revolve around the notion of how failure is handled and we will discuss how active treatment of failure leads to better options for the product owner when it comes to prioritising fixes and new features.<br><br>By modelling the patterns using OPM (Object-Process Methodology) we get a new way of talking about Erlang systems and architectures, which will make our thoughts and insights easier to share.",
				}
			},
			{
				anchor: "WimGodden",
				name: "Wim Godden",
				photo: "themes/craftconf/img/speakers/WimGodden.png",
				bio: "<p>Wim Godden has been working with open source technologies since 1997 and has been involved in open source projects such as OpenX and PHPCompatibility. Next to web development, he's worked with a wide range of technologies (from database clusters to Internet backbone design) and focuses a lot of his time on high-scalability projects and on coaching/training web engineers.</p>",
				company: "Cu.be Solutions",
				link: {
					href: "http://twitter.com/wimgtr",
					text: "@wimgtr"
				},
				presentation: {
					title: "When dynamic becomes static: the next step in web caching techniques",
					description: "Tools like Varnish can improve scalability for static sites, but when user-specific content is needed, a hit to the backend is still needed, causing scalability issues. We'll look at a new Nginx module which implements a fast and scalable solution to this problem, changing the way developers think about designing sites with user-specific content. We'll go into how the module works and we'll put the old and new setups head-to-head to showcase the performance and scalability differences.",
				}
			},
		],

		workshops: [
			{
				anchor: "DanNorth",
				name: "Dan North",
				photo: "themes/craftconf/img/speakers/DanNorth.png",
				bio: "<p>Programmer and organizational change specialist Dan North applies principles from lean operations and agile software development to help organizations align their technology capabilities with their business objectives. With over twenty years of experience in IT, Dan is a frequent speaker at technology conferences worldwide, has published feature articles in numerous software and business publications, and contributed to The RSpec Book: Behaviour Driven Development with RSpec, Cucumber, and Friends and 97 Things Every Programmer Should Know: Collective Wisdom from the Experts. The originator of Behaviour-Driven Development (BDD) and Deliberate Discovery, Dan is currently working on his book, Accelerated Agile – from months to minutes, and helping organizations radically improve their delivery. He blogs at <a href=\"http://dannorth.net/blog\">http://dannorth.net/blog</a>.</p>",
				company: "Dan North & Associates",
				link: {
					href: "http://twitter.com/tastapod",
					text: "@tastapod"
				},
				workshop: {
					title: "Accelerated Agile: from Months to Minutes",
					description: "Great software professionals build better software faster. Agile methods, continuous delivery and software craftsmanship helped speed up delivery from years to months or even weeks, but then what?<br><br>Some teams are able to deliver software at a speed of change like you have never seen before, delivering quality software in days or even hours, again and again. So what is keeping the rest of us from doing so? Now is the time to go from months to minutes, to rethink the way we organize and improve our software development and delivery process.<br><br>Accelerated Agile is for people who believe it can be done. People who feel themselves limited by current Agile, CD and Craftsmanship thinking. People who want to go back to basics and uncover new, simpler ways to deliver great software. Are you a seasoned agile developer who is frustrated at how slow your “hyper-performing” process feels? Are you suffering with an unwieldy feature backlog, the pantomime of estimation, the card wall where cards go to die, the efforts to automate where it obviously isn’t adding anything? Are you fed up with the artificial commitment of sprints and the unwelcome surprises that still seem to derail your projects?<br><br>Accelerated Agile brings agile principles into the 21st century. You will learn new techniques that both enhance and replace existing agile practices, some of which are counter-intuitive and many which are completely counter to current “agile” doctrine. Using a mixture of discussion, instruction and exploration you will start to think differently about design, architecture, development and testing, operations, automation and team dynamics, as well as working with legacy systems and integrating with third parties.<br><br>What you will learn:<ul><li>How to challenge the received wisdom of established Agile methods<li>How to design and architect for rapid and sustainable delivery<li>Why understanding risk and embracing uncertainty are at the heart of faster delivery<li>How to manage build, release and operations<li>How systems thinking can help you plan effectively and estimate accurately<li>How to identify and reduce gaps in your testing strategy<li>How to engage with legacy systems and integrating with third parties<li>How to manage different levels of skill and experience within a team</ul>",
					day: "Day 1 (Wednesday)",
					time: "9:00 - 17:00"
				}
			},
			{
				anchor: "GojkoAdzic",
				name: "Gojko Adzic",
				photo: "themes/craftconf/img/speakers/GojkoAdzic.png",
				bio: "<p>Gojko Adzic is a strategic software delivery consultant who works with ambitious teams to improve the quality of their software products and processes. He specialises in agile and lean quality improvement, in particular agile testing, specification by example and behaviour driven development. Gojko is the author of the <a href=\"http://impactmapping.org/book\">Impact Mapping</a> book. His previous book, <a href=\"http://specificationbyexample.com/\">Specification by Example</a>, was awarded the <a href=\"http://www.noop.nl/2012/08/top-100-agile-books-edition-2012.html\">#2 spot on the top 100 agile books for 2012</a> and won the <a href=\"http://www.drdobbs.com/joltawards/jolt-awards-the-best-books/240007480?pgno=7\">Jolt Award</a> for the best book of 2012. In 2011, he was voted by peers as the <a href=\"http://www.agiletestingdays.com/award.php\">most influential agile testing professional</a>, and his blog won the <a href=\"http://connectionsagileservices.co.uk/stylesheet.asp?file=617_winners_2010_uk_agile_awards\">UK agile award for the best online publication</a> in 2010.</p>",
				company: "Neuri Consulting LLP",
				link: {
					href: "http://twitter.com/gojkoadzic",
					text: "@gojkoadzic"
				},
				workshop: {
					title: "Impact Mapping: How to Make a Big Impact with Software Products and Projects",
					description: "Impact Mapping is a strategic planning technique that prevents organisations from getting lost while building products and delivering projects, by clearly communicating assumptions, helping teams align their activities with overall business objectives and make better roadmap decisions. Impact mapping can help you build products and deliver projects that make an impact, not just ship software.<br><br>The participants of this interactive workshop learn about the basics of Impact Mapping, and try it out in practice on several realistic examples to understand the key facilitation techniques and learn how to run and apply Impact Mapping sessions in their organisations.<br><br><b>Key learning points:</b><ul><li>how to create good user stories<li>how to ensure that you're building the right product<li>how to align the activities of delivery teams and the organisation around them<li>how to make an impact with software products and projects<li>how to communicate overall goals and vision to delivery teams<li>how to facilitate impact mapping sessions<li>how to build a delivery roadmap and backlog with impact maps</ul><br><b>Intended audience</b><br>The workshop is aimed at product owners, business analysts, developers and testers working primarily in an agile or lean environment. It is based on Gojko Adzic's books Impact Mapping, Specification by Example and Bridging the Communication Gap. In order to attend the workshop, you should already have a basic knowledge of iterative delivery methods and a at least some experience of working in a Scrum, XP or Kanban-like delivery. To get the most out of this workshop, you should have a relatively senior role, from a technical or business perspective, in software delivery.",
					day: "Day 1 (Wednesday)",
					time: "9:00 - 17:00"
				}
			},
			{
				anchor: "PatroklosPapapetrou",
				name: "Patroklos Papapetrou",
				photo: "themes/craftconf/img/speakers/PatroklosPapapetrou.png",
				bio: "<p>Patroklos Papapetrou is a Java architect, addicted to software quality and an agile team leader with more than 15 years of experience in software development. He believes and invests in people and team spirit seeking quality excellence. He's co-authoring <a href=\"http://www.manning.com/papapetrou/\">SonarQube in action</a> book, he is an active SonarQube community member and plugin contributor. He treats software systems as flowers that's why he prefers calling himself a software gardener.</p>",
				company: "FoodTec Solutions and KeepItCloud",
				link: {
					href: "http://twitter.com/ppapapetrou76",
					text: "@ppapapetrou76"
				},
				workshop: {
					title: "Mastering Continuous Inspection with SonarQube",
					description: "This one-day course, by one of the authors of <a href=\"http://www.manning.com/papapetrou/\">SonarQube In Action</a>, is the ideal hands-on workshop to learn the core concepts of source code quality and how to eventually adopt continuous inspection in any software development lifecycle, using SonarQube. It is intended to teach developers, testers and software architects how to use this open-source tool to continuously track and improve the quality of their source code.<br><br>Here’s a short outline of what we’re going to deal with during this workshop:<ul><li>Understanding the importance of Technical debt<li>The 7 axes of quality<li>Picking a metric to improve<li>Strategies<li>Implementing with Continuous Inspection & code reviews</ul>",
					day: "Day 1 (Wednesday)",
					time: "9:00 - 17:00"
				}
			},
			{
				anchor: "TiberiuCovaci",
				name: "Tiberiu Covaci",
				photo: "themes/craftconf/img/speakers/TiberiuCovaci.png",
				bio: "<p>Before moving back to Romania in 2012, Tiberiu 'Tibi' Covaci lived with his family in Sweden and Bermuda for 16 years. In 2003 he founded Many-core, a company that trained and mentored developers and architects around the world to understand the .NET Framework and the technologies built on top of .NET. He works closely with Microsoft as member of the Developer Guidance Council, course Author, and Technology Reviewer for the Microsoft .NET Official Curriculum courses. He is a member of the ASP Insider and Telerik Insider groups, IASA Speaker & Trainer, INETA Speaker and Country Lead, founding member of IASA Sweden and IASA Romania, and former member of the MCT Advisory Council. For his passion and contributions Microsoft and Telerik awarded Tibi the MVP title. </p>",
				company: "IT Advisor, Mentor and Trainer",
				link: {
					href: "http://twitter.com/tibor19",
					text: "@tibor19"
				},
				workshop: {
					title: "Build a Single Page Application in Just One Day",
					description: "Most web technologies developed in the past had only one purpose: to offer the users a great experience, mimicking the one you normally get from desktop applications. One way of developing those kind of applications that emerged last year is Single Page Application where everything fits in more or less on one single web page. In this workshop we will develop a SPA from scratch using technologies like <a href=\"http://asp.net/\">ASP.NET</a> Web.Api, Breeze.js, Angular.js. The resulting application will be yours to take home and to continue work with it, and learn from it. For best experience I recommend that you bring your own device with Visual Studio 2012+ installed on it, although any text editor (vi included) will do.",
					day: "Day 1 (Wednesday)",
					time: "9:00 - 17:00"
				}
			},
			{
				anchor: "MichaelFeathers",
				name: "Michael Feathers",
				photo: "themes/craftconf/img/speakers/MichaelFeathers.png",
				bio: "<p>Michael Feathers is the founder and Director of R7K Research & Conveyance, a company specializing in software and organization design. Prior to forming R7K, Michael was the Chief Scientist of Obtiva and a consultant with Object Mentor International. Over the years, Michael has spent a great deal of time helping teams after design over time in code bases. Michael is also the author of the book Working Effectively with Legacy Code (Prentice Hall, 2004).</p>",
				company: "Independent Consultant",
				link: {
					href: "http://twitter.com/mfeathers",
					text: "@mfeathers"
				},
				workshop: {
					title: "Working Effectively with Legacy Code",
					description: "Test Driven Development and Refactoring are powerful tools. With them you can add new code to systems and make existingcode more maintainable. However, refactoring code without having tests in place can be hazardous. This workshop presents a collection of dependency breaking and test writing techniques that can be used to get existing code safely under test for refactoring. These techniques can be used in conjunction with Test Driven Development to breathe new life into large existing code bases. This workshop is structured as a set of lectures, discussions, and hands-on exercises.<br><br>Prerequisites: participants should have experience in Java, C#, or C++.<br><br>Requirements: a laptop computer with a Java, C#, or C++ programming environment.<br><br><b>Objectives</b><br><br>By the end of this workshop, you will:<ul><li>Understand what legacy code is<li>Understand how to break dependencies in legacy code<li>Learn a variety of techniques for breaking external dependencies<li>Learn a variety of techniques for breaking internal dependencies<li>Understand when to employ each of the techniques<li>Learn a variety of strategies for code refactoring<li>Learn how to identify change points<li>Learn how to find an inflection point<li>Understand the concept of test coverage for inflection points<li>Understand how to write effective tests for legacy code</ul><br><b>Outline</b><br><br>Here is a brief course outline for the workshop:<br>Day 1<ul><li>Introduction / Testing as a Programmer’s tool<li>Seam identification<li>Breaking Dependencies – Sensing and Separation<li>Breaking Hidden and Manifest Dependencies<li>Characterization Testing<li>Refactoring Toward Understandability</ul>Day 2<ul><li>Strategies for Getting Large Methods under Test<li>Dealing with Deeply Nested Conditionals<li>Planning Large-Scale Refactoring and Technical Debt Reduction</ul>",
					day: "Day 0, Day 1 (Tuesday, Wednesday)",
					time: "9:00 - 16:30"
				}
			}
		],

		eventorganizers: [
			{
				name: "Medea Baccifava",
				photo: "themes/craftconf/img/medeabaccifava.jpg",
				role: 'event organizer',
				bio: "I am an innovative professional working in advisory and international marketing positions in Europe and Asia. In current position at Prezi, I deliver small- and large-scale projects, from optimization to communication, handling international events like mloc.js, RAMP and Stretch.",
				company: "Prezi",
				link: {
					href: "http://twitter.com/Medea_Baccifava",
					text: "@Medea_Baccifava"
				},
			},
			{
				name: "Gergely Hodicska",
				role: 'program chair, chief organizer',
				photo: "themes/craftconf/img/gergelyhodicska.jpg",
				bio: "I am Senior Engineering Manager at Ustream and I oversee all site, streaming, and infrastructure teams. Early on, I specialized in building and operating large scale web applications, including the design and development of several Alexa Top 100 sites. Nowadays I focus on improving the way we develop at Ustream, creating effective processes and building a culture where our engineers can not just continuously deliver but also continuously improve. I strongly believe in teamwork, devops and lifelong learning.",
				company: "Ustream",
				link: {
					href: "http://twitter.com/felhobacsi",
					text: "@felhobacsi"
				},
			},
			{
				name: "Gábor Vészi",
				role: 'event organizer',
				photo: "themes/craftconf/img/gaborveszi.jpg",
				bio: "I'm responsible for the teams that manage Prezi's critical backend systems. I'm passionate about availability, scalable architectures, automation, metrics, and bridging the gap between development and operations.",
				company: "Prezi",
				link: {
					href: "http://twitter.com/veszig",
					text: "@veszig"
				},
			}
		],

		// List of Sponsors
		sponsors: {
			Platinum: [
				{
					name: 'Ericsson',
					logo: "themes/craftconf/img/sponsors/ericsson.jpg",
					url: "http://ericsson.com"
				}
			],

			Gold: [
				{
					name: 'Yahoo',
					logo: "themes/craftconf/img/sponsors/yahoo.jpg",
					url: "http://yahoo.com"
				},
				{
					name: 'EPAM',
					logo: "themes/craftconf/img/sponsors/epam.jpg",
					url: "http://www.epam.com"
				},
				{
					name: 'JetBrains',
					logo: "themes/craftconf/img/sponsors/jetbrains.jpg",
					url: "http://jetbrains.com"
				},
				{
					name: 'Deutsche Telekom',
					logo: "themes/craftconf/img/sponsors/telekom.jpg",
					url: "http://bdi.telekom.net/home"
				},
				{
					name: 'Basho',
					logo: "themes/craftconf/img/sponsors/basho.jpg",
					url: "http://basho.com/"
				},
				{
					name: 'Misys',
					logo: "themes/craftconf/img/sponsors/misys.png",
					url: "http://www.misys.com/"
				},
			],

			Silver: [
				{
					name: 'Balabit',
					logo: "themes/craftconf/img/sponsors/balabit.jpg",
					url: "http://balabit.com"
				},
				{
					name: 'Starshema',
					logo: "themes/craftconf/img/sponsors/starshema.jpg",
					url: "http://starschema.net/"
				},
				{
					name: 'LogMeIn',
					logo: "themes/craftconf/img/sponsors/logmein.jpg",
					url: "http://logmein.com"
				},
				{
					name: 'Compuware',
					logo: "themes/craftconf/img/sponsors/compuware.jpg",
					url: "http://www.compuware.com/en_us.html"
				},
			],

			Bronze: [
				{
					name: 'Arkon',
					logo: "themes/craftconf/img/sponsors/arkon.jpg",
					url: "http://arkon.hu/"
				},
				{
					name: 'Github',
					logo: "themes/craftconf/img/sponsors/github.jpg",
					url: "http://github.com"
				},
				{
					name: 'Google',
					logo: "themes/craftconf/img/sponsors/google.jpg",
					url: "http://google.com"
				},
			],

			Special: [
				{
					name: 'Erlang Solutions',
					logo: "themes/craftconf/img/sponsors/erlang.jpg",
					url: "https://www.erlang-solutions.com/"
				},
				{
					name: 'OReilly',
					logo: "themes/craftconf/img/sponsors/oreilly.jpg",
					url: "http://www.oreilly.com/"
				},
				{
					name: 'Telekom Hungary',
					logo: "themes/craftconf/img/sponsors/telekomhu.jpg",
					url: "http://www.telekom.hu/"
				}
			],

			"Media Partner": [
				{
					name: 'Hot Topics Tech',
					logo: "themes/craftconf/img/sponsors/hottopicstech.png",
					url: "http://www.hottopicstech.com/"
				},
				{
					name: 'infoQ',
					logo: "themes/craftconf/img/sponsors/qcon.jpg",
					url: "http://www.infoq.com/"
				},
				{
					name: 'Kinja',
					logo: "themes/craftconf/img/sponsors/kinja.png",
					url: "http://kinja.com/"
				}
			]
		},

		// List of Partners
		partners: [
		],

		// List of Organizers
		organizers: [
			{
				name: "Prezi",
				logo: "themes/craftconf/img/org_Prezi_logo.svg",
				url: "http://prezi.com",
				clss: "prezi-logo"
			},
			{
				name: "USTREAM",
				logo: "themes/craftconf/img/org_Ustream_logo.svg",
				url: "http://ustream.tv/",
				clss: "ustream-logo"
			}
		],

		meetups: [
			{
				name: 'Budapest Agile Meetup Group',
				url: 'http://www.meetup.com/AgileHungary/events/178027882/',
				date: '2014.04.23',
				speakers: [
					{
						name: 'Bruce Eckel',
						title: 'Reinventing Business - Discovering Your Best Organizational Structure',
						photo: 'themes/craftconf/img/speakers/BruceEckel.png'
					},
				]
			},
			{
				name: 'Budapest Database And Big Data Meetup',
				url: 'http://www.meetup.com/Big-Data-Meetup-Budapest/events/178044592/',
				date: '2014.04.23',
				speakers: [
					{
						name: 'Bjorn Freeman-Benson',
						title: 'Using MySQL as a pseudo-NoSQL Database',
						photo: 'themes/craftconf/img/speakers/BjornFreemanBenson.png'
					},
					{
						name: 'Diego Ongaro',
						title: 'RAMCloud: Low-latency DRAM-based storage',
						photo: 'themes/craftconf/img/speakers/DiegoOngaro.png'
					},
				]
			},
			{
				name: 'Budapest DevOps Meetup',
				url: 'http://www.meetup.com/devopsbp/events/177860362/',
				date: '2014.04.23',
				speakers: [
					{
						name: 'Dan North',
						title: 'Build your own Heroku - an experience report',
						photo: 'themes/craftconf/img/speakers/DanNorth.png'
					},
					{
						name: 'Paul Stack',
						title: 'Vagrant - the essence of DevOps in a tool',
						photo: 'themes/craftconf/img/speakers/PaulStack.png'
					},
				]
			},
			{
				name: 'PHP Meetup Budapest',
				url: 'http://www.meetup.com/phpmeetup/events/177325522/',
				date: '2014.04.23',
				speakers: [
					{
						name: 'Ben Mathews',
						title: 'Facebook\'s Approach to Common Web Vulnerabilities',
						photo: 'themes/craftconf/img/speakers/BenMathews.png'
					},
					{
						name: 'Ricardo Fontes',
						title: 'Need for Speed: How to improve slow application performance',
						photo: 'themes/craftconf/img/speakers/RicardoFontes.png'
					},
					{
						name: 'Attila M. Magyar',
						title: 'Programming in handstand - how to discover different ways of thinking while solving simple problems with unusual constraints',
						photo: 'themes/craftconf/img/speakers/AttilaMagyar.png'
					},
				]
			},
			{
				name: 'Frontend Meetup Budapest + UX Budapest',
				url: 'http://www.meetup.com/Frontend-Meetup-Budapest/events/177259792/',
				date: '2014.04.23',
				speakers: [
					{
						name: 'Tomomi Imura',
						title: 'HTML5 Device APIs',
						photo: 'themes/craftconf/img/speakers/TomomiImura.png'
					},
					{
						name: 'Amber Case',
						title: 'Designing for Privacy in Mobile and Web Apps',
						photo: 'themes/craftconf/img/speakers/AmberCase.png'
					},
				]
			},
			// {
			// 	name: 'Node.js Budapest',
			// 	url: 'http://www.meetup.com/nodebp/events/172548072/',
			// 	date: '2014.04.23',
			// 	speakers: [
			// 		{
			// 			name: 'Dominic Tarr',
			// 			title: 'Evolution of Node Streams',
			// 			photo: 'themes/craftconf/img/speakers/DominicTarr.png'
			// 		},
			// 		{
			// 			name: 'David Judik',
			// 			title: 'Node.js with Tmux and Vim',
			// 			photo: 'themes/craftconf/img/speakers/DavidJudik.png'
			// 		},
			// 	]
			// },
		],

		quizQuestions: [
			{
				name: 'Task 1 - Art',
				embedUrl: 'https://docs.google.com/forms/d/16uW9Eou1CqsE5ZfgEE_vnY3NjqmaCEkaE33yY6evLGs/viewform?embedded=true',
				height: 700
			},
			{
				name: 'Task 2 - Investigation',
				embedUrl: 'https://docs.google.com/forms/d/1CJfqcveX5GlT2lBS7OKXkddTKZM4a8eBoQDbsGKSRj0/viewform?embedded=true',
				height: 950
			},
			{
				name: 'Task 3 - Music',
				embedUrl: 'https://docs.google.com/forms/d/1GkB4Nz5T_57_K0MnYx1PVEizmkhZ5k9ElVCoZ-RoQVo/viewform?embedded=true',
				height: 950
			},
			{
				name: 'Task 4 - Olympics',
				embedUrl: 'https://docs.google.com/forms/d/12LQMGpLDM7GsJLpeqEm7PsbJA7CPjN3cBp0huLbOVus/viewform?embedded=true',
				height: 950
			},
			{
				name: 'Task 5 - Geography',
				embedUrl: 'https://docs.google.com/forms/d/1rHd_9Din962YGk6x9knQRINlxNffowj4CX9Cq9EUOHw/viewform?embedded=true',
				height: 1000
			},
			{
				name: 'Task 6 - Music again',
				embedUrl: 'https://docs.google.com/forms/d/1kUqzmJ0tdl3mAAx19OXVW48k44fc53i9CS7prpEfOMU/viewform?embedded=true',
				height: 900
			},
			{
				name: 'Task 7 - Sport',
				embedUrl: 'https://docs.google.com/forms/d/1A6dJU8_rKUofIqmoso6xhuU3av6Hj3t9A8SvFdumQCA/viewform?embedded=true',
				height: 900
			},
			{
				name: 'Task 8 - Literature',
				embedUrl: 'https://docs.google.com/forms/d/1M85kbdlMhImhMBlTZ6GzWas5gviu8XbjTPRSKD1hwRs/viewform?embedded=true',
				height: 900
			},
			{
				name: 'Task 9 - Memeing',
				embedUrl: 'https://docs.google.com/forms/d/1NrZpfRKS1-FwM_BTATRk_ZKoyvV_2NyRMl8mWJMKuwQ/viewform?embedded=true',
				height: 610
			}
		],

		// Theme path
		getTheme: function () {
			return "themes/" + this.site.theme;
		},

		getFormattedShcedule: function () {
			var newSchedule = {},
				currentDay,
				currentStage;

			for (var day in this.schedule) {
				currentDay = this.schedule[day];

				for (var stage in currentDay.stages) {
					currentStage = currentDay;
				}
			}
		}
	}
};

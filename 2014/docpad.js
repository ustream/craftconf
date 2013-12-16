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
	        lanyrd: ""
        },

        // Site info
        site: {
            theme: "craftconf",
            url: "http://craft-conf.com",
            googleanalytics: ""
        },

        // Active sections on the website
        // to deactivate comment out with '//'
        // you can also change order here and it will reflect on page
        sections: [
            'about',
            //'schedule',
            'speakers',
            //'location',
            //'tickets',
            //'sponsors',
            'organizers',
            'contact'
        ],

        // Labels which you can translate to other languages
        labels: {
            about: "About",
            location: "Location",
            speakers: "Speakers",
            schedule: "Schedule",
            tickets: "Tickets",
            sponsors: "Sponsors",
            organizers: "Organizers",
            contact: "Contact"
        },

	    schedule: [
		    {
			    header: "Day 1 (Thursday)",
			    slots: [
				    {
					    time: "08:45 - 09:45",
					    title: "Registration & Breakfast"
				    },
				    {
					    time: "09:45 - 10:00",
					    title: "Welcome"
				    },
				    {
					    time: "10:00 - 10:40",
					    speaker: true
				    },
				    {
					    time: "11:00 - 12:40",
					    speaker: true
				    }
			    ]
		    },
		    {
			    header: "Day 2 (Friday)",
			    slots: [
				    {
					    time: "09:00 - 10:00",
					    title: "Registration & Breakfast"
				    },
				    {
					    time: "10:00 - 10:40",
					    speaker: true
				    },
				    {
					    time: "10:40 - 11:50",
					    speaker: true
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
				    // title: "",
				    // description: "",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
		    {
			    anchor: "AlvaroVidela",
			    name: "Alvaro Videla",
			    photo: "themes/craftconf/img/speakers/AlvaroVidela.png",
			    bio: "<p>Alvaro Videla works as Developer Advocate for RabbitMQ/Pivotal. Before moving to Europe he used to work in Shanghai where he helped building one of Germany's biggest dating websites. He co-authored the book \"RabbitMQ in Action\" for Manning Publishing. Some of his open source projects can be found here: <a href=\"http://github.com/videlalvaro\">http://github.com/videlalvaro.</a> Apart from code related stuff he likes traveling with his wife, listening/playing music and reading books. You can find him on Twitter as @old_sound.</p>",
			    company: "Pivotal Inc.",
			    link: {
				    href: "http://twitter.com/old_sound",
				    text: "@old_sound"
			    },
			    presentation: {
				    title: "Building a Distributed Data Ingestion System with RabbitMQ",
				    description: "Your company has servers distributed around the world and you need to process data in a centralised location. The data is produced by applications using different technology stacks and comes from various sources, from web servers to sensors. How could you solve this problem? Enter RabbitMQ.<br/><br/>In this talk we are going to show how to build a system that can ingest data produced at separate geo located areas (think AWS and it's many regions) and replicate it to a central cluster where it can be further processed and analysed.<br/><br/>We will present an example of how to build a system like this one by using RabbitMQ Federation to replicate data across AWS Regions and RabbitMQ support for many protocols to produce/consume data.<br/><br/>To help with scalability we are going to show an interesting way to implement sharded queues with RabbitMQ by using the Consistent Hash Exchange.<br/><br/>If you want to learn what else has RabbitMQ to offer beyond simple messaging and queueing, then this is the talk for you. <h4>Talk objective:</h4> Our goal is to show that over the years RabbitMQ has gone way beyond a \"simple\" AMQP server to be able to have federated brokers, HA queues and support for many protocols and languages. <h4>Target Audience:</h4><ul><li>Developers interested in building a data ingestion platform that span many locations across the world.</li><li>Developers that have built these kind of solutions already but are interested in learning about alternatives.</li><li>Developers interested in RabbitMQ and Messaging in general.</li></ul>",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
			    }
		    },
		    {
			    anchor: "AsheDryden",
			    name: "Ashe Dryden",
			    photo: "themes/craftconf/img/speakers/AsheDryden.png",
			    bio: "<p>Ashe Dryden is an indie ruby developer living in Madison, WI. She's been involved with the web in some form or another over the course of the past 13 years. Ashe is an outspoken educator for diversity, inclusiveness, and empathy. She's currently writing a book on increasing diversity within companies, as well as working on a video series and site to serve as a resource to people who want to get involved. When she isn't discussing technology or it’s intersection with culture, she's cycling, tweeting, playing board games, debating the social implications of Star Trek episodes, being that awkward girl at the party, and waiting for her next burrito fix.</p>",
			    company: "",
			    link: {
				    href: "http://twitter.com/ashedryden",
				    text: "@ashedryden"
			    },
			    presentation: {
				    title: "Open source isn't for everyone, but it could be",
				    description: "The state of diversity in open source contributions is abysmal. With the number of female OSS contributors at a shockingly low 1.5% and other groups not even documented, we need to ask what we can be doing better as a community. We’ll discuss the barriers that people face contributing to our open source projects and what we can do to increase participation.",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
			    }
		    },
		    {
			    anchor: "BodilStokke",
			    name: "Bodil Stokke",
			    photo: "themes/craftconf/img/speakers/BodilStokke.png",
			    bio: "<p>Bodil is a compulsive conference speaker in the fields of functional programming and internets technologies, and is a co-organiser of multiple developer conferences in Scandinavia and the UK, mostly because she’s still learning how to stop. She is a prolific contributor to the Free Software community, primarily as a Clojure developer, and has recently taken up designing new programming languages as a hobby. In her spare time, she works as a developer for Future Ad Labs.</p>",
			    company: "Future Ad Labs",
			    link: {
				    href: "http://twitter.com/bodil",
				    text: "@bodil"
			    },
			    presentation: {
			    }
		    },
		    {
			    anchor: "BruceEckel",
			    name: "Bruce Eckel",
			    photo: "themes/craftconf/img/speakers/BruceEckel.png",
			    bio: "<p>Bruce Eckel (<a href=\"http://www.bruceeckel.com\">www.BruceEckel.com</a>) is the author (with Dianne Marsh) of <a href=\"http://www.mindviewinc.com/About/www.AtomicScala.com\">Atomic Scala</a>, Thinking in Java (Prentice-Hall, 1998, 2nd Edition, 2000, 3rd Edition, 2003, 4th Edition, 2006), the Hands-On Java eSeminar (available on the Web site), Thinking in C++ (PH 1995; 2nd edition 2000, Volume 2 with Chuck Allison, 2003), C++ Inside & Out (Osborne/McGraw-Hill 1993), and First Steps in Flex (with James Ward, 2008) among others. He's given hundreds of presentations throughout the world, published over 150 articles in numerous magazines, was a founding member of the ANSI/ISO C++ committee and speaks regularly at conferences. He was for many years the chair of both the C++ and Java tracks at the Software Development conference, is cofounder of the JavaPosse Roundup Conference and creator of the Scala Summit Conference. He provides public and private training and consulting in programming languages and software system design.</p>",
			    company: "MindView",
			    link: {
				    href: "http://twitter.com/BruceEckel",
				    text: "@BruceEckel"
			    },
			    presentation: {
			    }
		    },
		    {
			    anchor: "ChaitanyaMishra",
			    name: "Chaitanya Mishra",
			    photo: "themes/craftconf/img/speakers/ChaitanyaMishra.png",
			    bio: "<p>Chaitanya is a software engineer at Facebook London, where he focuses on improving the performance of Facebook\’s Android apps. He was previously on the search team, working on Graph Search, and the Search typeahead. In a previous life, he did graduate research on database systems at the University of Toronto.</p>",
			    company: "Facebook",
			    link: {
				    href: "http://twitter.com/istweetingcool",
				    text: "@istweetingcool"
			    },
			    presentation: {
				    title: "Scaling Facebook for Android",
				    description: "In the past year, Facebook for Android has moved from a primarily webview based app to an almost entirely native experience. It has transitioned from being built by a small team to a distributed development model where product teams are responsible for their features. And it has grown to be used by well over a hundred million users a day, distributed across devices with orders of magnitude differences in capabilities.<br><br>This talk describes the technical and cultural challenges associated with making these transitions while continuing to ship a fast and lightweight app. We will describe changes we made to each step of the process of committing code, building, testing and releasing our apps to make sure we avoided regressions and measured improvements. We will describe an analytics framework that lets us measure and optimize various performance metrics, and make the costs of features visible to product teams. And we will talk about how we applied these lessons to write a set of core libraries and abstractions that make it easier to distribute development without hurting overall performance of the app. The talk will draw on real examples from a broad set of performance metrics such as startup time, data usage, disk usage, app size, battery consumption etc.",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
		    {
			    anchor: "DominicTarr",
			    name: "Dominic Tarr",
			    photo: "themes/craftconf/img/speakers/DominicTarr.png",
			    bio: "<p>Dominic is a self-styled \"Mad Scientist\" of javascript, most well known for his work on <a href=\"https://github.com/dominictarr/through\">streams</a> and real-time <a href=\"https://github.com/dominictarr/scuttlebutt\">distributed systems</a>, but is now getting into javascript database development with <a href=\"https://github.com/dominictarr/level-sublevel\">leveldb</a>. Dominic is happily being fed by irish development house / mad-science laboratory, nearform.</p>",
			    company: "",
			    link: {
				    href: "http://twitter.com/dominictarr",
				    text: "@dominictarr"
			    },
			    presentation: {
				    title: "There is no such thing as a general purpose database",
				    // description: "",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
				    title: "WebTorrent: Bringing BitTorrent to the Web with WebRTC and Mad Science",
				    // description: "",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
				    // description: "",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
		    {
			    anchor: "GerardMeszaros",
			    name: "Gerard Meszaros",
			    photo: "themes/craftconf/img/speakers/GerardMeszaros.png",
			    bio: "<p>Gerard Meszaros is an independent software development consultant and trainer with 30+ years experience in software and over a decade of experience in agile methods. He started doing eXtreme Programming in 2000 and quickly discovered that close attention to test craftsmanship was essential to keep the cost of change low. He described his key learnings in his book xUnit Test Patterns – Refactoring Test Code which was published in May 2007 by Addison Wesley in the Martin Fowler Signature Series and it won a Jolt Productivity Award in the Best Technical Book category. Since then he has turned his attention to applying the same concepts to organizing the automated acceptance tests as executable examples. He is based near Calgary Canada and has coached teams and taught courses as far afield as China, India and Europe.</p>",
			    company: "",
			    link: {
				    href: "http://twitter.com/gerardmes",
				    text: "@gerardmes"
			    },
			    presentation: {
			    }
		    },
		    {
			    anchor: "GojkoAdzic",
			    name: "Gojko Adzic",
			    photo: "themes/craftconf/img/speakers/GojkoAdzic.png",
			    bio: "<p>Gojko Adzic is a strategic software delivery consultant who works with ambitious teams to improve the quality of their software products and processes. He specialises in agile and lean quality improvement, in particular agile testing, specification by example and behaviour driven development. Gojko is the author of the Impact Mapping book. His previous book, Specification by Example, was awarded the #2 spot on the top 100 agile books for 2012 and won the Jolt Award for the best book of 2012. In 2011, he was voted by peers as the most influential agile testing professional, and his blog won the UK agile award for the best online publication in 2010.</p>",
			    company: "Neuri Consulting LLP",
			    link: {
				    href: "http://twitter.com/gojkoadzic",
				    text: "@gojkoadzic"
			    },
			    presentation: {
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
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
			    }
		    },
		    {
			    anchor: "JohnWillis",
			    name: "John Willis",
			    photo: "themes/craftconf/img/speakers/JohnWillis.png",
			    bio: "<p>John Willis has worked in the IT management industry for more than 30 years. Prior to joining Enstratius, Willis was the VP of Solutions for DTO Solutions where he led the transition to a new suite of automated infrastructure and DevOps solutions. Prior to DTO Solutions. Willis was the VP of Training & Services at Opscode where he formalized the training, evangelism, and professional services functions at the firm. Willis also founded Gulf Breeze Software, an award winning IBM business partner, which specializes in deploying Tivoli technology for the enterprise. Willis has authored six IBM Redbooks for IBM on enterprise systems management and was the founder and chief architect at Chain Bridge Systems.</p>",
			    company: "enStratus",
			    link: {
				    href: "http://twitter.com/botchagalupe",
				    text: "@botchagalupe"
			    },
			    presentation: {
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
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
		    {
			    anchor: "JuttaEckstein",
			    name: "Jutta Eckstein",
			    photo: "themes/craftconf/img/speakers/JuttaEckstein.png",
			    bio: "<p>Jutta Eckstein is an independent coach, consultant and trainer from Braunschweig, Germany. Her know-how in agile processes is based on over fifteen years experience in project and product development. She has helped many teams and organizations all over the world to make the transition to an agile approach. She has a unique experience in applying agile processes within medium-sized to large distributed mission-critical projects. This is also the topic of her books 'Agile Software Development in the Large' and 'Agile Software Development with Distributed Teams'. She is a member of the AgileAlliance and a member of the program committee of many different European and American conferences in the area of agile development, object-orientation and patterns.</p>",
			    company: "",
			    link: {
				    href: "http://www.jeckstein.com/",
				    text: "jeckstein.com"
			    },
			    presentation: {
				    title: "Complex Projects aren't planable but controllable",
				    description: "Science has finally approved it: Forecasting complex projects is a deception. Moreover, forecasts hinder innovations. Daniel Kahneman, Nobel Prize Winner in Economic Sciences and psychologist verified in many cases, that forecasting of complex projects is impossible. Yet still, we keep losing time trying to do exactly that. Beyond Budgeting came empirically to the same findings and offers a concept for controlling corporations without budgets. Additionally Beyond Budgeting provides advice for controlling even long-term complex projects. Agile methodologies generally recommend developing a long-term plan on a coarse-grained level only and coming up with detailed short-term plans iteratively. In this talk I want to provide insights in the latest scientific research and show as well how Beyond Budgeting and Agile principles can be combined so that even complex projects remain controllable.<h4>Learning objectives:</h4><ul><li>Understand why forecasting complex projects is impossible</li><li>Become acquainted with the core ideas of Beyond Budgeting</li><li>Understand how Beyond Budgeting can be applied on Agile projects</li></ul>",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
		    {
			    anchor: "MarkusVolter",
			    name: "Markus Völter",
			    photo: "themes/craftconf/img/speakers/MarkusVolter.png",
			    bio: "<p>Markus Völter works as an independent researcher, consultant and coach for itemis AG in Stuttgart, Germany. His focus is on software architecture, model-driven software development and domain specific languages as well as on product line engineering. Markus also regularly writes (articles, patterns, books) and speaks (trainings, conferences) on those subjects. Contact him via <a href=\"http://voelter.de/\">voelter.de</a></p>",
			    company: "",
			    link: {
				    href: "http://twitter.com/markusvoelter",
				    text: "@markusvoelter"
			    },
			    presentation: {
			    }
		    },
		    {
			    anchor: "MateNadasdi",
			    name: "Máté Nádasdi",
			    photo: "themes/craftconf/img/speakers/MateNadasdi.png",
			    bio: "<p>Mate is a Front-end Developer at Ustream in the Site Core team who lives in Budapest. Before joining the real fight of the web, he studied Computer Science at the Eötvös Lóránd University, and worked some years as a full stack developer coding in ObjC, PHP and JavaScript. In the past years he has focussed his attention mainly on large scale client side architecture and front-end performance. He is a passionate lover of JavaScript and a maniac of the innovative web.</p>",
			    company: "Ustream",
			    link: {
				    href: "http://twitter.com/matenadasdi",
				    text: "@matenadasdi"
			    },
			    presentation: {
				    title: "It's never too late to fight your legacy!",
				    // description: "",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
		    {
			    anchor: "MichaelFeathers",
			    name: "Michael Feathers",
			    photo: "themes/craftconf/img/speakers/MichaelFeathers.png",
			    bio: "<p>Michael Feathers is an independent consultant in the area of software design, prior to that he was Member of the Technical Staff at Groupon. Prior to joining Groupon, Michael was the Chief Scientist of Obtiva, and a Senior Consultant with Object Mentor International. Over the years, Michael has spent a great deal of time helping teams after design over time in code bases. Michael is also the author of the book Working Effectively with Legacy Code (Prentice Hall, 2004).</p>",
			    company: "",
			    link: {
				    href: "http://twitter.com/mfeathers",
				    text: "@mfeathers"
			    },
			    presentation: {
			    }
		    },
		    {
			    anchor: "MichaelNygard",
			    name: "Michael Nygard",
			    photo: "themes/craftconf/img/speakers/MichaelNygard.png",
			    bio: "<p>Michael Nygard strives to raise the bar and ease the pain for developers around the world. He shares his passion and energy for improvement with everyone he meets, sometimes even with their permission. Living with systems in production taught Michael about the importance of operations and writing production-ready software. Highly-available, highly-scalable commerce systems are his forte. Michael has written and co-authored several books, including \"97 Things Every Software Architect Should Know\" and the best seller \"Release It!\", a book about building software that survives the real world. Michael works for <a href=\"http://www.cognitect.com/\">Cognitect Inc.</a>, the company behind Clojure, ClojureScript, Pedestal, and Datomic.</p>",
			    company: "Cognitect Inc.",
			    link: {
				    href: "http://twitter.com/mtnygard",
				    text: "@mtnygard"
			    },
			    presentation: {
				    title: "Cooperating when the fur flies",
				    description: "There's nothing like a crisis to remove artificial barriers. In this session, Michael will present an experience report about development and operations coming together after a failed launch. Aside from the fun of sharing war stories and comparing scars, what can we learn about climbing out of a crater after the worst has already happened? Can we capture the special magic of a firefighting mission during more sedate times? Beyond all of that, come find out how to stay out of the crater to begin with.",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
		    {
			    anchor: "MitchellHashimoto",
			    name: "Mitchell Hashimoto",
			    photo: "themes/craftconf/img/speakers/MitchellHashimoto.png",
			    bio: "<p>Mitchell is best known as the creator of Vagrant, Packer, and Serf. Mitchell is the founder of HashiCorp, a company that builds powerful and elegant DevOps tools. He is also an O’Reilly author and professional speaker. He is one of the top GitHub users by followers, activity, and contributions. “Automation obsessed,” Mitchell solves problems with as much computer automation as possible.</p>",
			    company: "HashiCorp",
			    link: {
				    href: "http://twitter.com/mitchellh",
				    text: "@mitchellh"
			    },
			    presentation: {
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
			    }
		    },
		    {
			    anchor: "SimonBrown",
			    name: "Simon Brown",
			    photo: "themes/craftconf/img/speakers/SimonBrown.png",
			    bio: "<p>Simon lives in Jersey (the largest of the Channel Islands) and works as an independent consultant, helping teams to build better software. His client list spans over 20 countries and includes organisations ranging from small technology startups through to global household names. Simon is an <a href=\"http://www.codingthearchitecture.com/2013/05/17/saturn_2013.html\">award-winning speaker</a> and the author of <a href=\"http://leanpub.com/software-architecture-for-developers\">Software Architecture for Developers</a> - a developer-friendly guide to software architecture, technical leadership and the balance with agility. He still codes too.</p>",
			    company: "",
			    link: {
				    href: "http://twitter.com/simonbrown",
				    text: "@simonbrown"
			    },
			    presentation: {
				    title: "Agility and the essence of software architecture",
				    description: "On one hand the software development industry is pushing forward, reinventing the way that we build software, striving for agility and craftsmanship at every turn. On the other though, we're continually forgetting the good of the past and software teams are still failing on an alarmingly regular basis. Software architecture plays a pivotal role in the delivery of successful software yet it’s often neglected. Whether performed by one person or shared amongst the team, the software architecture role exists on even the most agile of teams yet the balance of up front and evolutionary thinking often reflects aspiration rather than reality. By steering away from big up front design and ivory tower architects, many teams now struggle to create a consistent, shared technical vision to work from. This can result in chaos, big balls of mud or software that still fails to meet its goals, despite continuous user involvement.<br><br>This talk will explore the importance of software architecture and the consequences of not thinking about it, before introducing some lightweight techniques to bring the essence of software architecture back into an agile environment. We'll look at creating a shared vision within the development team, effectively communicating that vision and managing technical risk. I'll also share the strategies that I've used to introduce these techniques into agile teams, even those that didn't think that they needed them. Expect collaboration, sketching and plenty of gamestorming.",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
			    }
		    },
		    {
			    anchor: "SzabolcsSzabolcsiToth",
			    name: "Szabolcs Szabolcsi-Tóth",
			    photo: "themes/craftconf/img/speakers/tothszabolcs.png",
			    bio: "<p>Szabolcs is a Senior Front-end Developer at Ustream in Budapest. Before joining Ustream, he got his degree in Engineering Information Technology at PTE PMMK, then worked for five years at one of the largest online media agencies in Hungary. At Ustream he works on core functionalities, frameworks, embedded viewers on desktop and mobile, and lately, converting the framework to an asynchronous operation, shifting user experience towards a single-page application.</p>",
			    company: "Ustream",
			    link: {
				    href: "http://twitter.com/_nec",
				    text: "@_nec"
			    },
			    presentation: {
				    title: "JavaScript Module Server",
				    // description: "",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
				    title: "Babelsberg",
				    // description: "",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
		    {
			    anchor: "TomomiImura",
			    name: "Tomomi Imura",
			    photo: "themes/craftconf/img/speakers/TomomiImura.png",
			    bio: "<p>Tomomi (@girlie_mac) is a San Francisco-based open web advocate and front-end engineer with mobile focus who has been in active in the mobile-space since before it was cool. She has been developing mobile web, platform UI/UX, and frameworks for various projects and companies including, Yahoo! Mobile and webOS at Palm before joining Nokia, to work with the W3C and evangelize HTML5.</p>",
			    company: "Nokia",
			    link: {
				    href: "http://twitter.com/girlie_mac",
				    text: "@girlie_mac"
			    },
			    presentation: {
				    title: "The State of Mobile HTML5",
				    description: "\"Mobile web is dead\" - We have seen this sensational title on tech articles and blogs numerous times. And we, web developers have been trying to defend the web for past years without much success.<br><br>In the beginning of last year, I showcased the capabilities of the Web platform and the real-life use cases of HTML5 in mobile by writing a camera application using W3C HTML5 standards and JavaScript. Although some of the obscure APIs may have surprised web developers how much HTML5 can do, the web app was still nowhere close to be perfect, or cross-browser compatible. Now, one year has passed since, and how have browsers been improved? New proposals? What are still missing, and what do we need to do to stop the obnoxious tech writes from writing the obituaries of HTML5?",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
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
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
		    {
			    anchor: "WimGodden",
			    name: "Wim Godden",
			    photo: "themes/craftconf/img/speakers/WimGodden.png",
			    bio: "<p>Wim Godden is the owner and lead architect at Cu.be Solutions. He has been working with open source technologies since 1997 and has been involved in open source projects such as phpAdsNew/OpenX. Next to PHP, he’s worked with a wide range of technologies (from database clusters to Internet backbone design) and focuses a lot of his time on high-scalability projects and on coaching/training PHP engineers.</p>",
			    company: "Cu.be Solutions",
			    link: {
				    href: "http://twitter.com/wimgtr",
				    text: "@wimgtr"
			    },
			    presentation: {
				    title: "When dynamic becomes static : the next step in web caching techniques",
				    description: "Tools like Varnish can improve scalability for static sites, but when user-specific content is needed, a hit to the backend is still needed, causing scalability issues. We'll look at a new Nginx module which implements a fast and scalable solution to this problem, changing the way developers think about designing sites with user-specific content. We'll go into how the module works and we'll put the old and new setups head-to-head to showcase the performance and scalability differences.",
				    // day: "Day 1 (Thursday)",
				    // time: "10:00 - 10:40"
			    }
		    },
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
		    },
	    ],

        // List of Sponsors
        sponsors: [
        ],

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

        // Theme path
        getTheme: function() {
            return "themes/" + this.site.theme;
        }
    }
};

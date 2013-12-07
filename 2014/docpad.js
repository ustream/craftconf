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
			    anchor: "AndrewStellman",
			    name: "Andrew Stellman",
			    photo: "themes/craftconf/img/gergelyhodicska.jpg",
			    bio: "<p>Andrew is a bestselling O'Reilly author (Beautiful Teams, Head First C#, Head First PMP, Applied Software Project Management), developer, architect, speaker, agile coach, project manager, and general all-around expert in building better software. He has been a Vice President at a major investment bank, architected large-scale real-time back end systems, managed large international software teams, and consulted for companies, schools, and organizations, including Microsoft, the National Bureau of Economic Research, and MIT. He’s had the privilege of working with some pretty amazing programmers during that time, and likes to think that he’s learned a few things from them. Andrew's upcoming book, \"Learning Agile\", will be published by O'Reilly in early 2014.</p>",
			    company: "Bestselling O'Reilly Author",
			    link: {
				    href: "http://twitter.com/AndrewStellman",
				    text: "@AndrewStellman"
			    },
			    presentation: {
				    title: "Great teams start with great people, goals, and practices... but is that enough?",
				    description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
				    day: "Day 1 (Thursday)",
				    time: "10:00 - 10:40"
			    }
		    },

		    {
			    anchor: "AndrewStellman",
			    name: "Andrew Stellman",
			    photo: "themes/craftconf/img/gergelyhodicska.jpg",
			    bio: "<p>Andrew is a bestselling O'Reilly author (Beautiful Teams, Head First C#, Head First PMP, Applied Software Project Management), developer, architect, speaker, agile coach, project manager, and general all-around expert in building better software. He has been a Vice President at a major investment bank, architected large-scale real-time back end systems, managed large international software teams, and consulted for companies, schools, and organizations, including Microsoft, the National Bureau of Economic Research, and MIT. He’s had the privilege of working with some pretty amazing programmers during that time, and likes to think that he’s learned a few things from them. Andrew's upcoming book, \"Learning Agile\", will be published by O'Reilly in early 2014.</p>",
			    company: "Bestselling O'Reilly Author",
			    link: {
				    href: "http://twitter.com/AndrewStellman",
				    text: "@AndrewStellman"
			    },
			    presentation: {
				    description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
				    day: "Day 1 (Thursday)",
				    time: "11:00 - 12:40"
			    }
		    },

		    {
			    anchor: "AndrewStellman",
			    name: "Andrew Stellman",
			    photo: "themes/craftconf/img/gergelyhodicska.jpg",
			    bio: "<p>Andrew is a bestselling O'Reilly author (Beautiful Teams, Head First C#, Head First PMP, Applied Software Project Management), developer, architect, speaker, agile coach, project manager, and general all-around expert in building better software. He has been a Vice President at a major investment bank, architected large-scale real-time back end systems, managed large international software teams, and consulted for companies, schools, and organizations, including Microsoft, the National Bureau of Economic Research, and MIT. He’s had the privilege of working with some pretty amazing programmers during that time, and likes to think that he’s learned a few things from them. Andrew's upcoming book, \"Learning Agile\", will be published by O'Reilly in early 2014.</p>",
			    company: "Bestselling O'Reilly Author",
			    link: {
				    href: "http://twitter.com/AndrewStellman",
				    text: "@AndrewStellman"
			    },
			    presentation: {
				    title: "Great teams start with great people!",
				    description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
				    day: "Day 2 (Friday)",
			    }
		    },

		    {
			    anchor: "AndrewStellman",
			    name: "Andrew Stellman",
			    photo: "themes/craftconf/img/gergelyhodicska.jpg",
			    bio: "<p>Andrew is a bestselling O'Reilly author (Beautiful Teams, Head First C#, Head First PMP, Applied Software Project Management), developer, architect, speaker, agile coach, project manager, and general all-around expert in building better software. He has been a Vice President at a major investment bank, architected large-scale real-time back end systems, managed large international software teams, and consulted for companies, schools, and organizations, including Microsoft, the National Bureau of Economic Research, and MIT. He’s had the privilege of working with some pretty amazing programmers during that time, and likes to think that he’s learned a few things from them. Andrew's upcoming book, \"Learning Agile\", will be published by O'Reilly in early 2014.</p>",
			    company: "Bestselling O'Reilly Author",
			    link: {
				    href: "http://twitter.com/AndrewStellman",
				    text: "@AndrewStellman"
			    },
			    presentation: {
				    description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
				    day: "Day 2 (Friday)",
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
			    name: "Gábor Török",
			    role: 'program chair, chief organizer',
			    photo: "themes/craftconf/img/gabortorok.jpg",
			    bio: "I'm engineer manager at Prezi. I work on creating company culture and scaling engineering. I enjoy working in agile teams. I'm passionate about process improvements, continuous delivery and acceptance test driven development, and people management. I strongly believe knowledge belongs to everyone hence I regularly organise tech meetups in Budapest to help people share ideas.",
			    company: "Prezi",
			    link: {
				    href: "http://twitter.com/processpirate",
				    text: "@processpirate"
			    },
		    },
		    {
			    name: "Gergely Hodicska",
			    role: 'program committee',
			    photo: "themes/craftconf/img/gergelyhodicska.jpg",
			    bio: "I am the Senior Engineering Manager at Ustream and I oversee all site, streaming, and infrastructure teams. Early on, I specialized in building and operating large scale web applications, including the design and development of several Alexa Top 100 sites. Nowadays I focus on improving the way we develop at Ustream, creating effective processes and building a culture where our engineers can not just continuously deliver but also continuously improve. I strongly believe in teamwork, devops and lifelong learning.",
			    company: "Ustream",
			    link: {
				    href: "http://twitter.com/felhobacsi",
				    text: "@felhobacsi"
			    },
		    }
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

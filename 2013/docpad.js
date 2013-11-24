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
            date: "April 24-25, 2014",
            price: "",
            venue: "",
            address: "",
            city: "Budapest",
            state: "Hungary"
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
            /*'schedule',
            'speakers',
            'location',
            'tickets',
            'sponsors',
            'organizers',*/
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
        ],

        // Speakers and talks
        speakers: [
        ],

        eventorganizers: [
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
                logo: "themes/craftconf/img/prezi.jpg",
                url: "http://prezi.com"
            },
            {
                name: "USTREAM",
                logo: "themes/craftconf/img/ustream.jpg",
                url: "http://ustream.com/"
            }
        ],

        // Theme path
        getTheme: function() {
            return "themes/" + this.site.theme;
        }
    }
};

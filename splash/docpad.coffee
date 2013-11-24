module.exports =

  prompts: false
  outPath: "www/"

  # These are variables will be accessible via our templates
  templateData:

    # Conference info
    conf:
      name: "Stretch Conference — First you grew. Now you lead."
      description: "Join us at Stretch in Budapest this December and get inspired by stories from leads and founders of great organisations as they talk about the challenges of leadership and management."
      date: "December 5-6, 2013"
      city: "Budapest"

    # Site info
    site:
      theme: "splash"
      url: "http://stretchcon.com"
      googleanalytics: "UA-43412556-1"

    # Theme path
    getTheme: ->
      "themes/#{@site.theme}"

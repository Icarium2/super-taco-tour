## super-taco-tour

School project together with IP (Graphics Communications)

##

To view the finished product, [Click Here](https://tacothursday.netlify.app).
To view the project clone the repository to your computer using https://github.com/Icarium2/super-taco-tour.git,or with GitHub desktop if you prefer.

##

Requirements:

- En unik landningssida som följer det grafisk manéeret.
- Landningssidan som ska vara responsiv och byggas mobile-first samt följa tillgänglighetstandarden WCAG.
- Landningssidan ska innehålla minst fem animationer varav en är en in-animation
  när sidan först visas
- Landningssidan ska ha ett CTA där besökare kan registrera sig som t.ex. ett
  formulär. Formuläret kan endast visas visuellt
- Landningssidan ska personifieras via länk som kan skickas ut med query
  parametrar (https://davidwalsh.name/query-string-javascript). Förslag på minst
  två sätt att personifiera sajten via länken som t.ex. namn, land, bilder,
  yrkesgrupp, osv.
- Landningssidan ska vara byggas statiskt i HTML, CSS och JavaScript.
- Landningssidan ska från dag ett pushas upp till ett publikt repository på GitHub.
- Landningssidan ska ladda upp på ett hostingtjänst som t.ex. Netlify, Vercel eller
  GitHub Pages
- Landningssidan ska optimeras och ha så hög score som möjligt på
  https://web.dev/

## Code Review by [Martin Hansson](https://github.com/Alegherix)

- Should include a bundler of some type to minimize the ouput of your HTML,CSS & JS
- Could use srcset and serve images of different sizes depening on viewportSize, nice that .webp is used for serving images
- Should serve the fonts locally - [Read More](https://leerob.io/blog/fonts)
- Could also include OGP tags such as title, description and maybe some favicon.
- Accessibility seems very good, alt tag on all images, sharp contrast between colors on the page etc..
- Easy to read HTML, very nice and tidy and well commented. Could probably use more semantic html elements, ie, the footer being a footer element, include a main element aswell etc..
- Nicely separated CSS with [SOC](https://en.wikipedia.org/wiki/Separation_of_concerns) being applied properly.
- Some places theres redundant CSS, such as .pinkBox which has padding set, aswell as padding top and padding bottom.
- In your CTA opacity is set to 99 which might cause issues as it's range is between 0-1. Same goes for Z-index at top.css, no clue how numbers are represented in CSS but could overflow even a 64-bit integer, which might induce bugs.
- Overall a nice project with a clean structure.

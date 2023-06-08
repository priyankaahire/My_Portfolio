# My_Portfolio
# Steps to Host an Angular App in GitHub Pages
   1. Craete the repository
   2. Open seeting of guthub page and right side of the page you see the pages menau after clicking on that user able to see following
        1. First Dropdown of branch selection Select the main branch or hosting branch
        2. Drowon with `root ` and `docs` selection
            Root: We can use the Root method for simple HTML, CSS, and JavaScript files since GitHub Pages start looking for such files in the root directory.
            docs: Use the Docs method in cases where we must build an app. This helps in hosting only the final output of the app, instead of hosting a complete app. GitHub Pages start looking for 
                  such files in the docs directory.
   2. Run the command
       `ng build --output-path docs --base-href /repository-name/`
            build:       helps us to build the Angular app.
            output-path: is used to output in a different folder rather than the default dist
            base-href:   allows us to tell the application the base path.
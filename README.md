## Compilation instructions

This text is written in [PreTeXt](https://pretextbook.org), so the primary source files can be found in the `source` directory.  These can be compiled into HTML or PDF files (as well as some other formats) using the following directions.

### Preliminaries

The easiest way to build output formats from the source is to use the PreTeXt-CLI.  To get this set up, follow the instructions in the [PreTeXt guide](https://pretextbook.org/doc/guide/html/quickstart-getting-pretext.html).  You will need Python, LaTeX, and `pdf2svg` (if you wish to compile the html version; this requires an [extra step](https://pretextbook.org/doc/guide/html/section-installing-pdf2svg.html) on Windows).

Open up a terminal and in your preferred directory, clone `analysisbbook` repositories:

`git clone https://github.com/walmsl1/analysisbook.git`

(If you had previously done this, you will likely want to get the most recent versions of the repository by entering `git pull` from the analysis-book folder.)

Then change to the `analysisbook` folder:

`cd analysisbook`

### Compiling

If everything has been set up properly above, you can now execute the following commands to build the book.  To build the book:

`pretext build TARGET`

To view the book, use:

`pretext view TARGET`

Current targets include `html`, `pdf`, `latex`, `runestone`, and `subset`. These are defined in the project.ptx file.

### Assuming Nothing is Installed

1. Install a text editor of your choice. I use Visual Studio Code (https://code.visualstudio.com/Download).

2. Install python (https://www.python.org/downloads/). I am using python 3.9.13 because I get an error with longintrepr.h not being found using python 3.11 and newer.

3. Download the Github CLI (https://www.activestate.com/resources/quick-reads/pip-install-git/). 

4. Clone the `pretext`, `pdf2svg`, and `analysisbook` repositories:
    a. git clone https://github.com/PreTeXtBook/pretext.git
    b. git clone https://github.com/walmsl1/analysis-book.git
    c. git clone https://github.com/jalios/pdf2svg-windows.git pdf2svg

5. Download a LaTeX Distribution to get `xelatex` which is needed for building tikz images. I am using MikTeX (https://miktex.org/download).

5. Update your PATH to include `pdf2svg` and the latex Distribution. 
    a. On Windows, press the windows button and start typing `environment variables`. You should see `Edit the system environment variables`, then press enter.
    b. A window should have opened called `System Properties`. On the bottom right, click `Environment Variables`.
    c. The top box should have two columns labeled `Variable` and `Value`. Click on the variable `Path` and click the `edit` button below. 
    d. Press the `New` button on the right hand side. Your cursor should have gone to the bottom of the list. 
    e. Add YOUR path to the latex distribution. For me, this path was:
        `C:\Users\borst\AppData\Local\Programs\MiKTeX\miktex\bin\x64\`
    f. Add YOUR path to the pdf2svg directory and choose either the 32bit or 64bit distribution. For me, this path was:
        `C:\pdf2svg\dist-64bits`

6. Edit `Makefile.paths` (if this doesn't exist, make a copy of `Makefile.paths.original` and name it `Makefile.paths`). Under the `PreTeXt distribution root` comment, change `PTX = ...` to YOUR path to your cloned `pretext` directory. Similarily, under the `DMOI clone location` comment, change `DMOI = ...` to YOUR path to your cloned `analysisbook` directory. 

7. You should now be able to Compile the book! See the `Compiling` section above. 

# Real Analysis: An Open Primer

David Walmsley, St. Olaf College. Written in [PreTeXt](https://pretextbook.org).

**Website:** https://walmsl1.github.io/analysis-book/

## Where things live

| Folder / file | What it is |
|---|---|
| `source/main.ptx` | Top of the book: title and the list of chapters, in order. |
| `source/ch-intro.ptx` | Chapter 0 (Introduction): its intro and the list of its sections. |
| `source/sec-*.ptx` | One file per section (e.g. `sec-open_sets.ptx`). |
| `source/doenet/` | Interactive Doenet activities, pulled into sections. |
| `source/frontmatter.ptx`, `backmatter.ptx` | Title page, preface, acknowledgements; index, list of theorems, notation list. |
| `source/docinfo.ptx` | Book-wide settings, including math macros like `\R` and `\N`. |
| `assets/images/` | Images. |
| `publication/publication.ptx` | How the output looks: website theme, numbering, which solutions show. |
| `project.ptx` | The two outputs: `web` (website) and `print` (PDF). |

Sections not currently in the book (`sec-set_notation`, `sec-preimages`, `sec-example_format`, `sec-testing`) are commented out in `ch-intro.ptx`; un-comment the `<xi:include>` line to add one back.

## Common tasks

- **Add a section:** create `source/sec-new_topic.ptx` (copy an existing section as a starting point), then add `<xi:include href="sec-new_topic.ptx"/>` to the chapter file where it should appear.
- **Add a chapter:** create `source/ch-new_chapter.ptx` modeled on `ch-intro.ptx`, then add `<xi:include href="./ch-new_chapter.ptx"/>` to `source/main.ptx`.
- **Add a math macro:** add a `\newcommand` line inside `<macros>` in `source/docinfo.ptx`.
- **Change the look:** edit the `<css theme="..."/>` line in `publication/publication.ptx` (options are listed there).

## Publishing

Publishing is automatic. Whenever the `main` branch changes (for example, when a pull request is merged), GitHub builds the book and updates the website within a few minutes. Every pull request is also test-built first; its "Check build" run has a downloadable `deploy` file containing the built website and the PDF.

## Building on your own computer (optional)

Install the PreTeXt command-line tool (`pip install pretext`; see the [PreTeXt guide](https://pretextbook.org/doc/guide/html/quickstart-getting-pretext.html)), then from this folder:

```
pretext build web      # website, in output/web
pretext view web       # open it in a browser
pretext build print    # PDF, in output/print (needs a LaTeX installation)
```

## License

[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)

package main

import (
	"fmt"
	"io/ioutil"
	"os"

	"gopkg.in/russross/blackfriday.v2"
)

func main() {
	md, err := ioutil.ReadFile(os.Args[1])
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		return
	}

	//HTMLFlags and Renderer
	htmlFlags := blackfriday.CommonHTMLFlags         //UseXHTML | Smartypants | SmartypantsFractions | SmartypantsDashes | SmartypantsLatexDashes
	htmlFlags |= blackfriday.FootnoteReturnLinks     //Generate a link at the end of a footnote to return to the source
	htmlFlags |= blackfriday.SmartypantsAngledQuotes //Enable angled double quotes (with Smartypants) for double quotes rendering
	htmlFlags |= blackfriday.SmartypantsQuotesNBSP   //Enable French guillemets 損 (with Smartypants)
	renderer := blackfriday.NewHTMLRenderer(blackfriday.HTMLRendererParameters{Flags: htmlFlags, Title: "My test title", CSS: ""})

	//Extensions
	extFlags := blackfriday.CommonExtensions //NoIntraEmphasis | Tables | FencedCode | Autolink | Strikethrough | SpaceHeadings | HeadingIDs | BackslashLineBreak | DefinitionLists
	extFlags |= blackfriday.Footnotes        //Pandoc-style footnotes
	extFlags |= blackfriday.HeadingIDs       //specify heading IDs  with {#id}
	extFlags |= blackfriday.Titleblock       //Titleblock ala pandoc
	extFlags |= blackfriday.DefinitionLists  //Render definition lists

	html := blackfriday.Run(md, blackfriday.WithExtensions(extFlags), blackfriday.WithRenderer(renderer))
	fmt.Println(string(html))
}

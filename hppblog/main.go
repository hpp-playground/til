package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"

	"gopkg.in/russross/blackfriday.v2"
)

func main() {
	filepath := os.Args[1]
	paths := strings.Split(filepath, "/")
	filename := paths[len(paths)-1]
	md, err := ioutil.ReadFile(filepath)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		return
	}

	title := "title"
	css := "h1 { size: 100px; }"

	//HTMLFlags and Renderer
	htmlFlags := blackfriday.CommonHTMLFlags         //UseXHTML | Smartypants | SmartypantsFractions | SmartypantsDashes | SmartypantsLatexDashes
	htmlFlags |= blackfriday.FootnoteReturnLinks     //Generate a link at the end of a footnote to return to the source
	htmlFlags |= blackfriday.SmartypantsAngledQuotes //Enable angled double quotes (with Smartypants) for double quotes rendering
	htmlFlags |= blackfriday.SmartypantsQuotesNBSP   //Enable French guillemets 損 (with Smartypants)
	renderer := blackfriday.NewHTMLRenderer(blackfriday.HTMLRendererParameters{Flags: htmlFlags, Title: title, CSS: css})

	//Extensions
	extFlags := blackfriday.CommonExtensions //NoIntraEmphasis | Tables | FencedCode | Autolink | Strikethrough | SpaceHeadings | HeadingIDs | BackslashLineBreak | DefinitionLists
	extFlags |= blackfriday.Footnotes        //Pandoc-style footnotes
	extFlags |= blackfriday.HeadingIDs       //specify heading IDs  with {#id}
	extFlags |= blackfriday.Titleblock       //Titleblock ala pandoc
	extFlags |= blackfriday.DefinitionLists  //Render definition lists

	html := blackfriday.Run(md, blackfriday.WithExtensions(extFlags), blackfriday.WithRenderer(renderer))
	fmt.Println(string(html))

	savepath := strings.Join(paths[:len(paths)-2], "/") + "/html/" + filename[:len(filename)-2] + "html"

	file, err := os.Create(savepath)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		return
	}
	defer file.Close()

	file.Write(([]byte)(html))
}

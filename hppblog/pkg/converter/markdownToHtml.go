package converter

import (
	"fmt"
	"io/ioutil"
	"os"

	"gopkg.in/russross/blackfriday.v2"
)

func SaveMarkdownAsHTML(markdownPath string, savePath string) {
	md, err := ioutil.ReadFile(markdownPath)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		return
	}

	html := convertMarkdownToHTML(md)

	file, err := os.Create(savePath)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		return
	}
	defer file.Close()

	file.Write(([]byte)(html))
}

func convertMarkdownToHTML(md []byte) []byte {
	htmlFlags := blackfriday.CommonHTMLFlags
	htmlFlags |= blackfriday.FootnoteReturnLinks
	htmlFlags |= blackfriday.SmartypantsAngledQuotes
	htmlFlags |= blackfriday.SmartypantsQuotesNBSP
	renderer := blackfriday.NewHTMLRenderer(blackfriday.HTMLRendererParameters{Flags: htmlFlags})

	extFlags := blackfriday.CommonExtensions
	extFlags |= blackfriday.Footnotes
	extFlags |= blackfriday.HeadingIDs
	extFlags |= blackfriday.Titleblock
	extFlags |= blackfriday.DefinitionLists

	html := blackfriday.Run(md, blackfriday.WithExtensions(extFlags), blackfriday.WithRenderer(renderer))
	return html
}

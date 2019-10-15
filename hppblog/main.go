package main

import (
	"os"
	"strings"

	"github.com/hppRC/hppblog/pkg/converter"
)

func main() {
	markdownPath := os.Args[1]
	paths := strings.Split(markdownPath, "/")
	filename := paths[len(paths)-1]

	savePath := "./articles/html/" + filename[:len(filename)-2] + "html"

	converter.SaveMarkdownAsHTML(markdownPath, savePath)

}

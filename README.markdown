[Here's a demo.](http://sumeetjain.com/jQuery-Markdown-Footnotes/)

This is a JS snippet that adds functionality to the footnote implementation in Markdown.

Markdown automatically adds footnotes that work: Click the superscript footnote number, the page jumps to the bottom, you read the footnote, you jump back up. This can be annoying for readers, since they often want to refer to the main text while reading the footnote. It's also ugly and jarring.

This snippet replaces that functionality. When someone clicks the superscript footnote number, an overlay appears from the bottom of the screen with the requested footnote:

[![Screenshot of the snippet in action!](http://sumeetjain.com/jQuery-Markdown-Footnotes/screenshot.png)](http://sumeetjain.com/jQuery-Markdown-Footnotes/)

## How to use it
The snippet requires jQuery, so make sure you have that.

Then [download it](https://github.com/sumeetjain/jQuery-Markdown-Footnotes/zipball/master) and include the "jquery.markdownFootnotes.min.js" file on whatever page you want to add the functionality to. I just stuck it in the layout for my site, since I never know when I'll be using footnotes. There is no additional work needed.

FYI - the default footnotes aren't removed. They remain at the bottom of an article as usual.

## Customize it
The display of the footnote is easily editable. Just alter the properties of the `footnoteContentCSS` object:

	var footnoteContentCSS = {
		'background': '#000',
		'opacity': '.9',
		'color': '#fff',
		'-webkit-box-shadow': '0px 0px 5px #000',
		'-moz-box-shadow': '0px 0px 5px #000'
	}
	
## "Uh... How do you do footnotes in Markdown?"
Like this:

	Here is my paragraph[^1], here is my spout[^2].

	[^1]: A paragraph is many sentences.
	[^2]: Just keep adding references and text to build your footnotes.

## Also
Feel free to submit pull requests - I'm sure this can be optimized in a thousand different ways.

When I had the idea to do this, I did a quick search to see if anyone already had. I found one from [Lukas Mathis](http://ignorethecode.net/blog/2010/04/20/footnotes/), but I wanted to implement it differently. If you want this kind of footnote behavior but don't like my approach to it, check his out - you might prefer his tooltip-like method.
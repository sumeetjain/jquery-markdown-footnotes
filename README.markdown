This is a JS snippet that adds functionality to the footnote implementation in Markdown.

Markdown automatically adds footnotes[^1] that work: Click the superscript footnote number, the page jumps to the bottom, you read the footnote, you jump back up. This can be annoying for readers, since they often want to refer to the main text while reading the footnote. It's also ugly and jarring.

[^1]: Like this one, for example.

This snippet replaces that functionality. When someone clicks the superscript footnote number, an overlay appears from the bottom of the screen with the requested footnote:

[pic]

## How to use it
The snippet depends on jQuery.

Download the JS file and include it on whatever page you want to add the functionality to. I just stuck it in the layout for my site, since I never know when I'll be using footnotes. There is no additional work needed.

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

## Also
Feel free to submit pull requests - I'm sure this can be optimized in a thousand different ways.

When I had the idea to do this, I did a quick search to see if anyone already had. I found one from [Lukas Mathis](http://ignorethecode.net/blog/2010/04/20/footnotes/), but I wanted to implement it differently. If you want this kind of footnote behavior but don't like my approach to it, check his out - you might prefer his tooltip-like method.
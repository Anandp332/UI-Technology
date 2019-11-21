Jquery  Selectors:

	Following are the different ways we could refer an existing dom element on page.

$("#abc") - Returns the reference of an element having id as abc

$(".abc") - Returns reference of an element having class as abc

$("div") - Returns refere of all elements having tag name as div

$("div#abc") - returns reference of a div tag having id as abc

$("input[type=text]") - Returns reference of all input type text elements.

$("div:even") - Returns reference of all div elements which are in even position.

$("td:odd") - Returns reference of all td elements in odd position

$("div:eq(2)") - Returns reference of all div tags which are in 2nd position.

$("span:first-child") - returns reference of all span elements which ever is in first child position.

etc.

Jquery Traversing Methods:

	Following are different ways we could traverse between dom elements

	Traversing Childrens:
		element.children() - Returns the immediate children of element.
		element.find("*") - Returns all the childrens and grand children of an element
		element.find("<pattern>") -  Returns all the childrens which are matching the provided pattern.

	Traversing Ancestors - 
		element.parent() - Returns reference of immediate parent\
		element.parents() - Returns referecne of parent and ancestors until html tag.
		element.parentsUntil("<pattern>") - returns reference of all parents until it finds a parent with provided pattern

	Traversing Siblings:
		element.next() - Returns reference of immediate next Siblings
		element.prev() - Returns reference of immediate previous sibling
		element.nextAll() - returns reference of all next siblings
		element.prevAll() - returns reference of all previous siblings
		element.nextUntil("<pattern>") - Returns reference of all next sibling elements until it finds an element with provided  pattern.
		element.prevUntil("<pattern>") - Returns reference of all previous sibling elements until it finds an element with provided  pattern.

Implementing Event handling through jquery methods:
	Following are predefined methods through which we can implement event  handling on dom elements.

	element.click(<callback method>);
	element.hover(<callback method>);
	element.change(<callback method>);
	element.focus(<callback method>);
	element.mouseover(<callback method>);
	element.keyup(<callback method>);
	element.keydown(<callback method>);
	etc.

	Event handling  through on method:

	element.on("<type of event>", <callback method>);
	eg:
		element.on("click", function(event){ ... });
		element.on("mouseover", function(event){ ... });
		etc.





Jquery Predefined methods can be applied on DOM elements:

	element.addClass("<one or more classes>") - Used to add one or more classes to dom elements.

	

	element.hasClass("<classname>") - Returns true/false if the class is existing to the specified element.

	element.css("key", "value") - To add a css property to elements.

	element.css({"key1": "value", "key2": "value2", ...}) - To add more than one css property to an element.

	element.hide() - Used to hide the visible element.

	element.show() - To show the hidden element.

	element.contains("hello") - Returns every dom element having text content as hello.

	element.append(<element>) - Appends provided  element as a children

	element.attr("attribute name", "value") - Used to  set attribute value to an element.

	element.empty() - Removes all child elements of an element

	element.text() - Used to set or get the text content of an element

	element.html() - To get or set the html content of an element

	element.val() - To get or set value of an input element

	element.remove() - Deletes the element from DOM structure.

	element.prepend(<element>) - Prepends provided element.

	element.appendTo(<parentelement>) - Appends the current element to a specified parent element.

	element.toggle() - Used to toggle display  property(none/block) of DOM element.

	etc.
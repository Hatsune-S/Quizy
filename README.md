# Quizy
Quizy website for CS50 final project.

## Introduction

### What is this webstie, and how was it made??

This Quizy is a website where you can put your own quiz and then try it. 
You can use this when you have an exam to remember vocaburaries and so on. 
　　There are many applications hat allows you to test your english level, or other limitted things.
But as a student learning in second language, it'd be useful when vocaburaries that we learn are set together.
So, I thought making website that you can create quiz on your own will help.


## Implementation

This has three main files which are [`index.html`][index.html], [`manage.html`][manage.html],
and [`learning.html`][learning.html].

### [`index.html`][index.html]

This file has no so much information, and it has the code to link with other two files. 
So this is the main page where you can chose to manage the data, or try.

### [`manage.html`][manage.html]

This file includes functions to manage the data, import the data, and export the data.
Those are controled by [`manage.js`][manage.js], and this [`manage.html`][manage.html].

### [`learning.html`][learning.html]

This file includes functions to use the data and try quiz.
Those are controled by [`learning.js`][learning.js], and this [`learning.html`][learning.html].

## Limitations

### Cannot be logged in


Some applications or website doesn't allow you to use data in other devices. 
That point is improved here, but there is no login system in this page. So, if you want to reuse the data, you can't delete the tab.

### Does not have foldas

This quizy can have as many quiz, but thisdoesn't have the system to make foldas to organize the quiz data.

## Further improvement

### Login system

This need to be improved by making users login to the pages. Also, the cookies must be provided safely when the user logs in.
The data should be saved by each users.


#### Video Demo:  <URL HERE>
#### Link of Quizy:  <URL HERE>


[index.html]: index.html "index.html"
[manage.html]: manage.html "manage.html"
[learning.html]: learning.html "learning.html"


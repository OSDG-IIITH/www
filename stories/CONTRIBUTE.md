So let's get right to it: You'd like your Open Source story to be included in the Stories page on the OSDG website. (http://osdg.iiit.ac.in/stories.php)

Awesome! It's really simple, just follow these steps:


1. Fork this repository, and download it to your local system. 


2. In the "stories" directory, add a .txt file with your story. The filename could be your IRC nickname, or whatever you want. The contents of this file will be rendered as is, with whitespaces preserved, so make sure you keep that in mind while writing your story. 

Let's say I add a file called "mdhr.txt" which contains my Open Source contribution story.


3. Now, in the same directory, there should already be a file called "stories.json". This file contains the list of all stories in JSON format. Open the file in a text editor and scroll down till you reach the end. 

Just after the last object in the JSON array, put a comma, then add the following lines (after you modify them to fit your own details):

{
			"author": "Mrinal Dhar",
			"filename": "mdhr.txt",
			"org": "Mozilla",
			"tags": "Firefox, Devtools, Javascript"
}


4. Commit and Push these changes to your fork of the repo. Now create a pull request with the title "Story added: Mrinal Dhar", replacing my name with your name, obviously. :D 


That's all. Now wait for an admin to approve your Pull Request, and your story will go live as soon as that happens. 

Thanks for contributing your story.
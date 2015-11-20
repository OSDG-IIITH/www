<!doctype html>
<html>
<head>
	<title>OSDG : IIIT-Hyderabad</title>
	<link rel="stylesheet" href="./css/standard.css" />
	<link rel="stylesheet" href="./css/stories.css" />

</head>
<body>
<?php include_once('header.php'); ?>

<div id="container">

<table id="stories_container">
	<tr>
		<td width="30%"><ul id="stories_list">
			<li class="control_item"><input type="text" id="story_search" onKeyUp="searchby(document.getElementById('story_search').value)" placeholder="Search by Author, Org name or Tags" /></li>
			<li class="control_item"><table id="sort_selector" width="100%"><tr><td onclick="sortby(document.getElementById('story_search').value,'author')" width="50%" class="selected" align="center">Sort by Author</td><td width="50%" align="center" onclick="sortby(document.getElementById('story_search').value,'org')">Sort by Org</td></tr></table></li>
		</ul></td>
		<td id="stories_content" width="70%"><h1>Stories speak volumes.</h1><p>As you will discover in your journey through the Open Source Community, each org and each community is different. Some will expect you to be active on the IRC, some on mailing lists. Some will ask you send them pull requests, some will have maintainers who will expect patches on mailing lists which can be reviewed by the entire community.

A few things find their place everywhere though. All communities of all orgs are extremely helpful and supportive to newbies. Well, that, and they all use some form of Version Control (usually git).

Here are some students from IIIT who write about their experiences contributing to FOSS ( Free and Open Source Software) . This will include information about the organization they have worked, their contributions to it, the netiquettes followed around the community (Yes! Those exist and their importance cannot be stressed enough!), and an idea on how to get started if you're enthusiastic about it!

These are simply personal anecdotes though, which may or may not hold true in your case so we'd still advise you to feel free to explore the community yourself and find your niche :)

If you'd like to share your story with the world like all these people, <a href="https://github.com/OSDG-IIITH/www/blob/master/stories/CONTRIBUTE.md">see how to do that</a>.
</p></td></tr>
</table>
</div>
<?php include_once('footer.php'); ?>
</body>
<script src="./js/jquery.js"></script>
<script src="./js/jqueryui.js"></script>
<script src="./js/standard.js"></script>
<script src="./js/marked.min.js"></script>
<script src="./js/stories.js"></script>

<script>
$('#stories_li').addClass('selected');

</script>
</html>

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
			<li class="control_item"><input type="text" id="story_search" placeholder="Search by Author, Org name or Tags" /></li>
			<li class="control_item"><table id="sort_selector" width="100%"><tr><td onclick="sortby('author')" width="50%" class="selected" align="center">Sort by Author</td><td width="50%" align="center" onclick="sortby('org')">Sort by Org</td></tr></table></li>
		</ul></td>
		<td id="stories_content" width="70%"><h1>Stories speak volumes.</h1><p>Here, A description of the stories page. And how to contribute to the stories page.</p></td></tr>
</table>
</div>
<?php include_once('footer.php'); ?>
</body>
<script src="./js/jquery.js"></script>
<script src="./js/jqueryui.js"></script>
<script src="./js/standard.js"></script>
<script src="./js/stories.js"></script>

<script>
$('#stories_li').addClass('selected');

</script>
</html>
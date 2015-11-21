// var stories = 0;
var stories;
var tags;
load_stories();

function searchby(query){
	console.log(query);
	if(query!="")
		render_list(query,1);
	else
		render_list(query,0);
}

function load_stories() {
	$.ajax({
		type: "GET",
		url: "stories/stories.json",
		async: false,
		success: function(response) {
			stories = response;
		}
	});
	tags=[];
	stories["stories"].sort(function(a, b) {
		return a["author"].localeCompare(b["author"]);
	});
	$.each(stories["stories"],function(index,value){
		console.log(index);
		console.log(value["tags"]);
		$.each(value["tags"].split(','),function(tag_index,entry) {
			console.log(entry);
			if(!(entry.toUpperCase() in tags)){
				tags[entry.trim().toUpperCase()]=[];
				tags[entry.trim().toUpperCase()].push(index);
			}
			else{
				tags[entry.trim().toUpperCase()].push(index);
			}
		});
	})
	console.log(tags);
	render_list("",0);
}

function render_list(query,search) {
	$('#stories_list').find('.storyitem').remove();
	console.log(query);
	$.each(stories["stories"], function(index, value) {
		if ((search==1 && ((tags[query.toUpperCase()] && tags[query.toUpperCase()].indexOf(index)>-1) || value["author"].toUpperCase().indexOf(query.toUpperCase())>=0 || value["org"].toUpperCase().indexOf(query.toUpperCase())>=0)) || search==0){		
			var item = "";
			item += "<li class='storyitem' onclick='getStory("+index+")'>"+value["author"]+"<small>"+value["org"]+"</small><br /><span class='tags'>";
			$.each(stories["stories"][index]["tags"].split(","), function (num, val) {
				item += val+" &bull; ";
			});
			item += "</span></li>";
			$('#stories_list').append(item);
			console.log();
		}
	});

	$('#sort_selector tr td').click(function() {
		// alert('hi');
		$(this).addClass('selected').siblings().removeClass('selected');
	});

	$('#stories_list li').not('.control_item').click(function() {
		// alert('hi');
		$(this).addClass('selected_story').siblings().removeClass('selected_story');
	});
}

function sortby(query,value) {
	stories["stories"].sort(function(a, b) {
		return a[value].localeCompare(b[value]);
	});
	if(query=="")
		render_list("",0);
	else
		render_list(query,1);
}


function getStory(index) {
	$('#stories_content').fadeOut("fast", function() {
		$.ajax({
			type: "GET",
			url: "stories/"+stories["stories"][index]["filename"],
			async: false,
			success: function(response) {
				$('#stories_content').text(response);
				$('#stories_content').fadeIn();
			}
		});
	});
}

// var stories = 0;
	var stories;
load_stories();
	function load_stories() {

			$.ajax({
 	 type: "GET",
 	 url: "stories/stories.json",
 	 async: false,
	success:function(response){
                    stories = response;
                },
  });
		
			stories["stories"].sort(function(a, b) {
   			return a["author"].localeCompare(b["author"]);
			});
			render_list();


			

	}

	function render_list() {
		$('#stories_list').find('.storyitem').remove();
		$.each(stories["stories"], function(index, value) {
				var item = "";
				item += "<li class='storyitem' onclick='getStory("+index+")'>"+value["author"]+"<small>"+value["org"]+"</small><br /><span class='tags'>";
				$.each(stories["stories"][index]["tags"].split(","), function (num, val) {
				item += val+" &bull; ";
				});
			item += "</span></li>";
				$('#stories_list').append(item);
				console.log();
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
	function sortby(value) {
		stories["stories"].sort(function(a, b) {
   			return a[value].localeCompare(b[value]);
			});
		render_list();
	}
	function getStory(index) {
		$('#stories_content').fadeOut("fast", function() {
			$.ajax({
 	 type: "GET",
 	 url: "stories/"+stories["stories"][index]["filename"],
 	 async: false,
	success:function(response){
		$('#stories_content').text(response);
		$('#stories_content').fadeIn();

                },
  });
		});
		
	}
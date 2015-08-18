// var stories = 0;
var stories;
function load_stories() {
    'use strict';
    $.ajax({
        type: 'GET',
        url: 'stories/stories.json',
        async: true,
        success: function(response) {
            stories = JSON.parse(response);
            stories['stories'].sort(function(a, b) {
                return a['author'].localeCompare(b['author']);
            });
            render_list();
        }
    });
}
function render_list() {
    'use strict';
    $('#stories_list').find('.storyitem').remove();
    $.each(stories['stories'], function(index, value) {
        var doc = document;
        var listItem = doc.createElement('li');
        listItem.classList.add('storyitem');
        listItem.onclick = function() {
            getStory(index);
        };
        listItem.appendChild(
            doc.createTextNode(
                value['author']
        ));
        var orgContainer = doc.createElement('small');
        var orgName = doc.createTextNode(value['org']);
        orgContainer.appendChild(orgName);
        listItem.appendChild(
            orgContainer
        );
        var tagsContainer = doc.createElement('div');
        tagsContainer.classList.add('tags');
        $.each(stories['stories'][index]['tags'].split(','), function(num, val) {
            tagsContainer.appendChild(
                doc.createTextNode(val + ' • ')
            );
        });
        listItem.appendChild(
            tagsContainer
        );
        $('#stories_list')[0].appendChild(listItem);
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
    'use strict';
    stories['stories'].sort(function(a, b) {
        return a[value].localeCompare(b[value]);
    });
    render_list();
}
function getStory(index) {
    'use strict';
    $('#stories_content').fadeOut('fast', function() {
        $.ajax({
            type: 'GET',
            url: 'stories/' + stories['stories'][index]['filename'],
            async: true,
            success: function(response) {
                $('#stories_content').text(response);
                $('#stories_content').fadeIn();
            }
        });
    });
}
load_stories();

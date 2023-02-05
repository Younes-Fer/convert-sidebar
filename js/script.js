jQuery(document).ready(function ($) {

  $posts = '<li id="wp-admin-bar-posts" class="menupop"><a style="display:flex;" aria-haspopup="true" href="edit.php"><div class="wp-menu-image dashicons-before dashicons-admin-post pr" aria-hidden="true"><br></div> <span class="ab-label">Posts</span></a> <div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu"><li id="wp-admin-bar-new-post"><a class="ab-item" href="edit.php" > All Posts </a></li><li id="wp-admin-bar-new-media"> <a class="ab-item" href="post-new.php" >Add New </a></li> <li id="wp-admin-bar-new-page"><a class="ab-item" href="edit-tags.php?taxonomy=category">Categories </a> </li> <li id="wp-admin-bar-new-user"> <a class="ab-item" href="edit-tags.php?taxonomy=post_tag">Tags</a></li></ul> </div></li> ';

  $media = '<li id="wp-admin-bar-media" class="menupop"><a style="display:flex;" aria-haspopup="true" href="upload.php"><div  class="pl wp-menu-image dashicons-before dashicons-admin-media pr" aria-hidden="true"><br></div> <span class="ab-label">Media</span></a> <div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu"><li id="wp-admin-media"> <a class="ab-item" href="upload.php" >Library </a></li> <li id="wp-admin-new-media"><a class="ab-item" href="media-new.php">Add New </a> </li></ul> </div></li> ';

  $pages = '<li id="wp-admin-bar-pages" class="menupop"><a style="display:flex;" aria-haspopup="true" href="edit.php?post_type=page"><div class="wp-menu-image dashicons-before dashicons-admin-page pr" aria-hidden="true"><br></div><span class="ab-label">Pages</span></a> <div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu"><li id="wp-admin-bar-pages"> <a class="ab-item" href="edit.php?post_type=page" >All Pages </a></li> <li id="wp-admin-bar-new-page"><a class="ab-item" href="post-new.php?post_type=page">Add New </a> </li></ul> </div></li> ';

  $comments = '<li id="wp-admin-bar-pages" class="menupop"><a style="display:flex;" aria-haspopup="true" href="edit-comments.php"><div class="wp-menu-image dashicons-before dashicons-admin-comments pr" aria-hidden="true"><br></div> <span class="ab-label">Comments</span></a></li> ';

  $appearances = '<li id="wp-admin-bar-appearances" class="menupop"><a style="display:flex;" aria-haspopup="true" href="themes.php"><div class="wp-menu-image dashicons-before dashicons-admin-appearance pr" aria-hidden="true"><br></div> <span class="ab-label">Appearance</span></a> <div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu"><li id="wp-admin-bar-pages"> <a class="ab-item" href="themes.php" >Themes</a></li></ul> </div></li>';

  $plugins = '<li id="wp-admin-bar-plugins" class="menupop"><a style="display:flex;" aria-haspopup="true" href="plugins.php"><div class="wp-menu-image dashicons-before dashicons-admin-plugins pr" aria-hidden="true"><br></div> <span class="ab-label">Plugins</span></a></li> ';

  $users = '<li id="wp-admin-bar-users" class="menupop"><a style="display:flex;" aria-haspopup="true" href="users.php"><div class="wp-menu-image dashicons-before dashicons-admin-users pr" aria-hidden="true"><br></div> <span class="ab-label">Users</span></a> <div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu"><li id="wp-admin-bar-new-post"><a class="ab-item" href="users.php" > All Users </a></li><li> <a class="ab-item" href="user-new.php" >Add New </a></li><li> <a class="ab-item" href="profile.php">Profile</a></li></ul> </div></li> ';

  $tools = '<li id="wp-admin-bar-tools" class="menupop"><a style="display:flex;" aria-haspopup="true" href="tools.php"><div class="wp-menu-image dashicons-before dashicons-admin-tools pr" aria-hidden="true"><br></div> <span class="ab-label">Tools</span></a> <div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu"><li><a class="ab-item" href="tools.php" > Available Tools </a></li><li id="wp-admin-bar-new-media"> <a class="ab-item" href="import.php" >Import</a></li> <li><a class="ab-item" href="export.php">Export </a> </li> <li> <a class="ab-item" href="site-health.php">Site Health </a></li> <li> <a class="ab-item" href="export-personal-data.php">Export Personal Data</a></li> <li> <a class="ab-item" href="erase-personal-data.php">Erase Personal Data</a></li></ul> </div></li> ';

  $settings = '<li id="wp-admin-bar-settings" class="menupop"><a style="display:flex;" aria-haspopup="true" href="options-general.php"><div class="wp-menu-image dashicons-before dashicons-admin-settings pr" aria-hidden="true"><br></div> <span class="ab-label">Settings</span></a> <div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu"><li><a class="ab-item" href="options-general.php" > General </a></li><li id="wp-admin-bar-new-media"> <a class="ab-item" href="options-writing.php" >Writing</a></li> <li><a class="ab-item" href="options-reading.php">Reading</a> </li> <li> <a class="ab-item" href="options-discussion.php">Discussion </a></li> <li> <a class="ab-item" href="options-media.php">Media</a></li> <li><a class="ab-item" href="options-permalink.php">Permalinks</a></li> <li><a class="ab-item" href="options-privacy.php">Privacy</a></li></ul> </div></li> ';

  $("#wp-toolbar > #wp-admin-bar-root-default").append($posts);
  $("#wp-toolbar > #wp-admin-bar-root-default").append($media);
  $("#wp-toolbar > #wp-admin-bar-root-default").append($pages);
  $("#wp-toolbar > #wp-admin-bar-root-default").append($comments);
  $("#wp-toolbar > #wp-admin-bar-root-default").append($appearances);
  $("#wp-toolbar > #wp-admin-bar-root-default").append($plugins);
  $("#wp-toolbar > #wp-admin-bar-root-default").append($users);
  $("#wp-toolbar > #wp-admin-bar-root-default").append($tools);
  $("#wp-toolbar > #wp-admin-bar-root-default").append($settings);

  
  $('#wp-admin-bar-posts ,#wp-admin-bar-media,#wp-admin-bar-pages,#wp-admin-bar-appearances,#wp-admin-bar-users,#wp-admin-bar-tools,#wp-admin-bar-settings').hover(function(){
      $(this).toggleClass("hover");
  });

});




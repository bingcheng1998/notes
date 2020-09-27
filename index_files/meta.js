(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"category-work.html":"A list of posts in category &ldquo;Work&rdquo;","category-humor.html":"A list of posts in category &ldquo;Humor&rdquo;","archive-september-2020.html":"Archives for September 2020","4a7dc00e96993d57c83ff6a530abff37-2.html":"For ReLU gate, we use max(0, -) to get our data all positive and will not cause saturation, which is very convenient to use.However, in back propagati","category-machine-learning.html":"A list of posts in category &ldquo;Machine Learning&rdquo;","tag-regularization.html":"Posts tagged &ldquo;regularization&rdquo;","category-apple.html":"A list of posts in category &ldquo;Apple&rdquo;","category-personal.html":"A list of posts in category &ldquo;Personal&rdquo;","tag-back-propagation.html":"Posts tagged &ldquo;back propagation&rdquo;","tag-relu.html":"Posts tagged &ldquo;ReLU&rdquo;","Bias-regularization.html":"It is not common to regularize the bias parameters because they do not interact with the data through multiplicative interactions, and therefore do no"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();
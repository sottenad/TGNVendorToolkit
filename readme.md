#TGN Vendor Toolkit

##Constraints
* Height:600px (max)
* Width: full-width (100%) or 1022px
* Supported browsers: IE, Chrome, Firefox, Safari, Mobile (IOS, Android)
* Minimum Resolution: 1024x768


##Pre-Scope Checklist / Release Checklist
* Tagging (omniture or webtrends) requirements
* Mobile Consideration
* Legacy Browser Consideration
* SEO
* Share/Tweet messages


##About this download:

##Included JS:
The TGN Feature template is very sparse in terms of included javascript. We only include
* jQuery 1.6.1 - Please use this unless you absolutely need a newer version
* jQuery.mediaqueries.js - Handles css media queries for legacy browsers
* Share.js - This includes common sharing methods. Please read the file for a full source, but common usage for this plugin looks something like this:
		$('.fbShare').click(function(){
			openSharingSite('facebook', 'The Future of Food - The Gates Notes');
			return false;
		});

##Usage Instructions:
Download this branch by either cloning it to your system (if you familiar with Git) or clicking the "ZIP" button to download a zipped copy of the entire file structure.
Once you have the files, you can begin working in the `index.html` file. This file is an exact copy of what a normal feature looks like. Included in it is all the global CSS and Javascript that will be used in addition to the code you provide. By providing these files, we hope to minimize the amount of conflicting code before we get your feature into the TGN ecosystem.
To get started with the feature, look between the large comments just inside the `<div class="contentRenderer" id="contentRenderer" >` tag. There is also a large comment at the end of this div. The content between these comments is for demonstration only and should be removed and replaced with your code.
Please include any additional 

##Publication Steps:

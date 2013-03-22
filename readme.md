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
* **jQuery 1.6.1** - Please use this unless you absolutely need a newer version
* **jQuery.mediaqueries.js** - Handles css media queries for legacy browsers
* **Share.js** - This includes common sharing methods. Please read the file for a full source, but common usage for this plugin looks something like this:
	
    $('.fbShare').click(function(){
        openSharingSite('facebook', 'The Future of Food - The Gates Notes');
        return false;
    });
	
##Usage Instructions:
Download this branch by either cloning it to your system (if you familiar with Git) or clicking the "ZIP" button to download a zipped copy of the entire file structure.

Once you have the files, you can begin working in the `index.html` file. This file is an exact copy of what a normal feature looks like. Included in it is all the global CSS and Javascript that will be used in addition to the code you provide. By providing these files, we hope to minimize the amount of conflicting code before we get your feature into the TGN ecosystem.

To get started with the feature, look between the large comments just inside the `<div class="contentRenderer" id="contentRenderer" >` tag. There is also a large comment at the end of this div. The content between these comments is for demonstration only and should be removed and replaced with your code.

Please include any additional css or scripts either linked to (shown in sample) or inline (using `<style>` and `<script>` tags). Either method will work fine, but including them inline will provide more flexibility when launching, as you can edit these files via the editor in the CMS.

##Publication Steps:
Once you have created a feature using the sample, you'll need to prepare your feature for publication. To do this, you'll first need to test fairly exentsively against the following browsers: IE8, IE9, IE10, Firefox, Chrome, Safari (all latest).

After verifing that your feature passes all tests, please zip your project and email to your project sponsor for further testing/initial deployment to our Staging environment. In staging, you'll recieve a login to being testing and tweaking your code to ensure that your feature integrated properly with the rest of the site. 

After verification in staging, the publishing to production is handled by the TGN team.

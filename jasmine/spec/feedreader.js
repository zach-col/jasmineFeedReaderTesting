$(function() {

    describe('RSS Feeds', function() {
        /*  make sure allFeeds is defined and not empty
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* make sure allFeeds urls are defined and not empty*/
        it('have urls', function() {
            for(var feed in allFeeds){
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url.length).not.toBe(0);

            }
        });
        /* make sure allFeeds names are defined and not empty*/
        it('have names', function() {
            for(var feed in allFeeds){
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name.length).not.toBe(0);

            }
        });

    });


    /* make sure menu element is hidden by default.*/
    describe('The menu', function() {
        // set menu state to null
        var menuState = null;
        // toggle menu function
        function toggleMenu(){
            document.querySelector(".menu-icon-link").click();
            menuState = $('body').hasClass( "menu-hidden" );
        }

        // tests that menu is hidden by default
        it('menu should be hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });


        it('make sure menu visibility changes on click', function() {
            // toggle menu
            toggleMenu();
            // tests that menu is open
            expect(menuState).toBe(false);

            // toggle menu
            toggleMenu();
            // tests that menu is closed
            expect(menuState).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        // resource count
        var resourceCount = 0;
        // load feed before testing
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('make sure loadFeed loads at least one resource', function() {
            // get all resources currently available
            resourceCount = document.querySelectorAll('.entry-link').length;
            expect(resourceCount).not.toBe(0);
        });

    });

    describe('New Feed Selection', function(){
        // resource count
        var firstResource = null;
        var secondResource = null;
        // load feed before testing
        beforeEach(function(done) {
            loadFeed(0, done);
            firstResource = document.querySelectorAll('.entry-link');
            loadFeed(1, done);
            secondResource = document.querySelectorAll('.entry-link');
        });

        it('makes sure resources change', function() {
            expect(firstResource).not.toBe(secondResource);
        });
    });
}());
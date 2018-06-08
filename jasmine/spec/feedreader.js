/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
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

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());

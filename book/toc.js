// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="p1-pkm.html"><strong aria-hidden="true">1.</strong> Personal Knowledge Management (PKM) Handbook</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1a-intro-to-pkm.html"><strong aria-hidden="true">1.1.</strong> Introduction to PKM</a></li></ol></li><li class="chapter-item expanded "><a href="p2-pkm-basics.html"><strong aria-hidden="true">2.</strong> PKM Basics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2a-email-management.html"><strong aria-hidden="true">2.1.</strong> Email Management</a></li><li class="chapter-item expanded "><a href="2b-working-with-gen-ai.html"><strong aria-hidden="true">2.2.</strong> Working with Generative AI</a></li></ol></li><li class="chapter-item expanded "><a href="p3-info-resources-sources.html"><strong aria-hidden="true">3.</strong> Using Information Resources and Managing Information Sources</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="3a-information-sources-resources.html"><strong aria-hidden="true">3.1.</strong> Information Sources and Resources</a></li><li class="chapter-item expanded "><a href="3b-reference-managers-getting-started.html"><strong aria-hidden="true">3.2.</strong> Reference Managers: Getting Started</a></li></ol></li><li class="chapter-item expanded "><a href="p4-retrieving-evaluating-information.html"><strong aria-hidden="true">4.</strong> Retrieving and Evaluating Information</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="4a-web-information-retrieval.html"><strong aria-hidden="true">4.1.</strong> Web Information Retrieval</a></li><li class="chapter-item expanded "><a href="4b-database-information-retrieval.html"><strong aria-hidden="true">4.2.</strong> Database Information Retrieval</a></li><li class="chapter-item expanded "><a href="4c-evaluating-information-sources.html"><strong aria-hidden="true">4.3.</strong> Evaluating Information Sources</a></li></ol></li><li class="chapter-item expanded "><a href="p5-wikipedia-project.html"><strong aria-hidden="true">5.</strong> Wikipedia Project</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="5b-project-setup-wikipedia-part-1.html"><strong aria-hidden="true">5.1.</strong> Wikipedia Project: Setup</a></li><li class="chapter-item expanded "><a href="5c-library-sources-part-1.html"><strong aria-hidden="true">5.2.</strong> Library Sources: Part 1</a></li><li class="chapter-item expanded "><a href="5d-library-sources-part-2.html"><strong aria-hidden="true">5.3.</strong> Library Sources: Part 2</a></li><li class="chapter-item expanded "><a href="5e-web-sources-part-1.html"><strong aria-hidden="true">5.4.</strong> Web Sources: Part 1</a></li><li class="chapter-item expanded "><a href="5f-web-sources-part-2.html"><strong aria-hidden="true">5.5.</strong> Web Sources: Part 2</a></li><li class="chapter-item expanded "><a href="5g-reference-managers-finishing-up.html"><strong aria-hidden="true">5.6.</strong> Reference Managers: Finishing Up</a></li><li class="chapter-item expanded "><a href="5h-project-close-wikipedia-part-2.html"><strong aria-hidden="true">5.7.</strong> Wikipedia Project: Completion</a></li></ol></li><li class="chapter-item expanded "><a href="gnu-free-documentation-license.html"><strong aria-hidden="true">6.</strong> GNU Free Documentation License</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);

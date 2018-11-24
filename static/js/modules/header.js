class Header {
    constructor() {
        this.selectors = {
            window: window,
            header: "header"
        }

        this.$DOM = {
            window: $(this.selectors.window),
            header: $(`.${this.selectors.header}`)
        }

        this.threshold = 50;

        this.$DOM.window.scroll(this.scrollHandler);
    }

    scrollHandler = e => {
        const currentScroll = this.$DOM.window.scrollTop();
        if (currentScroll >= this.threshold) {
            this.$DOM.header.addClass(`${this.selectors.header}--scrolled`);
        } else {
            this.$DOM.header.removeClass(`${this.selectors.header}--scrolled`);
        }
    }
}
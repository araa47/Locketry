class ScrollManager {
    constructor() {
        this._$header = $(".header");
        this._$trigger = $("[data-scroll-to]");
        this._$trigger.click(this.scroll);
    }

    scroll = e => {
        e.preventDefault();
        const _$this = $(e.currentTarget);
        const _target = _$this.attr("data-scroll-to");
        const _$target = $(`[data-scroll-target="${_target}"]`);
        $.scrollTo(_$target, 500, {
            offset: {
                top: -this._$header.innerHeight()
            }
        });
    }
}
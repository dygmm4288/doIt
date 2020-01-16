$(document).ready(() => {
	const menus = $("#container .content");
	const navMenus = $("nav li");
	const container = $("#container");
	const logoBox = $("header .logo_box");

	/* CONTENTS */
	container.addClass("start");
	/* NAVIGATION */
	navMenus.click(e => {
		const current = e.currentTarget;
		const onMenuId = "#" + $(current).attr("data-rol");
		container.css("max-width", "100%");
		navMenus.removeClass("on");
		$(current).addClass("on");
		$(current)
			.nextAll()
			.removeClass("on");
		/* 해당 영역 this추가 */
		menus.removeClass("prev this next");
		$(onMenuId)
			.addClass("this")
			.prevAll()
			.addClass("prev");
		$(onMenuId)
			.nextAll()
			.addClass("next");
	});
	/* CLICK LOGO */
	logoBox.click(() => {
		navMenus.removeClass("on");
		menus.removeClass("this prev next");
		container.css("max-width", 1200);
	});
});

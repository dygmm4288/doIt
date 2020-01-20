$(document).ready(() => {
	const menus = $("#container .content");
	const navMenus = $("nav li");
	const container = $("#container");
	const logoBox = $("header .logo_box");
	const rollLeftBtn = $(".roll_left");
	const rollRightBtn = $(".roll_right");
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
	/* ROLLING BOOK */
	rollLeftBtn.click(() => {
		$(".book_roll li")
			.eq(0)
			.insertAfter(".book_roll li:last-child");
	});
	rollRightBtn.click(() => {
		$(".book_roll li")
			.eq(-1)
			.insertBefore(".book_roll li:first-child");
	});
	/* BOOK AJAX */
	$(".book_roll li").click(function() {
		const _this = $(this);
		const liUrl = _this.data("url");
		console.log(liUrl);
		$(".notebook").html();
		$.ajax({
			type: "post",
			url: liUrl,
			dataType: "html",
			success: data => {
				console.log("성공");
				console.log(data);
				$(".notebook").html(data);
			},
			done: data => {
				console.log("done data", data);
			}
		});
	});
	/* ACCORDIO */
	$(".accordio_box ol li").click(function() {
		$(".accordio_box ol li").removeClass("on");
		$(this).addClass("on");
	});
	/* POPUP */
	$(".close")
		.attr("disabled", "false")
		.click(() => {
			$(".thankyou_message").css("display", "none");
		});
});

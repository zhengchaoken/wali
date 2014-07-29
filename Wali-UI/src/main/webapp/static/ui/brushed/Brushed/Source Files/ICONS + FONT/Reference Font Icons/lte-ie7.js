/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'font-icon-zoom-out' : '&#xe000;',
			'font-icon-zoom-in' : '&#xe001;',
			'font-icon-wrench' : '&#xe002;',
			'font-icon-waves' : '&#xe003;',
			'font-icon-warning' : '&#xe004;',
			'font-icon-volume-up' : '&#xe005;',
			'font-icon-volume-off' : '&#xe006;',
			'font-icon-volume-down' : '&#xe007;',
			'font-icon-viewport' : '&#xe008;',
			'font-icon-user' : '&#xe009;',
			'font-icon-user-border' : '&#xe00a;',
			'font-icon-upload' : '&#xe00b;',
			'font-icon-upload-2' : '&#xe00c;',
			'font-icon-unlock' : '&#xe00d;',
			'font-icon-underline' : '&#xe00e;',
			'font-icon-tint' : '&#xe00f;',
			'font-icon-time' : '&#xe010;',
			'font-icon-text' : '&#xe011;',
			'font-icon-text-width' : '&#xe012;',
			'font-icon-text-height' : '&#xe013;',
			'font-icon-tags' : '&#xe014;',
			'font-icon-tag' : '&#xe015;',
			'font-icon-table' : '&#xe016;',
			'font-icon-strikethrough' : '&#xe017;',
			'font-icon-stop' : '&#xe018;',
			'font-icon-step-forward' : '&#xe019;',
			'font-icon-step-backward' : '&#xe01a;',
			'font-icon-stars' : '&#xe01b;',
			'font-icon-star' : '&#xe01c;',
			'font-icon-star-line' : '&#xe01d;',
			'font-icon-star-half' : '&#xe01e;',
			'font-icon-sort' : '&#xe01f;',
			'font-icon-sort-up' : '&#xe020;',
			'font-icon-sort-down' : '&#xe021;',
			'font-icon-social-zerply' : '&#xe022;',
			'font-icon-social-youtube' : '&#xe023;',
			'font-icon-social-yelp' : '&#xe024;',
			'font-icon-social-yahoo' : '&#xe025;',
			'font-icon-social-wordpress' : '&#xe026;',
			'font-icon-social-virb' : '&#xe027;',
			'font-icon-social-vimeo' : '&#xe028;',
			'font-icon-social-viddler' : '&#xe029;',
			'font-icon-social-twitter' : '&#xe02a;',
			'font-icon-social-tumblr' : '&#xe02b;',
			'font-icon-social-stumbleupon' : '&#xe02c;',
			'font-icon-social-soundcloud' : '&#xe02d;',
			'font-icon-social-skype' : '&#xe02e;',
			'font-icon-social-share-this' : '&#xe02f;',
			'font-icon-social-quora' : '&#xe030;',
			'font-icon-social-pinterest' : '&#xe031;',
			'font-icon-social-photobucket' : '&#xe032;',
			'font-icon-social-paypal' : '&#xe033;',
			'font-icon-social-myspace' : '&#xe034;',
			'font-icon-social-linkedin' : '&#xe035;',
			'font-icon-social-last-fm' : '&#xe036;',
			'font-icon-social-grooveshark' : '&#xe037;',
			'font-icon-social-google-plus' : '&#xe038;',
			'font-icon-social-github' : '&#xe039;',
			'font-icon-social-forrst' : '&#xe03a;',
			'font-icon-social-flickr' : '&#xe03b;',
			'font-icon-social-facebook' : '&#xe03c;',
			'font-icon-social-evernote' : '&#xe03d;',
			'font-icon-social-envato' : '&#xe03e;',
			'font-icon-social-email' : '&#xe03f;',
			'font-icon-social-dribbble' : '&#xe040;',
			'font-icon-social-digg' : '&#xe041;',
			'font-icon-social-deviant-art' : '&#xe042;',
			'font-icon-social-blogger' : '&#xe043;',
			'font-icon-social-behance' : '&#xe044;',
			'font-icon-social-bebo' : '&#xe045;',
			'font-icon-social-addthis' : '&#xe046;',
			'font-icon-social-500px' : '&#xe047;',
			'font-icon-sitemap' : '&#xe048;',
			'font-icon-signout' : '&#xe049;',
			'font-icon-signin' : '&#xe04a;',
			'font-icon-signal' : '&#xe04b;',
			'font-icon-shopping-cart' : '&#xe04c;',
			'font-icon-search' : '&#xe04d;',
			'font-icon-rss' : '&#xe04e;',
			'font-icon-road' : '&#xe04f;',
			'font-icon-retweet' : '&#xe050;',
			'font-icon-resize-vertical' : '&#xe051;',
			'font-icon-resize-vertical-2' : '&#xe052;',
			'font-icon-resize-small' : '&#xe053;',
			'font-icon-resize-horizontal' : '&#xe054;',
			'font-icon-resize-horizontal-2' : '&#xe055;',
			'font-icon-resize-fullscreen' : '&#xe056;',
			'font-icon-resize-full' : '&#xe057;',
			'font-icon-repeat' : '&#xe058;',
			'font-icon-reorder' : '&#xe059;',
			'font-icon-remove' : '&#xe05a;',
			'font-icon-remove-sign' : '&#xe05b;',
			'font-icon-remove-circle' : '&#xe05c;',
			'font-icon-read-more' : '&#xe05d;',
			'font-icon-random' : '&#xe05e;',
			'font-icon-question-sign' : '&#xe05f;',
			'font-icon-pushpin' : '&#xe060;',
			'font-icon-pushpin-2' : '&#xe061;',
			'font-icon-print' : '&#xe062;',
			'font-icon-plus' : '&#xe063;',
			'font-icon-plus-sign' : '&#xe064;',
			'font-icon-play' : '&#xe065;',
			'font-icon-picture' : '&#xe066;',
			'font-icon-phone' : '&#xe067;',
			'font-icon-phone-sign' : '&#xe068;',
			'font-icon-phone-boxed' : '&#xe069;',
			'font-icon-pause' : '&#xe06a;',
			'font-icon-paste' : '&#xe06b;',
			'font-icon-paper-clip' : '&#xe06c;',
			'font-icon-ok' : '&#xe06d;',
			'font-icon-ok-sign' : '&#xe06e;',
			'font-icon-ok-circle' : '&#xe06f;',
			'font-icon-music' : '&#xe070;',
			'font-icon-move' : '&#xe071;',
			'font-icon-money' : '&#xe072;',
			'font-icon-minus' : '&#xe073;',
			'font-icon-minus-sign' : '&#xe074;',
			'font-icon-map' : '&#xe075;',
			'font-icon-map-marker' : '&#xe076;',
			'font-icon-map-marker-2' : '&#xe077;',
			'font-icon-magnet' : '&#xe078;',
			'font-icon-magic' : '&#xe079;',
			'font-icon-lock' : '&#xe07a;',
			'font-icon-list' : '&#xe07b;',
			'font-icon-list-3' : '&#xe07c;',
			'font-icon-list-2' : '&#xe07d;',
			'font-icon-link' : '&#xe07e;',
			'font-icon-layer' : '&#xe07f;',
			'font-icon-key' : '&#xe080;',
			'font-icon-italic' : '&#xe081;',
			'font-icon-info' : '&#xe082;',
			'font-icon-indent-right' : '&#xe083;',
			'font-icon-indent-left' : '&#xe084;',
			'font-icon-inbox' : '&#xe085;',
			'font-icon-inbox-empty' : '&#xe086;',
			'font-icon-home' : '&#xe087;',
			'font-icon-heart' : '&#xe088;',
			'font-icon-heart-line' : '&#xe089;',
			'font-icon-headphones' : '&#xe08a;',
			'font-icon-headphones-line' : '&#xe08b;',
			'font-icon-headphones-line-2' : '&#xe08c;',
			'font-icon-headphones-2' : '&#xe08d;',
			'font-icon-hdd' : '&#xe08e;',
			'font-icon-group' : '&#xe08f;',
			'font-icon-grid' : '&#xe090;',
			'font-icon-grid-large' : '&#xe091;',
			'font-icon-globe_line' : '&#xe092;',
			'font-icon-glass' : '&#xe093;',
			'font-icon-glass_2' : '&#xe094;',
			'font-icon-gift' : '&#xe095;',
			'font-icon-forward' : '&#xe096;',
			'font-icon-font' : '&#xe097;',
			'font-icon-folder-open' : '&#xe098;',
			'font-icon-folder-close' : '&#xe099;',
			'font-icon-flag' : '&#xe09a;',
			'font-icon-fire' : '&#xe09b;',
			'font-icon-film' : '&#xe09c;',
			'font-icon-file' : '&#xe09d;',
			'font-icon-file-empty' : '&#xe09e;',
			'font-icon-fast-forward' : '&#xe09f;',
			'font-icon-fast-backward' : '&#xe0a0;',
			'font-icon-facetime' : '&#xe0a1;',
			'font-icon-eye' : '&#xe0a2;',
			'font-icon-eye_disable' : '&#xe0a3;',
			'font-icon-expand-view' : '&#xe0a4;',
			'font-icon-expand-view-3' : '&#xe0a5;',
			'font-icon-expand-view-2' : '&#xe0a6;',
			'font-icon-expand-vertical' : '&#xe0a7;',
			'font-icon-expand-horizontal' : '&#xe0a8;',
			'font-icon-exclamation' : '&#xe0a9;',
			'font-icon-email' : '&#xe0aa;',
			'font-icon-email_2' : '&#xe0ab;',
			'font-icon-eject' : '&#xe0ac;',
			'font-icon-edit' : '&#xe0ad;',
			'font-icon-edit-check' : '&#xe0ae;',
			'font-icon-download' : '&#xe0af;',
			'font-icon-download_2' : '&#xe0b0;',
			'font-icon-dashboard' : '&#xe0b1;',
			'font-icon-credit-card' : '&#xe0b2;',
			'font-icon-copy' : '&#xe0b3;',
			'font-icon-comments' : '&#xe0b4;',
			'font-icon-comments-line' : '&#xe0b5;',
			'font-icon-comment' : '&#xe0b6;',
			'font-icon-comment-line' : '&#xe0b7;',
			'font-icon-columns' : '&#xe0b8;',
			'font-icon-columns-2' : '&#xe0b9;',
			'font-icon-cogs' : '&#xe0ba;',
			'font-icon-cog' : '&#xe0bb;',
			'font-icon-cloud' : '&#xe0bc;',
			'font-icon-check' : '&#xe0bd;',
			'font-icon-check-empty' : '&#xe0be;',
			'font-icon-certificate' : '&#xe0bf;',
			'font-icon-camera' : '&#xe0c0;',
			'font-icon-calendar' : '&#xe0c1;',
			'font-icon-bullhorn' : '&#xe0c2;',
			'font-icon-briefcase' : '&#xe0c3;',
			'font-icon-bookmark' : '&#xe0c4;',
			'font-icon-book' : '&#xe0c5;',
			'font-icon-bolt' : '&#xe0c6;',
			'font-icon-bold' : '&#xe0c7;',
			'font-icon-blockquote' : '&#xe0c8;',
			'font-icon-bell' : '&#xe0c9;',
			'font-icon-beaker' : '&#xe0ca;',
			'font-icon-barcode' : '&#xe0cb;',
			'font-icon-ban-circle' : '&#xe0cc;',
			'font-icon-ban-chart' : '&#xe0cd;',
			'font-icon-ban-chart-2' : '&#xe0ce;',
			'font-icon-backward' : '&#xe0cf;',
			'font-icon-asterisk' : '&#xe0d0;',
			'font-icon-arrow-simple-up' : '&#xe0d1;',
			'font-icon-arrow-simple-up-circle' : '&#xe0d2;',
			'font-icon-arrow-simple-right' : '&#xe0d3;',
			'font-icon-arrow-simple-right-circle' : '&#xe0d4;',
			'font-icon-arrow-simple-left' : '&#xe0d5;',
			'font-icon-arrow-simple-left-circle' : '&#xe0d6;',
			'font-icon-arrow-simple-down' : '&#xe0d7;',
			'font-icon-arrow-simple-down-circle' : '&#xe0d8;',
			'font-icon-arrow-round-up' : '&#xe0d9;',
			'font-icon-arrow-round-up-circle' : '&#xe0da;',
			'font-icon-arrow-round-right' : '&#xe0db;',
			'font-icon-arrow-round-right-circle' : '&#xe0dc;',
			'font-icon-arrow-round-left' : '&#xe0dd;',
			'font-icon-arrow-round-left-circle' : '&#xe0de;',
			'font-icon-arrow-round-down' : '&#xe0df;',
			'font-icon-arrow-round-down-circle' : '&#xe0e0;',
			'font-icon-arrow-light-up' : '&#xe0e1;',
			'font-icon-arrow-light-round-up' : '&#xe0e2;',
			'font-icon-arrow-light-round-up-circle' : '&#xe0e3;',
			'font-icon-arrow-light-round-right' : '&#xe0e4;',
			'font-icon-arrow-light-round-right-circle' : '&#xe0e5;',
			'font-icon-arrow-light-round-left' : '&#xe0e6;',
			'font-icon-arrow-light-round-left-circle' : '&#xe0e7;',
			'font-icon-arrow-light-round-down' : '&#xe0e8;',
			'font-icon-arrow-light-round-down-circle' : '&#xe0e9;',
			'font-icon-arrow-light-right' : '&#xe0ea;',
			'font-icon-arrow-light-left' : '&#xe0eb;',
			'font-icon-arrow-light-down' : '&#xe0ec;',
			'font-icon-align-right' : '&#xe0ed;',
			'font-icon-align-left' : '&#xe0ee;',
			'font-icon-align-justify' : '&#xe0ef;',
			'font-icon-align-center' : '&#xe0f0;',
			'font-icon-adjust' : '&#xe0f1;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/font-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
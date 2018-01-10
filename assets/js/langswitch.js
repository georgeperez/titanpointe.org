const thisUrl = new URL(location.href);
function changeLang(newLang) {
	const htmlEl = document.documentElement;
	if (htmlEl.getAttribute('lang') == newLang) return;
	if (document.querySelector('article[lang='+newLang+']')) {
		htmlEl.setAttribute('lang', newLang);
		thisUrl.searchParams.set('lang', newLang);
		history.replaceState({}, '', thisUrl.toString());
	}
}
Array.from(document.querySelectorAll('a[data-langswitch]')).forEach(el => {
	el.addEventListener('click', e => {
		changeLang(e.target.dataset.langswitch);
		e.target.blur();
		e.preventDefault();
	});
});
changeLang(thisUrl.searchParams.get('lang') || navigator.language);

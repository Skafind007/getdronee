const defaultItemCount = 7;
const itemWidth = 238;

const wrapper = document.getElementById("InfiniteScrollWrapper");
const content = document.getElementById("InfiniteScroll");

const manageChildren = (childCount) => {
	while (content.children.length > defaultItemCount) {
		content.removeChild(content.lastChild);
	}

	for (let i = 0; i < childCount; i++) {
		for (let j = 0; j < defaultItemCount; j++) {
			const clone = content.children[j].cloneNode(true);
			content.appendChild(clone);
		}
	}

	content.style.width = `${itemWidth * defaultItemCount * (childCount + 1)}px`;
};

const core = (width) => {
	if (width <= 1920) {
		manageChildren(2);
	} else if (width <= 2560) {
		manageChildren(3);
	} else if (width <= 3840) {
		manageChildren(4);
	} else {
		manageChildren(8);
	}
};

const debounce = (func, delay) => {
	let timeout;
	return () => {
		clearTimeout(timeout);
		timeout = setTimeout(func, delay);
	};
};

const handleResize = debounce(() => core(window.innerWidth), 300);

window.addEventListener("load", () => {
	core(window.innerWidth);
});

window.addEventListener("resize", handleResize);

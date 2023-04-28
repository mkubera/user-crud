import UtilsDom from "./utils/dom";

const appDOM = UtilsDom.qs("#app");

// INPUT: Array (templatkowych) Stringow
// OUTPUT: undefined (fn ma za zadanie jedynie manipulowac DOM)
// laczy templatkowe Stringi i wrzuca w #app
const render = (views) => {
	appDOM.innerHTML = views.join("");
};

const View = { render };

export default View;

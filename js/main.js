import "../css/main.css";
// import viteLogo from '/vite.svg'
import Store from "./store/store";
import View from "./view";
import ViewUser from "./view/user";

// dane z Store
const userData = Store.getStore();

// views to Array Stringow, ktore trzymaja w sobie
// templatki roznych views
// zakladamy, ze strona to Single Page App
// wiec zawsze renderujemy wszystko.
// jest to uproszczenie, bo dla wiekszych aplikacji
// chcielibysmy re-renderowac tylko mniejsze czesci UI.
// tutaj, zawsze re-renderujemy cale UI
const views = [
	ViewUser.viewUserProfile(userData),
	// tutaj mozecie wpisac inne funkcje zwracajace
	// templatkowe Stringi, np.
	// ViewLayout.viewHeader(),
	// ViewLayout.viewFooter(),
];

View.render(views);

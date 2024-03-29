import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	//const [ cookies, setCookie, removeCookie] = useCookies(["tokenCookie", "userIdCookie", "favidsCookie"])
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [favorites, setFavorites] = useState([]);
	const [favIds, setFavIds] = useState([]); // useState(JSON.parse(cookies.favidsCookie)) || [])

	favIds && console.log(favIds);

	const handleLogin = (username, password) => {
		if (username && password) {
			axios
				.post("https://dinmaegler.herokuapp.com/auth/local", {
					identifier: username,
					password: password,
				})
				.then((response) => {
					setToken(response.data.jwt);
					setUserId(response.data.user.id);
					setFavorites(response.data.user.homes);
				});
		}
	};
	const handleLogout = () => {
		setToken(null);
		setUserId(null);
		setFavorites([]);
		navigate("/");
	};

	useEffect(() => {
		let ids = favorites.map((favorite) => favorite.id);
		setFavIds(ids);
		// set cookie her... setCookie("favids", JSON.stringify(favIds))
	}, [favorites]);

	favIds && console.log(favIds);

	const handleFavorites = (newFavId) => {
		if (favIds.includes(newFavId)) {
			setFavIds(...favIds.splice(favIds.indexOf(newFavId), 1));
		} else {
			setFavIds(...favIds, newFavId);
		}
		//opdater cookie her... setCookie("favids", JSON.stringify(favIds))
		axios.put(
			"https://dinmaegler.herokuapp.com/users/" + userId,
			{
				homes: favIds,
			},
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);
	};

	return (
		<UserContext.Provider
			value={{
				token,
				userId,
				favorites,
				favIds,
				handleLogin,
				handleLogout,
				handleFavorites,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;

import { Route, Routes } from "react-router-dom";
import Home from "../core/Home";
import UserLayout from "./userLayout";
import NotFound from "../core/NotFound";
import { SearchPokemonProvider } from "../../contexts/SearchPokemonProvider";

const userRouter = () => {
  return (
    <>
      <SearchPokemonProvider>
        <Routes>
          <Route element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/details/:itemId" element={<ItemDetails />} /> */}
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </SearchPokemonProvider>
    </>
  );
};

export default userRouter;

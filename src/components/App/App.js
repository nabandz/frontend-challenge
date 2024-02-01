import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import useCatServices from "../../services/CatServices";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { CatList } from "../CatList/CatList";
import { CatItem } from "../CatItem/CatItem";
import { LoadingMessage } from "../LoadingMessage/LoadingMessage";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

function App() {
  const location = useLocation();

  const {
    data: catsData,
    isLoading,
    error,
    getCatsData,
    clearError,
  } = useCatServices();

  const [fetching, setFetching] = useState(true);
  const [page, setPage] = useState(1);
  const [favCats, setFavCats] = useState([]);
  const [localFavCats, setLocalFavCats] = useState([]);

  useEffect(() => {
    const localFavCatsData = JSON.parse(localStorage.getItem("favorites-cats"));

    if (localFavCats) {
      setLocalFavCats(localFavCatsData);
      setFavCats(localFavCatsData);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites-cats", JSON.stringify(favCats));
  }, [favCats]);

  useEffect(() => {
    if (fetching) {
      clearError();

      if (!isLoading) {
        getCatsData(page);
        setPage((prevPage) => prevPage + 1);
      }

      setFetching(false);
    }
    // eslint-disable-next-line
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const handleCatFavotites = (cat) => {
    cat.isFav = cat.isFav ? false : true;

    let filterCatsData =
      catsData.indexOf(cat) !== -1
        ? [...catsData, ...localFavCats]
        : [...localFavCats];

    setFavCats([...filterCatsData].filter((cat) => cat.isFav === true));
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const loadingMessage = isLoading ? <LoadingMessage /> : null;

  return (
    <Wrapper>
      <Header />
      <Main>
        <Title>The Cat API</Title>
        <Routes location={location}>
          <Route
            index
            path="/cats"
            element={
              <>
                {errorMessage}
                <CatList>
                  {catsData.map((cat) => {
                    return (
                      <CatItem
                        key={cat.id}
                        cat={cat}
                        onCatFavorites={handleCatFavotites}
                      />
                    );
                  })}
                </CatList>
                {loadingMessage}
              </>
            }
          />
          <Route
            path="/favorites-cats"
            element={
              <CatList>
                {favCats.map((cat) => {
                  return (
                    <CatItem
                      key={cat.id}
                      cat={cat}
                      onCatFavorites={handleCatFavotites}
                    />
                  );
                })}
              </CatList>
            }
          />
          <Route path="*" element={<Navigate to="/cats" />} />
        </Routes>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
`;

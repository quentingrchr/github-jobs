import { useState, useRef, useEffect } from "react";

import { useRouter } from "next/router";

import Button from "../Button/Button.comp";
import {
  InputTxtContainerSearch,
  InputTxtContainerLocation,
  InputCheckContainer,
  Form,
  OthersContainer,
  CustomCheckbox,
} from "./SearchBar.style";
import { getSearchUrlFromParams } from "../../utils";

import SearchIcon from "../../public/assets/desktop/icon-search.svg";
import LocationIcon from "../../public/assets/desktop/icon-location.svg";

export default function SearchBar({ filters }) {
  const router = useRouter();
  const initialFilters = { ...filters };
  const [values, setValues] = useState({
    search: filters?.search || "",
    location: filters?.location || "",
  });
  const [fullTime, setFullTime] = useState(false);
  const [formHeight, setFormHeight] = useState(null);
  const [formDistanceTop, setFormDistanceTop] = useState(null);

  const formRef = useRef(null);

  useEffect(() => {
    let scrollListener;
    if (formRef.current) {
      scrollListener = () => {
        setFormDistanceTop(
          formRef.current.getBoundingClientRect().top,
        );
      };
      setFormHeight(formRef.current.offsetHeight);
      window.addEventListener("scroll", scrollListener);
    }
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [formRef]);

  const makeFocus = (e) => {
    const target = e.target;

    for (let element of target.children) {
      if (element.tagName === "INPUT") {
        element.focus();
        break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const params = {
      search: values.search,
      location: values.location,
      full_time: fullTime,
    };

    const url = getSearchUrlFromParams(params);

    router.push(url);
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setValues((state) => {
      return { ...state, [fieldName]: fieldValue };
    });
  };

  const handleCheck = () => {
    setFullTime((state) => !state);
  };

  return (
    <Form
      fullWidth={formDistanceTop !== null && formDistanceTop <= 0}
      ref={formRef}
      height={formHeight}
      onSubmit={handleSubmit}
    >
      <InputTxtContainerSearch onClick={makeFocus}>
        <SearchIcon />
        <input
          onChange={handleChange}
          placeholder="Filter by title, companies, expertise"
          type="text"
          name="search"
          id="search"
          value={values.search}
        />
      </InputTxtContainerSearch>
      <InputTxtContainerLocation onClick={makeFocus}>
        <LocationIcon />
        <input
          onChange={handleChange}
          placeholder="search by location"
          type="text"
          name="location"
          id="location"
          value={values.location}
        />
      </InputTxtContainerLocation>
      <OthersContainer>
        <InputCheckContainer onClick={makeFocus}>
          <input
            onChange={handleCheck}
            type="checkbox"
            name="fullTime"
            id="fullTime"
            value={fullTime}
          />
          <CustomCheckbox onClick={handleCheck} checked={fullTime} />
          <label htmlFor="fullTime">Full Time Only</label>
        </InputCheckContainer>
        <Button disabled={false} type="submit" text="Search" />
      </OthersContainer>
    </Form>
  );
}

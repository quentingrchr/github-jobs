import { useState } from "react";

import Button from "../Button/Button.comp";
import {
  InputTxtContainerSearch,
  InputTxtContainerLocation,
  InputCheckContainer,
  Form,
  OthersContainer,
  CustomCheckbox,
} from "./SearchBar.style";

import SearchIcon from "../../public/assets/desktop/icon-search.svg";
import LocationIcon from "../../public/assets/desktop/icon-location.svg";

export default function SearchBar() {
  const [values, setValues] = useState({
    filter: "",
    location: "",
  });
  const [fullTime, setFullTime] = useState(false);

  const makeFocus = (e) => {
    if (e.target.children[1]) {
      e.target.children[1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <Form onSubmit={handleSubmit}>
      <InputTxtContainerSearch onClick={makeFocus}>
        <SearchIcon />
        <input
          onChange={handleChange}
          placeholder="Filter by title, companies, expertise"
          type="text"
          name="filter"
          id="filter"
          value={values.filter}
        />
      </InputTxtContainerSearch>
      <InputTxtContainerLocation onClick={makeFocus}>
        <LocationIcon />
        <input
          onChange={handleChange}
          placeholder="Filter by location"
          type="text"
          name="location"
          id="location"
          value={values.location}
        />
      </InputTxtContainerLocation>
      <OthersContainer>
        <InputCheckContainer>
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
        <Button type="submit" text="Search" />
      </OthersContainer>
    </Form>
  );
}

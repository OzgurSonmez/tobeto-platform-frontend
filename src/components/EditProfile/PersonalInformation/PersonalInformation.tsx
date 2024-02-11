import React from "react";
import "./PersonalInformation.css";
import InputContainer from "../InputContainer";
import DeleteProfilePhotoModal from "./DeleteProfilePhotoModal";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
const ifVisibilityIsFalse = (value: any) => value.visibility === false;
const ifCountryIsTurkey = (value: any) => value.name === "Türkiye";

const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;
const sortByPriorityAsc = (a: any, b: any) => a.priority - b.priority;

let countriesOptionDataFilters = [ifVisibilityIsTrue, ifCountryIsTurkey];
let citiesOptionDataFilters = [ifVisibilityIsTrue];
let districtsOptionDataFilters = [ifVisibilityIsTrue];

const countries = [
  {
    id: 1,
    name: "Türkiye",
    priority: 2,
    visibility: true,
  },
  {
    id: 2,
    name: "Almanya",
    priority: 1,
    visibility: true,
  },
];

const cities = [
  {
    id: "1",
    countryId: "1",
    name: "Artvin",
    priority: 6,
    visibility: true,
  },
  {
    id: "2",
    countryId: "1",
    name: "Sinop",
    priority: 5,
    visibility: true,
  },
  {
    id: "3",
    countryId: "1",
    name: "İstanbul",
    priority: 4,
    visibility: true,
  },
  {
    id: "4",
    countryId: "1",
    name: "Bursa",
    priority: 2,
    visibility: true,
  },
  {
    id: "5",
    countryId: "2",
    name: "Berlin",
    priority: 2,
    visibility: true,
  },
  {
    id: "6",
    countryId: "2",
    name: "Munich",
    priority: 1,
    visibility: true,
  },
];

const districts = [
  {
    id: "1",
    cityId: "1",
    name: "Ardanuç",
    priority: 3,
    visibility: true,
  },
  {
    id: "2",
    cityId: "2",
    name: "Erfelek",
    priority: 2,
    visibility: true,
  },
  {
    id: "3",
    cityId: "3",
    name: "Pendik",
    priority: 1,
    visibility: true,
  },
];

const PersonalInformation = (props: Props) => {
  // Dosya yükleme girişinin referansı
  const profilePhotofileInputRef = React.createRef<HTMLInputElement>();

  // Dosya yükleme girişi açma işlemi
  const handleEditButtonClick = () => {
    // Dosya yükleme girişini tıklama işlemiyle aç
    if (profilePhotofileInputRef.current) {
      profilePhotofileInputRef.current.click();
    }
  };

  return (
    <div className="personal-information">
      <div className="profile-photo">
        <div className="profile-photo-edit rounded-circle">
          <button
            className="profile-photo-delete-button"
            data-bs-toggle="modal"
            data-bs-target="#profile-photo-delete"
          >
            <i className="bi bi-trash profile-photo-delete-button-icon"></i>
          </button>
          <DeleteProfilePhotoModal deleteModalId="profile-photo-delete" />
          <button
            className="profile-photo-edit-button"
            onClick={handleEditButtonClick}
          >
            <i className="bi bi-pencil profile-photo-edit-button-icon"></i>
          </button>
          <input
            type="file"
            ref={profilePhotofileInputRef} // Dosya yükleme girişine referansı ata
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="personal-information-input-section">
        <InputContainer
          inputContainerClasses="user-name-input-container input-container-w-50"
          labelText="Adınız*"
          inputName="first-name"
          inputPlaceholder="Adınız"
        />

        <InputContainer
          inputContainerClasses="user-surname-input-container input-container-w-50"
          labelText="Soyadınız*"
          inputName="last-name"
          inputPlaceholder="Soyadınız"
        />

        <InputContainer
          inputContainerClasses="user-phone-input-container input-container-w-50"
          labelText="Telefon Numaranız*"
          inputName="phone-number"
          inputType={InputType.Tel}
          inputPlaceholder="Telefon Numaranız"
        />

        <InputContainer
          inputContainerClasses="user-birthdate-input-container input-container-w-50"
          labelText="Doğum Tarihiniz*"
          inputName="date-of-birth"
          inputType={InputType.Date}
        />

        <InputContainer
          inputContainerClasses="user-identity-number-input-container input-container-w-50"
          labelText="TC Kimlik No*"
          inputName="identity-number"
          inputPlaceholder="TC Kimlik No"
        />

        <InputContainer
          inputContainerClasses="user-email-input-container input-container-w-50"
          labelText="E-Posta*"
          inputName="e-mail"
          inputType={InputType.Email}
          inputPlaceholder="E-Posta adresiniz"
        />

        <div className="user-address-section">
          <InputContainer
            inputContainerClasses="user-address-country-input-container input-container-w-100"
            elementType={FormElementType.Select}
            labelText="Ülke*"
            inputName="country"
            defaultOptionText="Ülke"
            optionData={countries}
            optionDataFilters={countriesOptionDataFilters}
            optionDataSort={sortByPriorityDesc}
          />

          <InputContainer
            inputContainerClasses="user-address-city-input-container input-container-w-50"
            elementType={FormElementType.Select}
            labelText="İl*"
            inputName="city"
            defaultOptionText="İl"
            optionData={cities}
            optionDataFilters={citiesOptionDataFilters}
            optionDataSort={sortByPriorityDesc}
          />

          <InputContainer
            inputContainerClasses="user-address-districts-input-container input-container-w-50"
            elementType={FormElementType.Select}
            labelText="İlçe*"
            inputName="district"
            defaultOptionText="İlçe"
            optionData={districts}
            optionDataFilters={districtsOptionDataFilters}
            optionDataSort={sortByPriorityDesc}
          />

          <InputContainer
            inputContainerClasses="user-address-detail-input-container input-container-w-100"
            elementType={FormElementType.TextArea}
            labelText="Mahalle / Sokak"
            inputName="address-detail"
            inputPlaceholder="Açık Adres..."
          />

          <InputContainer
            inputContainerClasses="user-about-me-input-container input-container-w-100"
            elementType={FormElementType.TextArea}
            labelText="Hakkımda"
            inputName="about-me"
            inputPlaceholder="Kendini kısaca tanıt..."
          />
        </div>
      </div>
      <button type="submit" className="personal-information-save-button">
        Kaydet
      </button>
    </div>
  );
};
export default PersonalInformation;

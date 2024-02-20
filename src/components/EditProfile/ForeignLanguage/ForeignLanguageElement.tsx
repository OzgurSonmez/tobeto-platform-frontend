import React from "react";
import "./ForeignLanguageElement.css";
import DeleteModal from "../Modals/DeleteModal";
import { BaseService } from "../../../core/services/baseService";

type Props = {
  foreignLanguageId: string;
  languageName: string;
  languageLevel: string;
};

const ForeignLanguageElement = ({
  foreignLanguageId,
  languageName,
  languageLevel,
}: Props) => {
  return (
    <div className="foreing-language-element">
      <div className="foreing-language-element-body">
        <div className="foreing-language-element-icon">
          <i className="bi bi-globe2"></i>
        </div>
        <div className="foreing-language-element-content">
          <div className="foreing-language-element-language-name">
            <span>{languageName}</span>
          </div>
          <div className="foreing-language-element-language-level">
            <span>{languageLevel}</span>
          </div>
        </div>
      </div>
      <div>
        <button
          className="foreing-language-element-delete-button"
          data-bs-toggle="modal"
          data-bs-target={"#id-" + foreignLanguageId}
        >
          <i className="bi bi-trash foreing-language-element-delete-button-icon"></i>
        </button>
        <DeleteModal
          entityService={new BaseService()}
          entityId={"id-" + foreignLanguageId}
          deleteModalTitle="yabancı dili"
        />
      </div>
    </div>
  );
};

export default ForeignLanguageElement;

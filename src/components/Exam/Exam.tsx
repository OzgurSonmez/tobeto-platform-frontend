import React from "react";
import "./Exam.css";
import ExamDetailModal from "./ExamDetailModal";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

type Props = {};

const Exam = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="exam-component">
        <div className="exam-component-header">
          <span className="exam-component-header-title">Sınavlarım</span>
        </div>
        <div className="exam-component-body">

          <div className="exam-element"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            <div className="exam-element-header">
              <div className="exam-element-header-left-side">
                <span className="exam-element-title">
                  Herkes için Kodlama 1B Değerlendirme Sınavı
                </span>
              </div>
              <div className="exam-element-header-right-side">
                <img
                  className="image-exam-status"
                  src={process.env.PUBLIC_URL + "/exam-status-completed-icon.png"}
                />
              </div>
            </div>
            <div className="exam-element-content">
              <span className="exam-element-subtitle">
                Herkes İçin Kodlama - 1B
              </span>
            </div>
            <div className="exam-element-footer">
              <i className="bi bi-stopwatch exam-element-footer-icon"></i>
              <span className="exam-element-footer-duration">45 Dakika</span>
            </div>
          </div>


          <div className="exam-element"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            <div className="exam-element-header">
              <div className="exam-element-header-left-side">
                <span className="exam-element-title">
                  Herkes için Kodlama 1B Değerlendirme Sınavı
                </span>
              </div>
              <div className="exam-element-header-right-side">
                <img
                  className="image-exam-status"
                  src={process.env.PUBLIC_URL + "/exam-status-completed-icon.png"}
                />
              </div>
            </div>
            <div className="exam-element-content">
              <span className="exam-element-subtitle">
                Herkes İçin Kodlama - 1B
              </span>
            </div>
            <div className="exam-element-footer">
              <i className="bi bi-stopwatch exam-element-footer-icon"></i>
              <span className="exam-element-footer-duration">45 Dakika</span>
            </div>
          </div>

          <div className="exam-element"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            <div className="exam-element-header">
              <div className="exam-element-header-left-side">
                <span className="exam-element-title">
                  Herkes için Kodlama 1B Değerlendirme Sınavı
                </span>
              </div>
              <div className="exam-element-header-right-side">
                <img
                  className="image-exam-status"
                  src={process.env.PUBLIC_URL + "/exam-status-completed-icon.png"}
                />
              </div>
            </div>
            <div className="exam-element-content">
              <span className="exam-element-subtitle">
                Herkes İçin Kodlama - 1B
              </span>
            </div>
            <div className="exam-element-footer">
              <i className="bi bi-stopwatch exam-element-footer-icon"></i>
              <span className="exam-element-footer-duration">45 Dakika</span>
            </div>
          </div>


          <div className="exam-element"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            <div className="exam-element-header">
              <div className="exam-element-header-left-side">
                <span className="exam-element-title">
                  Herkes için Kodlama 1B Değerlendirme Sınavı
                </span>
              </div>
              <div className="exam-element-header-right-side">
                <img
                  className="image-exam-status"
                  src={process.env.PUBLIC_URL + "/exam-status-completed-icon.png"}
                />
              </div>
            </div>
            <div className="exam-element-content">
              <span className="exam-element-subtitle">
                Herkes İçin Kodlama - 1B
              </span>
            </div>
            <div className="exam-element-footer">
              <i className="bi bi-stopwatch exam-element-footer-icon"></i>
              <span className="exam-element-footer-duration">45 Dakika</span>
            </div>
          </div>
        </div>
        <ShowMoreButton />
      </div>
      <ExamDetailModal />
    </div>
  );
};

export default Exam;
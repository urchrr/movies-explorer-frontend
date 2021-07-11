import SuccessImg from "../../images/success.svg";
import FailImg from "../../images/fail.svg";
import "./index.css";
const InfoToolTip = (props) => {
  const successMessage = "Успешно!";
  const failMessage = `Что-то пошло не так! Попробуйте ещё раз.`;
  const { status } = props;
  const style = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
    },
    img: {
      height: "120px",
      width: "120px",
      marginBottom: "32px",
    },
    window: {
      paddingTop: "60px",
      paddingBottom: "60px",
    },
  };
  return (
    <div
      className={`popup popup-${props.name} ${
        props.isOpen ? "popup_visible" : ""
      }`}
    >
      <div className="popup__window" style={style.window}>
        <div style={style.wrapper}>
          <button
            type="button"
            className="popup__close-button page__button"
            onClick={props.onClose}
          >
            {""}
          </button>
          <img
            style={style.img}
            src={status === "success" ? SuccessImg : FailImg}
            alt={status === "success" ? "успех" : "ошибка"}
          />
          <h2
            className="popup__heading page__font page__font_weight_headings"
            style={style.text}
          >
            {status === "success" ? successMessage : failMessage}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default InfoToolTip;

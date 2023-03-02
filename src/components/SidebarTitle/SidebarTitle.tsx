import { useState, useContext, KeyboardEvent, FocusEvent } from "react";
import classes from './SidebarTitle.module.scss'
import Global from "../../context/Global";
import EditInput from "../../UI/EditInput/EditInput";
import editIcon from "../../assets/icons/editing.svg";
import editIconLightMode from "../../assets/icons/editingLightMode.svg";

const SidebarTitle = () => {
  const [changeTitleStatus, setChangeTitleStatus] = useState<boolean>(false);
  const {LocalStore, setLocalStore} = useContext(Global)

  function pressKeyForChangeTitleStatus(event: KeyboardEvent<HTMLInputElement>) {
    const key = event.key;

    if (event.currentTarget.value.length !== 0 && key === "Enter") {
      setChangeTitleStatus(false);
    } else {
      // Alert error
      return undefined;
    }
  }

  return (
    <div className={classes.title}>
      {changeTitleStatus ? (
        <EditInput
          value={LocalStore.Settings.headerTitle}
          onBlur={(event: FocusEvent<HTMLInputElement>) =>
            event.target.value.length > 1 && setChangeTitleStatus(false)
          }
          onKeyUp={(event) => pressKeyForChangeTitleStatus(event)}
          autoFocus
          onChange={(event) =>
            setLocalStore({
              LocalStore: {
                ...LocalStore,
                Settings: {
                  ...LocalStore.Settings,
                  headerTitle: event.target.value,
                },
              },
            })
          }
        />
      ) : (
        <h1>{LocalStore.Settings.headerTitle}</h1>
      )}

      <button className={classes.editBtn}>
        {LocalStore.Settings.theme === "dark" ? (
          <img
            src={editIcon}
            alt="editor title icon"
            onClick={() => setChangeTitleStatus(true)}
          />
        ) : (
          <img
            src={editIconLightMode}
            alt="editor title icon"
            onClick={() => setChangeTitleStatus(true)}
          />
        )}
      </button>
    </div>
  );
};

export default SidebarTitle;

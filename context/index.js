import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [showLoginView, setShowLoginView] = useState(false);
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allChatRooms, setAllChatRooms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentGroupName, setCurrentGroupName] = useState("");
  const [allChatMessages, setAllChatMessages] = useState([]);
  const [currentChatMesage, setCurrentChatMessage] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        showLoginView,
        setShowLoginView,
        currentUserName,
        setCurrentUserName,
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
        allChatRooms,
        setAllChatRooms,
        modalVisible,
        setModalVisible,
        currentGroupName,
        setCurrentGroupName,
        allChatMessages,
        setAllChatMessages,
        currentChatMesage,
        setCurrentChatMessage,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;

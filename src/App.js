import { useState } from "react";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import eventsData from "./data/events"
function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState(eventsData);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  if (user.role === "admin") {
    return (
      <AdminDashboard
        user={user}
        events={events}
        setEvents={setEvents}
      />
    );
  }

  else if (user.role === "user") {
  return (
    <UserDashboard
      user={user}
      events={events}
      setEvents={setEvents}
    />
  );
}
return <h1>Welcome {user.username}</h1>;

}

export default App;
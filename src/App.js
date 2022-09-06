import MobxUsersList from "./components/UsersList";
import ReduxUsersList from "./components/UsersListRedux";

export default function App() {
  return (
      <div className="max-w-5xl m-auto text-center flex justify-center">
          <ReduxUsersList/>
          <br/>
          <MobxUsersList/>
      </div>
  );
}

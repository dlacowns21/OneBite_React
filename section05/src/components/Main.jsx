import "./Main.css";

const Main = () => {
  const user = {
    name: "임채준",
    isLogin: true,
  };
  //   return <>{user.isLogin ? <div>Logout</div> : <div>Login</div>}</>;
  if (user.isLogin) {
    return <div className="logout">Logout</div>;
  } else {
    return <div>Login</div>;
  }
};

export default Main;

const Profil = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.surname}</p>
      <p>{user.age}</p>
      <p>{user.city}</p>
    </div>
  );
};

export default Profil;

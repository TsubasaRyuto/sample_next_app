const Home = ({ users }) => {
  return (
    <div>
      <h1>UserList</h1>
      <ul>
        {users.map((user) => (
          <li key={user.ID}>{user.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch('http://app:8080/api/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const users = await data.list;

    return {
      props: {
        users,
      },
    };
  } catch (err) {
    console.error('Fetch error:', err);

    return {
      props: {
        users: [],
      },
    };
  }
}

export default Home;


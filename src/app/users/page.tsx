

const Users = () => {
    // console.log(props.users);
    
    return (
        <div>
            <h1>Users</h1>
        </div>
    );
};

export const getServerSideProps = async () => {
    const data = await fetch('https://dummyjson.com/users');
    const users = await data.json();
    console.log("hsasd");
    return {
        props: {
            name : "hassan"
        }
    }
}

export default Users;
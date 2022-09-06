import React, {useState} from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    CardFooter,
    Typography, Input,
} from "@material-tailwind/react";
import {addUser, deleteUser, filteredById, resetFilter} from "../app/features/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {UserStore} from "../mobx/UserStore";

const UsersListRedux = () => {
    const users = useSelector((state) => state.usersData.users);
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center mr-32">
            <Typography as="h1" variant="lead" color="black" className="underline font-bold mt-5 text-3xl">Redux version:</Typography>
            <div className="flex w-full justify-between mt-10">
                <Button variant="filled" color="light-blue" className="mr-3" onClick={() => dispatch(filteredById())}>Filter By id</Button>
                <Button variant="filled" color="amber" onClick={() => dispatch(resetFilter())}>Reset filter</Button>
            </div>
            <Typography as="h2" className="font-bold text-2xl mb-3 mt-5">Add new user</Typography>
            <form className="flex flex-col h-50 items-center justify-between">
                <Input color="teal" label="Username:" inputMode="text" value={name} onChange={(e) => setName(e.target.value)} />
                <div className="mt-3 mb-3">
                    <Input color="teal" label="Nickname:"  inputMode="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </div>
                <Button
                    color="teal"
                    onClick={() =>
                        dispatch(addUser({name, nickname, id: UserStore.users.length+1}))
                    }
                >
                    Add
                </Button>
            </form>

            {users.map((user) => (
                /*<div key={user.id} className="text-left flex flex-col mt-10 items-center justify-center w-60 h-60 border-emerald-200 border-2">
                    <h1>{user.name}</h1>
                    <p>{user.nickname}</p>
                    <button onClick={() => UserStore.removeUser(user.id)} className="bg-red-500 rounded-lg px-5 py-2 mt-10 text-white">
                        Delete user
                    </button>
                </div>*/
                <Card className="w-60 mt-10">
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            {user.name}
                        </Typography>
                        <Typography>
                            {user.nickname}
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                        <Button onClick={() => dispatch(deleteUser(user.id))} color="red">Delete</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default UsersListRedux;